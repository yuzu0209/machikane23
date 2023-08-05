import { useState } from "react"
export default function Sample2() {

    const [data, setData] = useState([
        {
            "name": "中央実行委員会企画",
            "description": "中実の企画です。",
        },
        {
            "name": "ほげふがサークル",
            "description": "なんかやってます。",
        },
        {
            "name": "ぴよサークル",
            "description": "いろいろやってます。",
        }
    ])

    function onClickFunc() {
        data.push({
            "name": "新しいサークル",
            "description": "新しい説明",
        })
        setData([...data])//これがないと再描画されない　おまじないみたいなもんだと思えば
    }
    return (
        <div>
            {
                data.map((value, index) => {
                    return (
                        <div key={value.name} style={{border:"1px solid black",width:"300px",margin:"10px"}}>
                            <div style={{ fontSize: "30px" }}>{value.name}</div>
                            <div>{value.description}</div>
                        </div>
                    )
                })
            }

        <div>
            <div onClick={onClickFunc} style={{
                backgroundColor: "blue",
                color: "white",
                cursor: "pointer",
                width: "100px",
                height: "50px",
                textAlign: "center",
                margin: "10px"
            }}>Click Here!</div>
        </div>
        </div>

    )
}