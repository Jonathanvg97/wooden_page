"use client";
import { ParallaxProvider } from "react-scroll-parallax";
import { AdvancedBanner } from "../advancedBanner/advancedBanner";
import "../advancedBanner/advancedBanner.css";
import { montserrat } from "../fonts/fonts";

export default function Header() {
  return (
    <ParallaxProvider>
      <AdvancedBanner />
      <div className="justify-center flex flex-col">
        <h4 className="headline white justify-center flex">About Us</h4>
        <p
          className={`${montserrat.className} antialiased text-white text-base p-10 w-fit justify-center text-center`}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
          voluptatum suscipit, neque in maxime porro soluta eum, reiciendis iure
          voluptatem nostrum, officiis adipisci laboriosam doloremque qui a
          temporibus. Soluta, vel.
        </p>
      </div>
    </ParallaxProvider>
  );
}
