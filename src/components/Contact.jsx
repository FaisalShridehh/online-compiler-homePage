const Contact = () => {
  return (
    <section
      id="Contact"
      className=" dark:bg-darkBgColor bg-lightBgColor snap-start w-full h-screen flex justify-center items-center"
    >
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center dark:text-darkPrimaryColor text-lightPrimaryColor font-heading">
          Connect with Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-lightTextColor dark:text-darkTextColor sm:text-xl font-body">
          We&apos;re here to answer your questions and provide support.
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-lightTextColor dark:text-darkTextColor"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm  border border-[#1A7575] text-lightTextColor dark:text-darkTextColor text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-darkBgSecondaryColor dark:border-[#8AE5E5] dark:placeholder-gray-400 d dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              required
            ></input>
          </div>
          <div>
            <label
              htmlFor="Name"
              className="block mb-2 text-sm font-medium text-lightTextColor dark:text-darkTextColor"
            >
              Name
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-lightTextColor dark:text-darkTextColor bg-gray-50 rounded-lg border border-[#1A7575] shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-darkBgSecondaryColor dark:border-[#8AE5E5] dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              required
            ></input>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-lightTextColor dark:text-darkTextColor"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-lightTextColor dark:text-darkTextColor bg-gray-50 rounded-lg shadow-sm border border-[#1A7575] focus:ring-primary-500 focus:border-primary-500 dark:bg-darkBgSecondaryColor dark:border-[#8AE5E5] dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500 max-h-[200px] h-[100px] min-h-[100px]"
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center dark:text-darkTextColor text-lightTextColor rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 dark:bg-darkBgSecondaryColor bg-lightBgSecondaryColor dark:hover:bg-lightBgColor dark:hover:text-lightTextColor  hover:bg-darkBgColor hover:text-darkTextColor  transition"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
