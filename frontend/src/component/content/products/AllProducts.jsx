import React, { useEffect, useRef, useState } from "react";
import { fetchAllData } from "./data/AllData";
import FeaturedModal from "./modal/FeatureModal";
import FilterModal from "./modal/FilterModal";
import Menu from "../../Menu/shoppingMenu/Menu";
import CartModal from "./modal/CartModal";

const AllProducts = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [showFeatured, setShowFeatured] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    price: null,
    categories: [],
    featured: null,
  });
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);
  const loaderRef = useRef(null);

  const handleFilterApply = (filters) => {
    setSelectedFilters((prev) => ({
      ...prev,
      price: filters.price,
      categories: filters.categories,
    }));
    setShowFilter(false);
  };

  const handleFeaturedApply = (sort) => {
    setSelectedFilters((prev) => ({ ...prev, featured: sort }));
    setShowFeatured(false);
  };

  const clearFilters = () => {
    setSelectedFilters({ price: null, categories: [], featured: null });
  };

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  useEffect(() => {
    const getData = async () => {
      const data = await fetchAllData();
      const productsWithId = data.map((item, index) => ({
        ...item,
        id: item.id || index + 1,
      }));
      setProducts(productsWithId);
    };

    getData();
  }, []);

  const getFilteredProducts = () => {
    let filtered = [...products];

    if (selectedFilters.price) {
      const [min, max] = selectedFilters.price;
      filtered = filtered.filter((item) => {
        const price = parseInt(item.price.replace(/[₹,]/g, ""));
        return price >= min && price <= max;
      });
    }

    if (selectedFilters.categories.length > 0) {
      filtered = filtered.filter((item) =>
        selectedFilters.categories.includes(item.category)
      );
    }

    if (selectedFilters.featured === "Best Seller") {
      filtered = filtered.filter((item) => item.bestSeller);
    } else if (selectedFilters.featured === "A-Z") {
      filtered.sort((a, b) => a.heading.localeCompare(b.heading));
    } else if (selectedFilters.featured === "Z-A") {
      filtered.sort((a, b) => b.heading.localeCompare(a.heading));
    } else if (selectedFilters.featured === "Low to High") {
      filtered.sort(
        (a, b) =>
          parseInt(a.price.replace(/[₹,]/g, "")) -
          parseInt(b.price.replace(/[₹,]/g, ""))
      );
    } else if (selectedFilters.featured === "High to Low") {
      filtered.sort(
        (a, b) =>
          parseInt(b.price.replace(/[₹,]/g, "")) -
          parseInt(a.price.replace(/[₹,]/g, ""))
      );
    }

    return filtered;
  };

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = "If you refresh, your cart data will be lost.";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [cartItems.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setVisibleCount((prev) => prev + 6);
        }
      },
      {
        rootMargin: "0px",
        threshold: 1.0,
      }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`w-full min-h-screen relative text-black bg-white pb-4 sm:pb-6 md:pb-10 ${
        showCart ? "backdrop-blur-md overflow-hidden h-screen" : ""
      }`}
    >
      <section className="w-full overflow-hidden">
        <div className="flex items-center justify-between p-4 sm:p-6 md:p-10">
          <h3 className="text-2xl sm:text-3xl md:text-5xl uppercase font-semibold">
            Catalog
          </h3>
          <h2 className="text-2xl sm:text-3xl md:text-5xl uppercase font-semibold">
            Total Products: {getFilteredProducts().length}
          </h2>
        </div>
      </section>

      <section>
        <div className="text-lg sm:text-xl md:text-2xl p-4 sm:p-6 md:p-10 flex items-center justify-between cursor-pointer">
          <h3 onClick={() => setShowFilter(true)}>Filter</h3>
          <h3 onClick={() => setShowFeatured(true)}>Featured</h3>
        </div>

        {(selectedFilters.featured ||
          selectedFilters.categories.length > 0 ||
          selectedFilters.price) && (
          <div className="px-4 sm:px-6 md:px-10 flex items-center flex-wrap gap-2 sm:gap-3 text-sm sm:text-base mt-[-10px] sm:mt-[-15px] md:mt-[-20px] mb-2 sm:mb-3 md:mb-4">
            <button
              onClick={clearFilters}
              className="bg-black text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm"
            >
              Clear
            </button>

            {selectedFilters.price && (
              <span className="bg-gray-200 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm">
                Price: ₹{selectedFilters.price[0]} - ₹{selectedFilters.price[1]}
              </span>
            )}

            {selectedFilters.categories.map((cat, i) => (
              <span
                key={i}
                className="bg-gray-200 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm"
              >
                {cat}
              </span>
            ))}

            {selectedFilters.featured && (
              <span className="bg-gray-200 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm">
                Sort: {selectedFilters.featured}
              </span>
            )}
          </div>
        )}
      </section>

      <section className="w-full min-h-screen mt-3 sm:mt-4 md:mt-5 mb-4 sm:mb-6 md:mb-10 px-4 sm:px-6 md:px-10">
        <div>
          <h3 className="text-2xl sm:text-3xl md:text-5xl p-3 sm:p-4 md:p-5 font-semibold">
            All Products
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {getFilteredProducts().length === 0 ? (
            <div className="w-full flex justify-center items-center min-h-[200px] text-xl sm:text-2xl md:text-3xl font-semibold text-black">
              This product is currently under manufacturing.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {getFilteredProducts()
                .slice(0, visibleCount)
                .map((item) => {
                  const isInCart = cartItems.some(
                    (cartItem) => cartItem.id === item.id
                  );
                  return (
                    <div
                      key={item.id}
                      className="border bg-white/10 p-3 sm:p-4 md:p-6 rounded-lg flex flex-col items-center justify-between text-center hover:scale-[1.02] transition-all duration-300"
                    >
                      <img
                        src={item.img}
                        alt={item.heading}
                        className="w-full h-48 sm:h-60 md:h-72 object-contain"
                      />
                      <div>
                        <h4 className="text-lg sm:text-xl md:text-2xl mt-2 sm:mt-3 md:mt-4 font-semibold">
                          {item.heading}
                        </h4>
                        <p className="text-sm sm:text-base md:text-lg text-gray-700">
                          {item.price}
                        </p>
                        <button
                          onClick={() => {
                            if (!isInCart) addToCart(item);
                          }}
                          disabled={isInCart}
                          className={`mt-2 px-3 sm:px-4 py-1 sm:py-2 md:px-4 md:py-2 rounded-full transition-all duration-300 ${
                            isInCart
                              ? "bg-transparent border border-black cursor-default"
                              : "bg-black text-white hover:bg-gray-800"
                          }`}
                        >
                          {isInCart ? "Added" : "Add to Cart"}
                        </button>
                      </div>
                    </div>
                  );
                })}
            </div>
          )}
        </div>
      </section>

      <FilterModal
        isOpen={showFilter}
        onClose={() => setShowFilter(false)}
        onApply={handleFilterApply}
        selectedFilters={selectedFilters}
      />
      <FeaturedModal
        isOpen={showFeatured}
        onClose={() => setShowFeatured(false)}
        onApply={handleFeaturedApply}
        selectedFilters={selectedFilters}
      />

      <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 p-4 sm:p-6 md:p-8 z-50 w-full flex justify-center">
        <Menu onCartClick={() => setShowCart(true)} />
      </nav>

      {showCart && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/30 backdrop-blur-md">
          <CartModal
            onClose={() => setShowCart(false)}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        </div>
      )}

      <div
        ref={loaderRef}
        className="h-8 sm:h-10 w-full flex justify-center items-center mt-3 sm:mt-4 md:mt-5"
      >
        <span className="text-gray-400 text-sm sm:text-base">
          Loading more...
        </span>
      </div>
    </div>
  );
};

export default AllProducts;
