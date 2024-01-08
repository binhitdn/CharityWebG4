import React, { useEffect, useState } from "react";
import "./GoToTop.module.css"; // Import your CSS

function GoToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    const scrolled =
      document.documentElement.scrollTop || document.body.scrollTop;

    const windowHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    if (scrolled / windowHeight > 0.8) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div>
      {isVisible && (
        <div
          className="scroll-to-top fixed bottom-0 right-0 mb-20 mr-20 z-10 cursor-pointer text-white text-2xl bg-green-500 hover:bg-pink-200 py-2 px-4 rounded-full shadow-lg w-16 h-16 flex items-center justify-center"
          onClick={scrollToTop}
        >
          <div onClick={scrollToTop}>&#9757;</div>
        </div>
      )}
    </div>
  );
}

export default GoToTop;
