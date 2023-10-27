function SideBar () {
    return (
        <>
          <aside className="pt-20 ml-5 w-20 Sidebar with multi-level dropdown example">
            <h2 className="text-black font-semibold hover:text-red-600">Dashboard</h2>
            <ul>
              <li className="text-black font-semibold hover:bg-red-500">Menu</li>
              <li className="text-black font-semibold hover:bg-red-500">User</li>
              <li className="text-black font-semibold hover:bg-red-500">Posts</li>
            </ul>
           
           </aside>
        </>
    );
}

export default SideBar;