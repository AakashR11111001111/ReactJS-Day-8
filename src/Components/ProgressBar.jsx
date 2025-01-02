import { useEffect, useState } from "react";

const ProgressBar = () => {
    const [perc, setPerc] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPerc((val) => {
                if (val >= 100) {
                    clearInterval(interval); 
                    return 100;
                }
                return val + 1;
            });
        }, 200);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
        <div style={{display: "flex", justifyContent:"center", flexDirection:"column", alignItems:"center",marginTop:"20px"}}>
            <div className="bar" style={{ width: "50%", background:"rgba(0,0,0,0.1)" , border: "1px solid rgba(0,0,0,0.2)", height: "30px", borderRadius:"5px", display:"flex", position: "relative" }}>
                    <div className="progress" style={{ width: `${perc}%`, height: "100%", backgroundColor: "green", transition: "width 0.1s ease", borderRadius:"5px", display: "flex", justifyContent:"center" }}>
                    </div>
                    <p style={{position:"absolute", left:"50%", transform: "translateX(-50%)", color: perc < 50 ? "black": "white", transition: "all 0.3s ease", fontWeight: "800"}}>{perc}%</p>
            </div>
            <h3 style={{color: perc >= 100 ? "green" : "darkred"}}>{perc == 100 ? "Completed!":"Loading..."}</h3>
        </div>
        </>
    );
};

export default ProgressBar;
