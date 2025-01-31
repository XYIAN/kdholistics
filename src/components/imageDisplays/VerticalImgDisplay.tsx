import { ImageDisplay } from "@/types";
import { Image } from "primereact/image";
import React from "react";

export interface VerticalImgDisplayProps extends ImageDisplay {
  imagePosition: "top" | "bottom";
}
const VerticalImgDisplay = ({
  imagePosition,
  ...other
}: VerticalImgDisplayProps) => {
  const { src, alt, details } = other;
  const ORIENTATION = imagePosition === "top" ? "" : "flex-reverse";
  return (
    <div
      className={` flex flex-column justify-content-center align-items-center ${ORIENTATION}`}
    >
      <Image src={src} alt={alt} />
      <p>{details}</p>
    </div>
  );
};

export default VerticalImgDisplay;
