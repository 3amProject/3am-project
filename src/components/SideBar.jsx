import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import Button from '../components/Button/Button';

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
        align-items: center;
        background-color: white;
        cursor:pointer;`
        : css`
        display: none;
        `}
`;
const CloseBtn = styled.button`
    width: 100%;
    height: 48px;
    font-size: 22px;
    padding: 15px;
    margin-bottom: 15px;
    display: flex;
    justify-content: flex-end;
`;
const Div = styled.div`
    width: 80%;
    display: flex;
    & button {
        flex: 1 1;
        margin: 0 10px;
    }
`;
const Ul = styled.ul`
    width: 80%;
    & li {
        width: 100%;
        height: 20px;
        margin-top: 50px;
        padding-top: 10px;
        border-top: 1px solid black;
        font-weight: 700;
        &: hover {
            cursor: pointer;
        }
    }
`;

const SideBar = ({onClick, isOpen}) => {
    return(
        <Section isOpen={isOpen}>
            <CloseBtn onClick={onClick}>
                <i className="fas fa-times"></i>
            </CloseBtn>
        <Div>
            <Button text="회원 가입" onClick={()=>{window.location.href = '/join'}} />
            <Button text="로그인" onClick={()=>{window.location.href = '/login'}} />
        </Div>
        <Ul>
            <Link to="/">
                <li>메뉴</li>
            </Link>
            <li>고객센터</li>
        </Ul>
        </Section>
    );
};

export default SideBar;