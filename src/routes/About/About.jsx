import { useNavigate } from "react-router-dom";


export default function About({text, setText}) {
    const navigate = useNavigate();
    return (
        <div>
        <h1>About</h1>
        <p>{text}</p>
        <button onClick={() => setText("This was change by the about page")}>Change text</button>
        <a onClick={() => navigate("/")}>got to home</a>
        </div>
    );
}
