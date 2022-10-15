type Props = {
  title: string;
}

const Title = (props: Props) => {
  const { title } = props;

  return (
    <h1 className="text-3xl mt-8 font-bold text-center text-yellow-300">{title}</h1>
  )
}
export default Title;