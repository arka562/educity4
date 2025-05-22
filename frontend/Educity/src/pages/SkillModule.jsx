import React from "react";
import { useParams } from "react-router-dom";

// Import all skill theory components
import MERNStackGuide from "../content/skills/fullStackTheory.jsx";
import DataScience from "../content/skills/dataScience.jsx";
import DevOpsStudyGuide from "../content/skills/devOps.jsx";
import CloudEngineeringGuide from "../content/skills/cloudComputing.jsx";
import CybersecurityGuide from "../content/skills/cybersecurity.jsx";
import DigitalMarketing from "../content/skills/digitalMarketing.jsx";
// ...import other modules

const skillModules = {
  "full-stack": MERNStackGuide,
  "data-science": DataScience,
  "cloud-engineering": CloudEngineeringGuide,
  devops: DevOpsStudyGuide,
  cybersecurity: CybersecurityGuide,
  "digital-marketing": DigitalMarketing,
  // ...add more mappings here
};

const SkillModule = () => {
  const { skillName } = useParams();

  const ModuleComponent = skillModules[skillName];

  return (
    <div className="skill-module-container">
      {ModuleComponent ? (
        <ModuleComponent />
      ) : (
        <h2>Module not found for skill: {skillName}</h2>
      )}
    </div>
  );
};

export default SkillModule;
