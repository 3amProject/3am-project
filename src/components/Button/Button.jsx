import styled from "styled-components";

const Btn = styled.button`
    padding: 16px 0;
    margin: 10px;
    font-size: 14px;
    color: var(--lightbeige);
    background-color: black;
    color: var(--lightbeige);
    border-radius: 10px;
`;

const Button = ({text, onClick}) => {
    return (
        <Btn onClick={onClick}>{text}</Btn>
    );
}

export default Button;