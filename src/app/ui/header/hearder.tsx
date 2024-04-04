"use client";
import { ParallaxProvider } from "react-scroll-parallax";
import { AdvancedBanner } from "../advancedBanner/advancedBanner";
import "../advancedBanner/advancedBanner.css";

export default function Header() {
  return (
    <div className="">
      <ParallaxProvider>
        <AdvancedBanner />
      </ParallaxProvider>
    </div>
  );
}
