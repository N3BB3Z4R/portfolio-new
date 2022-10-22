import Image from "next/image";
import { GalleryType } from "src/types/types";
import { BiLinkExternal } from "react-icons/bi";


type Props = {
  image: GalleryType;
  close: () => void;
};

const ImageModal = (props: Props) => {
  const { image, close } = props;
  const width = window.innerWidth > 768 ? 768 : window.innerWidth - 10;
  return (
    <button
      onClick={() => close()}
      className="fixed top-0 left-0 z-[52] flex h-full w-full flex-wrap items-center justify-center bg-black/50 backdrop-blur-md"
    >
      <div
        className={`relative aspect-video rounded-xl h-[${window.innerHeight - 40
          }px]`}
      >
        {!image.video ? (
          <>
            {image.link && (
              <a href={`${image.link}`} className="absolute top-[65vh] right-2 z-50" target="_blank" rel="noreferrer">
                <BiLinkExternal />
              </a>
            )}
            <Image
              className="rounded-xl object-scale-down"
              src={image.bigpath}
              alt={image.title}
              width={image ? width : 10}
              height={image ? window.innerHeight : 10}
            />
          </>
        ) : (
          <iframe
            width={window.innerWidth * 0.8}
            height={window.innerHeight * 0.8}
            className="rounded-xl opacity-100 backdrop-blur-sm"
            src={`https://www.youtube.com/embed/${image.video}?autoplay=1&player.setVolume(5)&playsinline=1&loop=1&controls=0&disablekb=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
        <div className="absolute -bottom-72 flex h-full w-full flex-col items-center justify-center ">
          <div className="mt-4 flex flex-col items-center justify-center rounded-xl bg-gradient-to-t from-black/80 to-black/60 p-4">
            <span className="text-2xl font-medium">{image.title}</span>
            <span className="flex gap-4">
              <span className="text-sm text-gray-300">{image.category}</span>
              <span className="text-sm text-gray-300 font-bold">{image.year}</span>
            </span>
            <span>{image.desc}</span>
            {image.video && (
              <a href={`https://youtu.be/${image.video}`} className="absolute top-[40vh] right-2" target="_blank" rel="noreferrer">
                <BiLinkExternal />
              </a>
            )}
          </div>
        </div>
      </div>
    </button>
  );
};
export default ImageModal;
