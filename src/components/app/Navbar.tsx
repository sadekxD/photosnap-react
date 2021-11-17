import { useState } from "react";
import Link from "next/link";
import {
  NavLink,
  Container,
  Nav,
  Content,
  Divider,
  InviteLinkDesktop,
  InviteLinkMobile,
  Logo,
  MenuToggler,
  Overflow,
} from "./NavbarStyles";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  function toggleMenu(): void {
    setMenuOpen((prev) => !prev);
  }

  return (
    <>
      <Overflow className={`${menuOpen && "open"}`} />
      <Container>
        <Content>
          <Link href="/">
            <a style={{ height: 16 }}>
              <Logo src="/assets/shared/logo.svg" alt="Photosnap" />
            </a>
          </Link>
          <MenuToggler
            type="button"
            className={`${menuOpen && "open"}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
          </MenuToggler>
          <Nav className={`${menuOpen && "open"}`}>
            {["stories", "features", "pricing"].map((link) => (
              <Link key={link} href={`/${link}`} passHref>
                <NavLink>{link}</NavLink>
              </Link>
            ))}
            <Divider />
            <Link href="/" passHref>
              <InviteLinkMobile>Get an invite</InviteLinkMobile>
            </Link>
          </Nav>
          <Link href="/" passHref>
            <InviteLinkDesktop>Get an invite</InviteLinkDesktop>
          </Link>
        </Content>
      </Container>
    </>
  );
}
