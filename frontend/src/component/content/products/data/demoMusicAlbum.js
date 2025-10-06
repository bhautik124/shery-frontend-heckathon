// [
//   {
//     "img": "shopping/showcase/album/album1.png",
//     "price": "₹399",
//     "heading": "The Tortured Poets Department Shop"
//   },
//   {
//     "img": "shopping/showcase/album/album2.png",
//     "price": "₹599",
//     "heading": "Taylor Swift Midnights Album Shop"
//   },
//   {
//     "img": "shopping/showcase/album/album3.png",
//     "price": "₹999",
//     "heading": "Taylor Swift evermore Album Shop"
//   },
//   {
//     "img": "shopping/showcase/album/album4.png",
//     "price": "₹299",
//     "heading": "folklore Album Shop"
//   },
//   {
//     "img": "shopping/showcase/album/album5.jpg",
//     "price": "₹1999",
//     "heading": "Lover Album Shop"
//   }
// ]

import axios from "axios";

export const fetchAlbums = async () => {
  try {
    const res = await axios.get(
      "https://mocki.io/v1/36c0b9b7-6e83-499c-8351-f4f36fbe4c07"
    );
    return res.data || [];
  } catch (error) {
    console.error("Failed to fetch albums:", error);
    return [];
  }
};

