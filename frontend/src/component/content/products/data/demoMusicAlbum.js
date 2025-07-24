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
      "https://mocki.io/v1/1a2ecc67-f409-443c-8648-edfeace4919e"
    );
    return res.data || [];
  } catch (error) {
    console.error("Failed to fetch albums:", error);
    return [];
  }
};

