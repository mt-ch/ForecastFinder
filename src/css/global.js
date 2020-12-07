import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  user-select: none;
  outline: none;
}

html, body {
    width: 100vw;
  height: 100vh;
  position: relative;
  background-attachment: fixed;
  scroll-behavior: smooth;
  background-color: ${({ theme }) => theme.grey};
  color: ${({ theme }) => theme.black};
  &::-webkit-scrollbar {
    display: none;
  }
  overflow: hidden;
  text-rendering: optimizeLegibility;
  font-size: 100%;
  font-family: "Public Sans", Tahoma, Geneva, Verdana, sans-serif;

}

*, *::after, *::before {
  box-sizing: border-box;
}

h1{ font-size: clamp(7rem, 12vw, 12rem)}
h2{ font-size: clamp(2rem, 6vw, 6rem)}
h3{ font-size: clamp(1.5rem, 5vw, 5rem)}
p{ 
    font-size: clamp(.75rem, 2.25vw, 1.75rem);
    margin: 0;
};

a{
  text-decoration: none;
  color: ${({ theme }) => theme.black};
  cursor: pointer;
}

svg {
  flex-shrink: 0;
}

`;
