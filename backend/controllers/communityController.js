import Community from '../models/CommunityQuestion.model.js';

export const createCommunity = async (req, res) => {
  try {
    const { course } = req.body;

    // Check if community already exists
    let existingCommunity = await Community.findOne({ course });

    if (existingCommunity) {
      return res.status(400).json({ message: "Community already exists" });
    }

    // Create new community
    const community = new Community({ course, posts: [] });
    await community.save();

    res.status(201).json(community);
  } catch (err) {
    console.error("❌ Error:", err.message);
    res.status(500).json({ message: err.message });
  }
};


// Get or create community
export const getCommunity = async (req, res) => {
  try {
    let community = await Community.findOne({ course: req.params.course })
      .populate('posts.user', 'name avatar')
      .populate('posts.comments.user', 'name avatar')
      .populate('announcements.admin', 'name');

    if (!community) {
      community = new Community({ course: req.params.course });
      await community.save();
    }
    
    res.status(200).json(community);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create post
export const createPost = async (req, res) => {
  try {
    console.log("🔹 Request Received:", req.body);
    console.log("🔹 Course Param:", req.params.course);

    // Check if the community exists
    let community = await Community.findOne({ course: req.params.course });

    if (!community) {
      console.log(" Community not found in database!");
      return res.status(404).json({ message: "Community not found" });
    }

    // Add new post
    community.posts.push({
      user: req.user._id,
      content: req.body.content,
      media: req.body.media || [],
    });

    await community.save(); // Save changes

    // Populate the user field in posts
    await community.populate("posts.user");

    res.status(201).json(community);
  } catch (err) {
    console.error("❌ Error:", err.message);
    res.status(400).json({ message: err.message });
  }
};


// Add comment
export const addComment = async (req, res) => {
  try {
    const community = await Community.findOneAndUpdate(
      { 
        course: req.params.course,
        'posts._id': req.params.postId 
      },
      { 
        $push: { 
          'posts.$.comments': { 
            user: req.user._id, 
            text: req.body.text 
          } 
        } 
      },
      { new: true, populate: 'posts.comments.user' }
    );
    
    res.status(201).json(community);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Handle voting
export const handleVote = async (req, res) => {
  try {
    const { action } = req.body;
    const { postId, course } = req.params;
    const userId = req.user._id;

    // Validate the action
    if (action !== 'upvotes' && action !== 'downvotes') {
      return res.status(400).json({ message: 'Invalid action. Must be "upvotes" or "downvotes".' });
    }

    // Set the opposite action
    const oppositeAction = action === 'upvotes' ? 'downvotes' : 'upvotes';

    // Update the fields dynamically
    const update = {
      $addToSet: { [`posts.$[post].${action}`]: userId },
      $pull: { [`posts.$[post].${oppositeAction}`]: userId },
    };

    // Perform the update
    const community = await Community.findOneAndUpdate(
      { course }, // Filter by course
      update,
      { 
        new: true, // Return the updated document
        arrayFilters: [{ 'post._id': postId }], // Filter by postId in the posts array
        populate: 'posts.user', // Optional: populate user info in posts
      }
    );

    if (!community) {
      return res.status(404).json({ message: 'Community or Post not found.' });
    }

    // Return the updated community document
    res.status(200).json(community);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: err.message });
  }
};


// Admin: Create announcement
export const createAnnouncement = async (req, res) => {
  try {
    const community = await Community.findOneAndUpdate(
      { course: req.params.course },
      { 
        $push: { 
          announcements: {
            admin: req.user._id,
            title: req.body.title,
            content: req.body.content
          }
        }
      },
      { new: true, populate: 'announcements.admin' }
    );
    
    res.status(201).json(community);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Admin: Delete post
export const deletePost = async (req, res) => {
  try {
    const community = await Community.findOneAndUpdate(
      { course: req.params.course },
      { $pull: { posts: { _id: req.params.postId } } },
      { new: true }
    );
    
    res.status(200).json(community);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};