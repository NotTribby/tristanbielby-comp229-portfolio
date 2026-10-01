import { Link, NavLink } from "react-router-dom";

// List of pages shown in the navbar (path = URL, label = text shown)
const navigationLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/education", label: "Education" },
  { path: "/services", label: "Services" },
  { path: "/contact", label: "Contact" },
];

// Main navigation bar, shown at the top of every page
function Navbar() {
  return (
    <header className="navbar">
      {/* Custom logo: hexagon with initials, links back to Home */}
      <Link to="/" className="logo" aria-label="Go to home page">
        <svg width="48" height="48" viewBox="0 0 100 100">
          <polygon points="50,5 93,28 93,72 50,95 7,72 7,28" fill="#2ea043" />
          <text x="50" y="62" textAnchor="middle" fontSize="34"
                fontWeight="bold" fill="#ffffff" fontFamily="monospace">
            TB
          </text>
        </svg>
      </Link>

      {/* Build one link per page from the list above */}
      <nav>
        {navigationLinks.map((link) => (
          <NavLink key={link.path} to={link.path}>
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;