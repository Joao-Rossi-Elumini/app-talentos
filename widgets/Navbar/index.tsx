import styles from "./navbar.module.css";

interface NavLink {
  label: string;
  href: string;
}

interface NavbarProps {
  ancoras: NavLink[];
}

export default function Navbar({ ancoras }: NavbarProps) {
  return (
      <nav className={styles.navBar}>
        {ancoras.map((a,index) => {
          return (
              <a key={index} href={a.href}>{a.label}</a>
          );
        })}
      </nav>
  );
}
