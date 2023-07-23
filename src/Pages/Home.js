import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GithubIcon from '@material-ui/icons/GitHub';
import '../styles/Home.css';

export default function Home() {
  const handleLinkedInClick = (event) => {
    event.preventDefault(); 
    window.open('https://www.linkedin.com/in/ben-siton-462b83284','blank');
  };

  const handleGithubClick = (event) => {
    event.preventDefault(); 
    window.open('https://github.com/benJacovSiton', '_blank');
  };

  const handleEmailClick = () => {
    const email = 'seton28@gmail.com';
    window.alert(`Email: ${email}`);
  };

  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is ben</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <LinkedInIcon onClick={handleLinkedInClick} />
          <EmailIcon onClick={handleEmailClick} />
          <GithubIcon onClick={handleGithubClick} />
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          {/* ... */}
        </ol>
      </div>
    </div>
  );
}
