// [
//   {
//     img: "shopping/showcase/pant/pant1.jpg",
//     price: "₹2999",
//     heading: "Cowboy Like Me Jogger",
//   },
//   {
//     img: "shopping/showcase/pant/pant2.jpg",
//     price: "₹1199",
//     heading: "1989 (Taylor’s Version) Blue Stripe Poplin Shorts",
//   },
//   {
//     img: "shopping/showcase/pant/pant3.jpg",
//     price: "₹999",
//     heading: "Last Great American Dynasty Terry Cloth Jogger",
//   },
//   {
//     img: "shopping/showcase/pant/pant4.jpg",
//     price: "₹499",
//     heading: "TS Crest White Oxford Shorts",
//   },
// ];

import axios from "axios";

export const fetchPants = async () => {
  try {
    const res = await axios.get(
      "https://mocki.io/v1/538134df-77a8-447e-92ed-c39b2877a6db"
    );
    return res.data || [];
  } catch (error) {
    console.error("Failed to fetch albums:", error);
    return [];
  }
};
