import "../css/Home.css"
import { Helmet } from "react-helmet";
export default function Home() {
    return(
        <div className="main">
        <Helmet>
          <title>トップページ|まちかね祭2023</title>
        </Helmet>
            <h2>ここにトップページ</h2>
            <a href="./about">About ページ</a>
        </div>
    )
}