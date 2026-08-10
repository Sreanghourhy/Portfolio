function SkillList({ src, skill }) {
  return (
    <div>
      <img src={src} alt="" aria-hidden="true" />
      <p>{skill}</p>
    </div>
  );
}

export default SkillList;
