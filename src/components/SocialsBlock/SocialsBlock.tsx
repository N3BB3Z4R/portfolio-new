import { BsGithub, BsLinkedin, BsYoutube, BsTwitter, BsBehance } from "react-icons/bs";
import { FaArtstation, Fa500Px, FaSoundcloud, FaImdb, FaAnchor } from "react-icons/fa";

const SocialsItems = [
  {
    name: "Github",
    icon: BsGithub,
    link: "https://github.com/N3BB3Z4R",
  },
  {
    name: "LinkedIn",
    icon: BsLinkedin,
    link: "https://www.linkedin.com/in/oscar-nebe-abad/",
  },
  {
    name: "Youtube",
    icon: BsYoutube,
    link: "https://www.youtube.com/c/OscarNebeAbad",
  },
  {
    name: "Arstation",
    icon: FaArtstation,
    link: "https://www.artstation.com/nebe",
  },
  {
    name: "Twitter",
    icon: BsTwitter,
    link: "https://twitter.com/OscarNebeAbad",
  },
  {
    name: "500px",
    icon: Fa500Px,
    link: "https://500px.com/n3bb3z4r",
  },
  {
    name: "Behance",
    icon: BsBehance,
    link: "https://www.behance.net/NebeDesign",
  },
  {
    name: "Soundcloud",
    icon: FaSoundcloud,
    link: "https://soundcloud.com/realnebe",
  },
  {
    name: "IMDB",
    icon: FaImdb,
    link: "https://www.imdb.com/name/nm5643050/",
  },
  {
    name: "OpenSea",
    icon: FaAnchor,
    link: "https://opensea.io/accounts/n3bb3z4r",
  }
];

const SocialsBlock = () => {
  return (
    <div className="w-[60] lg:w-[80] xl:w-full flex justify-center items-center">
      <div className="social-icons flex flex-wrap">
        {/* <!-- <a href=""></a> --> */}
        {/* {SocialsItems.map((item) => {
          return (
            <a href={item.link} target="_blank" title={item.name} key={item.name} rel="noreferrer">{`<${item.icon} />`}</a>
          )
        })} */}
        <a href="https://github.com/N3BB3Z4R" target="_blank" title="Github" rel="noreferrer" > <BsGithub /></a>
        <a href="https://www.linkedin.com/in/oscar-nebe-abad/" target="_blank" title="LinkedIn" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://www.youtube.com/c/OscarNebeAbad" target="_blank" title="Youtube" rel="noreferrer"><BsYoutube /></a>
        <a href="https://www.artstation.com/nebe" target="_blank" title="Artstation" rel="noreferrer"><FaArtstation /></a>
        <a href="https://twitter.com/OscarNebeAbad" target="_blank" title="Twitter" rel="noreferrer"><BsTwitter /></a>
        <a href="https://500px.com/p/n3bb3z4r" target="_blank" title="500px" rel="noreferrer"><Fa500Px /></a>
        {/* <!-- <a href="https://www.twitch.tv/elneberas" target="_blank" alt="Twitch"><i class="fab fa-twitch"></i></a> --> */}
        {/* <!-- <a href="https://vimeo.com/nebeworks" target="_blank" alt="Vimeo"><i class="fab fa-vimeo"></i></a> --> */}
        <a href="https://www.behance.net/NebeDesign" target="_blank" title="Behance" rel="noreferrer"><BsBehance /></a>
        {/* <!-- <a href="https://www.facebook.com/NebeGetsDone" target="_blank" alt="Facebook"><i class="fab fa-facebook"></i></a> --> */}
        <a href="https://soundcloud.com/realnebe" target="_blank" title="SoundCloud" rel="noreferrer"><FaSoundcloud /></a>
        <a href="https://www.imdb.com/name/nm5643050/" target="_blank" title="iMDB" rel="noreferrer"><FaImdb /></a>
        {/* <!-- <a href="https://www.instagram.com/oscarnebeabad/" target="_blank" alt="Instagram"><i class="fab fa-instagram"></i></a> --> */}
        <a href="https://opensea.io/accounts/n3bb3z4r" target="_blank" title="iMDB" rel="noreferrer"><FaAnchor /></a>
      </div>
    </div>
  )
}
export default SocialsBlock

