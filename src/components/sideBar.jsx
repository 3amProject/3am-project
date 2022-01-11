import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const SectionComponent = styled.section`
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
const CloseBtnComponent = styled.button`
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
const DivComponent = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`;
const ButtonComponent = styled.button`
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
const UlComponent = styled.ul`
    width: 80%;
`;
const LiComponent = styled.li`
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
        <SectionComponent isOpen={isOpen}>
            <CloseBtnComponent onClick={onClick}>
                <i className="fas fa-times"></i>
            </CloseBtnComponent>
        <DivComponent>
            <Link to="/join">
                <ButtonComponent>회원 가입</ButtonComponent>
            </Link>
            <Link to="/login">
                <ButtonComponent>로그인</ButtonComponent>
            </Link>
        </DivComponent>
        <UlComponent>
            <Link to="/">
                <LiComponent>메뉴</LiComponent>
            </Link>
            <LiComponent>고객센터</LiComponent>
        </UlComponent>
        </SectionComponent>
    );
};

export default SideBar;