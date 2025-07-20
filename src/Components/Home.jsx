import desktopHeaderImage from "../../public/images/bg-header-desktop.svg";
import mobileHeaderImage from "../../public/images/bg-header-mobile.svg";
import JobCard from "./JobCard";
import SearchBar from "./SearchBar";
import { useState } from "react";
import jobs from "../libs/jobs"; // Assuming jobs data is imported from a JSON file
export default function Home() {
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  const handleTagChange = (tags) => {
    if (tags.length === 0) {
      setFilteredJobs(jobs);
    } else {
      setFilteredJobs(
        jobs.filter((job) =>
          tags.every((tag) =>
            [
              job.role,
              job.level,
              ...(job.languages || []),
              ...(job.tools || []),
            ]
              .map((t) => t.toLowerCase())
              .includes(tag.toLowerCase())
          )
        )
      );
    }
  };
  return (
    <>
      <div className="w-full relative">
        <div className="absolute top-0 left-0 z-50 lg:h-30 flex items-center justify-center w-full bg-secondry shadow-md">
          <img
            src={desktopHeaderImage}
            className="h-30 lg:block hidden object-cover w-full"
            alt="Header background Desktop"
          />
          <img
            src={mobileHeaderImage}
            className="h-20 block lg:hidden object-cover w-full"
            alt="Header background"
          />
          <div className="absolute flex flex-col items-center justify-center w-2/3 mx-auto mt-28 p-5">
            <SearchBar onTagChange={handleTagChange} />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-2/3 mx-auto mt-52 p-5  ">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => <JobCard jobs={job} key={job.id} />)
        ) : (
          <p className="text-red-500 animate-bounce">No jobs found</p>
        )}
      </div>
    </>
  );
}
