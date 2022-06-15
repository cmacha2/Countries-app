import styled from "styled-components"


export const Container = styled.div`
    
    padding: 0;
    margin: 0;
    color:  #ddd;
    font-family: 'Poppins', sans-serif;
    font-size: 1.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 4rem;
    .card{
        width: 430px;
        height: 550px;
        background-color: #2B3743;
        margin: 20px 0 20px 4rem;
        border-radius: 20px;
        box-shadow: 0 15px 25px rgba(0,0,0,0.2);
        transition: 0.5s;
    }
    .circle{
        /* position: relative; */
        clip-path: circle(230px at center 0);
        text-align: center;
        &>img{
            width: 27rem;
            height: 15.7rem;
            border-radius: 20px;
        }
    }
    .content{
        padding-top: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        /* padding-bottom: 2rem; */
        
    }
    .back-button{
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
            right: 57%;
            top: -16.45rem;
        }
        .back-button:hover{
            background-clip: text;
            border-color: white;
        }
    
`

export const ContainerActivity = styled.div`
        width: 180px;
        height:150px;
        background-color: #2B3743;
        margin: 20px;
        border-radius: 20px;
        box-shadow: 0 15px 25px rgba(0,0,0,0.2);
        transition: 0.5s;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #ddd;
        /* margin-left: -2rem; */
`


export const ContainerActivities = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
        
        align-items: center
        
`