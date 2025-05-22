import React from "react";
import { Link } from "react-router-dom";
import "./Skill.css";

const skills = [
  // Tech & Development
  {
    id: "full-stack",
    title: "Full Stack Development",
    // image: "/assets/fullstack.jpg",
    description:
      "Master MERN stack (MongoDB, Express, React, Node.js) for end-to-end web development.",
    category: "Tech & Development",
  },
  {
    id: "data-science",
    title: "Data Science & AI",
    // image: "/assets/datascience.jpg",
    description:
      "Python, TensorFlow, PyTorch, and machine learning algorithms for AI roles.",
    category: "Tech & Development",
  },
  {
    id: "cloud-engineering",
    title: "Cloud Engineering",
    // image: "/assets/cloud.jpg",
    description:
      "AWS, Azure, GCP certifications and cloud architecture design.",
    category: "Tech & Development",
  },
  {
    id: "devops",
    title: "DevOps Engineering",
    // image: "/assets/devops.jpg",
    description:
      "CI/CD pipelines, Docker, Kubernetes, and infrastructure automation.",
    category: "Tech & Development",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    // image: "/assets/cyber.jpg",
    description:
      "Ethical hacking, network security, and risk management certifications.",
    category: "Tech & Development",
  },

  // Business & Management
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    // image: "/assets/digital-marketing.jpg",
    description:
      "SEO, SEM, social media marketing, and analytics tools certification.",
    category: "Business & Management",
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    // image: "/assets/analytics.jpg",
    description:
      "SQL, Power BI, Tableau, and business intelligence techniques.",
    category: "Business & Management",
  },
  {
    id: "product-management",
    title: "Product Management",
    // image: "/assets/product-management.jpg",
    description:
      "Agile methodologies, product lifecycle, and stakeholder management.",
    category: "Business & Management",
  },
  {
    id: "financial-analysis",
    title: "Financial Analysis",
    // image: "/assets/finance.jpg",
    description: "Financial modeling, valuation techniques, and Excel mastery.",
    category: "Business & Management",
  },
  {
    id: "hr",
    title: "HR & Talent Acquisition",
    // image: "/assets/hr.jpg",
    description:
      "Recruitment strategies, HR analytics, and employee engagement.",
    category: "Business & Management",
  },

  // Creative & Emerging Fields
  {
    id: "ux-ui",
    title: "UX/UI Design",
    // image: "/assets/ux-ui.jpg",
    description: "Figma, user research, wireframing, and prototyping skills.",
    category: "Creative & Emerging Fields",
  },
  {
    id: "content-creation",
    title: "Content Creation",
    // image: "/assets/content-creation.jpg",
    description:
      "Video editing, script writing, and platform-specific content strategies.",
    category: "Creative & Emerging Fields",
  },
  {
    id: "blockchain",
    title: "Blockchain Development",
    // image: "/assets/blockchain.jpg",
    description: "Smart contracts, Solidity, and decentralized applications.",
    category: "Creative & Emerging Fields",
  },
  {
    id: "ar-vr",
    title: "AR/VR Development",
    // image: "/assets/ar-vr.jpg",
    description: "Unity, Unreal Engine for immersive experiences.",
    category: "Creative & Emerging Fields",
  },
  {
    id: "technical-writing",
    title: "Technical Writing",
    // image: "/assets/technical-writing.jpg",
    description:
      "API documentation, user manuals, and knowledge base creation.",
    category: "Creative & Emerging Fields",
  },
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h1 className="skills-title">Job Skills Development</h1>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.id} className="skill-card">
            <img src={skill.image} alt={skill.title} className="skill-image" />
            <div className="skill-category">{skill.category}</div>
            <h2 className="skill-name">{skill.title}</h2>
            <p className="skill-desc">{skill.description}</p>
            <div className="skill-footer">
              <Link to={`/skills/${skill.id}`} className="skill-link">
                Explore Skill
              </Link>
              <span className="skill-duration">4-12 weeks</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
