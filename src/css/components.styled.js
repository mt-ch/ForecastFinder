import styled from "styled-components";

export const StyledCircle = styled.div`
  position: absolute;
  top: 0;
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  margin: auto;
  z-index: -2;
  content: "";
  width: 85vw;
  height: 85vw;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  box-shadow: 0 0 0 20px ${({ color }) => color}80,
    0 0 0 40px ${({ color }) => color}40, 0 0 0 60px ${({ color }) => color}20,
    0 0 0 80px ${({ color }) => color}10, 0 0 0 100px ${({ color }) => color}00,
    0 0 40px 100px ${({ color }) => color}10;
  filter: blur(0.2em);
  opacity: 1;
  animation: sunrise 1s infinite linear forwards, rays 1s 1s infinite linear;

  @media (min-width: 550px) {
    left: 0;
  }

  @media (min-width: 1000px) {
    bottom: -100vw;
  }

  @keyframes rays {
    0% {
      box-shadow: 0 0 0 0 ${({ color }) => color}80,
        0 0 0 20px ${({ color }) => color}80,
        0 0 0 40px ${({ color }) => color}40,
        0 0 0 60px ${({ color }) => color}20,
        0 0 0 80px ${({ color }) => color}10,
        0 0 40px 100px ${({ color }) => color}10;
    }
    100% {
      box-shadow: 0 0 0 20px ${({ color }) => color}80,
        0 0 0 40px ${({ color }) => color}40,
        0 0 0 60px ${({ color }) => color}20,
        0 0 0 80px ${({ color }) => color}10,
        0 0 0 100px ${({ color }) => color}00,
        0 0 40px 100px ${({ color }) => color}10;
    }
  }
`;

export const StyledLanding = styled.div`
  top: 0;
  width: 100%;
  height: 100%;
  padding: 6vh ${({ theme }) => theme.padding} 0 ${({ theme }) => theme.padding};

  .landing-search {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .underline {
      content: "";
      width: 100%;
      height: 2px;
      background-color: #040403;
    }

    .suggestions {
      display: flex;
      flex-wrap: wrap;
      padding-top: 2vh;

      .suggestion {
        padding: 0.5vh 1vh 0.5vh 1vh;
        margin: 0 1vh 1vh 0;
        border: 1px solid ${({ theme }) => theme.black};
        transition: all 0.2s ease;
        overflow: hidden;

        &:hover {
          background-color: ${({ theme }) => theme.black};
          color: ${({ theme }) => theme.white};
          transition: all 0.2s ease;
        }
      }
    }
  }

  .location-input {
    display: flex;
    border-radius: 5em;

    input,
    textarea {
      border: none;
      padding: 0;
      margin: 0;
      width: 100%;
      background: none;
      padding: 1vh 0 1vh 0;
    }
  }
`;

export const StyledWeatherMobile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  z-index: 10;
  padding: 9vh 0 9vh 0;
  height: 100%;
  width: 100%;

  .weather-header-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    /* width: 100vw; */

    .weather-main-info {
      border-radius: 1.8em;
      background-color: ${({ theme }) => theme.black};
      padding: 1.5em;
      color: ${({ theme }) => theme.white};
      .top {
        display: flex;
        justify-content: space-between;

        .city-header {
          padding-right: 7vw;
        }
      }

      .time {
        display: flex;
        justify-content: space-between;
        margin-top: 2vh;
      }
    }
  }

  .temp {
    font-size: clamp(14rem, 30vw, 30rem);
    text-align: center;
    /* margin-top: 3vh; */
  }

  .weather-bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledWeatherDesktop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  position: relative;
  z-index: 10;
  padding: 6vh 0 6vh 0;
  height: 100vh;
  width: 100%;

  .weather-header-d {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: start;
    z-index: 10;
    width: 100%;

    .weather-main-info {
      border-radius: 1.8em;
      background-color: ${({ theme }) => theme.black};
      padding: 1.5em;
      color: ${({ theme }) => theme.white};
      .top {
        display: flex;
        justify-content: space-between;

        .city-header {
          padding-right: 7vw;
        }
      }

      .time {
        display: flex;
        justify-content: space-between;
        margin-top: 4vh;
      }
    }
  }

  .bottom-info-d {
    width: 100%;

    .bottom-container {
      display: flex;
      justify-content: space-between;
      width: 100%;
      align-items: center;

      .temp-d {
        font-size: clamp(5rem, 15vw, 15rem);
      }
    }
  }
`;

export const StyledForecast = styled.div`
  display: flex;
  flex-direction: row;

  div.forecast {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 0 1.5vw 0 1.5vw;
    width: 100%;
    height: 100%;
    padding: 2.5vw;
    border: 1px #040403 solid;
    border-radius: 3em;

    p {
      padding-top: 5vh;
    }

    .icon {
      font-size: clamp(2rem, 3.5vw, 3.5rem);
    }
  }

  @media (min-width: 550px) {
    div.forecast {
      margin: 0 1.5vw 0 0;
      padding: 1.5vw;
    }
  }

  div.forecast:nth-child(1) {
    background-color: ${({ theme }) => theme.black};
    color: ${({ theme }) => theme.white};
  }
`;

export const StyledBackButton = styled.a`
  .arrow {
    transform: scaleX(-1);
    width: 1.75em;
    fill: #ececec;
  }

  @media (min-width: 550px) {
    .arrow {
      width: 2.5em;
    }
  }
`;

export const StyledDayTime = styled.div`
  /* background-color: ${({ theme }) => theme.black}; */
  /* color: ${({ theme }) => theme.white}; */
  /* border-radius: 2em;
  border: 1px solid black; */

  svg {
    fill: ${({ theme }) => theme.white};
  }
  .info-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 2vh;

    .info-item {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: start;

      p {
        margin-left: 1.5vw;
      }
    }
    div.info-item:nth-child(1) {
      margin-right: 4vw;
    }
  }

  @media (max-width: 550px) {
    .info-container {
      margin-top: 1vh;
    }
  }
`;
