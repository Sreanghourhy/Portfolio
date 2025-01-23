import React from 'react';

function VolunteerCard({ src, link, h3, h2 ,p }) {
  return (
    <a href={link} target="_blank">
      <img className="hover" src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <h2>{h2}</h2>
      <p>{p}</p>
    </a>
  );
}

export default VolunteerCard;
