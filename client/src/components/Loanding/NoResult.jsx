import React from "react";
import styled from "styled-components";

export const NoResults = () => {
  return (
    <ContainerNoResults>
      <div className="wavy">
        <span>N</span>
        <span>O</span>
        <span> </span>
        <span>R</span>
        <span>E</span>
        <span>S</span>
        <span>U</span>
        <span>L</span>
        <span>T</span>
        <span>S</span>
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </div>
    </ContainerNoResults>
  );
};

const ContainerNoResults = styled.div`
  * {
    margin: 10px;
    padding: 0;
    font-family: consolas;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  .wavy {
    position: relative;
    -webkit-box-reflect: below -12px linear-gradient(transparent, rgba(0, 0, 0, 0.2));
  }
  .wavy span {
    position: relative;
    display: inline-block;
    color: ${({ theme }) => theme.text};
    font-size: 2em;
    text-transform: uppercase;
    animation: animate 1s ease-in-out infinite;
    animation-delay: calc(0.1s * var(--i));
  }
  @keyframes animate {
    0% {
      transform: translateY(0px);
    }
    20% {
      transform: translateY(-20px);
    }
    40%,
    100% {
      transform: translateY(0px);
    }
  }
`;
