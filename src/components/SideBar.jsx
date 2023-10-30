function SideBar () {
    return (
      <>
      <aside className="pt-20 ml-5 md:w-1/4 lg:w-1/5 bg-white shadow-sm">
        <ul className="w-fit cursor-pointer justify-center">
          <li className="text-black font-semibold text-sm hover:bg-amber-300 shadow-sm shadow-amber-300 mb-2">Overview</li>
          <li className="text-black font-semibold text-sm hover:bg-amber-300 shadow-sm shadow-amber-300 mb-2">Trading</li>
          <li className="text-black font-semibold text-sm hover:bg-amber-300 shadow-sm shadow-amber-300 mb-2">Signal</li>
          <li className="text-black font-semibold text-sm hover:bg-amber-300 shadow-sm shadow-amber-300 mb-2">Rewards Hub</li>
       </ul>
      </aside>
      </>
    );
}

export default SideBar;