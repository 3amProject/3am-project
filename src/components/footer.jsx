import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Footer = styled.footer`
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
const Btn = styled.button`
    border: none;
    background-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
`;

const Footer = ({onClick}) => {
    return (
        <Footer>
            <Btn onClick={onClick}>
                <i className="fas fa-bars"></i>
            </Btn>
            <Link to="/">
            <Btn>
                <i className="far fa-calendar-check"></i>
            </Btn>
            </Link>
            <Link to="/profile">
            <Btn>
                <i className="fas fa-user"></i>
            </Btn>
            </Link>
        </Footer>
    )
};

export default Footer;