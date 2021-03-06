import Filter from "./filter";

function FilterPanel({filterList, handleRemoveFilter, handleClearFilter}) {

  return(
    <div className="bg-white -mt-9 flex justify-between items-center rounded mx-6 shadow-md">
      <div className="m-5 flex flex-wrap content-start gap-4">
        {filterList.map((filter) =>
          <Filter key={filter} text={filter} handleRemoveFilter={handleRemoveFilter} />
        )}
      </div>

      <div
        className="m-6 text-sm font-bold text-neutral-600 hover:text-primary-200 hover:underline"
        onClick={handleClearFilter}
      >
        Clear
      </div>
    </div>
  )
}

export default FilterPanel