import { BsGithub, BsLinkedin, BsYoutube, BsTwitter, BsBehance } from "react-icons/bs";
import { FaArtstation, Fa500Px, FaSoundcloud, FaImdb, FaAnchor } from "react-icons/fa";

const SocialsItems = [
  {
    name: "Github",
    icon: <BsGithub />,
    link: "https://github.com/N3BB3Z4R",
  },
  {
    name: "LinkedIn",
    icon: <BsLinkedin />,
    link: "https://www.linkedin.com/in/oscar-nebe-abad/",
  },
  {
    name: "Youtube",
    icon: <BsYoutube />,
    link: "https://www.youtube.com/c/OscarNebeAbad",
  },
  {
    name: "Arstation",
    icon: <FaArtstation />,
    link: "https://www.artstation.com/nebe",
  },
  {
    name: "Twitter",
    icon: <BsTwitter />,
    link: "https://twitter.com/OscarNebeAbad",
  },
  {
    name: "500px",
    icon: <Fa500Px />,
    link: "https://500px.com/n3bb3z4r",
  },
  {
    name: "Behance",
    icon: <BsBehance />,
    link: "https://www.behance.net/NebeDesign",
  },
  {
    name: "Soundcloud",
    icon: <FaSoundcloud />,
    link: "https://soundcloud.com/realnebe",
  },
  {
    name: "IMDB",
    icon: <FaImdb />,
    link: "https://www.imdb.com/name/nm5643050/",
  },
  {
    name: "OpenSea",
    icon: <FaAnchor />,
    link: "https://opensea.io/accounts/n3bb3z4r",
  }
];

const SocialsBlock = () => {
  return (
    <div className="w-[60vw] lg:w-[80vw] xl:w-full flex justify-center items-center">
      <div className="social-icons flex flex-wrap">
        {/* <!-- <a href=""></a> --> */}
        {SocialsItems.map((item) => {
          return (
            <a href={item.link} target="_blank" title={item.name} key={item.name} rel="noreferrer">{item.icon}</a>
          )
        })}
      </div>
    </div>
  )
}
export default SocialsBlock

