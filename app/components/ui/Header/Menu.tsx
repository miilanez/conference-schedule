import { Link } from "react-scroll";

interface MenuProps {
  containerStyles?: string;
  menuStyles?: string;
  onLinkClick?: () => void;
}

const links = [
  { name: "Sobre", target: "sobre", offset: "-80" },
  { name: "Palestrantes", target: "palestrantes", offset: "-80" },
  { name: "Calendário", target: "calendario", offset: "-80" },
  { name: "Preços", target: "precos", offset: "-80" },
  { name: "Contato", target: "contato", offset: "0" },
];

const Menu: React.FC<MenuProps> = ({ containerStyles, menuStyles, onLinkClick }) => {
  return (
    <div id="menu" className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            activeClass="active"
            key={index}
            to={link.target}
            spy={true}
            smooth={true}
            duration={500}
            rel="noopener noreferrer"
            onClick={onLinkClick}
            className={`${menuStyles}`}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Menu;
