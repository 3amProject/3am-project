import Menu from '../menu/menu';
import styles from './menuContainer.module.css';

const MenuContainer = ({subTitle, title, menus, onClick, showPrice}) => {
    return (
        <div className={styles.container}>
            <span>{subTitle}</span>
            {<strong className={styles.title}>{title}</strong>}
            <div className={styles.menus}>
            {menus.map((menu) => 
                (<Menu 
                    key={menu.id}
                    menu={menu}
                    onClick={onClick}
                    showPrice={showPrice}
                />)
            )}
            </div>
        </div>
    );
}

export default MenuContainer;