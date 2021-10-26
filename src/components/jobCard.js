import photosnap from "../images/photosnap.svg";
import {classNames} from "../utils/ClassNames";
import BadgeFeatured from "./badgeFeatured";

const JobCard = ({featured}) => {
  let featuredBadge
  if (featured) {
    featuredBadge = <BadgeFeatured/>
  }
  return(
    <div className={
      classNames(
        "mt-10 bg-white p-6 rounded shadow-md flex flex-col lg:flex-row lg:justify-between",
        featured ? "border-l-4 border-primary-200" : ""
      )
    }
    >
    <div>
      <img className="-mt-12 h-12 w-12" src={photosnap} alt="logo"/>
        <div className="mt-3 flex items-center">
          <h3 className="text-sm font-bold text-primary-200 items-center">
            Photosnap
          </h3>
          <span className="ml-4 inline-flex items-center px-2.5 py-1.5 rounded-full text-xs font-bold bg-primary-200 text-white">
            NEW!
          </span>
          { featuredBadge }
        </div>
        <div className="mt-2 text-lg text-neutral-700 hover:text-primary-200 font-bold">
          {"Senior Frontend Developer"}
        </div>
        <div className="mt-2 flex text-lg text-sm text-neutral-600 font-medium items-center">
          {"1d ago"}
          <span className="mx-2 h-1 w-1 bg-neutral-500 rounded-full"></span>
          {"Full Time"}
          <span className="mx-2 h-1 w-1 bg-neutral-500 rounded-full"></span>
          {"USA only"}
        </div>
        <hr className="mt-4 lg:hidden"/>
      </div>
      <div className="bg-white flex items-center rounded">
        <div className="mt-5 flex flex-wrap content-start gap-4">
          <div className="p-2 self-center text-sm font-bold text-primary-200 hover:text-white bg-neutral-400 hover:bg-primary-200 rounded">
            {"Frontend"}
          </div>

          <div className="p-2 self-center text-sm font-bold text-primary-200 hover:text-white bg-neutral-400 hover:bg-primary-200 rounded">
            {"Senior"}
          </div>

          <div className="p-2 self-center text-sm font-bold text-primary-200 hover:text-white bg-neutral-400 hover:bg-primary-200 rounded">
            {"HTML"}
          </div>

          <div className="p-2 self-center text-sm font-bold text-primary-200 hover:text-white bg-neutral-400 hover:bg-primary-200 rounded">
            {"CSS"}
          </div>

          <div className="p-2 self-center text-sm font-bold text-primary-200 hover:text-white bg-neutral-400 hover:bg-primary-200 rounded">
            {"JavaScript"}
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobCard