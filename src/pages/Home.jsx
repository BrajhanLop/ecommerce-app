import {
  Hero,
  Navbar,
  Info,
  Collections,
  CarrouselProducts,
  Follow,
} from "../components";

export const Home = () => {
  return (
    <div className=" w-full flex justify-center bg-[#ECECEC] min-h-screen">
      {/* <Navbar/> */}
      <Hero />
      {/* <Info/>
      <Collections/>
      <CarrouselProducts/>
      <Follow/>
       */}
    </div>
  );
};
