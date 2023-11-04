import classNames from "classnames";
import PropTypes from "prop-types";
import { useFeatureStore } from "../GlobalStore/Store";

export default function Visual({ id, children }) {
  const fullScreenFeature = useFeatureStore((state) => state.fullScreenFeature);
  return (
    <div
      className={classNames(
        // "fixed inset-0 flex items-center justify-center transition-opacity duration-700 pointer-events-none "
        "fixed inset-0 flex items-center justify-center opacity-0 pointer-events-none ",
        `visual-${id}`
      )}
    >
      <div className="max-w-6xl px-4">{children}</div>
    </div>
  );
}

export const CodeEditorVisual = ({ id }) => (
  <Visual id={id}>
    <img src="/src/assets/testPic.png" alt="" />
  </Visual>
);

export const CollaborationVisual = ({ id }) => (
  <Visual id={id}>
    <img src="/src/assets/1.png" alt="" />
  </Visual>
);

export const CodeSharingVisual = ({ id }) => (
  <Visual id={id}>
    <img src="/src/assets/testPic.png" alt="" />
  </Visual>
);

export const MultiLanguageVisual = ({ id }) => (
  <Visual id={id}>
    <img src="/src/assets/2.png" alt="" />
  </Visual>
);

Visual.propTypes = {
  children: PropTypes.node,
};
