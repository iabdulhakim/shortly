const Search = () => {
  return <div className="container ">
     <form className="px-[65px] py-12 rounded-[11px] flex">
        <input type="text" placeholder="Shorten a link here..." className="w-full mr-6 rounded-[10px] border-none pl-8 py-3.5" />
        <button className="text-white bg-[var(--aqua-color)] min-w-[190px] px-10 py-4 rounded-[10px] hover:opacity-60 text-[20px] font-bold">Shorten It!</button>
     </form>
  </div>;
};

export default Search;