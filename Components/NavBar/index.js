import Link from "next/link";
import styled from "styled-components";
import { AiFillDribbbleCircle, AiFillHome } from "react-icons/ai";
import { RiTeamFill, RiRhythmFill } from "react-icons/ri";

const NavContainer = styled.nav`
  position: fixed;
  border-top: 0.2px solid #cee0ed;
  bottom: 0%;
  height: 85px;
  width: 100%;
  background: rgb(39, 100, 176);
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  padding: 0;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const IconDescription = styled.p`
  font-size: 0.6rem;
  color: white;
  font-weight: 700;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default function NavBar() {
  return (
    <NavContainer>
      <NavList>
        <li>
          <StyledLink href="/">
            <IconContainer>
              <AiFillHome
                size="40px"
                color="#cee0ed"
                style={{
                  boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
                }}
              />
              <IconDescription>Home</IconDescription>
            </IconContainer>
          </StyledLink>
        </li>
        <li>
          <StyledLink href="/teams">
            <IconContainer>
              <AiFillDribbbleCircle
                size="40px"
                color="#cee0ed"
                style={{
                  boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
                }}
              />
              <IconDescription>Teams</IconDescription>
            </IconContainer>
          </StyledLink>
        </li>
        <li>
          <StyledLink href="/players">
            <IconContainer>
              <RiTeamFill
                size="40px"
                color="#cee0ed"
                style={{
                  boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
                }}
              />
            </IconContainer>
            <IconDescription>Players</IconDescription>
          </StyledLink>
        </li>
        <li>
          <StyledLink href="/stats">
            <IconContainer>
              <RiRhythmFill
                size="40px"
                color="#cee0ed"
                style={{
                  boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
                }}
              />
            </IconContainer>
            <IconDescription>Compare</IconDescription>
          </StyledLink>
        </li>
      </NavList>
    </NavContainer>
  );
}
