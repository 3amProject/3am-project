import styled from "styled-components";

const Btn = styled.button`
    height: 3rem;
    width: 100%;
    background-color: black;
    color: white;
    border-radius: 0.3em;
    border: none;
    &: hover {
        cursor: pointer;
    } 
`;

const Button = ({text, onClick}) => {
    return (
        <Btn onClick={onClick}>{text}</Btn>
    );
}

export default Button;