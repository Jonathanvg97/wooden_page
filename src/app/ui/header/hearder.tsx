"use client"
import { ParallaxProvider } from "react-scroll-parallax";
import { AdvancedBanner } from "../advancedBanner/advancedBanner";
import "../advancedBanner/advancedBanner.css";

export default function Header() {
  return (
    <ParallaxProvider>
      <AdvancedBanner />
      <div className="center full">
        <h1 className="headline gray">Goodnight.</h1>
      </div>
    </ParallaxProvider>
  );
}
