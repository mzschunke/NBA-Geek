import Link from "next/link";
import styled from "styled-components";

const NavContainer = styled.nav`
  position: fixed;
  border: 1px solid black;
  bottom: 0%;
  width: 100%;
  background: rgb(182, 211, 214);
  background: linear-gradient(
    90deg,
    rgba(182, 211, 214, 1) 0%,
    rgba(39, 100, 176, 1) 100%,
    rgba(29, 162, 178, 1) 100%,
    rgba(39, 100, 176, 1) 100%
  );
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export default function NavBar() {
  return (
    <NavContainer>
      <NavList>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/teams">Teams</Link>
        </li>
        <li>
          <Link href="/players">Players</Link>
        </li>
        <li>
          <Link href="/stats">Stats</Link>
        </li>
      </NavList>
    </NavContainer>
  );
}
