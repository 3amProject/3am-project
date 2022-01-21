import Button from "./button"
import styled from "styled-components";
import { Link } from "react-router-dom";

const TextComponent = styled.div`
    height: 100px;
    padding: 10px;
    margin: 20px 10px;
    overflow-y: scroll;
    border: 1px solid black;
`;

const NotUserOrder = () => {
    return(
        <>
        <h3>비회원 구매</h3>
        <span>비회원으로 주문하시는 경우 포인트는 지급하지 않습니다.</span>
        <TextComponent>
            <h4>비회원정보수집 동의</h4>
            <p>비회원 개인정보보호정책은 비회원으로 주문하는 고객님의 개인정보 보호를 위하여 새벽다섯시가 실시하는 개인정보 수집의 목적과 그 정보의 정책에 관한 규정입니다.</p>
            <h4>제1조 개인정보 수집 범위</h4>
            <p>필수항목: 성명, 휴대전화번호, 이메일, 구매상품, 상품 사이즈</p>
        </TextComponent>

        <label htmlFor="agree">개인정보수집에 대한 내용을 읽었으며 이에 동의합니다.</label>
        <input name="agree" type="checkbox" />
        <Link to='/notUserOrder'>
        <Button text="비회원으로 주문"></Button>
        </Link>
        <span>회원이 되면 더 많은 혜택이!</span>
        <Link to='/join'>
        <Button text="회원가입"></Button>
        </Link>

        </>
    );
}

export default NotUserOrder;