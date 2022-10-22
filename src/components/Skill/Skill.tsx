interface Props {
  skill: string;
}

const Skill = (props: Props) => {
  const { skill } = props;
  return (
    <div key={skill} className="hover:bg-blue-300 transition text-left hover:text-neutral-800 bg-yellow-500/50 px-2 rounded-lg cursor-default">{skill}</div>
  );
}
export default Skill