import React from 'react';
import styles from './header.module.css';
import NavIcon from '../../assets/icon/menu-white-18dp.svg';

const header = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.mainIconContainer}>
                <img onClick={props.onMenu} className={styles.NavIcon} src={NavIcon} alt="icon" />
                <div className={styles.headerIcon}>Maxeon</div>
            </div>
            <div className={styles.headerItems}>
                <div className={styles.headerItem}>Products</div>
                <div className={styles.headerItem}>Features</div>
                <div className={styles.headerItem}>Use Cases</div>
                <div className={styles.headerItem}>Pricing</div>
                <div className={styles.login}>Login</div>
            </div>
            {
                props.isMenu
                    ?
                    <div className={styles.subHeaderItems}>
                        <div className={styles.headerItem}>Products</div>
                        <div className={styles.headerItem}>Features</div>
                        <div className={styles.headerItem}>Use Cases</div>
                        <div className={styles.headerItem}>Pricing</div>
                        <div className={styles.login}>Login</div>
                    </div>
                    :
                    null
            }
        </div>
    );
}

export default header;