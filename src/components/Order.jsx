import React from "react";
import Food from "./Main-Menu";
import styles from "./Order.module.css";

const MenuOrder = () => {

    return (
        <>
            <div className={styles.container}>
                <Food />
            </div>
        </>
    );
}

export default MenuOrder ;