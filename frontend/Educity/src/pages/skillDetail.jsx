import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./skillDetail.css";

const skillDetails = {
  "full-stack": {
    title: "Full Stack Development",
    image: "/assets/fullstack.jpg",
    description:
      "Master MERN stack (MongoDB, Express, React, Node.js) for end-to-end web development.",
    keyPoints: [
      "Complete frontend development with React.js",
      "Backend development with Node.js and Express",
      "Database management with MongoDB",
      "RESTful API design and implementation",
      "Authentication and authorization implementation",
      "Deployment strategies for full stack applications",
    ],
    resources:
      "Includes hands-on projects, coding exercises, and real-world case studies.",
  },
  "data-science": {
    title: "Data Science & AI",
    image: "/assets/datascience.jpg",
    description:
      "Python, TensorFlow, PyTorch, and machine learning algorithms for AI roles.",
    keyPoints: [
      "Python programming for data analysis",
      "Data visualization with Matplotlib and Seaborn",
      "Machine learning algorithms implementation",
      "Deep learning with TensorFlow and PyTorch",
      "Natural Language Processing (NLP) techniques",
      "Model deployment and productionization",
    ],
    resources:
      "Includes datasets for practice, Jupyter notebooks, and model building exercises.",
  },
  "cloud-engineering": {
    title: "Cloud Engineering",
    image: "/assets/cloud.jpg",
    description:
      "AWS, Azure, GCP certifications and cloud architecture design.",
    keyPoints: [
      "Cloud computing fundamentals",
      "AWS services (EC2, S3, Lambda, etc.)",
      "Azure infrastructure and services",
      "Google Cloud Platform solutions",
      "Cloud security best practices",
      "DevOps integration with cloud",
    ],
    resources:
      "Includes hands-on labs, certification prep materials, and architecture design exercises.",
  },
  devops: {
    title: "DevOps Engineering",
    image: "/assets/devops.jpg",
    description:
      "CI/CD pipelines, Docker, Kubernetes, and infrastructure automation.",
    keyPoints: [
      "Continuous Integration/Continuous Deployment",
      "Containerization with Docker",
      "Orchestration with Kubernetes",
      "Infrastructure as Code (Terraform)",
      "Monitoring and logging solutions",
      "Cloud-native application development",
    ],
    resources:
      "Includes practical pipeline setups, deployment exercises, and infrastructure projects.",
  },
  cybersecurity: {
    title: "Cybersecurity",
    image: "/assets/cyber.jpg",
    description:
      "Ethical hacking, network security, and risk management certifications.",
    keyPoints: [
      "Network security fundamentals",
      "Ethical hacking techniques",
      "Vulnerability assessment",
      "Cryptography principles",
      "Security compliance standards",
      "Incident response strategies",
    ],
    resources:
      "Includes security labs, penetration testing exercises, and certification prep materials.",
  },
  "digital-marketing": {
    title: "Digital Marketing",
    image: "/assets/digital-marketing.jpg",
    description:
      "SEO, SEM, social media marketing, and analytics tools certification.",
    keyPoints: [
      "Search Engine Optimization (SEO) strategies",
      "Pay-per-click (PPC) advertising",
      "Social media marketing campaigns",
      "Content marketing techniques",
      "Google Analytics implementation",
      "Conversion rate optimization",
    ],
    resources:
      "Includes real campaign case studies, analytics exercises, and certification prep.",
  },
  "data-analytics": {
    title: "Data Analytics",
    image: "/assets/analytics.jpg",
    description:
      "SQL, Power BI, Tableau, and business intelligence techniques.",
    keyPoints: [
      "SQL for data querying and analysis",
      "Data visualization with Power BI",
      "Dashboard creation with Tableau",
      "ETL processes and data warehousing",
      "Predictive analytics techniques",
      "Business intelligence reporting",
    ],
    resources:
      "Includes datasets for analysis, visualization projects, and business case studies.",
  },
  "product-management": {
    title: "Product Management",
    image: "/assets/product-management.jpg",
    description:
      "Agile methodologies, product lifecycle, and stakeholder management.",
    keyPoints: [
      "Product discovery and validation",
      "Agile development methodologies",
      "Roadmap planning and prioritization",
      "User story mapping",
      "Stakeholder management",
      "Metrics and KPIs for products",
    ],
    resources:
      "Includes product case studies, roadmap exercises, and Agile simulation.",
  },
  "financial-analysis": {
    title: "Financial Analysis",
    image: "/assets/finance.jpg",
    description: "Financial modeling, valuation techniques, and Excel mastery.",
    keyPoints: [
      "Financial statement analysis",
      "Valuation techniques (DCF, comparables)",
      "Excel financial modeling",
      "Investment analysis",
      "Risk assessment",
      "Corporate finance fundamentals",
    ],
    resources:
      "Includes financial models, case studies, and valuation exercises.",
  },
  hr: {
    title: "HR & Talent Acquisition",
    image: "/assets/hr.jpg",
    description:
      "Recruitment strategies, HR analytics, and employee engagement.",
    keyPoints: [
      "Talent acquisition strategies",
      "Interviewing techniques",
      "Employee onboarding",
      "Performance management",
      "HR analytics and metrics",
      "Workplace culture development",
    ],
    resources:
      "Includes recruitment simulations, HR case studies, and analytics exercises.",
  },
  "ux-ui": {
    title: "UX/UI Design",
    image: "/assets/ux-ui.jpg",
    description: "Figma, user research, wireframing, and prototyping skills.",
    keyPoints: [
      "User research methods",
      "Wireframing and prototyping",
      "UI design principles",
      "Design systems creation",
      "Usability testing",
      "Accessibility standards",
    ],
    resources:
      "Includes design projects, Figma exercises, and usability testing scenarios.",
  },
  "content-creation": {
    title: "Content Creation",
    image: "/assets/content-creation.jpg",
    description:
      "Video editing, script writing, and platform-specific content strategies.",
    keyPoints: [
      "Content strategy development",
      "Script writing techniques",
      "Video editing skills",
      "Platform-specific content optimization",
      "Audience engagement strategies",
      "Analytics and performance measurement",
    ],
    resources:
      "Includes content creation projects, editing exercises, and platform guides.",
  },
  blockchain: {
    title: "Blockchain Development",
    image: "/assets/blockchain.jpg",
    description: "Smart contracts, Solidity, and decentralized applications.",
    keyPoints: [
      "Blockchain fundamentals",
      "Smart contract development",
      "Solidity programming",
      "DApp development",
      "Web3.js integration",
      "Decentralized finance (DeFi) concepts",
    ],
    resources:
      "Includes smart contract projects, DApp development exercises, and blockchain simulations.",
  },
  "ar-vr": {
    title: "AR/VR Development",
    image: "/assets/ar-vr.jpg",
    description: "Unity, Unreal Engine for immersive experiences.",
    keyPoints: [
      "AR/VR fundamentals",
      "Unity development",
      "Unreal Engine basics",
      "3D modeling concepts",
      "Interaction design for XR",
      "Performance optimization",
    ],
    resources:
      "Includes AR/VR projects, Unity exercises, and immersive experience design.",
  },
  "technical-writing": {
    title: "Technical Writing",
    image: "/assets/technical-writing.jpg",
    description:
      "API documentation, user manuals, and knowledge base creation.",
    keyPoints: [
      "Technical documentation standards",
      "API documentation techniques",
      "User manual creation",
      "Knowledge base management",
      "Markdown and documentation tools",
      "Information architecture",
    ],
    resources:
      "Includes documentation projects, writing exercises, and style guides.",
  },
};

const SkillDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const skill = skillDetails[id];

  if (!skill) {
    return <h2>Skill not found</h2>;
  }

  return (
    <div className="skill-detail-container">
      <img src={skill.image} alt={skill.title} className="skill-detail-image" />
      <h1>{skill.title}</h1>
      <p className="skill-detail-description">{skill.description}</p>

      <h2>What You'll Learn:</h2>
      <ul className="skill-keypoints">
        {skill.keyPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>

      <p className="skill-resources">
        <strong>Learning Resources:</strong> {skill.resources}
      </p>

      <button
        onClick={() => navigate(`/skills/${id}/module`)}
        className="view-module-button"
      >
        View Module
      </button>

      <button
        className="community-button"
        onClick={() => navigate(`/skills/${id}/community`)}
      >
        Join Skill Community
      </button>
    </div>
  );
};

export default SkillDetail;
