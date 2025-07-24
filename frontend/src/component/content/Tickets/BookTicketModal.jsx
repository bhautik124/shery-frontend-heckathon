import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

const BookTicket = ({ handleClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      modalRef.current,
      {
        scale: 0.2,
        rotation: -1080,
        opacity: 0,
      },
      {
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 1.6,
        ease: "power4.out",
      }
    );
  }, []);

  const animateClose = () => {
    gsap.to(modalRef.current, {
      scale: 0.2,
      rotation: 1080,
      opacity: 0,
      duration: 1.2,
      ease: "power4.in",
      onComplete: () => handleClose(),
    });
  };

  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState("");
  const [user, setUser] = useState({ name: "", email: "" });
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const options = [
    {
      key: "personal",
      label: "Personal",
      desc: "Self-guided flexible tour",
      img: "tickets/1.jpg",
    },
    {
      key: "group",
      label: "Group Tour",
      desc: "Guided group experience",
      img: "tickets/2.jpg",
    },
    {
      key: "student",
      label: "Student",
      desc: "Student discount with valid ID",
      img: "tickets/3.jpg",
    },
  ];

  const selectedOption = options.find((opt) => opt.key === selected);

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
    user.name.trim().length > 0 && isValidEmail(user.email.trim());

  return (
    <div
      ref={modalRef}
      className="w-full max-w-[90vw] sm:max-w-4xl md:max-w-5xl lg:max-w-6xl h-[80vh] sm:h-[70vh] border border-[#FFE5D5] bg-[#030303] relative overflow-hidden rounded-xl shadow-2xl mx-auto"
    >
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            {...slideDown}
            className="absolute inset-0 px-4 sm:px-6 md:px-10 py-4 sm:py-6 z-10 bg-[#030303] overflow-y-auto"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start p-2">
              <div className="mb-4 sm:mb-0">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#FFE5D5] uppercase">
                  Choose your Ticket
                </h1>
                <p className="text-sm sm:text-md md:text-lg text-[#FFE5D5] w-full sm:w-2/3 ml-0 sm:ml-3 mt-2">
                  Pick the perfect option for your visit: a personal experience,
                  a guided group tour, or a student special with added benefits.
                </p>
              </div>
              <div className="flex gap-3 sm:gap-5">
                <motion.button
                  disabled={!selected}
                  onClick={() => setStep(2)}
                  className="text-lg sm:text-xl font-bold text-[#FFE5D5] disabled:opacity-40"
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
                  GO NEXT
                </motion.button>
                <h3
                  className="text-lg sm:text-xl font-bold text-[#FFE5D5] cursor-pointer"
                  onClick={animateClose}
                >
                  CLOSE
                </h3>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start mt-6 sm:mt-8 md:mt-12">
              <div className="text-lg sm:text-xl text-[#FFE5D5] space-y-4 sm:space-y-6 mt-4 sm:mt-6 w-full md:w-1/3">
                {options.map((option) => (
                  <div
                    key={option.key}
                    onClick={() => setSelected(option.key)}
                    className="flex items-start gap-4 cursor-pointer"
                  >
                    <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-[#FFE5D5] rounded-full flex items-center justify-center mt-1">
                      {selected === option.key && (
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#FFE5D5] rounded-full" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold uppercase text-base sm:text-lg">
                        {option.label}
                      </h3>
                      <p className="text-xs sm:text-sm">{option.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="w-full md:w-2/3 w-[350px] h-[200px] sm:h-[300px] md:h-[200px] lg:h-[300px] rounded-xl overflow-hidden shadow-lg mt-6 md:mt-0 md:ml-6">
                {selectedOption && (
                  <img
                    src={selectedOption.img}
                    alt={selectedOption.label}
                    className="w-full h-full md:object-cover object-contain"
                  />
                )}
              </div>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            {...slideDown}
            className="absolute inset-0 px-4 sm:px-6 md:px-10 py-4 sm:py-6 z-20 bg-[#0a0a0a] overflow-y-auto custom-scrollbar1"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start p-2">
              <div className="mb-4 sm:mb-0">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#FFE5D5] uppercase">
                  Drop Your Digits
                </h1>
                <p className="text-sm sm:text-md md:text-lg text-[#FFE5D5] w-full sm:w-2/3 ml-0 sm:ml-3 mt-2">
                  Slide us your deets, lock in your spot, and get ready for an
                  unforgettable experience.
                </p>
              </div>
              <div className="flex gap-3 sm:gap-5">
                <motion.button
                  onClick={() => isFormValid && setStep(3)}
                  disabled={!isFormValid}
                  className="text-lg sm:text-xl font-bold text-[#FFE5D5] disabled:opacity-40"
                  animate={
                    isFormValid
                      ? {
                          x: [-10, 10, -8, 8, -5, 5, 0],
                          scale: [1, 1.05, 1],
                        }
                      : {}
                  }
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                >
                  BOOK
                </motion.button>
                <button
                  onClick={() => setStep(1)}
                  className="text-lg sm:text-xl font-bold text-[#FFE5D5]"
                >
                  BACK
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:gap-6 mt-12 sm:mt-20 md:mt-28 w-full sm:w-3/4 md:w-1/2">
              <input
                type="text"
                placeholder="Name"
                className="bg-transparent border-b border-[#FFE5D5] px-2 py-1 outline-none text-lg sm:text-xl md:text-2xl placeholder-[#FFE5D5]"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
              <input
                type="email"
                placeholder="Email (test@gmail.com)"
                className={`bg-transparent border-b px-2 py-1 outline-none text-lg sm:text-xl md:text-2xl ${
                  user.email && !isValidEmail(user.email)
                    ? "border-red-500 text-red-400 placeholder-red-300"
                    : "border-[#FFE5D5] text-[#FFE5D5] placeholder-[#FFE5D5]"
                }`}
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
              {user.email && !isValidEmail(user.email) && (
                <p className="text-xs sm:text-sm text-red-500 mt-1 ml-1">
                  Please enter a valid email address.
                </p>
              )}
            </div>

            <div className="mt-8 sm:mt-12 md:mt-16">
              <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-[#FFE5D5] ml-0 sm:ml-3">
                Your journey into art starts here — don't let the moment slip
                away.
              </p>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            {...slideDown}
            className="absolute inset-0 px-4 sm:px-6 md:px-10 py-4 sm:py-6 flex items-center justify-center z-30 bg-[#fa4f2b] overflow-y-auto"
          >
            <div
              className="absolute top-4 sm:top-6 right-4 sm:right-6 text-[#FFE5D5] font-bold text-lg sm:text-xl cursor-pointer"
              onClick={animateClose}
            >
              CLOSE
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase text-center text-[#FFE5D5]">
              Booking Successful 🎉
            </h1>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BookTicket;
