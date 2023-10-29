function NavBar() {
  return (
      <>
        <nav className="bg-black fixed h-16 w-full flex justify-between items-center px-3">
            <h1 className="text-3xl font-bold text-amber-500">fabXchange</h1>
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