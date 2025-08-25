import React from 'react'
import styled from 'styled-components';

const Footer = () => {
    return (
        <StyledWrapper>
            <div className="main">
                <div className="card" id="c1" />
                <div className="card" id="c2" />
                <div className="card" id="c3" />
                <div className="card" id="c4" />
            </div>
        </StyledWrapper>
    );
}
    const StyledWrapper = styled.div`
    .card {
        width: 190px;
        height: 254px;
        background: rgba(211, 211, 211, 0.199);
        position: absolute;
        transition: .3s ease-in-out;
        cursor: pointer;
        box-shadow: 0px 0px 30px -10px rgba(0, 0, 0, 0.3);
    }

    #c1 {
        background-color: black;
    }

    #c2 {
        background-color: blue;
    }

    #c3 {
        background-color: red;
    }

    #c4 {
        background-color: green;
    }

    .main:hover #c1 {
        transform: translateX(-100px) rotate(-40deg);
    }

    .main:hover #c2 {
        transform: translateX(-50px) rotate(-30deg);
    }

    .main:hover #c3 {
        transform: translateX(0) rotate(-20deg);
    }

    .main:hover #c4 {
        transform: translateX(50px) rotate(-10deg);
    }

    #c1:hover {
        transform: translateX(-150px) rotate(0deg) !important;
    }

    #c2:hover {
        transform: translateX(-100px) rotate(0deg) !important;
    }

    #c3:hover {
        transform: translateX(-50px) rotate(0deg) !important;
    }

    #c4:hover {
        transform: translateX(50px) rotate(0deg) !important;
    }

    .main {
        display: grid;
        height: 50vmax;
        place-items: center;
    }`;



export default Footer