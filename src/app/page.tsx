"use client";
import KDHBanner from "@/components/common/KDHBanner";
import { WRAPPER_STYLE_DEFAULT } from "@/constants/WRAPPER_STYLE_DEFAULT";

export default function Home() {
  return (
    <div className={WRAPPER_STYLE_DEFAULT}>
      <KDHBanner
        title="KD's Holistic Health"
        imgSrc="https://github.com/XYIANSoftware/images/blob/main/client/kdh/kd1.png?raw=true"
        description="Empowering Mind, Body, and Soul – Your Journey to Wholeness Starts Here!"
      />
    </div>
  );
}
