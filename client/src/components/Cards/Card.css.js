import styled from "styled-components"


export const Container = styled.div`
@import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&display=swap');
.card {
    height: 270px;
    width: 320px;
    min-width: 250px;
    border-radius: 16px;
    background: #2B3743;
    box-shadow: -1rem 0 3rem #000;
    display: flex;
    flex-direction: column;
    transition: .2s;
    margin: 0;
    scroll-snap-align: start;
    clear: both;
    position: relative;
}
.card:nth-child(9){ 
    display: flex;
    justify-content: center;
    align-items: center;
}

.card:focus-within~.card, .card:hover~.card {
    transform: translateX(130px);
}

.card:hover {
    transform: translateY(-1rem);
}

.card:not(:first-child) {
    margin-left: -130px;
}



.card-header {
    /* margin-bottom: auto; */
    width: auto;
}

.flag{
    /* border-radius: 2rem; */
    width: 100%;
    height: 180px;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
}

/* .card-header h2 {
    font-size: 20px;
    margin: .25rem 0 auto;
    text-decoration: none;
    color: inherit;
    border: 0;
    display: inline-block;
    cursor: pointer;
} */

/* .card-header h2:hover {
    background: linear-gradient(90deg,#ff8a00,#e52e71);
    text-shadow: none;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
} */

.card-country {
    margin: 0rem 0.6rem 0;
    display: grid;
    grid-template-columns: 75px 1fr;
    align-items: center;
    position: relative;
}

.country-avatar {
    grid-area: auto;
    align-self: start;
    position: relative;
    box-sizing: border-box;
}

.country-avatar img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    filter: grayscale(70%);
    display: block;
    overflow: hidden;
    margin: 16px 10px;
}

.country-name {
    grid-area: auto;
    box-sizing: border-box;
    color:white;
}

.country-name-prefix {
    font-style: normal;
    font-weight: 700;
    color: #7a7a8c;
}

.half-circle {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 70px;
    height: 48px;
    fill: none;
    stroke: #ff8a00;
    stroke-width: 8;
    stroke-linecap: round;
    pointer-events: none;
}

.tags {
    /* margin: 0rem 2rem 2rem;
    padding: -2rem 0 1rem; */
    line-height: 2;
    margin-bottom: 0;

    /* centrado en la orilla del div */
  position: absolute;
  top: 50%;
  margin-top: 5.3rem;
  margin-left: 12.9rem;
}

.tags button {
    background: linear-gradient(90deg,#ff8a00,#e52e71);
    text-shadow: none;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    /* -webkit-box-decoration-break: clone; */
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
    padding: .2rem .85rem .25rem;
    position: relative;
}

.tags button:hover {
    /* background: linear-gradient(90deg,#ff8a00,#e52e71);
    text-shadow: none;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text; */
    /* -webkit-box-decoration-break: clone; */
    background-clip: text;
    border-color: white;
}

`


// *{
//     text-decoration: none;
// }
// .card{
//  display: flex;
//  position: relative;
//  flex-direction: column;
//  height: 350px;
//  width:400px;
//  min-width: 250px;
//  padding: 1.5rem;
//  border-radius: 16px;
//  background: #17141d;
//  box-shadow: -1erm 0 3rem;
//  &:not(:first-child){
//     margin-left: -4rem;
//  }
//  /* img{
//      position:relative;
//      clip-path: polygon(0 0,100% 0,100% 85%, 0 100%);
//      width:100%;
//      display: block;
//      border-radius: 20px 20px 0 0;
//  } */
// }
// .card:hover{
//     transform: translate(-1rem);
// }
// .card:hover{
//  ~ .card {
//      transform:translate(-1rem)
//  }
// }