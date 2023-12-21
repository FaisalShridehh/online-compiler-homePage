import { stagger, useAnimate } from "framer-motion";
import {
  CodeEditorVisual,
  UserDashboardVisual,
  CollaborationVisual,
  MultiLanguageVisual,
} from "../Visual/Visual";
import {
  CodeEditor,
  UserDashboard,
  Collaboration,
  MultiLanguage,
} from "./Feature/FeatureCard";
import FeatureTitle from "./Feature/FeatureTitle";
import { useCallback, useEffect } from "react";
import { useHidePageOverflow } from "../../utils/toggle-page-overflow";
import { useFeatureStore } from "../GlobalStore/Store";
import { useEscapePress } from "../../utils/use-escape-press";
const featureData = [
  {
    id: "CodeEditor",
    image: "/src/assets/Features/feature1.png",
    fullImage: "/src/assets/Features/feature1.png",
    title: "Online Code Editor",
    description:
      "Write, compile, and run code in real-time. No installations required.",
    card: CodeEditor,
    visual: CodeEditorVisual,
  },
  {
    id: "Collaboration",
    image: "/src/assets/Features/feature2.png",
    fullImage: "/src/assets/Features/feature2.png",
    title: "Collaboration Tools",
    description:
      "Work on projects with your team in real-time. Smooth collaboration, zero conflicts.",
    card: Collaboration,
    visual: CollaborationVisual,
  },
  {
    id: "UserDashboard",
    image: "/src/assets/Features/feature3.png",
    fullImage: "/src/assets/Features/feature3.png",
    title: "Code Hub Dashboard",
    description:
      "Streamline your projects with the Code Hub Dashboard. Access your code history and manage binaries seamlessly in one central space.",
    card: UserDashboard,
    visual: UserDashboardVisual,
  },
  {
    id: "MultiLanguage",
    image: "/src/assets/Features/feature4.png",
    fullImage: "/src/assets/Features/feature4full.png",
    title: "Multi-Language Support",
    description:
      "Code in your preferred language. NexaCode supports a wide range of programming languages.",
    card: MultiLanguage,
    visual: MultiLanguageVisual,
  },
];
const FeaturesSection = () => {
  const [scope, animate] = useAnimate();
  const fullScreenFeature = useFeatureStore((state) => state.fullScreenFeature);
  const lastFullScreenFeature = useFeatureStore(
    (state) => state.lastFullScreenFeature
  );
  const setFullScreenFeature = useFeatureStore(
    (state) => state.setFullScreenFeature
  );

  const onEscapePress = () => {
    if (fullScreenFeature) setFullScreenFeature(null);
  };

  useEscapePress(onEscapePress);
  useHidePageOverflow(!!fullScreenFeature);

  //  const handleResize = useCallback(() => {
  //     if (fullScreenFeature) {
  //       //it will trigger the class name based on the scope which is the ref below and the scope from useAnimate()
  //       animate([
  //         [
  //           ".feature-title",
  //           {
  //             opacity: 1,
  //             x: "-200px",
  //           },
  //           // what stagger if there is multiple items it will delay all of them with a specific duration
  //           { duration: 0.3, delay: stagger(0.05) },
  //         ],
  //         [
  //           `.visual-${lastFullScreenFeature}`,
  //           {
  //             opacity: 0,
  //             scale: 0,
  //             pointerEvents: "auto",
  //           },
  //           // this is tell us it animates at the same time as our previous animation
  //           { at: "<" },
  //         ],
  //         [
  //           ".active-card .gradient-div",
  //           {
  //             opacity: 0,
  //             scale: 0,
  //           },
  //           {
  //             at: "<",
  //           },
  //         ],
  //         [
  //           ".active-card .show-me-btn",
  //           {
  //             opacity: 0,
  //           },
  //           {
  //             at: "<",
  //           },
  //         ],
  //         [
  //           ".active-card .try-our-editor ",
  //           {
  //             opacity: 0,
  //           },
  //           {
  //             at: "<",
  //           },
  //         ],
  //         [
  //           ".back-to-site-btn",
  //           {
  //             opacity: 1,
  //             y: "0px",
  //           },
  //           {
  //             at: "<",
  //             duration: 0.3,
  //           },
  //         ],
  //       ]);
  //     } else {
  //       animate([
  //         [
  //           ".feature-title",
  //           {
  //             opacity: 1,
  //             x: "0px",
  //           },
  //           // what stagger if there is multiple items it will delay all of them with a specific duration
  //           { duration: 0.3, delay: stagger(0.05) },
  //         ],
  //         [
  //           `.visual-${lastFullScreenFeature}`,
  //           {
  //             opacity: 0,
  //             scale: 0.75,
  //             pointerEvents: "none",
  //           },
  //           // this is tell us it animates at the same time as our previous animation
  //           { at: "<" },
  //         ],
  //         [
  //           ".active-card .gradient-div",
  //           {
  //             opacity: 1,
  //             scale: 1,
  //           },
  //           {
  //             at: "<",
  //           },
  //         ],

  //         [
  //           ".back-to-site-btn",
  //           {
  //             opacity: 0,
  //             y: "300px",
  //           },
  //           {
  //             at: "<",
  //             duration: 0.3,
  //           },
  //         ],
  //         [
  //           ".active-card .try-our-editor ",
  //           {
  //             opacity: 1,
  //           },
  //           {
  //             at: "",
  //           },
  //         ],
  //         [
  //           ".active-card .show-me-btn",
  //           {
  //             opacity: 1,
  //           },
  //         ],
  //       ]);
  //     }
  //  }, [animate, fullScreenFeature, lastFullScreenFeature]);

  const handleResize = useCallback(() => {
    setFullScreenFeature(null);
  }, [setFullScreenFeature]);

  useEffect(() => {
    // Attach the event listener when the component mounts
    window.addEventListener("resize", handleResize);

    // Detach the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  useEffect(() => {
    if (fullScreenFeature) {
      //it will trigger the class name based on the scope which is the ref below and the scope from useAnimate()
      animate([
        [
          ".feature-title",
          {
            opacity: 0,
            x: "-200px",
          },
          // what stagger if there is multiple items it will delay all of them with a specific duration
          { duration: 0.3, delay: stagger(0.05) },
        ],
        [
          `.visual-${lastFullScreenFeature}`,
          {
            opacity: 1,
            scale: 1,
            pointerEvents: "auto",
          },
          // this is tell us it animates at the same time as our previous animation
          { at: "<" },
        ],
        [
          ".active-card .gradient-div",
          {
            opacity: 0,
            scale: 0,
          },
          {
            at: "<",
          },
        ],
        [
          ".active-card .show-me-btn",
          {
            opacity: 0,
          },
          {
            at: "<",
          },
        ],
        [
          ".active-card .try-our-editor ",
          {
            opacity: 0,
          },
          {
            at: "<",
          },
        ],
        [
          ".back-to-site-btn",
          {
            opacity: 1,
            y: "0px",
          },
          {
            at: "<",
            duration: 0.3,
          },
        ],
      ]);
    } else {
      animate([
        [
          ".feature-title",
          {
            opacity: 1,
            x: "0px",
          },
          // what stagger if there is multiple items it will delay all of them with a specific duration
          { duration: 0.3, delay: stagger(0.05) },
        ],
        [
          `.visual-${lastFullScreenFeature}`,
          {
            opacity: 0,
            scale: 0.75,
            pointerEvents: "none",
          },
          // this is tell us it animates at the same time as our previous animation
          { at: "<" },
        ],
        [
          ".active-card .gradient-div",
          {
            opacity: 1,
            scale: 1,
          },
          {
            at: "<",
          },
        ],

        [
          ".back-to-site-btn",
          {
            opacity: 0,
            y: "300px",
          },
          {
            at: "<",
            duration: 0.3,
          },
        ],
        [
          ".active-card .try-our-editor ",
          {
            opacity: 1,
          },
          {
            at: "",
          },
        ],
        [
          ".active-card .show-me-btn",
          {
            opacity: 1,
          },
        ],
      ]);
    }
  }, [fullScreenFeature, animate, lastFullScreenFeature]);

  return (
    <section
      id="Features"
      className="snap-start dark:bg-darkBgColor bg-lightBgColor  w-full "
    >
      <div className="mx-auto max-w-6xl px-4">
        <div ref={scope}>
          {featureData.map((feature) => (
            <feature.visual
              key={feature.id}
              id={feature.id}
              feature={feature}
            />
          ))}
          <button
            onClick={() => setFullScreenFeature(null)}
            className="back-to-site-btn shadow-lg fixed bottom-0 left-1/2 -translate-x-1/2 translate-y-[300%] opacity-0 bg-black text-white dark:bg-white dark:text-black px-4 py-2 z-10 rounded-full mb-4 "
          >
            Back to site
          </button>
          {/* Desktop Mode Start */}

          <div
            className="grid grid-cols-2 w-full gap-28 items-start flex-row relative max-[768px]:grid  
          max-[768px]:grid-cols-1 max-[768px]:gap-[calc(140px*0.8)] z-2
          "
          >
            <div className="w-full py-[50vh]">
              <ul>
                {featureData.map((feature) => (
                  <li key={feature.id}>
                    <FeatureTitle id={feature.id}>{feature.title}</FeatureTitle>
                  </li>
                ))}
              </ul>
            </div>
            <div className="max-[768px]:fixed max-[768px]:bottom-0 max-[768px]:left-0 max-[768px]:items-end max-[768px]:justify-end max-[768px]:p-5 md:sticky md:top-0  w-[calc(100%-10px)] h-full  md:h-screen flex md:items-center max-[768px]:transform-none">
              <div
                className="max-[768px]:absolute max-[768px]:origin-bottom-right max-[768px]:bg-transparent max-[768px]:scale-90 
                max-[768px]:w-[calc(510px*0.8)] max-[768px]:h-[calc(510px*0.8)] 
              md:relative md:w-full md:h-auto aspect-square bg-gray-100/10 rounded-2xl [&:has(>_.active-card)]:bg-transparent "
              >
                {featureData.map((feature) => (
                  <feature.card
                    key={feature.id}
                    id={feature.id}
                    feature={feature}
                  />
                ))}
              </div>
            </div>
          </div>
          {/* Desktop Mode End */}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

// <Feature
//   featureHeading={"Online Code Editor"}
//   featureDescription={
//     "Write, compile, and run code in real-time. No installations required."
//   }
//   featureImage={"/src/assets/testPic.png"}
//   button
// />
// <Feature
//   featureHeading={"Collaboration Tools"}
//   featureDescription={
//     "Work on projects with your team in real-time. Smooth collaboration, zero conflicts."
//   }
//   featureImage={"/src/assets/testPic.png"}
// />
// <Feature
//   featureHeading={"Instant Code Sharing"}
//   featureDescription={
//     "Share your code effortlessly. Code snippets are just a click away."
//   }
//   featureImage={"/src/assets/testPic.png"}
// />
// <Feature
//   featureHeading={"Multi-Language Support"}
//   featureDescription={
//     "Code in your preferred language. NexaCode supports a wide range of programming languages."
//   }
//   featureImage={"/src/assets/testPic.png"}
// />
