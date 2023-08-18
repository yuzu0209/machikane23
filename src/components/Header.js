import { useState } from "react"

import "../css/Header.css"
import hamburger from "../imgs/hamburger.svg"
import machikane_logo from "../imgs/machikane_logo.png"

export default function Header() {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)
    
    function onHamburgerClick() { //ハンバーガーがクリックされた時の処理
        setIsHamburgerOpen(prev => !prev)
    }

    function menuOpen(){
        document.querySelectorAll('A')
    }
    return (
        <header>
            <img className="machikane_logo" src={machikane_logo}></img>

            <div className={`menu ${isHamburgerOpen?"menu-opend":"menu-closed"}`}>
                <div className="ja-menu">
                    <ul>
                        <li><span className="menu-parent A" onClick={menuOpen}>まちかね祭について</span>
                            <ul>
                                <li className="menu-child A"><a href="/23/about">まちかね祭とは</a></li>
                                <li className="menu-child A"><a href="/23/thema">テーマ</a></li>
                                <li className="menu-child A"><a href="/23/">グッズ</a></li>
                                <li className="menu-child A"><a href="/23/">ご挨拶</a></li>
                                <li className="menu-child A"><a href="/23/">ご協賛</a></li>
                            </ul>
                        </li>
                        <li><span className="menu-parent B" onClick={menuOpen}>企画について</span>
                            <ul>
                                <li className="menu-child B"><a href="/23/">企画区分について</a></li>
                                <li className="menu-child B"><a href="/23/project">企画検索</a></li>
                                <li className="menu-child B"><a href="/23/">ステージタイムテーブル</a></li>
                                <li className="menu-child B"><a href="/23/">ラリー企画一覧</a></li>
                                <li className="menu-child B"><a href="/23/">委員会企画</a></li>
                                <li className="menu-child B"><a href="/23/">研究室紹介</a></li>
                            </ul>
                        </li>
                        <li><span className="menu-parent C" onClick={menuOpen}>来場者の方へ</span>
                            <ul>
                                <li className="menu-child C"><a href="/23/">注意事項</a></li>
                                <li className="menu-child C"><a href="/23/">公式パンフレット</a></li>
                                <li className="menu-child C"><a href="/23/">よくあるご質問</a></li>
                                <li className="menu-child"><a href="/23/">お問い合わせ</a></li>
                            </ul>
                        </li>
                        <li><span className="menu-parent D" onClick={menuOpen}>アクセス・マップ</span>
                            <ul>
                                <li className="menu-child D"><a href="/23/">アクセス</a></li>
                                <li className="menu-child D"><a href="/23/">マップ</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="hamburger" onClick={onHamburgerClick}>
                <img src={hamburger}></img>
            </div>
        </header>
    )
}