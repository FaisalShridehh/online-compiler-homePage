import classNames from "classnames";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useFeatureStore } from "../../GlobalStore/Store";

export default function FeatureTitle({ id, children }) {
  const pRef = useRef(null);
  const isInView = useInView(pRef, { margin: "-50% 0px -50% 0px" });
  const setInViewFeature = useFeatureStore((state) => state.setInViewFeature);
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);

  useEffect(() => {
    if (isInView) setInViewFeature(id);
    if (!isInView && inViewFeature === id) setInViewFeature(null);
  }, [isInView, id, setInViewFeature, inViewFeature]);

  return (
    <p
      ref={pRef}
      className={classNames(
        "feature-title text-5xl py-16 font-heading",
        isInView
          ? "text-lightAccentColor dark:text-darkAccentColor"
          : "text-lightTextColor/50 dark:text-darkTextColor/50"
      )}
    >
      {children}
    </p>
  );
}

FeatureTitle.propTypes = {
  children: PropTypes.node,
};
