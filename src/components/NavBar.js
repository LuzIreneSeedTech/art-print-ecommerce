import Link from "./Link";

function NavBar({ navigate }) {
  const links = [
    {
      navLinks: [
        { pathLabel: "FAQs", path: "/faq", orientation: "left" },
        { pathLabel: "About", path: "/about", orientation: "left" },
        { pathLabel: "Shop", path: "/shop", orientation: "left" },
      ],
    },
    {
      navLinks: [{ pathLabel: "artplic", path: "/", orientation: "center" }],
    },
    {
      navLinks: [{ pathLabel: "Cart", path: "/cart", orientation: "right" }],
    },
  ];

  const renderedLinks = links.map((orientation, index) => {
    return (
      <div key={index}>
        {orientation.navLinks.map((navLink) => {
          return (
            <Link
              key={navLink.pathLabel}
              orientation={navLink.orientation}
              to={navLink.path}
              navigate={navigate}
            >
              {navLink.pathLabel}
            </Link>
          );
        })}
      </div>
    );
  });

  return <div className="navbar">{renderedLinks}</div>;
}

export default NavBar;
