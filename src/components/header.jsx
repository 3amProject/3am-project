import { Link } from "react-router-dom";
import styled, {css} from "styled-components";

const HeaderComponent = styled.header`
    height: 4em;
    width: 70vw;
    background-color: teal;
    padding: 1em;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 64rem) {
        width: 90vw;
    };

`;
const DivComponent = styled.div`
    font-size: 1.3rem;
    ${props =>
    props.goToBtn && css`
    cursor:pointer;
    `}
`;

const Header = ({date}) => {
    return (
        <HeaderComponent>
            <DivComponent>
                <i className="fas fa-shipping-fast"></i>
                <span> 새벽세시</span>
            </DivComponent>
            <DivComponent goToBtn>
                <Link
                to='/cart'
                state={date? date : new Date()}
                >
                    <i className="fas fa-shopping-cart"></i>
                </Link>
            </DivComponent>
        </HeaderComponent>
    )
}

export default Header;