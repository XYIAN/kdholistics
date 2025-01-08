import { Image } from "primereact/image";
import React from "react";

export interface KDHBannerProps {
  title: string;
  imgSrc: string;
  description?: string;
}
const KDHBanner = ({ title, imgSrc, description }: KDHBannerProps) => {
  return (
    <div className="flex flex-column w-full top-0 sticky">
      {/* TODO add background  */}
      {/* TODO add styling to banner elements */}
      <h1>{title}</h1>
      <Image src={imgSrc} alt={title} width="200px !important" preview />
      <h6>{description}</h6>
    </div>
  );
};

export default KDHBanner;
