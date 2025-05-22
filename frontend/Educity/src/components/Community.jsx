import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Community.css";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";

const Community = () => {
  const { courseName } = useParams();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [newPost, setNewPost] = useState("");
  const [newComment, setNewComment] = useState({});
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchCommunity = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `http://localhost:5000/api/community/${courseName}`
        );
        const data = await res.json();
        console.log("Backend response:", data);
        setPosts(data.posts || []);
      } catch (err) {
        setError("Failed to load posts.");
      } finally {
        setLoading(false);
      }
    };
    fetchCommunity();
  }, [courseName]);

  const createPost = async () => {
    if (!newPost.trim()) return;

    try {
      const res = await fetch(
        `http://localhost:5000/api/community/${courseName}/posts`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ content: newPost }),
        }
      );

      const data = await res.json();
      console.log("Create post response:", data);

      if (res.ok) {
        setPosts([...posts, ...data.posts.slice(-1)]);
        setNewPost("");
      }
    } catch (err) {
      setError("Failed to create post.");
    }
  };

  const addComment = async (postId) => {
    if (!newComment[postId]?.trim()) return;

    try {
      const res = await fetch(
        `http://localhost:5000/api/community/${courseName}/posts/${postId}/comments`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ text: newComment[postId] }),
        }
      );

      const updatedCommunity = await res.json();

      // Find the updated post in the response
      const updatedPost = updatedCommunity.posts.find(
        (post) => post._id === postId
      );

      if (updatedPost) {
        setPosts(
          posts.map((post) =>
            post._id === postId
              ? {
                  ...post,
                  comments: updatedPost.comments || post.comments,
                }
              : post
          )
        );
        setNewComment({ ...newComment, [postId]: "" });
      }
    } catch (err) {
      console.error("Comment error:", err);
      setError("Failed to add comment. Please try again.");
    }
  };

  // Moved handleVote to correct scope
  const handleVote = async (postId, action) => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/community/${courseName}/posts/${postId}/vote`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ action }),
        }
      );

      if (!res.ok) {
        throw new Error("Failed to vote.");
      }

      const updatedCommunity = await res.json();

      // Find the updated post in the response
      const updatedPost = updatedCommunity.posts.find(
        (post) => post._id === postId
      );

      if (updatedPost) {
        setPosts(
          posts.map((post) =>
            post._id === postId
              ? {
                  ...post,
                  upvotes: updatedPost.upvotes || post.upvotes,
                  downvotes: updatedPost.downvotes || post.downvotes,
                }
              : post
          )
        );
      }
    } catch (err) {
      console.error("Voting error:", err);
      setError("Failed to vote. Please try again.");
    }
  };

  return (
    <div className="community-container">
      <h1>{courseName} Community</h1>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div className="create-post">
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="Write something..."
        />
        <button onClick={createPost}>Post</button>
      </div>

      <ul className="post-list">
        {Array.isArray(posts) && posts.length > 0 ? (
          posts
            .filter((post) => post && post._id)
            .map((post) => (
              <li key={post._id} className="post">
                <p>{post?.content || "No content available"}</p>

                <div className="vote-buttons">
                  {/* Changed to "upvotes" and "downvotes" to match backend */}
                  <button onClick={() => handleVote(post._id, "upvotes")}>
                    {post.upvotes?.length || 0}
                    <BiLike />
                  </button>
                  <button onClick={() => handleVote(post._id, "downvotes")}>
                    {post.downvotes?.length || 0}
                    <BiDislike />
                  </button>
                </div>

                <div className="comments">
                  <h4>Comments:</h4>
                  <ul>
                    {Array.isArray(post?.comments) &&
                      post.comments.map((comment, idx) => (
                        <li key={idx}>{comment?.text || "No comment text"}</li>
                      ))}
                  </ul>

                  <textarea
                    value={newComment[post._id] || ""}
                    onChange={(e) =>
                      setNewComment({
                        ...newComment,
                        [post._id]: e.target.value,
                      })
                    }
                    placeholder="Write a comment..."
                  />
                  <button onClick={() => addComment(post._id)}>Comment</button>
                </div>
              </li>
            ))
        ) : (
          <p>No discussions yet. Start one!</p>
        )}
      </ul>
    </div>
  );
};

export default Community;
