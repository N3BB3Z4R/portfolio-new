import { useEffect, useState } from 'react'
import Image from 'next/image'
import { IMAGES_3D, IMAGES_FRONTEND, IMAGES_VIDEOVFX } from 'src/constants/images'
import Title from 'src/components/Title/Title'
import ImageModal from 'src/components/Gallery/ImageModal'
import { GalleryType } from 'src/types/types'

enum GalleryEnum {
  All = 'All',
  ThreeDe = '3D',
  FrontEnd = 'FrontEnd',
  VideoVFX = 'VideoVFX'
}

const Gallery = () => {
  const [galleryCollection, setGalleryCollection] = useState<GalleryType[]>([...IMAGES_3D, ...IMAGES_FRONTEND, ...IMAGES_VIDEOVFX])
  const [buttonActive, setButtonActive] = useState<GalleryEnum>(GalleryEnum.All)
  const [galleriesCounter, setGalleriesCounter] = useState<any>()
  const [focusImage, setFocusImage] = useState<GalleryType | null>()

  useEffect(() => {
    const allGalleries = [...IMAGES_3D, ...IMAGES_FRONTEND, ...IMAGES_VIDEOVFX].length
    const threeDeGalleries = IMAGES_3D.length
    const frontEndGalleries = IMAGES_FRONTEND.length
    const videoVFXGalleries = IMAGES_VIDEOVFX.length
    setGalleriesCounter({
      'All': allGalleries,
      '3D': threeDeGalleries,
      'FrontEnd': frontEndGalleries,
      'VideoVFX': videoVFXGalleries
    })
  }, [])

  const handleGallery = (gallerySelected: any) => {
    // console.log(gallerySelected)
    window.location.hash = 'Gallery'
    switch (gallerySelected) {
      case GalleryEnum.All:
        setButtonActive(GalleryEnum.All)
        setGalleryCollection([...IMAGES_3D, ...IMAGES_FRONTEND, ...IMAGES_VIDEOVFX])
        break
      case GalleryEnum.ThreeDe:
        setButtonActive(GalleryEnum.ThreeDe)
        setGalleryCollection(IMAGES_3D)
        break
      case GalleryEnum.FrontEnd:
        setButtonActive(GalleryEnum.FrontEnd)
        setGalleryCollection(IMAGES_FRONTEND)
        break
      case GalleryEnum.VideoVFX:
        setButtonActive(GalleryEnum.VideoVFX)
        setGalleryCollection(IMAGES_VIDEOVFX)
        break
      // default:
      //   setButtonActive(GalleryEnum.All)
      //   setGalleryCollection([...IMAGES_3D, ...IMAGES_FRONTEND, ...IMAGES_VIDEOVFX])
      //   break
    }
  }

  const ButtonWrapper = () => {
    return (
      <div className="flex flex-wrap flex-col md:flex-row justify-center gap-4 p-2 my-6 w-2/4 md:w-3/4 lg:w-full">
        {Object.values(GalleryEnum).map((value: string) => {
          return (
            <button key={value} onClick={() => handleGallery(value)} className={`text-[#b1dddd] bg-gray-300/10 group hover:brightness-125 transition rounded-xl px-4 py-2 m-2 font-semibold relative ${buttonActive === value ? 'bg-yellow-300 text-neutral-800' : ''}`}>
              {value}
              <span className="absolute opacity-0 group-hover:opacity-100 transition left-[100%] top-[23%] w-6 h-6 bg-neutral-700 text-white rounded-r-lg">{galleriesCounter && galleriesCounter[value]}</span>
            </button>
          )
        })}
      </div>
    )
  }

  return (
    <div id="Gallery" className="text-[#b1dddd] w-full bg-gray-300/10 py-10 lg:px-8 pb-12 rounded-xl mx-auto flex flex-wrap md:flex-col justify-center items-center">
      <Title title="Works" />
      <div className="flex justify-center flex-wrap w-full gap-8 px-8">
        {(
          <iframe width={1920} height="324"
            className="opacity-100 rounded-xl backdrop-blur-sm"
            src="https://www.youtube.com/embed/9vXvKRxLn_c?autoplay=1&mute=1&playsinline=1&loop=1&controls=0&disablekb=1"
            // src="https://www.youtube.com/embed/9vXvKRxLn_c?autoplay=1&mute=1&loop=1?controls=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
          </iframe>
        )}
        <ButtonWrapper />
        {focusImage && (
          <ImageModal image={focusImage} close={() => setFocusImage(null)} />
          // <button onClick={() => setFocusImage(null)} className="backdrop-blur-md fixed top-0 left-0 w-full h-full flex flex-wrap justify-center items-center bg-black/50 z-[52]">
          //   <div className="relative">
          //     <Image className="absolute object-scale-down lg:object-cover rounded-xl" src={focusImage.bigpath + focusImage.path.split('/')[3]} alt={focusImage.title} width={focusImage ? 600 : 10} height={focusImage ? 600 : 10} />
          //     <div className="w-full absolute bottom-0 flex flex-col justify-center items-center p-4 pt-8 bg-gradient-to-t from-black/80 rounded-xl to-transparent">
          //       <span className="text-2xl font-medium">{focusImage.title}</span>
          //       <span>{focusImage.desc}</span>
          //     </div>
          //   </div>
          // </button>
        )}
        {galleryCollection?.map((image) => {
          return (
            <button key={image.title + Date.now()} onClick={() => {
              setFocusImage(image)
              console.log(image.bigpath + image.path.split('/')[3])
            }} className="group rounded-2xl scale-100 saturate-50 hover:saturate-100 object-center transition duration-500 ease-in-out flex justify-center items-center w-[90%] md:w-[46%] 2xl:w-[30%] overflow-hidden h-full hover:h-full hover:z-50">
              <div style={{ textShadow: '2px 3px 5px rgba(0,0,0,0.5)' }} className="relative h-full text-yellow-300">
                <span className="absolute z-[51] flex flex-col justify-start items-center transition group-hover:translate-x-0 translate-x-full group-hover:opacity-100 opacity-0 top-0 left-0 py-4 px-6 bg-gradient-to-r from-sky-500/50 via-indigo-500/30 to-transparent w-full h-full">
                  <span className="text-xl font-semibold">
                    {image.title}
                  </span>
                  <span className="text-lg font-thin">
                    {image.category}
                  </span>
                </span>
                <span className="absolute z-[51] transition group-hover:translate-y-0 translate-y-full group-hover:opacity-100 opacity-0 bottom-0 right-0 py-4 px-6 bg-gradient-to-t from-sky-500/50 via-indigo-500/10 to-transparent h-full w-full flex justify-center items-end">{image.desc}</span>
                <Image
                  className="w-full blur-none group-hover:blur-sm h-48 self-center object-cover object-center scale-110 group-hover:scale-125 group-hover:object-contain transition duration-500 ease-in-out drop-shadow-md hover:drop-shadow-xl"
                  src={image.path}
                  alt={image.title}
                  width={600}
                  height={400}
                />

              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
export default Gallery