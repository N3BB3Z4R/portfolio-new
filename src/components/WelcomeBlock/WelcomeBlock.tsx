import Sun from "src/components/Decorators/Sun"

const WelcomeBlock = () => {
  return (
    <div className="md:group transition ease-in-out duration-1000 flex flex-col items-center justify-center">
      <Sun />
      <div className="linkhome relative flex flex-col items-center justify-center">
        <h1 className="title mb-2 md:mb-3 lg:mb-5 text-6xl lg:text-[4rem] z-10">
          ÓSCAR ABAD
        </h1>
        <h2 className="subtitle text-md lg:text-[2rem] mt-4 z-10 w-[60vw] lg:w-full">Front End Dev, Video Production, 3D & Mograph</h2>
      </div>
    </div>
  )
}
export default WelcomeBlock