import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Public+Sans&display=swap");

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

h1{ font-size: clamp(7rem, 15vw, 12rem)}
/* h2{ font-size:  clamp(1rem, 10vw, 13rem);}
h3{ font-size:  clamp(1rem, 5vw, 4rem); font-weight: 500; color: black;} 
h4{ font-size:  clamp(1.5rem, 3vw, 3rem); font-weight: 500; color: black;} 
h5{ font-size:  clamp(1.5rem, 4vw, 4rem); font-weight: 500} */
p{ 
    font-size: clamp(1rem, 1.75vw, 1.75rem);
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
