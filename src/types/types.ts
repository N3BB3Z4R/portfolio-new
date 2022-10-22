export type GalleryType = {
  link?: string;
  video?: string;
  title: string;
  desc: string;
  category: string;
  path: string;
  bigpath: string;
  year: string;
};
export enum GalleryEnum {
  All = "All",
  FrontEnd = "FrontEnd",
  ThreeDe = "3D",
  VideoVFX = "VideoVFX",
}
