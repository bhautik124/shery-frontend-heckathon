// [
//   {
//     "img": "shopping/showcase/t-shirt/t-shirt1.jpg",
//     "price": "₹799",
//     "heading": "TS Crest White Oxford Shirt"
//   },
//   {
//     "img": "shopping/showcase/t-shirt/t-shirt2.jpg",
//     "price": "₹1199",
//     "heading": "1989 (Taylor’s Version) Seagull Blue Stripe Poplin Shirt"
//   },
//   {
//     "img": "shopping/showcase/t-shirt/t-shirt3.png",
//     "price": "₹1499",
//     "heading": "Taylor Swift | The Eras Tour Photo Long Sleeve T-Shirt"
//   },
//   {
//     "img": "shopping/showcase/t-shirt/t-shirt4.png",
//     "price": "₹499",
//     "heading": "Taylor Swift | The Eras Tour Through LA Beige T-Shirt"
//   }
// ]

import axios from "axios";

export const fetchTShirts = async () => {
  try {
    const res = await axios.get(
      "https://mocki.io/v1/9b70e917-c666-4714-97e6-c676ce57911c"
    );
    return res.data || [];
  } catch (error) {
    console.error("Failed to fetch albums:", error);
    return [];
  }
};
