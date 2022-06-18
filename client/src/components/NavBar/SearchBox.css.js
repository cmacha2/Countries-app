import styled from "styled-components";

export const WrapperSearchBox = styled.div`
  position: absolute;
  top: 1rem;
  left: 8rem;
`;

export const Search = styled.div`
  position: relative;
  width: ${(props) => (props.switch ? "300px" : "50px")};
  height: 48px;
  background: #fff;
  border-radius: 60px;
  transition: 0.5s;
  box-shadow: 0 0 0 3px #2b3743;
  overflow: hidden;
`;

export const IconLupa = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 55px;
  height: 50px;
  background: #fff;
  border-radius: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    border: 3px solid #2b3743;
    border-radius: 50%;
    transform: translate(-4px, -4px);
  }
  &::after {
    content: "";
    position: absolute;
    width: 3px;
    height: 12px;
    background: #2b3743;

    transform: translate(6px, 6px) rotate(315deg);
  }
`;
export const ContainerInput = styled.div`
  position: relative;
  width: 300px;
  height: 50px;
  left: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  font-size: 18px;
  padding: 10px 0;
`;

export const ClearInput = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 15px;
  width: 15px;
  right: 25%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    position: absolute;
    content: "";
    width: 1px;
    height: 15px;
    background: black;
    transform: rotate(45deg);
  }
  &::after {
    position: absolute;
    content: "";
    width: 1px;
    height: 15px;
    background: black;
    transform: rotate(315deg);
  }
`;
