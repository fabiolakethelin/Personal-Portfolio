import React from "react";
import { Link } from "react-router-dom";
import styles from './LinkButton.module.css'

const LinkButton = ({to, text}) => {
    return (
        <div>
            <Link className={styles.button} to={to}>
                {text}
            </Link>
        </div>
    )
}

export default LinkButton