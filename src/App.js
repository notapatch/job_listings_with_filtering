import FilterPanel from "./components/filterPanel";
import JobCard from "./components/jobCard";

function App() {
  const filterList = ["Frontend", "Senior", "HTML", "JavaScript"]

  return (
    <div className="App">
      <header className="h-156 bg-primary-200 bg-header-mobile sm:bg-header-desktop" />

      <div className="mx-6 mb-9">
        <FilterPanel filterList={filterList}/>
        <JobCard
          featured={true}
        />
        <JobCard
          featured={false}
        />
      </div>

    </div>
  );
}

export default App;
