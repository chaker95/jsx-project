import logo from "./logo.svg";
import edabit from "./4.png"
import "./style.css";

function App() {
    return (
        <div>
            <div style={{ border: "solid 5px black", maxWidth: "100vw" }}>
                <h1 className="title red"> CHAKER </h1>

                <br />
                <br />
                 <div className="photos">
                     <img style={{width:"500px",height:"400px"}} src={edabit} alt="edabit" />
                     <img style={{width:"500px",height:"400px"}} src={"/success.png"} alt="success " />
                </div>
            </div>

            <video width="320" height="240" controls>
                <source src={"https://www.youtube.com/watch?v=8wLaiDi8Ics"} type="YTsolution" />
            </video>
        </div>
    );
}

export default App;
