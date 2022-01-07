import Menu from '../menu/menu';
import styles from './menuContainer.module.css';

const MenuContainer = ({subTitle, title, menus}) => {
    return (
        <div className={styles.container}>
            <p>{subTitle}</p>
            <h3>{title}</h3>
            <div className={styles.menus}>
            {menus.map((menu) => 
                (<Menu 
                    key={menu.id}
                    menu={menu}
                    />)
            )}
            </div>
        </div>
    );
}

export default MenuContainer;