import { useState } from "react"

import "../css/Header.css"
import hamburger from "../imgs/hamburger.svg"
import machikane_logo from "../imgs/machikane_logo.png"

export default function Header() {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)
    
    function onHamburgerClick() { //ハンバーガーがクリックされた時の処理
        setIsHamburgerOpen(prev => !prev)
    }
    const [isMenuOpenA, setIsMenuOpenA] = useState(false)
    function menuOpenA(){
        setIsMenuOpenA(prev => !prev)
    }
    const [isMenuOpenB, setIsMenuOpenB] = useState(false)
    function menuOpenB(){
        setIsMenuOpenB(prev => !prev)
    }
    const [isMenuOpenC, setIsMenuOpenC] = useState(false)
    function menuOpenC(){
        setIsMenuOpenC(prev => !prev)
    }
    const [isMenuOpenD, setIsMenuOpenD] = useState(false)
    function menuOpenD(){
        setIsMenuOpenD(prev => !prev)
    }

    return (
        <header>
            <a href="/" className="top-link"><img className="machikane_logo-sp" src={machikane_logo} alt="まちかね祭ロゴ"></img></a>

            <div className={`menu ${isHamburgerOpen?"menu-opend":"menu-closed"}`}>
                <div className="header ja-menu">
                <a href="/" className="top-link"><img className="machikane_logo-pc" src={machikane_logo} alt="まちかね祭ロゴ"></img></a>
                    <ul className="menu-grandparent">
                        <li className="menu-parent"><span className={`menu-title ${isMenuOpenA?"is-opend":"is-closed"}`} onClick={menuOpenA}>まちかね祭について</span>
                            <ul className={`menu-child ${isMenuOpenA?"is-opend":"is-closed"}`}>
                                <li><a href="/23/about">まちかね祭とは</a></li>
                                <li><a href="/23/thema">テーマ</a></li>
                                <li><a href="/23/">グッズ</a></li>
                                <li><a href="/23/">ご挨拶</a></li>
                                <li><a href="/23/">ご協賛</a></li>
                            </ul>
                        </li>
                        <li className="menu-parent"><span className={`menu-title ${isMenuOpenB?"is-opend":"is-closed"}`} onClick={menuOpenB}>企画について</span>
                            <ul className={`menu-child ${isMenuOpenB?"is-opend":"is-closed"}`}>
                                <li><a href="/23/">企画区分について</a></li>
                                <li><a href="/23/project">企画検索</a></li>
                                <li><a href="/23/">ステージタイムテーブル</a></li>
                                <li><a href="/23/">ラリー企画一覧</a></li>
                                <li><a href="/23/">委員会企画</a></li>
                                <li><a href="/23/">研究室紹介</a></li>
                            </ul>
                        </li>
                        <li className="menu-parent"><span className={`menu-title ${isMenuOpenC?"is-opend":"is-closed"}`} onClick={menuOpenC}>来場者の方へ</span>
                            <ul className={`menu-child ${isMenuOpenC?"is-opend":"is-closed"}`}>
                                <li><a href="/23/">注意事項</a></li>
                                <li><a href="/23/">公式パンフレット</a></li>
                                <li><a href="/23/">よくあるご質問</a></li>
                                <li><a href="/23/">お問い合わせ</a></li>
                            </ul>
                        </li>
                        <li className="menu-parent"><span className={`menu-title ${isMenuOpenD?"is-opend":"is-closed"}`} onClick={menuOpenD}>アクセス・マップ</span>
                            <ul className={`menu-child ${isMenuOpenD?"is-opend":"is-closed"}`}>
                                <li><a href="/23/">アクセス</a></li>
                                <li><a href="/23/">マップ</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="hamburger" onClick={onHamburgerClick}>
                <img src={hamburger} alt="hamburger"></img>
            </div>
        </header>
    )
}