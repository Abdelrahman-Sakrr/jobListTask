export default function JobCard({ jobs }) {
  return (
    <div
      className={`bg-white w-full  rounded-lg font-spartan shadow-2xl flex flex-col lg:flex-row  justify-between items-center p-6 mb-6 relative
        ${jobs.new ? "border-l-4 border-secondry" : ""}`}
    >
      <div className="flex items-center w-full lg:w-auto gap-4 lg:gap-0">
        <img
          src={jobs.logo}
          alt={jobs.company}
          className="w-12 h-12 absolute -top-6 left-6 lg:static lg:w-16 lg:h-16 lg:mr-6 mb-4 lg:mb-0"
        />
        <div className="flex-1 flex flex-col items-start">
          <div className="flex flex-wrap gap-5 lg:gap-0 items-center mb-2">
            <span className="text-sm font-bold text-secondry">
              {jobs.company}
            </span>
            <div className="flex items-center lg:ml-2 gap-2">
              {jobs.new && (
                <span className="bg-secondry m font-spartan font-bold text-white px-2 py-1 rounded-full text-xs">
                  New!
                </span>
              )}
              {jobs.featured && (
                <span className="bg-alternative font-spartan font-bold text-white px-2 py-1 rounded-full text-xs">
                  Featured
                </span>
              )}
            </div>
          </div>
          <span className="lg:text-lg text-base font-semibold text-gray-900">
            {jobs.position}
          </span>
          <div className="flex items-center">
            <span className="text-xs text-gray-500 my-2">{jobs.postedAt}</span>
            <span className="text-xs before:content-['•'] before:mx-2 text-gray-500 my-2">
              {jobs.contract}
            </span>
            <span className="text-xs before:content-['•'] before:mx-2 text-gray-500 my-2">
              {jobs.location}
            </span>
          </div>
        </div>
      </div>
      <hr className="w-full border-t border-black my-4 block lg:hidden" />
      <div className="flex flex-wrap gap-2 mt-2">
        {jobs.languages.map((lang, idx) => (
          <span
            key={idx}
            className="bg-primary cursor-pointer hover:bg-secondry hover:text-white transition-all duration-300 font-spartan font-bold text-secondry px-2 py-1 rounded text-xs"
          >
            {lang}
          </span>
        ))}
      </div>
    </div>
  );
}
