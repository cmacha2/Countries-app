import styled from "styled-components";

export const ContainerMenu = styled.div`
  padding: 0;
  margin: 0;
`;

export const Selectors = styled.select`
  width: 10rem;
  padding: 8px;
  background-color: ${({ theme }) => theme.bgc};
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  border-radius: 5px;
  border: none;
  box-shadow: 5px 5px 17px rgba(0, 0, 0, 0.2);
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("http://imgfz.com/i/6H5COJ7.png");
  background-position: right 10px top 50%;
  background-repeat: no-repeat;
  background-size: 10px;
  padding-right: 30px;
  &:focus,
  &:hove {
    outline: none;
    border: 1px solid #dddddd;
  }
  &:befor {
    border: none;
  }
`;

export const Options = styled.option`
background-color: ${({ theme }) => theme.bgc};
`
