// i put all of these just to check what will work from them , and i think the main-container is working fine to prevent me from scrolling

import { useEffect } from "react";

export const hidePageOverflow = () => {
  // window.innerWidth always is including scrollbar width, where as
  // document.body.clientWidth is not including scrollbar width. So subtracting
  // the two will give us the scrollbar width. We add that to the document here
  // to prevent the page from jumping around.
  const scrollbarWidth = window.innerWidth - document.body.clientWidth + "px";
  document.documentElement.style.setProperty("padding-right", scrollbarWidth);
  document
    .getElementById("root")
    .style.setProperty("padding-right", scrollbarWidth);
  document
    .getElementById("main-container")
    .style.setProperty("padding-right", scrollbarWidth);
  console.log(document.documentElement);

  // We use overflow-clip instead of overflow-hidden because overflow-hidden
  // won't work with position sticky.
  document.documentElement.classList.add("overflow-clip");
  document.getElementById("root").classList.add("overflow-clip");
  document.getElementById("main-container").classList.add("overflow-clip");
};

export const showPageOverflow = () => {
  document.documentElement.style.removeProperty("padding-right");
  document.getElementById("root").style.removeProperty("padding-right");
  document
    .getElementById("main-container")
    .style.removeProperty("padding-right");
  document.documentElement.classList.remove("overflow-clip");
  document.getElementById("root").classList.remove("overflow-clip");
  document.getElementById("main-container").classList.remove("overflow-clip");
  console.log(document.documentElement);
};

export const useHidePageOverflow = (hide) => {
  useEffect(() => {
    if (hide) {
      hidePageOverflow();
    } else {
      showPageOverflow();
    }
  }, [hide]);
};
