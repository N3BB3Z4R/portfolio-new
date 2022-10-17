const Sun = () => {
  return (
    <>
      <div className="sun scale-1 group opacity-100 transition duration-1000 relative z-0 -translate-x-14 -translate-y-64">
        {/* PLANETA */}
        <div className="floatRing bg-black absolute z-0 w-32 h-32 scale-100 group-hover:scale-[250]">
          {/* PLANETA ONDA GRANDE */}
          <div className="block absolute animate-ping delay-75 z-0 blur-sm w-28 h-28 scale-[1] group-hover:scale-[6] rounded-full border-yellow-900 bg-yellow-200/30 group-hover:border-yellow-900 border-10 group-hover:opacity-10 transition ease-in-out duration-1000"></div>
          {/* SATELITE BLANCO 2 */}
          <div className="block absolute animate-ping z-0 blur-sm w-16 h-16 scale-[1] group-hover:scale-[2] rounded-full border-yellow-700 group-hover:border-yellow-400 group-hover:bg-yellow-200 border-10 group-hover:opacity-10 transition ease-in-out duration-1000"></div>
          {/* SATELITE ONDA PEQUEÑA  */}
          <div className="block absolute animate-ping blur-sm z-0 w-8 h-8 scale-[1] opacity-40 -translate-x-2 -translate-y-2 group-hover:scale-[6] rounded-full border-yellow-500/50 group-hover:border-yellow-500/50 group-hover:bg-yellow-200/50 bg-yellow-200 border-4 transition ease-in-out duration-1000"></div>
          {/* SATELITE CORE */}
          <div className="block absolute blur-[2px] group-hover:blur-[4px] z-0 w-4 h-4 scale-[1] group-hover:scale-[4] rounded-full border-yellow-500 group-hover:border-yellow-500 group-hover:bg-yellow-100 bg-yellow-100 border-4 transition ease-in-out duration-1000"></div>
          {/* SATELITE BLANCO */}
          <div className="hidden lg:block absolute animate-ping blur-sm z-0 w-4 h-4 opacity-60 scale-[1] group-hover:scale-[6] rounded-full border-blue-500 group-hover:border-blue-500 group-hover:bg-blue-100 bg-blue-100 border-20 transition ease-in-out duration-1000"></div>
        </div>
      </div>
    </>
  )
}
export default Sun