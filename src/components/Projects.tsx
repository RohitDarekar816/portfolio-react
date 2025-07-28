import "../index.css";

function Projects() {
  return (
    <>
      <div className="px-4 md:ml-24">
        <div className="flex flex-col md:flex-row w-full justify-start items-center md:items-center">
          <div className="text-2xl text-white fira-code mt-10 w-full">
            <div className="flex flex-col md:flex-row items-center">
              <h1 className="text-[#C778DD] font-bold mr-1">#</h1>
              <h1 className="font-semibold">projects</h1>
              <p className="hidden md:block ml-8 text-[#C778DD]">------------------------------------</p>
              <p className="text-white md:ml-8 mt-2 md:mt-0">View all</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
