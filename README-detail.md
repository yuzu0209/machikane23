

#  新しくページを作るとき
ここでは例えばinfoページを追加することを考える  
さわるファイルは3つ
### src/pages/Info.js (新規作成)
classがclassNameになってるので注意！
```jsx
import "../css/Info.css"
export default function Info() {
    return(
        <div className="InfoContainer">　
            <h2>なんか書く</h2>
        </div>
    )
}
```
### src/pages/Info.css (新規作成)
書き方は普通のcss
```css
.InfoContainer{
    background-color:var(--blue1);
}
```


### src/App.js
どのURLにアクセスしたらInfoページを返すか　を決める  
今回は/machikanepage/info/
```jsx
...


import Info from "./pages/Info";

...

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>

        ....
        
        <Route path="/machikanepage/info/" element={ <Info /> } />
      
      </Routes>
      <Footer />
    </div>
  );
}

....

```

# Javascriptで処理を書きたい
詳しくはReactのドキュメントを読みましょう。   
src/tmp/に2つほどサンプルファイルを置いてあります。
