import React, { useEffect, useState } from "react";
import ProductSlider from "./ProductSlider";
import Menu from "../../Menu/shoppingMenu/Menu";
import { fetchHoodies } from "./data/demoHoodies";
import { fetchTShirts } from "./data/demoT-shirtsAndSleeves";
import { fetchPants } from "./data/demoPant";
import { fetchAlbums } from "./data/demoMusicAlbum";

const Product = () => {
  const [hoodies, setHoodies] = useState([]);
  const [tshirts, setTShirts] = useState([]);
  const [pants, setPants] = useState([]);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchAll = async () => {
      const [hoodieData, tshirtData, pantData, albumData] = await Promise.all([
        fetchHoodies(),
        fetchTShirts(),
        fetchPants(),
        fetchAlbums(),
      ]);
      setHoodies(hoodieData);
      setTShirts(tshirtData);
      setPants(pantData);
      setAlbums(albumData);
    };

    fetchAll();
  }, []);

  return (
    <div className="w-full min-h-screen bg-white text-black">
      <section className="w-full h-[60vh] sm:h-[80vh] md:h-screen overflow-hidden">
        <img
          src="shopping/shoppingCover.png"
          alt="Shopping Cover"
          className="md:w-full md:h-full sm:h-[400px] object-cover md:object-contain  "
        />
      </section>

      <section className="w-full mt-6 sm:mt-8 md:mt-10 px-4 sm:px-6 md:px-8">
        <h3 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl p-3 sm:p-4 md:p-5 font-semibold">
          Buy the collection of <br />
          <span className="text-[#EBDC0B]">your choice</span>
        </h3>
      </section>

      <ProductSlider title="Hoodies + Crewnecks" data={hoodies} />
      <ProductSlider title="T-Shirts + Long Sleeves" data={tshirts} />
      <ProductSlider title="Pants + Shorts" data={pants} />
      <ProductSlider title="Shop by Album" data={albums} />

      <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 p-4 sm:p-6 md:p-8 z-50 w-full flex justify-center">
        <Menu />
      </nav>
    </div>
  );
};

export default Product;
