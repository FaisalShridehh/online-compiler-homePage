import classNames from "classnames";
import PropTypes from "prop-types";

// import { useNavigate } from "react-router";
import { useFeatureStore } from "../../GlobalStore/Store";

export default function FeatureCard({ id, gradient, children }) {
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);
  const setFullScreenFeature = useFeatureStore(
    (state) => state.setFullScreenFeature
  );
  return (
    <div
      className={classNames(
        " absolute inset-0  w-full h-full rounded-2xl   transition-all  duration-700 ",
        inViewFeature === id
          ? "active-card opacity-100"
          : "opacity-0 pointer-events-none"
      )}
    >
      <div
        className={classNames(
          "gradient-div  absolute inset-0 bg-gradient-to-br rounded-2xl origin-bottom-left ",
          gradient
        )}
      ></div>
      {children}
      <button
        onClick={() => setFullScreenFeature(id)}
        className="show-me-btn absolute bottom-4 right-6 rounded-xl bg-black px-4 py-2 text-white hidden lg:block"
      >
        Show Me
      </button>
    </div>
  );
}

export const CodeEditor = ({ id, feature }) => {
  const fullScreenFeature = useFeatureStore((state) => state.fullScreenFeature);
  const isFullScreen = fullScreenFeature === id;
  // const navigate = useNavigate();
  return (
    <FeatureCard gradient={"from-[#f7f0ff] to-[#a78afe]"} id={id}>
      <div className="flex flex-col items-center justify-center h-full w-full">
        <div className="p-8">
          <img
            src={feature.image}
            alt="image1"
            className={classNames(
              "rounded-lg shadow-lg object-cover  transition-transform",
              isFullScreen ? "scale-0" : "scale-100"
            )}
          />
        </div>
        <h3
          className={classNames(
            "text-lightTextColor  text-center font-medium text-xs z-40 tracking-wide leading-5 p-4",
            isFullScreen ? "scale-0" : "scale-100"
          )}
        >
          {feature.description}
        </h3>
      </div>
      {/* <div className="bg-[#082E96] p-3 absolute left-[40%] top-32 h-48 w-24 rounded-[96px] shadow-lg">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M8.50226 5.38707C8.81015 5.10997 8.8351 4.63576 8.55801 4.32787C8.28092 4.01999 7.8067 3.99503 7.49882 4.27213L5.76133 5.83587C5.02499 6.49853 4.41418 7.04822 3.99477 7.54679C3.55374 8.07104 3.24023 8.6343 3.24023 9.3296C3.24023 10.0249 3.55374 10.5882 3.99477 11.1124C4.41418 11.611 5.02498 12.1607 5.76132 12.8233L7.49882 14.3871C7.8067 14.6642 8.28092 14.6392 8.55801 14.3313C8.8351 14.0234 8.81015 13.5492 8.50226 13.2721L6.80579 11.7453C6.01792 11.0362 5.48672 10.5558 5.14262 10.1468C4.81237 9.7542 4.74023 9.52502 4.74023 9.3296C4.74023 9.13417 4.81237 8.90499 5.14262 8.51241C5.48672 8.10338 6.01792 7.62298 6.80579 6.91389L8.50226 5.38707Z"
              fill="#fff"
            ></path>{" "}
            <path
              d="M15.443 10.4983C15.7201 10.1904 16.1943 10.1654 16.5022 10.4425L18.2397 12.0063C18.976 12.6689 19.5868 13.2186 20.0063 13.7172C20.4473 14.2415 20.7608 14.8047 20.7608 15.5C20.7608 16.1953 20.4473 16.7586 20.0063 17.2828C19.5868 17.7814 18.976 18.3311 18.2397 18.9937L16.5022 20.5575C16.1943 20.8346 15.7201 20.8096 15.443 20.5017C15.1659 20.1938 15.1909 19.7196 15.4988 19.4425L17.1952 17.9157C17.9831 17.2066 18.5143 16.7262 18.8584 16.3172C19.1887 15.9246 19.2608 15.6954 19.2608 15.5C19.2608 15.3046 19.1887 15.0754 18.8584 14.6828C18.5143 14.2738 17.9831 13.7934 17.1952 13.0843L15.4988 11.5575C15.1909 11.2804 15.1659 10.8062 15.443 10.4983Z"
              fill="#fff"
            ></path>{" "}
            <path
              opacity="0.5"
              d="M14.1797 4.27511C14.58 4.38151 14.8182 4.79228 14.7118 5.19259L10.725 20.1926C10.6186 20.5929 10.2078 20.8312 9.80753 20.7248C9.40722 20.6184 9.16895 20.2076 9.27535 19.8073L13.2622 4.80729C13.3686 4.40697 13.7793 4.16871 14.1797 4.27511Z"
              fill="#fff"
            ></path>{" "}
          </g>
        </svg>
      </div> */}
      <div className="try-our-editor btn-container flex flex-wrap justify-around w-[150px] absolute bottom-4 left-6 ">
        <div
          className="btn h-[25px] lg:h-[35px] mt-2  relative w-[140px] group before:absolute before:left-1/2 before:-translate-x-[50%] before:-bottom-[2px] lg:before:-bottom-[5px] before:h-[5px] before:w-[20px] before:bg-[rgb(8,107,183)] before:rounded-[10px] before:duration-500 before:delay-0 hover:before:bottom-0 hover:before:h-1/2 hover:before:w-[80%] hover:before:rounded-[30px] hover:before:delay-500 after:absolute
            after:left-1/2 after:-translate-x-[50%] lg:after:-top-[5px] after:-top-[2px] after:h-[5px] after:w-[20px] after:bg-[rgb(7,95,189)] after:rounded-[10px]
            after:duration-500 after:delay-0
            hover:after:top-0 hover:after:h-1/2 hover:after:width-[80%] hover:after:rounded-[30px] hover:after:delay-500
            dark:[&:nth-child(1)]:before:bg-[#2bd2ff] dark:[&:nth-child(1)]:before:shadow-[0_0_5px_#2bd2ff_,_0_0_10px_#2bd2ff_,_0_0_20px_#2bd2ff_,_0_0_40px_#2bd2ff]
            dark:[&:nth-child(1)]:after:bg-[#2bd2ff] dark:[&:nth-child(1)]:after:shadow-[0_0_5px_#2bd2ff_,_0_0_10px_#2bd2ff_,_0_0_20px_#2bd2ff_,_0_0_40px_#2bd2ff]
             [&:nth-child(1)]:before:bg-[#007194] [&:nth-child(1)]:before:shadow-[0_0_5px_#007194,_0_0_15px_#007194,_0_0_30px_#007194,_0_0_60px_#007194]
            [&:nth-child(1)]:after:bg-[#007194] [&:nth-child(1)]:after:shadow-[0_0_5px_#007194,_0_0_15px_#007194,_0_0_30px_#007194,_0_0_60px_#007194]
           "
        >
          <button
            className={`flex items-center bg-[rgba(255,255,255)] dark:bg-[rgba(0,0,0,1)] border-b border-t dark:border-b-[rgba(255,255,255,0.1)] border-b-[#007194]/30 dark:border-t-[rgba(255,255,255,0.1)] border-t-[#007194]/30 rounded-[30px] shadow-[0_15px_35px_rgba(255,255,255,0.2)] text-lightTextColor dark:text-darkTextColor text-xs  lg:text-base font-bold absolute left-0 top-0 w-full h-full justify-center tracking-[1px] no-underline overflow-hidden backdrop-filter backdrop-blur-lg z-[1] duration-500 group-hover:tracking-[2px] before:absolute before:top-0 before:left-0 before:w-1/2 before:h-full before:bg-gradient-to-l before:from-[rgba(0,0,0,0.05)] before:to-transparent dark:before:from-[rgba(255,255,255,0.15)] dark:before:to-transparent before:skew-x-[45deg] before:translate-x-0 before:duration-500 group-hover:before:skew-x-[45deg] before:group-hover:translate-x-[200%] dark:group-active:text-black group-active:text-white`}
            onClick={() => navigate("/landing")}
          >
            Try it now
          </button>
        </div>
      </div>
    </FeatureCard>
  );
};

export const Collaboration = ({ id, feature }) => {
  const fullScreenFeature = useFeatureStore((state) => state.fullScreenFeature);
  const isFullScreen = fullScreenFeature === id;

  return (
    <FeatureCard gradient={"from-[#f5fbff] to-[#addeff]"} id={id}>
      <div className="flex flex-col items-center justify-center h-full w-full">
        <div className="p-8 ">
          <img
            src={feature.image}
            alt="image1"
            className={classNames(
              "rounded-lg shadow-lg object-cover  transition-transform",
              isFullScreen ? "scale-0" : "scale-100"
            )}
          />
        </div>
        <h3
          className={classNames(
            "text-lightTextColor  text-center font-medium text-xs z-40 tracking-wide leading-5 p-4",
            isFullScreen ? "scale-0" : "scale-100"
          )}
        >
          {feature.description}
        </h3>
      </div>
    </FeatureCard>
  );
};

export const UserDashboard = ({ id, feature }) => {
  const fullScreenFeature = useFeatureStore((state) => state.fullScreenFeature);
  const isFullScreen = fullScreenFeature === id;
  return (
    <FeatureCard gradient={"from-[#f5fff7] to-[#adf8ff]"} id={id}>
      <div className="flex flex-col items-center justify-center h-full w-full">
        <div className="p-8 ">
          <img
            src={feature.image}
            alt="image1"
            className={classNames(
              "rounded-lg shadow-lg object-cover  transition-transform",
              isFullScreen ? "scale-0" : "scale-100"
            )}
          />
        </div>
        <h3
          className={classNames(
            "text-lightTextColor  text-center font-medium text-xs z-40 tracking-wide leading-5 p-4",
            isFullScreen ? "scale-0" : "scale-100"
          )}
        >
          {feature.description}
        </h3>
      </div>
    </FeatureCard>
  );
};

export const MultiLanguage = ({ id, feature }) => {
  const fullScreenFeature = useFeatureStore((state) => state.fullScreenFeature);
  const isFullScreen = fullScreenFeature === id;
  return (
    <FeatureCard gradient={"from-[#fff7f5] to-[#ffd8ad]"} id={id}>
      <div className="flex flex-col items-center justify-center h-full w-full gap-3">
        <div className="flex">
          <img
            src={feature.image}
            alt="image1"
            className={classNames(
              "rounded-lg shadow-lg object-cover w-[200px] transition-transform ",
              isFullScreen ? "scale-0" : "scale-100"
            )}
          />
        </div>
        <h3
          className={classNames(
            "text-lightTextColor  text-center font-medium text-xs z-40 tracking-wide leading-5 p-4",
            isFullScreen ? "scale-0" : "scale-100"
          )}
        >
          {feature.description}
        </h3>
      </div>
    </FeatureCard>
  );
};

FeatureCard.propTypes = {
  gradient: PropTypes.string,
  children: PropTypes.node,
  id: PropTypes.any,
};
CodeEditor.propTypes = {
  id: PropTypes.any,
  feature: PropTypes.object,
};
Collaboration.propTypes = {
  id: PropTypes.any,
  feature: PropTypes.object,
};
UserDashboard.propTypes = {
  id: PropTypes.any,
  feature: PropTypes.object,
};
MultiLanguage.propTypes = {
  id: PropTypes.any,
  feature: PropTypes.object,
};
