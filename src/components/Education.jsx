import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  const education = [
    {
      degree: 'B.Tech in CSE - AI & DS',
      school: 'Greater Noida Institute of Technology',
      duration: 'July 2022 – June 2026',
    },
    {
      degree: 'Senior Secondary (XII)',
      school: 'The S.D Vidya School',
      duration: '2022',
    },
    {
      degree: 'Secondary (X)',
      school: 'The S.D Vidya School',
      duration: '2020',
    },
  ];

  return (
    <section className="education fade-in">
      <h2 className="section-title">Education</h2>
      <div className="education-timeline">
        {education.map((item, index) => (
          <div
            className={`timeline-item ${index % 2 === 0 ? 'timeline-left' : 'timeline-right'}`}
            key={index}
          >
            
            <div className="timeline-content">
              <div className="timeline-icon">
                <FaGraduationCap />
              </div>
              <div className="timeline-text">
                <h3>{item.degree}</h3>
                <p>{item.school}</p>
                <span>{item.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
