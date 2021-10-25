import FilterPanel from "./components/filterPanel";

function App() {
  return (
    <div className="App">
      <header className="h-156 bg-primary-200 bg-header-mobile sm:bg-header-desktop" />

      <div className="mx-6 mb-9">
        <FilterPanel/>
      </div>

    </div>
  );
}

export default App;
