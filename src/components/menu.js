import React from "react";
import { bool, func } from "prop-types";
import { useEffect } from "react";
import styled from "styled-components";

const StyledMenu = styled.div`
  position: absolute;
  top: 0;
  right: 0; 
  background-color: black;
  border-radius: 1.8em;
  border: 1px solid black;
  z-index: -1;
  color: #fff;
  /* width: 350px;
  height: 200px; */
  z-index: 2;
  /* transform: ${({ open }) => (open ? "scale(1)" : "scale(0)")}; */
  width: ${({ open }) => (open ? "350px" : "100%")};
  height: ${({ open }) => (open ? "200px" : "100%")};
  transition: width 0.3s ease-in-out, height 0.3s ease-in-out, opacity 0.3s ease-in-out;
`;

const Menu = ({ open }) => {
  useEffect(() => {
    // No scroll when open
    if (open) {
      document.body.style.overflow = "hidden";
    }
    // Restore scroll on close
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);
  return (
    <StyledMenu open={open}>
      <p>Test</p>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
