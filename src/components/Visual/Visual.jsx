import classNames from "classnames";
import PropTypes from "prop-types";
import { useFeatureStore } from "../GlobalStore/Store";

export default function Visual({ id, children }) {
  const fullScreenFeature = useFeatureStore((state) => state.fullScreenFeature);
  return (
    <div
      className={classNames(
        // "fixed inset-0 flex items-center justify-center transition-opacity duration-700 pointer-events-none "
        "fixed inset-0 flex items-center justify-center opacity-0 pointer-events-none bg-lightBgColor dark:bg-darkBgColor",
        `visual-${id}`
      )}
    >
      <div className="max-w-6xl px-4">{children}</div>
    </div>
  );
}

export const CodeEditorVisual = ({ id, feature }) => (
  <Visual id={id}>
    <img src={feature.fullImage} alt="" className="rounded-sm w-full h-full" />
  </Visual>
);

export const CollaborationVisual = ({ id, feature }) => (
  <Visual id={id}>
    <img src={feature.fullImage} alt="" className="rounded-sm w-full h-full" />
  </Visual>
);

export const UserDashboardVisual = ({ id, feature }) => (
  <Visual id={id}>
    <img src={feature.fullImage} alt="" className="rounded-sm w-full h-full" />
  </Visual>
);

export const MultiLanguageVisual = ({ id, feature }) => (
  <Visual id={id}>
    <img src={feature.fullImage} alt="" className="rounded-sm w-full h-full" />
  </Visual>
);

Visual.propTypes = {
  children: PropTypes.node,
};
