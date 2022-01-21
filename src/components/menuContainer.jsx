import styled from 'styled-components';
import Menu from './menu';

const SectionComponent = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding: 3em 0em 3em 0em;
`;
const MenusComponent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1em;
    margin-top: 2em;
`;

const MenuContainer = ({subTitle, title, menus, onClick, showPrice, foodImgs01, foodImgs02}) => {
    return (
        <SectionComponent>
            <span>{subTitle}</span>
            {<strong>{title}</strong>}
            <MenusComponent>
            {menus.map((menu, idx) => 
                (<Menu 
                    key={menu.id}
                    menu={menu}
                    imgUrl={foodImgs01 ? `/img/${foodImgs01[idx]}.png` : `/img/${foodImgs02[idx]}.png`}
                    onClick={onClick}
                    showPrice={showPrice}
                />)
            )}
            </MenusComponent>
        </SectionComponent>
    );
}

export default MenuContainer;
