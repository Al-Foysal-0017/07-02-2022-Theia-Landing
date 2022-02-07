import React, { useState } from "react";
import { BiUpArrow } from "react-icons/bi";
import "./_scrollTopBtn.scss";

function ScrollToTopBtn() {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 80) {
      setVisible(true);
    } else if (scrolled <= 80) {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  window.addEventListener("scroll", toggleVisible);
  return (
    <>
      {visible && (
        <div className="scrollToTop" onClick={scrollToTop}>
          <BiUpArrow />
        </div>
      )}
    </>
  );
}

export default ScrollToTopBtn;
