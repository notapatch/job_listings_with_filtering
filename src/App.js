import {useState} from "react";
import FilterPanel from "./components/filterPanel";
import JobCard from "./components/jobCard";
import { data } from "./data/data.js"

function App() {
  const [jobs] = useState(data);
  const [filterList, setFilterList] = useState([])

  function handleAddFilter(jobFilter) {
    setFilterList(oldFilterList => [...new Set([...oldFilterList, jobFilter])])
  }

  function handleRemoveFilter(jobFilter) {
    setFilterList(filterList.filter((item) => (item !== jobFilter)))
  }

  function handleClearFilter() {
    setFilterList([])
  }

  return (
    <div className="App">
      <header className="h-156 bg-primary-200 bg-header-mobile sm:bg-header-desktop" />

      <div className="mx-6 mb-9">
        <div className={!filterList.length ? "hidden" : "" }>
          <FilterPanel filterList={filterList} handleRemoveFilter={handleRemoveFilter} handleClearFilter={handleClearFilter}/>
        </div>

        {jobs.map((job) =>
          <JobCard
            id={job.id}
            company={job.company}
            logo={job.logo}
            knew={job.new}
            featured={true}
            position={job.position}
            jobFilterList={[job.role, job.level, ...job.languages]}
            postedAt={job.postedAt}
            contract={job.contract}
            location={job.location}
            handleAddFilter={handleAddFilter}
          />
        )}
      </div>

    </div>
  );
}

export default App;
