import styled from "styled-components"


export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 7rem;
&>h3{
  margin: 0.5rem;
  margin-top: 1rem;
}
  .card{
    width: 600px;
    height: 500px;
    background-color: #2B3743;
    margin: 20px;
    border-radius: 20px;
    box-shadow: 0 15px 25px rgba(0,0,0,0.2);
    transition: 0.5s;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-left: 2rem;
  }
  
  .container-name{
    margin: 0.5rem;
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
    .time{
      width: 5rem;
      background: #24303c;
      padding: 10px;
      border-radius: 4px;
      margin-bottom: 16px;
      border: 1px solid #1f53c5;
      font-family: 'calibri';
      font-size: 18px;   
      color: white;
    }
    .select{
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
    /* background: #ffffff; */
    background-color:  #202C37;
    }
  }



  .container-difficulty{
    display: flex;
    flex-direction: row;
    margin: 0.5rem;
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
.select-countries{
      width: 10rem;
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
  .countries-selected{
    width: 22rem;
    height: auto;
    background-color: #dddddd;
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 15px;
    flex-wrap: wrap;
    .country{
      font-size: 1.2rem;
      padding: 0.3rem;
      width: 3.8rem;
      background-color:#24303c;
      border-radius: 0.5rem;
    }
  }
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