import Link from 'next/link'
import styles from "./links.module.css"
import NavLink from './navLink/navLink'
const Links = () => {
    const links = [
        {
            title: "Homepage",
            path: "/",
        },
        {
            title: "About",
            path: "/about",
        },
        {
            title: "Blogs",
            path: "/blog",
        },
        {
            title: "Contact",
            path: "/contact",
        }
    ]
    // TEMPORARY
    const session = true
    const isAdmin = true

    return (
        <div className={styles.links}>
            {links.map((link => (
                <NavLink item={link} key={link.title} />
            )))}{
                session ? (
                    <>
                        {
                            isAdmin &&
                            <NavLink item={{ title: "Admin", path: "/admin" }}></NavLink>

                        }
                        <button className={styles.logout}>Logout</button>
                    </>
                ) : (
                    <NavLink item={{ title: "Login", path: "/login" }}></NavLink>
                )
            }
        </div>
    )
}

export default Links