function SkillList({ src, skill }) {
  return (
    <div>
      {src && <img src={src} alt="" aria-hidden="true" />}
      <p>{skill}</p>
    </div>
  );
}

export default SkillList;
