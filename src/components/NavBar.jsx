function NavBar() {
  return (
      <>
        <nav className="bg-gray-500 fixed h-16 w-full flex justify-between items-center px-3">
            <h1 className="text-red-600 text-3xl font-bold">fabXchange</h1>
            <div className="flex items-center gap-10">
                <a 
                  href="." 
                  className="text-white text-lg font-semibold hover:text-red-600">
                  Home
                </a>
                <a
                  href="."
                  className="text-white text-lg font-semibold hover:text-red-500">
                  About
                </a>
                <a 
                  href="." 
                  className="text-white text-lg font-semibold hover:text-red-500">
                  Markets
                </a>
                <a
                  href="." 
                  className="text-white text-lg font-semibold hover:text-red-500">
                  Contact
                </a>
            </div>
        </nav>   
      </>
  );
}

export default NavBar;