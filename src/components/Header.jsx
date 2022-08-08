import Classes from '../styles/header.module.scss'
import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Header() {

    const currentRoute = useLocation();

    const [showMobileMenu, setShowMobileMenu] = useState(true)

    const openMenu = () => {
        if (document.getElementById("menu")) {
            if (showMobileMenu == true) {
                document.querySelector("#menu").style.left = "0px";
            } else {
                document.querySelector("#menu").style.left = "-1000px";
            }
        }
    }

    useEffect(() => {
        switch (currentRoute.pathname) {
            case '/':
                document.getElementById("recent").style.color = "black";
                document.getElementById("cate").style.color = "#CEC8C3";
                document.getElementById("top").style.color = "#CEC8C3";
                break;
            case '/top-rated':
                document.getElementById("top").style.color = "black";
                document.getElementById("cate").style.color = "#CEC8C3";
                document.getElementById("recent").style.color = "#CEC8C3";
                break;
            case '/recent-news':
                document.getElementById("recent").style.color = "black";
                document.getElementById("cate").style.color = "#CEC8C3";
                document.getElementById("top").style.color = "#CEC8C3";
                break;
            case '/categories':
                document.getElementById("cate").style.color = "black";
                document.getElementById("top").style.color = "#CEC8C3";
                document.getElementById("recent").style.color = "#CEC8C3";
                break;
            default:
                break;
        }
    }, [currentRoute.pathname])

    return (
        <div className={Classes.containerHeader}>
            <div className={Classes.navBarWrapper}>

                <div className={Classes.logo}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M16 20V4H4v15a1 1 0 0 0 1 1h11zm3 2H5a3 3 0 0 1-3-3V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v7h4v9a3 3 0 0 1-3 3zm-1-10v7a1 1 0 0 0 2 0v-7h-2zM6 6h6v6H6V6zm2 2v2h2V8H8zm-2 5h8v2H6v-2zm0 3h8v2H6v-2z" fill="rgba(255,255,255,1)" /></svg>
                    <h1 className={Classes.title}><Link to={`/`} className="font-bold">awesome news</Link></h1>
                </div>

                <div className={Classes.hamburguerContainer} id="iconmenu" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                    {
                        showMobileMenu ?
                            <svg onClick={openMenu} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z" fill="rgba(255,255,255,1)" /></svg>
                            :
                            <svg onClick={openMenu} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" fill="rgba(255,255,255,1)" /></svg>
                    }
                </div>

                <ul className={Classes.menu} id="menu">
                    <li className={Classes.itemMenu}><Link id='recent' to={`/recent-news`}>recent news</Link></li>
                    <li className={Classes.itemMenu}><Link id='top' to={`/top-rated`}>top rated</Link></li>
                    <li className={Classes.itemMenu}><Link id='cate' to={`/categories`} >categories</Link></li>
                </ul>

            </div>
        </div>
    )
}

export default Header