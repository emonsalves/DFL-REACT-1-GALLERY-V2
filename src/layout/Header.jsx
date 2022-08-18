function Header({titulo}) {
  return (
    <header>
      <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="container flex  justify-between items-center mx-auto">
          <a href="a" className="flex items-center">
            <img
              src="https://i.pinimg.com/originals/ca/5b/a7/ca5ba7d121989a03a9e22518a3ccaab1.png"
              className="mr-3"
              alt="Logo Digimon"
              width= "150px"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
          </a>
          <div className="flex md:order-2"></div>
          <div
            className="justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <h1 className="text-white sm:text-3xl text-center font-mono pl-2">
              {titulo}
            </h1>

          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
