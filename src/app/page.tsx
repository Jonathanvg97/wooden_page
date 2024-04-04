// import { SideNav } from "./ui/sideNav/sideNav";
import { montserrat } from "./ui/fonts/fonts";
import Header from "./ui/header/hearder";
import { SideNav } from "./ui/sideNav/sideNav";

export default function Home() {
  return (
    <main className="">
      <SideNav />
      <Header />
      <div className="justify-center flex flex-col">
        <h4 className="headline white justify-center flex">About Us</h4>
        <b
          className={`${montserrat.className} antialiased text-white text-base justify-center text-center `}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
          voluptatum suscipit, neque in maxime porro soluta eum, reiciendis iure
          voluptatem nostrum, officiis adipisci laboriosam doloremque qui a
          temporibus. Soluta, vel.
        </b>
      </div>
    </main>
  );
}
