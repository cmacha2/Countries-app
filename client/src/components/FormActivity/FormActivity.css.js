import styled from "styled-components"


export const Container = styled.form`
display: flex;
justify-content: center;
flex-direction: column-reverse;
align-items: center;
padding-top: 2rem;

  .card{
    width: 580px;
    height: auto;
    background-color: #2B3743;
    margin: 20px;
    border-radius: 20px;
    box-shadow: 0 15px 25px rgba(0,0,0,0.2);
    transition: 0.5s;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 1rem 2rem 1rem 2rem;
    color: #7a7a8c;

    &>h3{
      color: white;
  margin: 0.5rem;
  margin-top: 1rem;
  
}
  
    .activity-logo{
      width: 7rem;
      position: absolute;
      margin-left: 25rem;
      margin-top: -17rem;
    }

  .container-name{
    margin: 0.5rem;
    .error{
      display: flex;
      color: #ab2a3e;
    }
    .name{
      width: 15rem;
      background: #24303c;
      padding: 10px;
      border-radius: 4px;
      margin-bottom: 16px;
      border: 1px solid #1f53c5;
      font-family: 'calibri';
      font-size: 18px;   
      color: white;
    }

  }
  .select-time{
    margin: 0.5rem;
    display: flex; 
    .error{
      color: #ab2a3e;
      display: flex;
      padding-top: 0.8rem;
      padding-left: 1rem;
    } 
    .time{
      width: 15rem;
      background: #24303c;
      padding: 10px;
      border-radius: 4px;
      margin-bottom: 16px;
      border: 1px solid #1f53c5;
      font-family: 'calibri';
      font-size: 18px;   
      color: white;
    }
   /*  .select{
      width: 8rem;
      background: #24303c;
      padding: 10px;
      border-radius: 4px;
      margin-bottom: 16px;
      border: 1px solid #1f53c5;
      font-family: 'calibri';
      font-size: 18px;   
      color: white;
        
    cursor:pointer;
    border-radius: 5px;
    border: none;
    } 
    .select:focus,
    .select:hove{
    outline: none;
    border:1px solid #dddddd;
    }
    .select option{
    background-color:  #202C37;
    } */
  }



  .container-difficulty{
    display: flex;
    flex-direction: row;
    margin: 0.5rem;
    
  }
  .error{
      display: flex;
      color: #ab2a3e;
    }

  .container-temporate{
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

/* Hide the browser's default radio button */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #2196F3;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container .checkmark:after {
  top: 9px;
  left: 9px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}

.countries{
  margin: 0.5rem;
  display: flex; 
.selector-countries{
      width:10rem;
      height: 3rem;
      background: #24303c;
      padding: 10px;
      border-radius: 4px;
      margin-bottom: 16px;
      border: 1px solid #1f53c5;
      font-family: 'calibri';
      font-size: 18px;   
      color: white;
        
      cursor:pointer;
      border-radius: 5px;
      border: none;
    
    .select-countries:focus,
    .select-countries:hove{
    outline: none;
    border:1px solid #dddddd;
    }
    .select-countries option{
    /* background: #ffffff; */
    background-color:  #202C37;
    }
  }
  .container-selected-countries{
      display: flex;
      flex-direction: row;
      padding-left: 1rem;
      padding-right: 1rem;
      padding-top: 0.3rem;
      flex-wrap: wrap;
      .container-country{
        height: 1.3rem;
        width:3.6rem;
        margin:0 0.3rem 0.3rem 0;
        padding-right: 2rem;
        padding-left: 0.3rem;
        background-color: #5897FB;
        border-radius: 1rem;
        
        .country{
          color: #eee;
          
        }
        .close-country{
          width: 1rem;
          height: 1rem;
          border-radius: 1rem;
          border: none;
          color: #eee;
          background-color: transparent !important;
          position: absolute;
          margin-left: 2.2rem;
          margin-top: 0.20rem;
        }
      }
      
    } 
    
  }
  .create-button{
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
  .button-back{
            background: linear-gradient(90deg,#ff8a00,#e52e71);
            text-shadow: none;
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
            background-clip: text;
            border-color: white;
            font-style: normal;
            font-weight: 700;
            font-size: .5rem;
            color: #7a7a8c;
            text-transform: uppercase;
            font-size: .66rem;
            border: 3px solid #28242f;
            border-radius: 2rem;
            padding: .1rem .85rem .25rem;
            position: relative;
            right: 45%;
            top: 2.7rem;
          
        }
        .button-back:hover{
            background-clip: text;
            border-color: white;
        }
        
`

export const ContainerModal = styled.div`
body {
  background-color: #edeef6;
  font-family: 'Poppins', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 0;
}
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

`


// padding: 0;
// margin: 0;
// .container{
//   position: absolute;
//   transform: translate(-50%,-50%);
//   top: 50%;
//   left: 50%;
// }
// input[type="radio"]{
//   display: none;
// }
// label{
//   position: relative;
//   color: #01cc65;
//   font-family: "Poppings", sans-serif;
//   font-size: 30px;
//   border: 2px solid #01cc65;
//   padding: 10px 50px;
//   display: flex;
//   flex-direction: row;
//   align-items: center; 
//   label:before{
//     position: absolute;
//     content: "";
//     height: 30px;
//     width: 30px;
//     border: 3px solid #01cc65;
//     border-radius: 50%;
//     margin-right: 20px;

//   }
//   input[type="radio"]:checked+label{
//     background-color: #01cc65;
//     color: white;
    
//   }
//   input[type="radio"]:checked+label:before{
//    height: 16px;
//    width: 16px;
//    border: 10px solid white;
//    background-color: #01cc65;

//   }
// }

// .form-register {
//   width: 400px;
//   background: #24303c;
//   padding: 30px;
//   margin: auto;
//   margin-top: 100px;
//   border-radius: 15px;
//   font-family: 'calibri';
//   color: white;
//   box-shadow: 7px 13px 37px #000;
// }

// .form-register h4 {
//   font-size: 22px;
//   margin-bottom: 20px;
// }

// .controls {
//   width: 100%;
//   background: #24303c;
//   padding: 10px;
//   border-radius: 4px;
//   margin-bottom: 16px;
//   border: 1px solid #1f53c5;
//   font-family: 'calibri';
//   font-size: 18px;
//   color: white;
// }

// .form-register p {
//   height: 40px;
//   text-align: center;
//   font-size: 18px;
//   line-height: 40px;
// }

// .form-register a {
//   color: white;
//   text-decoration: none;
// }

// .form-register a:hover {
//   color: white;
//   text-decoration: underline;
// }

// .form-register .botons {
//   width: 100%;
//   background: #1f53c5;
//   border: none;
//   padding: 12px;
//   color: white;
//   margin: 16px 0;
//   font-size: 16px;
// }