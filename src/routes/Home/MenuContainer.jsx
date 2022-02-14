import styled from 'styled-components';
import Menu from './Menu';

const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding: 3em 0em 3em 0em;
    & .title {
        font-size: 20px;
        font-weight: 700;
        padding-top: 10px;
    }
`;
const Menus = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
    margin-top: 40px;
`;

const MenuContainer = ({subTitle, title, menus, onClick, showPrice, foodImgs01, foodImgs02}) => {
    return (
        <Section>
            <span>{subTitle}</span>
            <span className="title">{title}</span>
            <Menus>
            {menus.map((menu, idx) => 
                (<Menu 
                    key={menu.id}
                    menu={menu}
                    imgUrl={foodImgs01 ? `/img/${foodImgs01[idx]}.png` : `/img/${foodImgs02[idx]}.png`}
                    onClick={onClick}
                    showPrice={showPrice}
                />)
            )}
            </Menus>
        </Section>
    );
}

export default MenuContainer;
