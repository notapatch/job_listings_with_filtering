import {classNames} from "../utils/ClassNames";
import BadgeFeatured from "./badgeFeatured";
import BadgeNew from "./badgeNew";

const JobCard = ({company, logo, knew, featured, position, jobFilterList, postedAt, contract, location, handleAddFilter}) => {

  return(
    <div className={
      classNames(
        "mt-10 bg-white p-6 rounded shadow-md flex flex-col justify-right lg:flex-row lg:justify-between",
        featured ? "border-l-4 border-primary-200" : ""
      )
    }
    >

      {/*section 1*/}
      <div>
        <img className="-mt-12 lg:mt-auto h-12 lg:h-22 w-12 lg:w-22 "
          src={logo}
          alt={`${company} company logo`}
        />
      </div>

      {/*section 2*/}
      <div className="lg:ml-8 lg:flex-1">
        <div className="mt-3 flex items-center">
          <h1 className="text-sm font-bold text-primary-200 items-center">
            {company}
          </h1>
          {featured ? <BadgeFeatured/> : null }
          {knew ? <BadgeNew/> : null }
        </div>
        <div className="mt-2 text-lg text-neutral-700 hover:text-primary-200 font-bold">
          {position}
        </div>
        <div className="mt-2 flex text-lg text-sm text-neutral-600 font-medium items-center">
          {postedAt}
          <span className="mx-2 h-1 w-1 bg-neutral-500 rounded-full"></span>
          {contract}
          <span className="mx-2 h-1 w-1 bg-neutral-500 rounded-full"></span>
          {location}
        </div>
        <hr className="mt-4 lg:hidden"/>
      </div>

      {/*section 3*/}
      <div className="lg:flex-1 lg:justify-end bg-white flex items-center rounded">
        <ul className="mt-5 flex flex-wrap content-start gap-4">
          {jobFilterList.map(filter =>
            <li key={filter} >
              <button
                className="p-2 self-center text-sm font-bold text-primary-200 hover:text-white bg-neutral-400 hover:bg-primary-200 rounded"
                onClick={() => handleAddFilter(filter)}
              >
                {filter}
              </button>
            </li>
          )}
        </ul>
      </div>

    </div>
  )
}

export default JobCard