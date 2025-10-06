// [
//   {
//     "img": "shopping/showcase/hoodie/Hoodie1.jpg",
//     "price": "₹2499",
//     "heading": "TTPD Gray Embossed Hoodie"
//   },
//   {
//     "img": "shopping/showcase/hoodie/Hoodie2.png",
//     "price": "₹1199",
//     "heading": "Taylor Swift | The Eras Tour Through LA Hoodie"
//   },
//   {
//     "img": "shopping/showcase/hoodie/Hoodie3.png",
//     "price": "₹1999",
//     "heading": "Taylor Swift | The Eras Tour I Beige Hoodie"
//   },
//   {
//     "img": "shopping/showcase/hoodie/Hoodie4.png",
//     "price": "₹2900",
//     "heading": "Taylor Swift | The Eras Tour III Beige Hoodie"
//   },
//   {
//     "img": "shopping/showcase/hoodie/Hoodie5.png",
//     "price": "₹999",
//     "heading": "Taylor Swift | The Eras Tour Through LA Black Hoodie"
//   }
// ]

import axios from "axios";

export const fetchHoodies = async () => {
  try {
    const res = await axios.get(
      "https://mocki.io/v1/d82031c4-5ad6-4a34-813f-c325faa95077"
    );
    return res.data || [];
  } catch (error) {
    console.error("Failed to fetch hoodies:", error);
    return [];
  }
};

