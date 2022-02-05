import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const Section = styled.section`
    ${props =>
        props.isOpen ?
        css`
        position: absolute;
        left: 0;
        height: 100%;
        width: 20em;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        background-color: violet;
        cursor:pointer;`
        : css`
        display: none;
        `}
`;
const CloseBtn = styled.button`
    width: 100%;
    height: 3em;
    font-size: 1.5rem;
    border: none;
    background-color: transparent;
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
    &: hover {
        cursor: pointer;
    }
`;
const Div = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`;
const Button = styled.button`
    height: 3rem;
    width: 8rem;
    background-color: black;
    color: white;
    border-radius: 0.3em;
    border: none;
    &: hover {
        cursor: pointer;
    }   
`;
const Ul = styled.ul`
    width: 80%;
`;
const Li = styled.li`
    width: 100%;
    margin-top: 1em;
    padding-top: 1em;
    border-top: 1px solid black;
    &: hover {
        cursor: pointer;
    }
`;
const SideBar = ({onClick, isOpen}) => {
    return(
        <Section isOpen={isOpen}>
            <CloseBtn onClick={onClick}>
                <i className="fas fa-times"></i>
            </CloseBtn>
        <Div>
            <Link to="/join">
                <Button>회원 가입</Button>
            </Link>
            <Link to="/login">
                <Button>로그인</Button>
            </Link>
        </Div>
        <Ul>
            <Link to="/">
                <Li>메뉴</Li>
            </Link>
            <Li>고객센터</Li>
        </Ul>
        </Section>
    );
};

export default SideBar;