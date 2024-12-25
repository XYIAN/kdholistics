"use client";
import { WRAPPER_STYLE_DEFAULT } from "@/constants/WRAPPER_STYLE_DEFAULT";
import { Image } from "primereact/image";

export default function Home() {
  return (
    <div className={WRAPPER_STYLE_DEFAULT}>
      <div>
        {/* <div>KD Holistic Health</h1> */}
        <Image
          src={
            "https://github.com/XYIANSoftware/images/blob/main/client/kdh/kd1.png?raw=true"
          }
          alt="temp-logo"
          style={{ width: "200px !important" }}
        />
      </div>
    </div>
  );
}
