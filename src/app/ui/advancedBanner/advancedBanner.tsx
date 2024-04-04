import { ParallaxBanner } from "react-scroll-parallax";
import { BannerLayer } from "react-scroll-parallax/dist/components/ParallaxBanner/types";
import { montserrat } from "../fonts/fonts";

export const AdvancedBanner = () => {
  const background: BannerLayer = {
    image:
      "https://www.checkatrade.com/blog/wp-content/uploads/2020/07/wooden-flooring-cost-featured.jpeg",
    translateY: [0, -40], // Subir la imagen un poco al hacer scroll hacia abajo
    opacity: [0.9, 0.1],
    scale: [1.05, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  const headline: BannerLayer = {
    translateY: [0, -20],
    opacity: [1, 0.1],
    scale: [1, 0.8, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="inset center">
        <h1 className="headline white -mt-96">Wooden Page</h1>
      </div>
    ),
  };

  const foreground: BannerLayer = {
    image: "https://s1.1zoom.me/big0/348/421740-svetik.jpg",
    translateY: [40, 0], // Bajar la imagen un poco al hacer scroll hacia abajo
    opacity: [0.4, 0.6],
    scale: [0.8, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    children:(
      <div className="gradient"></div>
    )
  };

  const gradientOverlay: BannerLayer = {
    opacity: [1, 0.9, "easeOutCubic"],
    translateY: [100, 0], // Bajar el texto un poco al hacer scroll hacia abajo
    scale: [0.9, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className=" w-full flex flex-col justify-center p-24">
        <h1 className="headline white justify-center flex mt-3">About</h1>
        <b
          className={`${montserrat.className} flex antialiased text-white text-xl p-10 w-fit justify-center text-center gradient`}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
          voluptatum suscipit, neque in maxime porro soluta eum, reiciendis iure
          voluptatem nostrum, officiis adipisci laboriosam doloremque qui a
          temporibus. Soluta, vel.
        </b>
      </div>
    ),
  };

  return (
    <ParallaxBanner
      layers={[foreground, background, headline, gradientOverlay]}
      className="full"
    />
  );
};
