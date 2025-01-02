import { useState } from "react";

const ProgressBar = () => {
    let [perc, setPerc] = useState(0);
    let Interval = setInterval(()=>{
        setPerc
    })
    return (
        <>
            <div className="bar">
                <div className="progress">{}</div>
            </div>
        </>
    )
}

export default ProgressBar;