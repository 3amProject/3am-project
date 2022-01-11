import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterComponent = styled.footer`
    height: 5em;
    width: 70vw;
    background-color: teal;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media screen and (max-width: 64rem) {
        width: 90vw;
    }
`;
const BtnComponent = styled.button`
    border: none;
    background-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
`;

const Footer = ({onClick}) => {
    return (
        <FooterComponent>
            <BtnComponent onClick={onClick}>
                <i className="fas fa-bars"></i>
            </BtnComponent>
            <Link to="/">
            <BtnComponent>
                <i className="far fa-calendar-check"></i>
            </BtnComponent>
            </Link>
            <Link to="/profile">
            <BtnComponent>
                <i className="fas fa-user"></i>
            </BtnComponent>
            </Link>
        </FooterComponent>
    )
};

export default Footer;