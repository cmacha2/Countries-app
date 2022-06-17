import styled from "styled-components"

export const Container = styled.div`
@import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&display=swap');
margin: 0;
padding: 0;
`


export const StyledCard = styled.article`
    height: 270px;
    width: 320px;
    min-width: 250px;
    border-radius: 16px;
    background:${({theme})=> theme.bgc};
    box-shadow: 15px 15px 25px 15px rgba(0,0,0,0.2);
    display: flex;
    flex-direction: column;
    transition: .2s;
    margin: 1.3rem;
    scroll-snap-align: start;
    clear: both;
    position: relative;
    &:focus-within~&, &:hover~& {
    transform: translateX(130px);
}

&:hover {
    transform: translateY(-1rem);
}

&:not(:first-child) {
    margin-left: -130px;
}
`

export const CardHeader = styled.div`
 width: auto;
`
export const ImgFlag = styled.img`
    width: 100%;
    height: 180px;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
 `
export const CardCountry = styled.div`
    margin: 0rem 0.6rem 0;
    display: grid;
    grid-template-columns: 75px 1fr;
    align-items: center;
    position: relative;
`

export const CountryAvatar = styled.div`
    grid-area: auto;
    align-self: start;
    position: relative;
    box-sizing: border-box;
`
export const ImgAvatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    filter: grayscale(70%);
    display: block;
    overflow: hidden;
    margin: 16px 10px;
`
export const CountryName = styled.div`
    grid-area: auto;
    box-sizing: border-box;
    color:${({theme})=> theme.text};
`

export const CountryPrefix = styled.div`
    font-style: normal;
    font-weight: 700;
    color: #7a7a8c;
`
export const LogoCircle = styled.svg`
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
`

export const ReadMore = styled.div`
    line-height: 2;
    margin-bottom: 0;
    position: absolute;
    top: 50%;
    margin-top: 5.3rem;
    margin-left: 12.9rem;
`

export const ButtonReadMore = styled.button`
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
    padding: .2rem .85rem .25rem;
    position: relative;
    &:hover{
        background-clip: text;
        border-color: ${({theme})=> theme.bgc};
    }
`