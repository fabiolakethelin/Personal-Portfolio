import React from "react"
import { Link } from "react-router-dom"
import styles from './NavBar.module.css'

const NavBar = () => {
    return (
        <div className={styles.navbar}>
            <ul className={styles.list}>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/project'>Project</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar