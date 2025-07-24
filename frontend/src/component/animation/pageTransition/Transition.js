import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useExactPageTransition = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!document.startViewTransition) {
      return;
    }

    const handleLinkClick = (event) => {
      const link = event.target.closest("a");
      if (link && link.href && link.href.includes(document.location.origin)) {
        event.preventDefault();
        const targetUrl = new URL(link.href);
        const pathname = targetUrl.pathname; 

        if (pathname === "/contact") {
          return;
        }

        const transition = document.startViewTransition(() => {
          navigate(pathname); 
          window.scrollTo(0, 0); 
        });

        transition.ready.catch(() => {
          navigate(pathname); 
        });
      }
    };

    document.addEventListener("click", handleLinkClick);

    return () => {
      document.removeEventListener("click", handleLinkClick);
    };
  }, [location, navigate]);
};
