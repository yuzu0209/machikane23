import { useState } from "react"
export default function Sample1() {
    const [count,setCount]=useState(0)

    function onClickFunc() {
        setCount(count+1)
    }
    return(
        <div>
            <div onClick={onClickFunc}>Click Here!</div>
            <div>now count:{count}</div>
        </div>

    )
}