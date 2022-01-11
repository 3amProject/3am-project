import styled from "styled-components";

const DivComponent = styled.div`
    background-color: cadetblue;
    padding: 1em;
`;
const FooterComponent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const ButtonComponent = styled.button`
    width: 2rem;
    height: 2rem;
    border: none;
    border-radius: 50%;
    background-color: black;
    color: white;
    font-size: 1rem;
    &: hover {
        cursor: pointer;
    }
`;

const Menu = ({menu, onClick, showPrice}) => {
    return (
        <DivComponent>
            <div>
                <img src={menu.url} alt="img" />
            </div>
            <p>{menu.name}</p>
            <FooterComponent>
                <span>{showPrice(menu.price)}</span>
                <ButtonComponent
                onClick={()=>onClick(menu.price)}>
                    <i className="fas fa-shopping-basket"></i>
                </ButtonComponent>
            </FooterComponent>
        </DivComponent>
    )
}

export default Menu;