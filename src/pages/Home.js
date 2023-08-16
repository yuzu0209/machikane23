import "../css/Home.css"
import { Helmet } from "react-helmet";
export default function Home() {
    return(
        <div>
        <Helmet>
          <title>トップページ|まちかね祭2023</title>
        </Helmet>
            <h2>ここにトップページ</h2>
            <a href="machikanepage/about">About ページ</a><br/>
            <a href="/tmp/sample1">Sample1</a><br/>
            <a href="/tmp/sample2">Sample2</a>
            
        </div>
    )
}