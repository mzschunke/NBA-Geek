import styled from "styled-components";
import Link from "next/link";

export const NavContainer = styled.nav`
  position: fixed;
  border-top: 0.2px solid #cee0ed;
  bottom: 0%;
  height: 85px;
  width: 100%;
  background: rgb(39, 100, 176);
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  padding: 0;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const IconDescription = styled.p`
  font-size: 0.6rem;
  color: white;
  font-weight: 700;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
