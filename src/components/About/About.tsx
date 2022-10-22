import NextSectionButton from 'src/components/NextSectionButton/NextSectionButton';
import Skill from 'src/components/Skill/Skill';
import Title from 'src/components/Title/Title';
import { AboutMe, FrontItems, VideoItems, ThreeDeItems, ManagingItems } from 'src/constants/about'

const About = () => {
  return (
    <div id="About" className="text-[#b1dddd] w-full bg-gray-300/10 py-10 px-6 lg:px-32 rounded-xl mx-auto flex flex-col xl:gap-16 justify-center items-center">
      <div className="flex flex-col xl:flex-row xl:gap-16">
        <div className="w-full xl:w-[40%]">
          <Title title="About" />
          <p>{AboutMe}</p>
        </div>
        <hr className="w-full block xl:hidden my-8 border-transparent" />
        <div className="xl:w-[60%]">
          <Title title="Skills" />
          <h4>More than 20 years of experience on:</h4>
          <div className="">
            <p className="mb-4 mt-6 text-lg">Front End Developer & UI/UX Designer:</p>
            <div className="text-sm flex flex-wrap gap-1">
              {FrontItems.map((item: string) => (
                <Skill skill={item} key={item} />
              ))}
            </div>
            <p className="mb-4 mt-6 text-lg">Video Productor & Postproduction:</p>
            <div className="text-sm flex flex-wrap gap-1">
              {VideoItems.map((item) => (
                <Skill skill={item} key={item} />
              ))}
            </div>
            <p className="mb-4 mt-6 text-lg">3D & Motion Graphics:</p>
            <div className="text-sm flex flex-wrap gap-1">
              {ThreeDeItems.map((item) => (
                <Skill skill={item} key={item} />
              ))}
            </div>
            <p className="mb-4 mt-6 text-lg">Team & Project Management:</p>
            <div className="text-sm flex flex-wrap gap-1">
              {ManagingItems.map((item) => (
                <Skill skill={item} key={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <NextSectionButton text="well, take me to the gallery..." href="#Gallery" />
      {/* <a className="more w-full text-center" href="#Gallery">well, take me to the gallery...</a> */}
    </div>
  );
}
export default About;