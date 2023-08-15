import { useState } from "react"

import "../css/Header.css"
import hamburger from "../imgs/hamburger.svg"

export default function Header() {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)
    
    function onHamburgerClick() {
        setIsHamburgerOpen(prev => !prev)
    }

    return (
        <header>
            <h1>まちかね祭2023 ヘッダー</h1>

            <div className={`menu ${isHamburgerOpen?"menu-opend":"menu-closed"}`}>
                <div>
                    ここにメニュー
                </div>
            </div>
            <div className="hamburger" onClick={onHamburgerClick}>
                <img src={hamburger}></img>
            </div>
        </header>
    )
}