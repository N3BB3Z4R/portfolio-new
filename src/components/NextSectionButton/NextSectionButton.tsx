import { BsArrowDownShort } from 'react-icons/bs';

type Props = {
  text: string;
  href: string;
};

const NextSectionButton = (props: Props) => {
  const { text, href } = props;
  return (
    <a className="next-section-button more group flex items-center justify-center w-full text-center gap-2 lg:gap-4 transition animate-pulse" href={href}>
      <BsArrowDownShort className="w-6 h-6 text-transparent animate-bounce group-hover:text-yellow-300 transition" />
      {text}
      <BsArrowDownShort className="w-6 h-6 text-transparent animate-bounce group-hover:text-yellow-300 transition" />
    </a>
  );
}
export default NextSectionButton;