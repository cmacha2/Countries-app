import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column-reverse;
  align-items: center;
  padding: 2rem;
  height: 100vh;
  background: ${({theme})=> theme.back};
  .card {
    width: auto;
    height: auto;
    background-color: ${({ theme }) => theme.bgc};
    margin: 20px;
    border-radius: 20px;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
    transition: 0.5s;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 1rem 2rem 1rem 2rem;
    color: ${({ theme }) => theme.text};

    & > h3 {
      color: ${({ theme }) => theme.text};
      margin: 0.5rem;
      margin-top: 1rem;
    }

    .activity-logo {
      width: 7rem;
      position: absolute;
      margin-left: 25rem;
      margin-top: -17rem;
    }

    .container-name {
      margin: 0.5rem;
      .error {
        display: flex;
        color: #ab2a3e;
      }
      .name {
        width: 15rem;
        background: ${({ theme }) => theme.bgc};
        padding: 10px;
        border-radius: 4px;
        margin-bottom: 16px;
        border: 1px solid #1f53c5;
        font-family: "calibri";
        font-size: 18px;
        color: ${({ theme }) => theme.text};
      }
    }
    .select-time {
      margin: 0.5rem;
      display: flex;
      .error {
        color: #ab2a3e;
        display: flex;
        padding-top: 0.8rem;
        padding-left: 1rem;
      }
      .time {
        width: 15rem;
        background: ${({ theme }) => theme.bgc};
        padding: 10px;
        border-radius: 4px;
        margin-bottom: 16px;
        border: 1px solid #1f53c5;
        font-family: "calibri";
        font-size: 18px;
        color: ${({ theme }) => theme.text};
      }
    }

    .container-difficulty {
      display: flex;
      flex-direction: row;
      margin: 0.5rem;
    }
    .error {
      display: flex;
      color: #ab2a3e;
    }

    .container-temporate {
      display: flex;
      flex-direction: row;
      margin: 0.5rem;
    }

    .container {
      display: block;
      position: relative;
      padding-left: 35px;
      margin-bottom: 12px;
      cursor: pointer;
      font-size: 22px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      margin: 0.6rem;
    }

    .container input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }

    .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      height: 25px;
      width: 25px;
      background-color: #eee;
      border-radius: 50%;
    }

    .container:hover input ~ .checkmark {
      background-color: #ccc;
    }

    .container input:checked ~ .checkmark {
      background-color: #2196f3;
    }

    .checkmark:after {
      content: "";
      position: absolute;
      display: none;
    }

    .container input:checked ~ .checkmark:after {
      display: block;
    }

    .container .checkmark:after {
      top: 9px;
      left: 9px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: white;
    }

    .countries {
      margin: 0.5rem;
      display: flex;
      .selector-countries {
        width: 11rem;
        height: 3rem;
        background: ${({ theme }) => theme.bgc};
        padding: 10px;
        border-radius: 4px;
        margin-bottom: 16px;
        box-shadow: 15px 15px 25px rgba(0, 0, 0, 0.2);
        border: 1px solid #1f53c5;
        font-family: "calibri";
        font-size: 18px;
        color: ${({ theme }) => theme.text};

        cursor: pointer;
        border-radius: 5px;

        .select-countries:focus,
        .select-countries:hove {
          outline: none;
          border: 1px solid #dddddd;
        }
        .select-countries option {
          /* background: #ffffff; */
          background-color: #202c37;
        }
      }
      .container-selected-countries {
        display: flex;
        flex-direction: row;
        padding-left: 1rem;
        padding-right: 1rem;
        padding-top: 0.3rem;
        flex-wrap: wrap;
        .container-country {
          height: 1.3rem;
          width: 3.6rem;
          margin: 0 0.3rem 0.3rem 0;
          padding-right: 2rem;
          padding-left: 0.3rem;
          background-color: ${({ theme }) => theme.text};
          border-radius: 1rem;

          .country {
            color: ${({ theme }) => theme.bgc};
          }
          .close-country {
            width: 1rem;
            height: 1rem;
            border-radius: 1rem;
            border: none;
            color: ${({ theme }) => theme.bgc};
            background-color: transparent !important;
            position: absolute;
            margin-left: 2.2rem;
            margin-top: 0.2rem;
          }
        }
      }
    }
    .create-button {
      width: 5rem;
      background: #1f53c5;
      border: none;
      padding: 12px;
      color: white;
      margin: 16px 0;
      font-size: 16px;
      margin-left: 14rem;
      border-radius: 0.5rem;
    }
  }
`;
export const BackButton = styled.button`
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
  right: 44rem;
  top: 3rem;
  /* display: flex;
  justify-content: flex-end; */

  &:hover {
    background-clip: text;
    border-color: ${({ theme }) => theme.text};
  }
`;

export const ContainerModal = styled.div`
  font-family: "Poppins", sans-serif;
  margin: 0;
  position: absolute;
  bottom: 2%;
  right: 2%;
  transition: 0.5s;
  button {
    background-color: #47a386;
    border: 0;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    color: #fff;
    font-size: 14px;
    padding: 10px 25px;
  }

  .modal-container {
    display: flex;
    background-color: rgba(0, 0, 0, 0.3);
    align-items: center;
    justify-content: center;
    position: fixed;
    pointer-events: none;
    opacity: 0;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    transition: opacity 0.3s ease;
  }

  .show {
    pointer-events: auto;
    opacity: 1;
  }

  .modal {
    background-color: #fff;
    width: 400px;
    max-width: 100%;
    padding: 10px 50px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    text-align: center;
  }

  .modal h1 {
    margin: 0;
  }

  .modal p {
    opacity: 0.7;
    font-size: 14px;
  }
`;
