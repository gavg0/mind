const navbar = () => {
  return(
<nav className="flex fixed z-50 fixed top-0 items-center justify-between flex-wrap bg-white dark:bg-blue-900 bg-opacity-70  dark:bg-opacity-60 backdrop-filter backdrop-blur-md w-screen p-6">
    <div className="flex items-center flex-shrink-0 text-white mr-6">
      <a href="index.html" className="font-semibold text-xl text-black dark:text-white tracking-tight">Mindly</a>
    </div>
    <div className="block lg:hidden">
      <button className="flex items-center px-3 py-2 border rounded text-teal-200 dark:border-teal-400 hover:text-white hover:border-white" id="menu-button">
        <svg className="fill-black dark:fill-white h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div className="w-full hidden lg:block lg:flex-grow lg:items-center lg:w-auto">
      <div className="text-sm lg:flex-grow lg:text-right">
        <a href="aboutUs.html" className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 dark:text-white hover:text-gray-900 dark:hover:text-gray-100 mr-4">
          Über uns
        </a>
        <a href="aboutUs.html" className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 dark:text-white hover:text-gray-900 dark:hover:text-gray-100 mr-4">
            Mehr erfahren
        </a>
        <a href="article.html" className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 dark:text-white hover:text-gray-900 dark:hover:text-gray-100 mr-4">
          Artikel finden/erstellen
        </a>
        <a href="404.html" className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 dark:text-white hover:text-gray-900 dark:hover:text-gray-100">
          Anmelden
        </a>
      </div>
    </div>
  </nav> 
  )
}

export default navbar;