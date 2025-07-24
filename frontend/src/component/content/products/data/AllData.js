// [
//   {
//     img: "shopping/showcase/hoodie/Hoodie1.jpg",
//     price: "₹2499",
//     heading: "TTPD Gray Embossed Hoodie",
//     category: "hoodie",
//     bestSeller: true,
//   },
//   {
//     img: "shopping/showcase/hoodie/Hoodie2.png",
//     price: "₹1199",
//     heading: "Taylor Swift | The Eras Tour Through LA Hoodie",
//     category: "hoodie",
//   },
//   {
//     img: "shopping/showcase/hoodie/Hoodie3.png",
//     price: "₹1999",
//     heading: "Taylor Swift | The Eras Tour I Beige Hoodie",
//     category: "hoodie",
//   },
//   {
//     img: "shopping/showcase/hoodie/Hoodie4.png",
//     price: "₹2900",
//     heading: "Taylor Swift | The Eras Tour III Beige Hoodie",
//     category: "hoodie",
//   },
//   {
//     img: "shopping/showcase/hoodie/Hoodie5.png",
//     price: "₹999",
//     heading: "Taylor Swift | The Eras Tour Through LA Black Hoodie",
//     category: "hoodie",
//   },
//   {
//     img: "shopping/showcase/album/album3.png",
//     price: "₹999",
//     heading: "Taylor Swift evermore Album Shop",
//     category: "album",
//   },
//   {
//     img: "shopping/showcase/pant/pant2.jpg",
//     price: "₹1199",
//     heading: "1989 (Taylor’s Version) Blue Stripe Poplin Shorts",
//     category: "shorts",
//   },
//   {
//     img: "shopping/showcase/pant/pant3.jpg",
//     price: "₹999",
//     heading: "Last Great American Dynasty Terry Cloth Jogger",
//     category: "sweats",
//   },
//   {
//     img: "shopping/showcase/pant/pant4.jpg",
//     price: "₹999",
//     heading: "TS Crest White Oxford Shorts",
//     category: "shorts",
//   },
//   {
//     img: "shopping/showcase/t-shirt/t-shirt2.jpg",
//     price: "₹1199",
//     heading: "1989 (Taylor’s Version) Seagull Blue Stripe Poplin Shirt",
//     category: "shortSleeve",
//     bestSeller: true,
//   },
//   {
//     img: "shopping/showcase/t-shirt/t-shirt3.png",
//     price: "₹1499",
//     heading: "Taylor Swift | The Eras Tour Photo Long Sleeve T-Shirt",
//     category: "longSleeve",
//   },
//   {
//     img: "shopping/allProducts/3.png",
//     price: "₹3332",
//     heading: "1989 (Taylor’s Version) Seagull Boxy T‑Shirt",
//     category: "shortSleeve",
//   },
//   {
//     img: "shopping/allProducts/4.png",
//     price: "₹2916",
//     heading: "1989 (Taylor’s Version) Seagull Design Tee",
//     category: "shortSleeve",
//   },
//   {
//     img: "shopping/allProducts/5.png",
//     price: "₹3748",
//     heading: "Taylor Swift | The Eras International Tour Beige T-Shirt",
//     category: "shortSleeve",
//     bestSeller: true,
//   },
//   {
//     img: "shopping/allProducts/7.png",
//     price: "₹3748",
//     heading: "Taylor Swift | The Eras Tour Photo Oversized T-Shirt",
//     category: "shortSleeve",
//   },
//   {
//     img: "shopping/allProducts/13.png",
//     price: "₹3582",
//     heading: "evermore Gold Rush Longsleeve T‑Shirt",
//     category: "longSleeve",
//   },
//   {
//     img: "shopping/allProducts/14.jpg",
//     price: "₹3332",
//     heading: "The Eras Tour Heart Hands Muscle Oversized Tank",
//     category: "tankTop",
//   },
//   {
//     img: "shopping/allProducts/15.png",
//     price: "₹3332",
//     heading: "The Eras Tour Tie Dye Tank Top",
//     category: "tankTop",
//   },
//   {
//     img: "shopping/allProducts/10.png",
//     price: "₹3999",
//     heading: "I Love You It's Ruining My Life Crewneck",
//     category: "crewneck",
//   },
//   {
//     img: "shopping/allProducts/11.png",
//     price: "₹3999",
//     heading: "Sparking Up My Darkest Night Crewneck",
//     category: "crewneck",
//   },
//   {
//     img: "shopping/showcase/album/album1.png",
//     price: "₹1299",
//     heading: "The Tortured Poets Department Shop",
//     category: "album",
//     bestSeller: true,
//   },
//   {
//     img: "shopping/showcase/album/album2.png",
//     price: "₹1599",
//     heading: "Taylor Swift Midnights Album Shop",
//     category: "album",
//   },
//   {
//     img: "shopping/showcase/album/album4.png",
//     price: "₹1499",
//     heading: "folklore Album Shop",
//     category: "album",
//   },
//   {
//     img: "shopping/showcase/album/album5.jpg",
//     price: "₹1999",
//     heading: "Lover Album Shop",
//     category: "album",
//     bestSeller: true,
//   },
// ];

import axios from "axios";

export const fetchAllData = async () => {
  try {
    const res = await axios.get(
      "https://mocki.io/v1/a95a4033-7a5d-49f9-9c60-c4e468829cdb"
    );
    return res.data || [];
  } catch (error) {
    console.error("Failed to fetch hoodies:", error);
    return [];
  }
};
