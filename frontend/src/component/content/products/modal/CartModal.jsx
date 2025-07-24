import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CartModal = ({ onClose, cartItems, setCartItems }) => {
  const [step, setStep] = useState(1);
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPassword = (password) => password.trim().length >= 6;

  const updateQuantity = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const grandTotal = cartItems.reduce(
    (total, item) =>
      total + parseInt(item.price.replace(/[₹,]/g, "")) * item.quantity,
    0
  );

  const slideDown = {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: "0%", opacity: 1 },
    exit: { y: "-100%", opacity: 0 },
    transition: {
      duration: 0.7,
      ease: [0.25, 0.8, 0.25, 1],
      type: "spring",
      bounce: 0.25,
    },
  };

  const isFormValid =
    user.name.trim().length > 0 &&
    isValidEmail(user.email) &&
    isValidPassword(user.password);

  const handleClose = () => {
    setStep(1);
    setUser({ name: "", email: "", password: "" });
    onClose();
  };

  return (
    <div className="w-[90vw] max-w-5xl h-[75vh] max-h-[80vh] sm:max-h-[85vh] md:h-[75vh] border border-[#FFE5D5] bg-[#FFE5D5] relative overflow-hidden rounded-xl shadow-2xl">
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            {...slideDown}
            className="absolute inset-0 px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-5 md:py-6 z-10 bg-[#FFE5D5]"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 sm:gap-0 p-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-[#030303] uppercase">
                Your Cart
              </h1>
              <div className="flex gap-3 sm:gap-4 md:gap-5 w-full sm:w-auto justify-between">
                <motion.button
                  disabled={cartItems.length === 0}
                  onClick={() => setStep(2)}
                  className="text-base sm:text-lg md:text-xl font-bold text-[#030303] disabled:opacity-40 px-2 py-1 sm:px-0 sm:py-0"
                  animate={{
                    x: cartItems.length === 0 ? 0 : [-10, 10, -8, 8, -5, 5, 0],
                    scale: cartItems.length === 0 ? 1 : [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: cartItems.length === 0 ? 0 : Infinity,
                    repeatDelay: 2,
                  }}
                >
                  CHECKOUT
                </motion.button>

                <h3
                  className="text-base sm:text-lg md:text-xl font-bold text-[#030303] cursor-pointer px-2 py-1 sm:px-0 sm:py-0"
                  onClick={handleClose}
                >
                  CLOSE
                </h3>
              </div>
            </div>

            <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 space-y-4 sm:space-y-6 max-h-[calc(75vh-200px)] sm:max-h-[380px] overflow-y-auto pr-2 sm:pr-4 custom-scrollbar">
              {cartItems.length === 0 ? (
                <p className="text-lg sm:text-xl text-[#030303] text-center py-8">
                  Your cart is empty.
                </p>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row items-center justify-between bg-white/5 p-3 sm:p-4 rounded-lg gap-3 sm:gap-0"
                  >
                    <div className="flex items-center gap-3 sm:gap-4 md:gap-6 w-full sm:w-auto">
                      <img
                        src={item.img}
                        alt={item.heading}
                        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover rounded-md"
                      />
                      <div className="text-[#030303]">
                        <h4 className="text-base sm:text-lg md:text-xl font-semibold">
                          {item.heading}
                        </h4>
                        <p className="text-xs sm:text-sm">
                          ₹{item.price} x {item.quantity}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between w-full sm:w-auto gap-2 sm:gap-4 text-[#030303]">
                      <div className="flex items-center gap-1 sm:gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="text-xl sm:text-2xl px-1 sm:px-2"
                        >
                          -
                        </button>
                        <span className="text-sm sm:text-base">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="text-xl sm:text-2xl px-1 sm:px-2"
                        >
                          +
                        </button>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-4">
                        <span className="font-bold text-sm sm:text-base">
                          ₹
                          {parseInt(item.price.replace(/[₹,]/g, "")) *
                            item.quantity}
                        </span>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 font-bold text-sm sm:text-base"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 flex justify-end pr-2 sm:pr-4">
                <h3 className="text-xl sm:text-2xl md:text-3xl text-[#030303] font-bold">
                  Grand Total: ₹{grandTotal}
                </h3>
              </div>
            )}
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            {...slideDown}
            className="absolute inset-0 px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-5 md:py-6 z-20 bg-[#FFE5D5] overflow-y-auto"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 sm:gap-0 p-2">
              <div className="w-full sm:w-2/3">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold text-[#030303] uppercase">
                  Create Account to Checkout
                </h1>
                <p className="text-sm sm:text-base md:text-md text-[#030303] w-full sm:w-4/5 ml-0 sm:ml-3 mt-1 sm:mt-2">
                  Your details are safe with us, we don't share them with
                  anyone.
                </p>
              </div>
              <div className="flex gap-3 sm:gap-4 md:gap-5 w-full sm:w-auto justify-between">
                {isFormValid && (
                  <motion.button
                    onClick={() => setStep(3)}
                    className="text-base sm:text-lg md:text-xl font-bold text-[#030303] px-2 py-1 sm:px-0 sm:py-0"
                    animate={{
                      x: [-10, 10, -8, 8, -5, 5, 0],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                  >
                    CHECKOUT
                  </motion.button>
                )}

                <button
                  onClick={() => setStep(1)}
                  className="text-base sm:text-lg md:text-xl font-bold text-[#030303] px-2 py-1 sm:px-0 sm:py-0"
                >
                  BACK
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 mt-6 sm:mt-10 md:mt-12 lg:mt-16 w-full sm:w-4/5 md:w-2/3 lg:w-1/2">
              <input
                type="text"
                placeholder="Name"
                className="bg-transparent border-b border-[#030303] px-2 py-1 outline-none text-lg sm:text-xl md:text-2xl text-[#030303] placeholder-[#999999]"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />

              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-transparent border-b border-[#030303] px-2 py-1 outline-none text-lg sm:text-xl md:text-2xl text-[#030303] placeholder-[#999999] w-full"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
                {user.email && !isValidEmail(user.email) && (
                  <p className="text-xs sm:text-sm text-red-500 mt-1">
                    Enter a valid email address.
                  </p>
                )}
              </div>

              <div>
                <input
                  type="password"
                  placeholder="Password (min 6 characters)"
                  className="bg-transparent border-b border-[#030303] px-2 py-1 outline-none text-lg sm:text-xl md:text-2xl text-[#030303] placeholder-[#999999] w-full"
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
                {user.password && !isValidPassword(user.password) && (
                  <p className="text-xs sm:text-sm text-red-500 mt-1">
                    Password must be at least 6 characters.
                  </p>
                )}
              </div>
            </div>

            <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12">
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#030303] ml-0 sm:ml-3">
                You're almost there — finish to own it.
              </p>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            {...slideDown}
            className="absolute inset-0 px-4 sm:px-6 py-4 sm:py-5 flex flex-col items-center justify-center z-30 bg-[#FFE5D5]"
          >
            <div
              className="absolute top-4 sm:top-6 right-4 sm:right-6 text-[#030303] font-bold text-lg sm:text-xl cursor-pointer"
              onClick={handleClose}
            >
              CLOSE
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase text-center px-4">
              Order Sucessfull 🎉
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mt-4 sm:mt-6 text-center px-4">
              Your items will be shipped soon!
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CartModal;
