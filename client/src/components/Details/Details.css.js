import styled from "styled-components";

export const WrapperDetails = styled.div`
  height: 100vh;
  background: ${({theme})=> theme.back};
`;

export const ContainerDetails = styled.div`
  padding: 2rem;
  margin: 0;
  color: ${({ theme }) => theme.text};
  font-family: "Poppins", sans-serif;
  font-size: 1.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2.5rem;
`;
export const StyledCard = styled.div`
  width: 430px;
  height: 550px;
  background-color: ${({ theme }) => theme.bgc};
  margin: 20px 0 20px 4rem;
  border-radius: 20px;
  box-shadow: 5px 15px 25px 15px rgba(0, 0, 0, 0.3);
  transition: 0.5s;
`;

export const CircleContainer = styled.div`
  clip-path: circle(230px at center 0);
  text-align: center;
  & > img {
    width: 27rem;
    height: 15.7rem;
    border-radius: 20px;
  }
`;

export const ContainerInformation = styled.div`
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const BackButton = styled.div`
  background: linear-gradient(90deg, #ff8a00, #e52e71);
  text-shadow: none;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  border-color: white;
  font-style: normal;
  font-weight: 700;
  font-size: 0.5rem;
  color: #7a7a8c;
  text-transform: uppercase;
  font-size: 0.66rem;
  border: 3px solid #28242f;
  border-radius: 2rem;
  padding: 0.1rem 0.85rem 0.25rem;
  position: relative;
  right: 60rem;
  top: -16.45rem;

  &:hover {
    background-clip: text;
    border-color: ${({ theme }) => theme.text};
  }
`;

export const ContainerActivity = styled.div`
  width: 200px;
  height: 160px;
  padding: 1rem;
  background-color: ${({ theme }) => theme.bgc};
  margin: 20px;
  border-radius: 20px;
  box-shadow: 5px 15px 25px 10px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.text};
`;

export const ContainerActivities = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  align-items: center;
`;
