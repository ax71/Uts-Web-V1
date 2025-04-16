import Logo from "../atoms/Logo";
import NavMenu from "../molecules/NavMenu";
import AuthActions from "../molecules/AuthActions";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-10 py-6 z-20 bg-gradient-to-b from-black/60 to-transparent text-white backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <Logo />
      </div>
      <NavMenu />
      <AuthActions />
    </nav>
  );
};

export default Navbar;
