// import React, { useEffect, useRef, lazy, Suspense } from "react";
// import { Routes, Route, useLocation } from "react-router-dom";
// import "./utils/gsap-init";
// import Home from "./component/content/Home";
// import About from "./component/content/About";
// import MusicAlbum from "./component/content/MusicAlbum";
// import Tickets from "./component/content/Tickets/Tickets";
// import Product from "./component/content/products/Product";
// import Contact from "./component/content/Contact";
// import Particles from "./component/animation/LandingPageAnimation/homePageParticlesAnimation/Particles";
// import AllProducts from "./component/content/products/AllProducts";
// import { useExactPageTransition } from "./component/animation/pageTransition/Transition";
// import NotFound from "./component/content/NotFoundPage";

// const AlbumData = [
//   {
//     name: "LOVER (2019)",
//     img: "album/lover.jpg",
//     link: "https://open.spotify.com/album/1NAmidJlEaVgA3MpcPFYGq",
//   },
//   {
//     name: "Fearless (Taylor's Version) (2021)",
//     img: "album/fearless.jpg",
//     link: "https://open.spotify.com/album/4hDok0OAJd57SGIT8xuWJH",
//   },
//   {
//     name: "Red (Taylor's Version) (2021)",
//     img: "album/red.jpg",
//     link: "https://open.spotify.com/album/6kZ42qRrzov54LcAk4onW9",
//   },
//   {
//     name: "Midnights (2022)",
//     img: "album/mid-nights.jpg",
//     link: "https://open.spotify.com/album/151w1FgRZfnKZA9FEcg9Z3",
//   },
//   {
//     name: "1989 (Taylor's Version) (2023)",
//     img: "album/1989.jpg",
//     link: "https://open.spotify.com/album/64LU4c1nfjz1t4VnGhagcg",
//   },
// ];

// const ConcertData = [
//   {
//     name: "Melbourne, Australia",
//     img: "concert/era1.webp",
//     link: "https://youtu.be/B8Q-nHfEsQY?si=c5ZRbX7w7KvlEW7Y",
//   },
//   {
//     name: "Sydney, Australia",
//     img: "concert/era2.jpg",
//     link: "https://youtu.be/igP-iB_QN7M?si=mJLG654QJWpOL58H",
//   },
//   {
//     name: "Singapore",
//     img: "concert/era3.webp",
//     link: "https://youtu.be/039hfofIMbM?si=7we-iW7uJ54SArl1",
//   },
//   {
//     name: "Paris, France",
//     img: "concert/era4.webp",
//     link: "https://youtu.be/ctiF7EfAiw4?si=nvxlg9ZvnYr2u7rH",
//   },
//   {
//     name: "Stockholm, Sweden",
//     img: "concert/era5.jpeg",
//     link: "https://youtu.be/ziUUiYxPTgc?si=H0T7roW4x29ydkJM",
//   },
// ];

// const App = () => {
//   useExactPageTransition();
//   const location = useLocation();
//   const showParticles =
//     location.pathname !== "/" &&
//     location.pathname !== "/product" &&
//     location.pathname !== "/view-more";

//   return (
//     <>
//       <div className="relative w-full min-h-screen">
//         {showParticles && (
//           <div className="fixed inset-0 z-0 pointer-events-none">
//             <Particles
//               particleColors={["#ffffff", "#ffffff"]}
//               particleCount={200}
//               particleSpread={10}
//               speed={0.1}
//               particleBaseSize={100}
//               moveParticlesOnHover={false}
//               alphaParticles={false}
//               disableRotation={true}
//             />
//           </div>
//         )}

//         <div className="relative z-10">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route
//               path="/album"
//               element={<MusicAlbum content={AlbumData} initialSlideIndex={0} />}
//             />
//             <Route
//               path="/tickets"
//               element={<Tickets content={ConcertData} initialSlideIndex={0} />}
//             />
//             <Route path="/product" element={<Product />} />
//             <Route path="/view-more" element={<AllProducts />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </div>
//       </div>
//     </>
//   );
// };

// export default App;

import React, { useEffect, useRef, lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./utils/gsap-init";
const Home = lazy(() => import("./component/content/Home"));
const About = lazy(() => import("./component/content/About"));
const MusicAlbum = lazy(() => import("./component/content/MusicAlbum"));
const Tickets = lazy(() => import("./component/content/Tickets/Tickets"));
const Product = lazy(() => import("./component/content/products/Product"));
const Contact = lazy(() => import("./component/content/Contact"));
const AllProducts = lazy(() =>
  import("./component/content/products/AllProducts")
);
import { useExactPageTransition } from "./component/animation/pageTransition/Transition";
const NotFound = lazy(() => import("./component/content/NotFoundPage"));

const AlbumData = [
  {
    name: "LOVER (2019)",
    img: "album/lover.jpg",
    link: "https://open.spotify.com/album/1NAmidJlEaVgA3MpcPFYGq",
  },
  {
    name: "Fearless (Taylor's Version) (2021)",
    img: "album/fearless.jpg",
    link: "https://open.spotify.com/album/4hDok0OAJd57SGIT8xuWJH",
  },
  {
    name: "Red (Taylor's Version) (2021)",
    img: "album/red.jpg",
    link: "https://open.spotify.com/album/6kZ42qRrzov54LcAk4onW9",
  },
  {
    name: "Midnights (2022)",
    img: "album/mid-nights.jpg",
    link: "https://open.spotify.com/album/151w1FgRZfnKZA9FEcg9Z3",
  },
  {
    name: "1989 (Taylor's Version) (2023)",
    img: "album/1989.jpg",
    link: "https://open.spotify.com/album/64LU4c1nfjz1t4VnGhagcg",
  },
];

const ConcertData = [
  {
    name: "Melbourne, Australia",
    img: "concert/era1.webp",
    link: "https://youtu.be/B8Q-nHfEsQY?si=c5ZRbX7w7KvlEW7Y",
  },
  {
    name: "Sydney, Australia",
    img: "concert/era2.jpg",
    link: "https://youtu.be/igP-iB_QN7M?si=mJLG654QJWpOL58H",
  },
  {
    name: "Singapore",
    img: "concert/era3.webp",
    link: "https://youtu.be/039hfofIMbM?si=7we-iW7uJ54SArl1",
  },
  {
    name: "Paris, France",
    img: "concert/era4.webp",
    link: "https://youtu.be/ctiF7EfAiw4?si=nvxlg9ZvnYr2u7rH",
  },
  {
    name: "Stockholm, Sweden",
    img: "concert/era5.jpeg",
    link: "https://youtu.be/ziUUiYxPTgc?si=H0T7roW4x29ydkJM",
  },
];

const App = () => {
  useExactPageTransition();
  const location = useLocation();
  const showParticles =
    location.pathname !== "/" &&
    location.pathname !== "/product" &&
    location.pathname !== "/view-more";

  return (
    <>
      <div className="relative w-full min-h-screen">
        {showParticles && (
          <div className="fixed inset-0 z-0 pointer-events-none">
            <Particles
              particleColors={["#ffffff", "#ffffff"]}
              particleCount={200}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={100}
              moveParticlesOnHover={false}
              alphaParticles={false}
              disableRotation={true}
            />
          </div>
        )}

        <div className="relative z-10">
          <Suspense
            fallback={
              <div className="text-white text-center mt-10">Loading...</div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route
                path="/album"
                element={
                  <MusicAlbum content={AlbumData} initialSlideIndex={0} />
                }
              />
              <Route
                path="/tickets"
                element={
                  <Tickets content={ConcertData} initialSlideIndex={0} />
                }
              />
              <Route path="/product" element={<Product />} />
              <Route path="/view-more" element={<AllProducts />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default App;
