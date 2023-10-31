function SideBar () {
    return (
      <>
      <aside className="pt-20 ml-5 md:w-1/4 lg:w-1/5 bg-white rounded-lg shadow-lg">
        <ul className="cursor-pointer">
          <li className="text-black font-semibold text-sm hover:bg-amber-300 hover:text-white p-2 rounded-md mb-2 transition duration-300">Trading</li>
          <li className="text-black font-semibold text-sm hover:bg-amber-300 hover:text-white p-2 rounded-md mb-2 transition duration-300">Signals</li>
          <li className="text-black font-semibold text-sm hover:bg-amber-300 hover:text-white p-2 rounded-md mb-2 transition duration-300">Risk Control</li>
          <li className="text-black font-semibold text-sm hover:bg-amber-300 hover:text-white p-2 rounded-md mb-2 transition duration-300">Rewards Hub</li>
       </ul>
      </aside>
      </>
    );
}

export default SideBar;