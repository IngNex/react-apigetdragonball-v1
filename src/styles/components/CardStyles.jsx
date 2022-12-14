import styled from "styled-components";

export const ObjectCard = styled.section`
    position: relative;
    height: 400px;
    border-radius: 20px;
    grid-template: 10 rem auto / 1fr;
    background: linear-gradient(0deg, rgba(255,0,0,1) 0%, rgba(254,255,0,1) 100%);
    margin: 5%;

    /*&:hover $ObjectTitle}{
        opacity: 0;
        visibility: hidden;
    }*/

    img{
        position: absolute;
        top: -10%;
        height: 270px;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 50%;
        transition: .5s;
    }

    &:hover img{
        height: 200px;
    }
`

export const ObjectTitle = styled.div`
    position: absolute;
    width: 100%;
    top: 60%;
    text-align: center;
    opacity: 1;
    visibility: visible;
    transition: .5s;
    justify-content: left;

    ${ObjectCard}:hover & {
        opacity: 0;
        visibility: hidden;
    }

    h1{
        font-size: 2.5em;
    }

    a{
        position: relative;
        display: inline-block;
        color: #fff;
        text-decoration: none;
        width: 60%;
        padding: 1px 20px;
        background: #000;
        border-radius: 10px;
        margin-top: 10px;
    }
`

export const ObjectContent = styled.div`
    position: relative;
    width: 100%;
    padding: 20px;
    opacity: 0;
    visibility: hidden;
    transition: .5s;
    top: 200px;
    text-align: center;

    ${ObjectCard}:hover &{
        opacity: 1;
        visibility: visible;
        align-items: flex-end;
    }
    h1{
        color: #fff;
        text-transform: uppercase;
        font-size: 1.5em;
        text-align: center;
    }
    p{
        color: #fff;
        text-align: center;
        font-size: .8em;
    }
    a{
        position: relative;
        display: inline-block;
        color: #111;
        font-size: 0.8em;
        width: auto;
        text-decoration: none;
        padding: 10px 15px;
        background: #ffd4d4;
        border-radius: 10px;
        margin: 10px 5px 5px;
    }
`

