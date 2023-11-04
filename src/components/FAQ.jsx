import { useState } from "react";

const FAQ = () => {
  const [faq, setFaq] = useState([
    {
      question: "How do I get started with NexaCode as a guest?",
      answer:
        "Click 'Try Our Text Editor' on the home page, and you'll be in the code editor instantly.",
      open: false,
    },
    {
      question: "Can I save my code without an account?",
      answer:
        "Yes, you can. However, for full access and saving, we recommend signing up.",
      open: false,
    },
    {
      question: "What languages are supported on NexaCode?",
      answer: "NexaCode supports a variety of languages, from Python to Java.",
      open: false,
    },
    {
      question: "Is my code private and secure on NexaCode?",
      answer:
        "Yes, your code is secure. We don't share or use your code for any purpose.",
      open: false,
    },
    {
      question: "Do you offer collaboration tools?",
      answer: "Yes, we do. Collaborate in real-time with your team.",
      open: false,
    },
  ]);

  const toggleFaq = (index) => {
    setFaq(
      faq.map((item, i) => {
        if (i === index) {
          item.open = !item.open;
        } else {
          item.open = false;
        }

        return item;
      })
    );
  };

  return (
    <section
      id="FAQS"
      className="dark:bg-darkBgColor bg-lightBgColor h-screen snap-start pt-14 "
    >
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl flex flex-col justify-evenly h-full items-center">
        <div className="max-w-2xl text-center">
          <h2 className="text-3xl font-bold leading-tight dark:text-darkPrimaryColor text-lightPrimaryColor sm:text-4xl lg:text-5xl font-heading ">
            FAQS
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-lightTextColor dark:text-darkTextColor">
            Frequently Asked Questions about NexaCode
          </p>
        </div>

        <div className="max-w-3xl mt-8 space-y-4 md:mt-16 w-full">
          {faq.map((item, index) => (
            <div
              key={index}
              className=" px-4 py-2 transition-all duration-200 bg-lightBgSecondaryColor dark:bg-darkBgSecondaryColor  cursor-pointer  rounded-md"
            >
              <button
                type="button"
                className="flex items-center justify-between w-full px-2 py-2 sm:p-3 "
                onClick={() => toggleFaq(index)}
                aria-expanded={item.open}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="flex text-2xl font-bold text-lightTextColor dark:text-darkTextColor tracking-wide ">
                  {" "}
                  {item.question}{" "}
                </span>

                <svg
                  className={`w-6 h-6 dark:text-darkAccentColor text-lightAccentColor ${
                    item.open ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`${
                  item.open ? "block" : "hidden"
                } px-2 pb-5 sm:px-2.5 sm:pb-6  `}
              >
                <p
                  className="text-lightTextColor dark:text-darkTextColor font-body text-base font-normal"
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                ></p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 textbase mt-9">
          Didn’t find the answer you are looking for?{" "}
          <a
            href="#"
            title=""
            className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
          >
            Contact our support
          </a>
        </p>
      </div>
    </section>
  );
};

export default FAQ;
