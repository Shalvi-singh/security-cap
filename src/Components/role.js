import React from 'react';
import './role.css';

function SecurityCaptainRole() {
    return (
        <div className="role-container">
            <h2 className="role-title">Security Captain Role</h2>
            
            <div className="section">
                <h3 className="section-title">Responsibilities:</h3>
                <ul className="responsibilities-list">
                    <li>
                        <strong>Leadership and Supervision:</strong> Lead the security team, providing training and performance evaluations to maintain a highly efficient and responsive force. Develop and implement comprehensive security strategies and policies to protect the organization from potential threats.
                    </li>
                    <li>
                        <strong>Incident Response and Management:</strong> Oversee and manage security incidents, coordinating with local law enforcement and emergency services when necessary. Conduct regular security audits, risk assessments, and vulnerability tests to identify and mitigate potential security threats.
                    </li>
                    {/* <li>
                        <strong>Surveillance and Documentation:</strong> Utilize advanced surveillance technologies and systems to monitor premises. Maintain accurate records of security activities, incidents, and investigations, and provide detailed reports to senior management.
                    </li> */}
                </ul>
            </div>

            <div className="section">
                <h3 className="section-title">Qualities:</h3>
                <ul className="qualities-list">
                    <li>
                        <strong>Strong Leadership and Communication:</strong> Demonstrated ability to lead and motivate a team with clear and effective communication skills.
                    </li>
                    <li>
                        <strong>Attention to Detail and Integrity:</strong> Keen observational skills and a high level of integrity, with a commitment to ethical conduct.
                    </li>
                    {/* <li>
                        <strong>Technical Proficiency and Experience:</strong> Proficiency in security systems and surveillance equipment, with previous experience in security management or law enforcement.
                    </li> */}
                </ul>
            </div>
        </div>
    );
}

export default SecurityCaptainRole;
