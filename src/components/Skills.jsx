import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaCode } from 'react-icons/fa';
import { SiCplusplus, SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiIntellijidea, SiGooglecolab } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { skills } from '../portfolio';

const skillIcons = {
  'Java': <FaJava />, 
  'Python': <FaPython />, 
  'C/C++': <SiCplusplus />, 
  'HTML': <FaHtml5 />, 
  'CSS': <FaCss3Alt />, 
  'JavaScript': <FaJs />, 
  'React.js': <FaReact />, 
  'Tailwind CSS': <SiTailwindcss />, 
  'Node.js': <FaNodeJs />, 
  'Express.js': <SiExpress />, 
  'MongoDB': <SiMongodb />, 
  'MySQL': <SiMysql />, 
  'VS Code': <VscVscode />, 
  'IntelliJ IDEA': <SiIntellijidea />, 
  'Google Colab': <SiGooglecolab />
};

const Skills = () => {
  if (!skills || !Array.isArray(skills) || skills.length === 0) return null;

  return (
    <section className="skills fade-in">
      <h2 className="section-title">Skills</h2>
      <ul className="skills-list">
        {skills.map((skill) => (
          <li key={skill} className="skills-item">
            {skillIcons[skill] || <FaCode />} {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
