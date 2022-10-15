const Sun = () => {
  return (
    <div className="hidden md:block sun group transition ease-in-out duration-1000 relative z-0 -translate-x-16 -translate-y-64">
      <div className="floatRing blur-sm bg-black absolute z-0 w-32 h-32 scale-100 group-hover:scale-[250]">
        <div className="absolute z-0 blur-sm w-28 h-28 scale-[1] group-hover:scale-[6] rounded-full border-yellow-900 bg-yellow-200/30 group-hover:border-yellow-900 border-10 group-hover:opacity-10 transition ease-in-out duration-1000"></div>
        <div className="absolute z-0 blur-sm w-20 h-20 scale-[1] group-hover:scale-[2] rounded-full border-yellow-700 group-hover:border-yellow-400 group-hover:bg-yellow-200 border-6 group-hover:opacity-10 transition ease-in-out duration-1000"></div>
        <div className="absolute blur-sm z-0 w-4 h-4 scale-[1] group-hover:scale-[6] rounded-full border-yellow-500 group-hover:border-yellow-500 group-hover:bg-yellow-100 bg-yellow-100 border-4 transition ease-in-out duration-1000"></div>
        <div className="absolute blur-sm z-0 w-4 h-4 scale-[1] group-hover:scale-[6] rounded-full border-yellow-500 group-hover:border-yellow-500 group-hover:bg-yellow-100 bg-yellow-100 border-20 transition ease-in-out duration-1000"></div>
        {/* <div className="absolute z-0 w-24 h-24 scale-[2] group-hover:scale-[6] rounded-full border-yellow-900 group-hover:border-yellow-300 border-4 transition ease-in-out duration-1000"></div> */}
      </div>
    </div>
  )
}
export default Sun