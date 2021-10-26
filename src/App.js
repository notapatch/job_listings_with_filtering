import FilterPanel from "./components/filterPanel";
import JobCard from "./components/jobCard";

function App() {
  const filterList = ["Frontend", "Senior", "HTML", "JavaScript"]
  const jobFilterList = ["Frontend", "Junior", "HTML", "JavaScript"]

  return (
    <div className="App">
      <header className="h-156 bg-primary-200 bg-header-mobile sm:bg-header-desktop" />

      <div className="mx-6 mb-9">
        <FilterPanel filterList={filterList}/>

        <JobCard
          company="FaceIt"
          logo="/images/photosnap.svg"
          knew={true}
          featured={true}
          position="Developer"
          jobFilterList={jobFilterList}
          postedAt="1d ago"
          contract="Full Time"
          location="Remote"
        />
        <JobCard
          company="Manage"
          logo="/images/manage.svg"
          knew={true}
          featured={false}
          position="FullStack"
          jobFilterList={jobFilterList}
          postedAt="2w ago"
          contract="Contract"
          location="UK Only"
        />
        <JobCard
          company="Insure"
          logo="/images/account.svg"
          knew={false}
          featured={true}
          position="Junior"
          jobFilterList={jobFilterList}
          postedAt="3w ago"
          contract="Full Time"
          location="USA Only"
        />
        <JobCard
          company="MyHome"
          logo="/images/myhome.svg"
          knew={false}
          featured={false}
          position="Senior"
          jobFilterList={jobFilterList}
          postedAt="4w ago"
          contract="Part Time"
          location="Worldwide"
        />
      </div>

    </div>
  );
}

export default App;
