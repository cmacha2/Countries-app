import React from "react";
import styled from "styled-components";

export const Loading = () => {
  return (
    <ContainerLoading>
      <div className="wavy">
        <span>L</span>
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </div>
    </ContainerLoading>
  );
};

const ContainerLoading = styled.div`
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