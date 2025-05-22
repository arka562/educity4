import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h1 className="home-title">Job Based Skilling</h1>
      <hr />
      <div className="course-topics">
        <div className="course-section">
          <h2 className="course-title">Tech & Development</h2>
          <div className="topics">
            <Link to="/skills/full-stack" className="topic-link">
              <strong>Full Stack Development</strong> - Master MERN stack
              (MongoDB, Express, React, Node.js) for end-to-end web development.
            </Link>
            <Link to="/skills/data-science" className="topic-link">
              <strong>Data Science & AI</strong> - Python, TensorFlow, PyTorch,
              and machine learning algorithms for AI roles.
            </Link>
            <Link to="/skills/cloud-engineering" className="topic-link">
              <strong>Cloud Engineering</strong> - AWS, Azure, GCP
              certifications and cloud architecture design.
            </Link>
            <Link to="/skills/devops" className="topic-link">
              <strong>DevOps Engineering</strong> - CI/CD pipelines, Docker,
              Kubernetes, and infrastructure automation.
            </Link>
            <Link to="/skills/cybersecurity" className="topic-link">
              <strong>Cybersecurity</strong> - Ethical hacking, network
              security, and risk management certifications.
            </Link>
          </div>
        </div>

        <div className="course-section">
          <h2 className="course-title">Business & Management</h2>
          <div className="topics">
            <Link to="/skills/digital-marketing" className="topic-link">
              <strong>Digital Marketing</strong> - SEO, SEM, social media
              marketing, and analytics tools certification.
            </Link>
            <Link to="/skills/data-analytics" className="topic-link">
              <strong>Data Analytics</strong> - SQL, Power BI, Tableau, and
              business intelligence techniques.
            </Link>
            <Link to="/skills/product-management" className="topic-link">
              <strong>Product Management</strong> - Agile methodologies, product
              lifecycle, and stakeholder management.
            </Link>
            <Link to="/skills/financial-analysis" className="topic-link">
              <strong>Financial Analysis</strong> - Financial modeling,
              valuation techniques, and Excel mastery.
            </Link>
            <Link to="/skills/hr" className="topic-link">
              <strong>HR & Talent Acquisition</strong> - Recruitment strategies,
              HR analytics, and employee engagement.
            </Link>
          </div>
        </div>

        <div className="course-section">
          <h2 className="course-title">Creative & Emerging Fields</h2>
          <div className="topics">
            <Link to="/skills/ux-ui" className="topic-link">
              <strong>UX/UI Design</strong> - Figma, user research, wireframing,
              and prototyping skills.
            </Link>
            <Link to="/skills/content-creation" className="topic-link">
              <strong>Content Creation</strong> - Video editing, script writing,
              and platform-specific content strategies.
            </Link>
            <Link to="/skills/blockchain" className="topic-link">
              <strong>Blockchain Development</strong> - Smart contracts,
              Solidity, and decentralized applications.
            </Link>
            <Link to="/skills/ar-vr" className="topic-link">
              <strong>AR/VR Development</strong> - Unity, Unreal Engine for
              immersive experiences.
            </Link>
            <Link to="/skills/technical-writing" className="topic-link">
              <strong>Technical Writing</strong> - API documentation, user
              manuals, and knowledge base creation.
            </Link>
          </div>
        </div>
      </div>

      <h1 className="home-title">Explore Key Concepts</h1>
      <hr />
      <div className="course-topics">
        <div className="course-section">
          <h2 className="course-title">Physics & Mathematics</h2>
          <div className="topics">
            <Link to="/courses/jee" className="topic-link">
              <strong>Kinematics</strong> - Understanding motion, velocity, and
              acceleration equations.
            </Link>
            <Link to="/courses/jee" className="topic-link">
              <strong>Electrostatics</strong> - Study of electric charges,
              fields, and potentials.
            </Link>
            <Link to="/courses/jee" className="topic-link">
              <strong>Integral Calculus</strong> - Solving area problems using
              integration techniques.
            </Link>
            <Link to="/courses/jee" className="topic-link">
              <strong>Thermodynamics</strong> - Laws of energy transfer and heat
              work conversions.
            </Link>
            <Link to="/courses/jee" className="topic-link">
              <strong>Probability & Statistics</strong> - Fundamental concepts
              for data analysis and predictions.
            </Link>
          </div>
        </div>

        <div className="course-section">
          <h2 className="course-title">Biology & Chemistry</h2>
          <div className="topics">
            <Link to="/courses/neet" className="topic-link">
              <strong>Genetics & Evolution</strong> - Mechanisms of heredity and
              evolutionary biology.
            </Link>
            <Link to="/courses/neet" className="topic-link">
              <strong>Organic Chemistry</strong> - Understanding biomolecules
              and reaction mechanisms.
            </Link>
            <Link to="/courses/neet" className="topic-link">
              <strong>Human Physiology</strong> - Detailed study of organ
              systems and their functions.
            </Link>
            <Link to="/courses/neet" className="topic-link">
              <strong>Biotechnology</strong> - Principles of genetic engineering
              and bioprocessing.
            </Link>
            <Link to="/courses/neet" className="topic-link">
              <strong>Biochemistry</strong> - Molecular basis of life processes
              and metabolic pathways.
            </Link>
          </div>
        </div>

        <div className="course-section">
          <h2 className="course-title">Engineering & Technology</h2>
          <div className="topics">
            <Link to="/courses/engineering" className="topic-link">
              <strong>Circuit Theory</strong> - Fundamentals of electrical
              circuits and network analysis.
            </Link>
            <Link to="/courses/engineering" className="topic-link">
              <strong>Mechanics of Materials</strong> - Stress, strain, and
              deformation of solid objects.
            </Link>
            <Link to="/courses/engineering" className="topic-link">
              <strong>Thermodynamics</strong> - Energy transfer in mechanical
              systems.
            </Link>
            <Link to="/courses/engineering" className="topic-link">
              <strong>Data Structures</strong> - Algorithms and complexity
              analysis for computer science.
            </Link>
            <Link to="/courses/engineering" className="topic-link">
              <strong>Digital Electronics</strong> - Logic gates, circuits, and
              microprocessor fundamentals.
            </Link>
          </div>
        </div>

        <div className="course-section">
          <h2 className="course-title">Economics & Logical Reasoning</h2>
          <div className="topics">
            <Link to="/courses/upsc" className="topic-link">
              <strong>Economic Survey</strong> - Analysis of economic trends and
              policies.
            </Link>
            <Link to="/courses/cat" className="topic-link">
              <strong>Data Interpretation</strong> - Analyzing charts, tables,
              and logical patterns.
            </Link>
            <Link to="/courses/cat" className="topic-link">
              <strong>Probability</strong> - Understanding chances and
              predictions in real-world applications.
            </Link>
            <Link to="/courses/upsc" className="topic-link">
              <strong>Indian Economy</strong> - Structure, sectors, and economic
              reforms.
            </Link>
            <Link to="/courses/cat" className="topic-link">
              <strong>Verbal Reasoning</strong> - Critical analysis of arguments
              and logical deductions.
            </Link>
          </div>
        </div>

        <div className="course-section">
          <h2 className="course-title">General Knowledge & Writing</h2>
          <div className="topics">
            <Link to="/courses/upsc" className="topic-link">
              <strong>Indian Judiciary</strong> - Understanding the structure
              and functioning of courts.
            </Link>
            <Link to="/courses/gre" className="topic-link">
              <strong>Critical Reasoning</strong> - Analyzing arguments and
              logical reasoning skills.
            </Link>
            <Link to="/courses/gre" className="topic-link">
              <strong>Argument Writing</strong> - Developing strong,
              well-structured essays and opinions.
            </Link>
            <Link to="/courses/upsc" className="topic-link">
              <strong>Indian Polity</strong> - Constitution, governance, and
              political system.
            </Link>
            <Link to="/courses/gre" className="topic-link">
              <strong>Research Methodology</strong> - Techniques for academic
              research and paper writing.
            </Link>
          </div>
        </div>

        <div className="course-section">
          <h2 className="course-title">Languages & Humanities</h2>
          <div className="topics">
            <Link to="/courses/humanities" className="topic-link">
              <strong>Literary Analysis</strong> - Critical approaches to
              literature and texts.
            </Link>
            <Link to="/courses/humanities" className="topic-link">
              <strong>World History</strong> - Major events, civilizations, and
              historical processes.
            </Link>
            <Link to="/courses/humanities" className="topic-link">
              <strong>Linguistics</strong> - Scientific study of language
              structure and evolution.
            </Link>
            <Link to="/courses/humanities" className="topic-link">
              <strong>Cultural Studies</strong> - Analysis of cultural phenomena
              and practices.
            </Link>
            <Link to="/courses/humanities" className="topic-link">
              <strong>Philosophy</strong> - Fundamental questions about
              existence, knowledge, and values.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
