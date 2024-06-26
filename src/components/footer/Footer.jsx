import React from "react";
const Footer = () => {
  const links = [
    {
      id: 1,
      title: "Liens",
      column: "col-lg-2 col-md-3 col-sm-6 mb-30",
      items: [
        { label: "Accueil", href: "/" },
        { label: "A propos", href: "/" },
        { label: "Références", href: "#" },
      ],
    },
    {
      id: 2,
      title: " ",
      column: "col-lg-3 col-md-4 col-sm-6 mb-30",
      items: [
        { label: "Services", href: "/service-details" },
        { label: "Projets", href: "/service-details" },
        { label: "Contact", href: "/service-details" },
      ],
    },
  ];

 

  return (
    <>
      {links.map((link) => (
        <div className={link.column} key={link.id}>
          <h5 className="footer-title text-white fw-500">{link.title}</h5>
          <ul className="footer-nav-link style-none">
            {link.items.map((item, i) => (
              <li key={i}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="col-xl-3 col-lg-4 col-md-5 mb-30">
        <h5 className="footer-title text-white fw-500">Adresse</h5>
        <p className="text-white opacity-75 mb-35">
          Douar Jlidate Khat azakane <br />
          Safi.
        </p>
        
      </div>
    </>
  );
};

export default Footer;
