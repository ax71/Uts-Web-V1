const NavLink = ({ label, href }: { label: string; href: string }) => (
  <a href={href} className="hover:text-indigo-400 transition">
    {label}
  </a>
);

export default NavLink;
