import React from "react";
import "./fullStack.css";

const MERNStackStudyMaterial = () => {
  return (
    <div className="study-container">
      <h1>MERN Stack Development Study Guide</h1>
      <p className="study-subtitle">
        A comprehensive guide to mastering full stack web development with
        MongoDB, Express, React, and Node.js
      </p>

      {/* Section 1: Introduction */}
      <section className="study-section">
        <h2>1. Introduction to Full Stack Development</h2>

        <div>
          <h3>What is Full Stack Development?</h3>
          <p>
            Full Stack Development refers to the practice of developing both
            client-side (front-end) and server-side (back-end) portions of web
            applications. It encompasses everything from designing user
            interfaces to implementing server logic, managing databases, and
            configuring servers.
          </p>
        </div>

        <div>
          <h3>Why Full Stack Developers Are Valuable</h3>
          <ul>
            <li>
              <strong>Versatility:</strong> Can work on all aspects of a project
            </li>
            <li>
              <strong>Efficiency:</strong> Streamlined communication and
              development cycles
            </li>
            <li>
              <strong>Cost-effectiveness:</strong> Reduced need for multiple
              specialized developers
            </li>
            <li>
              <strong>Big Picture Understanding:</strong> Comprehension of how
              all components interact
            </li>
          </ul>
        </div>

        <div>
          <h3>Core Responsibilities</h3>
          <div className="grid-container">
            <div className="grid-item">
              <h4>Front-End Development</h4>
              <p>HTML, CSS, JavaScript, React, UI frameworks</p>
            </div>
            <div className="grid-item">
              <h4>Back-End Development</h4>
              <p>Server logic, API development, authentication</p>
            </div>
            <div className="grid-item">
              <h4>Database Management</h4>
              <p>Data modeling, query optimization, CRUD operations</p>
            </div>
            <div className="grid-item">
              <h4>DevOps</h4>
              <p>Deployment, version control, testing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: MERN Stack Overview */}
      <section className="study-section">
        <h2>2. The MERN Stack Architecture</h2>

        <div>
          <h3>What is MERN?</h3>
          <p>
            MERN is a JavaScript stack for building dynamic web applications.
            The acronym stands for MongoDB, Express.js, React.js, and Node.js —
            four key technologies that make up the layers of the stack.
          </p>
        </div>

        <div>
          <h3>Components of the MERN Stack</h3>

          <div className="component-card mongodb-card">
            <h4 className="mongodb-heading">MongoDB</h4>
            <p>
              <strong>Type:</strong> NoSQL document database
            </p>
            <p>
              <strong>Purpose:</strong> Stores application data in flexible,
              JSON-like documents
            </p>
            <p>
              <strong>Key Features:</strong> Schema-less design, horizontal
              scaling, high performance
            </p>
          </div>

          <div className="component-card express-card">
            <h4 className="express-heading">Express.js</h4>
            <p>
              <strong>Type:</strong> Web application framework for Node.js
            </p>
            <p>
              <strong>Purpose:</strong> Simplifies API creation and server-side
              logic
            </p>
            <p>
              <strong>Key Features:</strong> Middleware support, routing,
              templating
            </p>
          </div>

          <div className="component-card react-card">
            <h4 className="react-heading">React.js</h4>
            <p>
              <strong>Type:</strong> Front-end JavaScript library
            </p>
            <p>
              <strong>Purpose:</strong> Builds dynamic and responsive user
              interfaces
            </p>
            <p>
              <strong>Key Features:</strong> Component-based architecture,
              Virtual DOM, JSX syntax
            </p>
          </div>

          <div className="component-card node-card">
            <h4 className="node-heading">Node.js</h4>
            <p>
              <strong>Type:</strong> JavaScript runtime environment
            </p>
            <p>
              <strong>Purpose:</strong> Executes JavaScript code server-side
            </p>
            <p>
              <strong>Key Features:</strong> Event-driven, non-blocking I/O,
              vast package ecosystem (npm)
            </p>
          </div>
        </div>

        <div>
          <h3>Advantages of MERN Stack</h3>
          <ul>
            <li>
              <strong>JavaScript Everywhere:</strong> One language throughout
              the stack
            </li>
            <li>
              <strong>JSON Data Flow:</strong> Seamless data transfer between
              all layers
            </li>
            <li>
              <strong>Large Ecosystem:</strong> Extensive libraries and tools
            </li>
            <li>
              <strong>Performance:</strong> Non-blocking architecture and
              optimized rendering
            </li>
            <li>
              <strong>Community Support:</strong> Active development communities
              for all components
            </li>
          </ul>
        </div>
      </section>

      {/* Section 3: Setting Up Environment */}
      <section className="study-section">
        <h2>3. Development Environment Setup</h2>

        <div>
          <h3>Essential Tools Installation</h3>

          <div className="component-card">
            <h4>Node.js and npm</h4>
            <p>Check installation with:</p>
            <pre className="code-block">
              <code>node -v{"\n"}npm -v</code>
            </pre>
          </div>

          <div className="component-card">
            <h4>MongoDB</h4>
            <p>Verify MongoDB service:</p>
            <pre className="code-block">
              <code>mongod{"\n"}mongo</code>
            </pre>
          </div>

          <div className="component-card">
            <h4>Git Version Control</h4>
            <p>Basic git commands:</p>
            <pre className="code-block">
              <code>
                git init{"\n"}git add .{"\n"}git commit -m "Initial project
                setup"
              </code>
            </pre>
          </div>
        </div>

        <div>
          <h3>Recommended Development Tools</h3>
          <div className="grid-container">
            <div className="tool-card">
              <h4>Visual Studio Code</h4>
              <p>Feature-rich, extensible IDE</p>
            </div>
            <div className="tool-card">
              <h4>MongoDB Compass</h4>
              <p>GUI for MongoDB</p>
            </div>
            <div className="tool-card">
              <h4>Postman</h4>
              <p>API testing tool</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: MongoDB */}
      <section className="study-section">
        <h2>4. MongoDB Essentials</h2>

        <div>
          <h3>Document Structure</h3>
          <pre className="code-block">
            <code>{`{
  "_id": ObjectId("603cb0d4f0a7c4e81425a1f1"),
  "title": "MERN Full Stack Development",
  "content": "A guide to full stack development using the MERN stack.",
  "author": "John Doe",
  "created_at": ISODate("2023-03-01T14:00:00Z")
}`}</code>
          </pre>
        </div>

        <div>
          <h3>CRUD Operations</h3>

          <div>
            <h4>Create</h4>
            <pre className="code-block create-operation">
              <code>{`db.posts.insertOne({
  title: "MERN Basics",
  content: "Introduction to MERN Stack",
  author: "Jane Doe"
});`}</code>
            </pre>
          </div>

          <div>
            <h4>Read</h4>
            <pre className="code-block read-operation">
              <code>{`db.posts.find({ author: "Jane Doe" });
db.posts.findOne({ title: "MERN Basics" });`}</code>
            </pre>
          </div>

          <div>
            <h4>Update</h4>
            <pre className="code-block update-operation">
              <code>{`db.posts.updateOne(
  { title: "MERN Basics" },
  { $set: { content: "Overview of MERN Stack Components" } }
);`}</code>
            </pre>
          </div>

          <div>
            <h4>Delete</h4>
            <pre className="code-block delete-operation">
              <code>{`db.posts.deleteOne({ title: "MERN Basics" });`}</code>
            </pre>
          </div>
        </div>

        <div>
          <h3>Mongoose Integration</h3>
          <p>Connecting to MongoDB using Mongoose:</p>
          <pre className="code-block">
            <code>{`const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mernapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));`}</code>
          </pre>

          <p>Creating a Mongoose Schema and Model:</p>
          <pre className="code-block">
            <code>{`const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Post', PostSchema);`}</code>
          </pre>
        </div>
      </section>

      {/* Section 5: Express.js */}
      <section className="study-section">
        <h2>5. Express.js Framework</h2>

        <div>
          <h3>Setting Up an Express Server</h3>
          <pre className="code-block">
            <code>{`const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('MERN Stack API is running');
});

// Start server
app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});`}</code>
          </pre>
        </div>

        <div>
          <h3>API Routes for Posts</h3>
          <pre className="code-block">
            <code>{`const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Get all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get single post
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create post
router.post('/', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
    author: req.body.author
  });

  try {
    const newPost = await post.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update post
router.patch('/:id', async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete post
router.delete('/:id', async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: 'Post deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;`}</code>
          </pre>
        </div>

        <div>
          <h3>Express Middleware</h3>
          <div className="grid-container">
            <div className="component-card">
              <h4>Authentication Middleware</h4>
              <pre className="code-block">
                <code>{`function auth(req, res, next) {
  const token = req.header('x-auth-token');
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }
  
  try {
    // Verify token logic
    next();
  } catch (e) {
    res.status(400).json({ msg: 'Token is not valid' });
  }
}`}</code>
              </pre>
            </div>

            <div className="component-card">
              <h4>Error Handling Middleware</h4>
              <pre className="code-block">
                <code>{`function errorHandler(err, req, res, next) {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack
  });
}

module.exports = errorHandler;`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Node.js */}
      <section className="study-section">
        <h2>6. Node.js Runtime</h2>

        <div>
          <h3>Event-Driven Architecture</h3>
          <p>
            Node.js uses a non-blocking, event-driven architecture that enables
            handling many connections concurrently. This makes it ideal for
            building scalable network applications.
          </p>

          <pre className="code-block">
            <code>{`// Event emitter example
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// Set up event listener
myEmitter.on('event', (data) => {
  console.log('Event occurred:', data);
});

// Trigger the event
myEmitter.emit('event', 'Event data payload');`}</code>
          </pre>
        </div>

        <div>
          <h3>File System Operations</h3>
          <pre className="code-block">
            <code>{`const fs = require('fs');

// Asynchronous read
fs.readFile('config.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:', data);
});

// Synchronous write
try {
  fs.writeFileSync('log.txt', 'Application started at ' + new Date().toISOString());
  console.log('Log file updated');
} catch (err) {
  console.error('Error writing to file:', err);
}`}</code>
          </pre>
        </div>

        <div>
          <h3>Package Management with npm</h3>
          <p>
            npm (Node Package Manager) is essential for managing dependencies in
            Node.js projects:
          </p>

          <div className="grid-container">
            <div className="component-card">
              <h4>Common npm Commands</h4>
              <pre className="code-block">
                <code>{`npm init               # Initialize a project
npm install <package>   # Install a package
npm install            # Install all dependencies
npm start              # Start the application
npm test               # Run tests
npm run <script>       # Run custom script`}</code>
              </pre>
            </div>

            <div className="component-card">
              <h4>package.json Example</h4>
              <pre className="code-block">
                <code>{`{
  "name": "mern-project",
  "version": "1.0.0",
  "description": "MERN Stack Application",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "server": "nodemon server.js",
    "client": "npm start --prefix client",
    "dev": "concurrently \\"npm run server\\" \\"npm run client\\""
  },
  "dependencies": {
    "express": "^4.17.1",
    "mongoose": "^6.0.13",
    "cors": "^2.8.5"
  },
  "devDependencies": {
    "nodemon": "^2.0.15",
    "concurrently": "^6.4.0"
  }
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <div className="important-notice">
        <h4>Study Tips</h4>
        <p>
          For best results, practice building small applications with each
          technology individually before combining them into a full MERN stack
          application.
        </p>
      </div>

      <div className="study-footer">
        <p>© {new Date().getFullYear()} MERN Stack Development Guide</p>
        <p className="copyright">Created for educational purposes</p>
      </div>
    </div>
  );
};

export default MERNStackStudyMaterial;
