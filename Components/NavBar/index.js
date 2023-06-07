import { AiFillDribbbleCircle, AiFillHome } from "react-icons/ai";
import { RiTeamFill, RiRhythmFill } from "react-icons/ri";
import {
  NavContainer,
  NavList,
  IconContainer,
  IconDescription,
  StyledLink,
} from "./Styling";

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
