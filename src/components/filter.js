function Filter({text, handleRemoveFilter}) {
  return <div className="flex h-8 items-stretch bg-neutral-400 rounded-l">
      <div
        key={text}
        className="pl-2 mr-2 self-center text-primary-200"
      >
        {text}
      </div>
      <div
        onClick={() => handleRemoveFilter(text)}
        className="bg-primary-200 hover:bg-neutral-700 bg-icon-remove w-8 bg-no-repeat bg-center rounded-r"
      >
      </div>
    </div>;
}

export default Filter