import Button from './Button';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Section = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;
const Ul = styled.ul`
    margin: 2rem 0;
`;

const Profile = ({user}) => {
    return (
        <Section>
        <h1>마이 페이지</h1>
        <Ul>
            <li>
                <span>이름</span>
                <span>{user && user.name}</span>
            </li>
            <li>
                <span>아이디</span>
                <span>{user && user.userId}</span>
            </li>
            <li>
                <span>비밀번호</span>
                <span>{user && user.password}</span>
            </li>
            <li>
                <span>이메일</span>
                <span>{user && user.email}</span>
            </li>
            <li>
                <span>주소</span>
                <span>{user && user.address}</span>
            </li>
            <li>
                <span>전화번호</span>
                <span>{user && user.phoneNum}</span>
            </li>
        </Ul>
        <div>
            <Link to='/profileEdit'>
                <Button text="회원 정보 수정"></Button>
            </Link>
            <p></p>
            <Button text="로그아웃"></Button>
        </div>
        </Section>
    );
}

export default Profile;