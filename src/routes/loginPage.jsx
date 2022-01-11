import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/button';

const DivComponent = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const SectionComponent = styled.section`
    position: relative;
    width: 60%;
    max-width: 500px;
    height: 80%;
    background-color: teal;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 64rem) {
        width: 85%;
        height: 90%;
    }
`;
const HeaderComponent = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    background-color: tomato;
    & div {
        width: 100%;
        height: 2em;
        display: flex;
        & button {
            flex: 1;
            border: none;
            border-bottom: 2px solid white;
            background-color: none;
            &: hover {
                border-bottom: 2px solid black;
            }
        }
    }
`;
const MainComponent = styled.main`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 2em 0em 1em 0em;
    & input {
        height: 2em;
        margin-bottom: 0.5em;          
    }
    & form {
        display: flex;
        justify-content: space-between;
        margin-top: 1em;
        & div {
            display: flex;
            align-items: center;
        }
    }
`;
const FooterComponent = styled.footer`
    width: 80%;
    display: flex;
    flex-direction: column;
    & div {
        display: flex;
        justify-content: center;
        margin: 0.5em 0em;
        & span {
            border-right: 1px solid black;
        }
        & button {
            background-color: transparent;
            border: none;
            &: hover {
                cursor: pointer;
            }
        }
    }
`;


const LoginPage = () => {
    // security api 로 로그인 화면 조회해야 함
    return (
        <DivComponent>
        <SectionComponent>
            <HeaderComponent>
                <Link to="/">
                    <button className="closeBtn">
                        <i className="fas fa-times"></i>
                    </button>
                </Link>
                <h1>로그인</h1>
                <div>
                    <button>회원</button>
                    <button>비회원</button>
                </div>
            </HeaderComponent>
            <MainComponent>
                <input type="text" placeholder=" 아이디"/>
                <input type="password" placeholder=" 비밀번호"/>
                <form>
                    <div>
                    <input type="checkbox" name="checkId"/>
                    <label htmlFor="checkId">아이디 저장</label>
                    </div>
                    <div>
                    <input type="checkbox" name="checkLogin"/>
                    <label htmlFor="checkLogin">자동 로그인</label>
                    </div>
                </form>
            </MainComponent>
            <FooterComponent>
                <Button text="로그인"></Button>
                <div>
                    <button>아이디 찾기</button>
                    <span></span>
                    <button>비밀번호 찾기</button>
                </div>
                <Link to='/join'>
                    <Button text="회원 가입"></Button>
                </Link>
            </FooterComponent>
        </SectionComponent>
        </DivComponent>
    )
}

export default LoginPage;