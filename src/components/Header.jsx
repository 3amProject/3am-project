import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderComponent = styled.header`
    background-color: var(--beige);
    width: 70vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 64rem) {
        width: 90vw;
    };
`;
const Div = styled.div`
    padding: 15px;
    font-size: 20px;
    display: flex;
    cursor: pointer;
    & .title {
    padding-left: 5px;
    }
`;

const Header = () => {
    return (
        <HeaderComponent>
            <Link to='/'>
            <Div>
                <i className="fas fa-shipping-fast"></i>
                <h1 className="title">새벽세시</h1>
            </Div>
            </Link>
            <Link to='/cart'>
            <Div>
                <i className="fas fa-shopping-cart"></i>
            </Div>
            </Link>
        </HeaderComponent>
    )
}

export default Header;