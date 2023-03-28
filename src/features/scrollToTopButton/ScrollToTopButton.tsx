import React, { useState } from "react";
import { ScrollToTop } from "../styles/scrollToTopButton/ScrollToTopButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTopButton = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const checkScrollTop = () => {
    if (!showScrollButton && window.pageYOffset > 400) {
      setShowScrollButton(true);
    } else if (showScrollButton && window.pageYOffset <= 400) {
      setShowScrollButton(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <ScrollToTop show={showScrollButton} onClick={scrollTop}>
      <FontAwesomeIcon icon={faChevronUp} />
    </ScrollToTop>
  );
};

export default ScrollToTopButton;
