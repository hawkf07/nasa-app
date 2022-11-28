interface NavbarType {
  name: string;
}

export const Navbar = () => {
  return (
    <nav className="container w-full  justify-around items-center flex  ">
      <header>
        <a href="/">LOGO</a>
      </header>
      <ul className="mobile:hidden flex justify-around items-center mobile:w-2/5 w-1/2">
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className="mobile:text-2xl text-3xl mobile:block hidden ">
        <button>=</button>
      </div>
    </nav>
  );
};
