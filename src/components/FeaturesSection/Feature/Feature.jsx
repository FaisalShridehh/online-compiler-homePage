export default function Feature({
  featureHeading,
  featureDescription,
  featureImage,
  index,
  currentFeature,
  button,
}) {
  return (
    <div
      className={`snap-start box-border flex basis-auto shrink-0 min-h-0 min-w-0 items-center flex-col 3x1 group group-last:mb-0 md:h-screen ${
        index === currentFeature ? "" : "hidden"
      }`}
    >
      <div className="ep0 mid:h-screen flex flex-col flex-grow shrink gap-1 self-stretch  items-center justify-center">
        <div className="image min-[480px]:w-[70%] md:hidden h-full p-4 flex items-stretch justify-end ">
          <img
            className=""
            src={featureImage}
            alt="Error !, The image not found !"
          />
        </div>
        <div className="ep0 flex flex-col flex-grow flex-shrink gap-1 pb-32 self-stretch">
          <div className="851 flex flex-col grow-0 shrink-0 self-stretch">
            <h3 className="text-xl md:text-3xl mb-2 font-medium leading-relaxed dark:text-white tracking-widest">
              {featureHeading}
            </h3>
            <p className="text-sm md:text-base font-light leading-relaxed mt-0 mb-4 dark:text-white inline break-words">
              {featureDescription}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// <div
//   className={
//     " h-screen  snap-start snap-always"
//   }
// >
//   <div className={"flex flex-col md:flex-row items-center justify-center h-screen"}>
//     <div className="flex-[8] md:flex-[6]">
//       <img
//         className="relative w-full mx-auto  px-4 mr-auto ml-auto"
//         src={featureImage}
//         alt="Error !, The image not found !"
//       />
//     </div>
//     <div className="flex-[4] md:flex-[6]">
//       <h3 className="text-4xl mb-2 font-semibold leading-normal dark:text-white tracking-widest">
//         {featureHeading}
//       </h3>
//       <p className="text-lg font-light leading-relaxed mt-0 mb-4 dark:text-white">
//         {featureDescription}
//       </p>
//       {button ? (
//         <div className="btn-container flex flex-wrap justify-around w-[150px]">
//           <div
//             className="btn h-[40px] mt-2  relative w-[140px] group before:absolute before:left-1/2 before:-translate-x-[50%] before:-bottom-[5px] before:h-[5px] before:w-[20px] before:bg-[rgb(8,107,183)] before:rounded-[10px] before:duration-500 before:delay-0 hover:before:bottom-0 hover:before:h-1/2 hover:before:w-[80%] hover:before:rounded-[30px] hover:before:delay-500 after:absolute
//             after:left-1/2 after:-translate-x-[50%] after:-top-[5px] after:h-[5px] after:w-[20px] after:bg-[rgb(7,95,189)] after:rounded-[10px]
//             after:duration-500 after:delay-0
//             hover:after:top-0 hover:after:h-1/2 hover:after:width-[80%] hover:after:rounded-[30px] hover:after:delay-500
//             dark:[&:nth-child(1)]:before:bg-[#2bd2ff] dark:[&:nth-child(1)]:before:shadow-[0_0_5px_#2bd2ff_,_0_0_10px_#2bd2ff_,_0_0_20px_#2bd2ff_,_0_0_40px_#2bd2ff]
//             dark:[&:nth-child(1)]:after:bg-[#2bd2ff] dark:[&:nth-child(1)]:after:shadow-[0_0_5px_#2bd2ff_,_0_0_10px_#2bd2ff_,_0_0_20px_#2bd2ff_,_0_0_40px_#2bd2ff]
//              [&:nth-child(1)]:before:bg-[#FF675E] [&:nth-child(1)]:before:shadow-[0_0_5px_#FF675E_,_0_0_15px_#FF675E_,_0_0_30px_#FF675E_,_0_0_60px_#FF675E]
//             [&:nth-child(1)]:after:bg-[#FF675E] [&:nth-child(1)]:after:shadow-[0_0_5px_#FF675E_,_0_0_15px_#FF675E_,_0_0_30px_#FF675E_,_0_0_60px_#FF675E]
//            "
//           >
//             <a
//               href="#"
//               className={`flex items-center bg-[rgba(255,255,255,0.0)] dark:bg-[rgba(255,255,255,0.05)] border-b border-t dark:border-b-[rgba(255,255,255,0.1)] border-b-[#FF675E]/30 dark:border-t-[rgba(255,255,255,0.1)] border-t-[#FF675E]/30 rounded-[30px] shadow-[0_15px_35px_rgba(255,255,255,0.2)] text-lightTextColor dark:text-darkTextColor text-base font-bold absolute left-0 top-0 w-full h-full justify-center tracking-[1px] no-underline overflow-hidden backdrop-filter backdrop-blur-lg z-[1] duration-500 group-hover:tracking-[2px] before:absolute before:top-0 before:left-0 before:w-1/2 before:h-full before:bg-gradient-to-l before:from-[rgba(0,0,0,0.05)] before:to-transparent dark:before:from-[rgba(255,255,255,0.15)] dark:before:to-transparent before:skew-x-[45deg] before:translate-x-0 before:duration-500 group-hover:before:skew-x-[45deg] before:group-hover:translate-x-[200%] dark:group-active:text-black group-active:text-white`}
//             >
//               Try it now
//             </a>
//           </div>
//         </div>
//       ) : (
//         <></>
//       )}
//     </div>
//   </div>
// </div>

//h- md:w-4/12
