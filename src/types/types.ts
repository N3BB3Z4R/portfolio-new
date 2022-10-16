export type GalleryType = {
  link?: string;
  video?: string;
  title: string;
  desc: string;
  category: string;
  path: string;
  bigpath: string;
};
export enum GalleryEnum {
  All = "All",
  ThreeDe = "3D",
  FrontEnd = "FrontEnd",
  VideoVFX = "VideoVFX",
}
