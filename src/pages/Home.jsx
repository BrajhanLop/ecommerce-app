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
    <>
      <Navbar />
      <Hero />
      <Info />
      <Collections />
      <CarrouselProducts />
      <Follow />
    </>
  );
};
