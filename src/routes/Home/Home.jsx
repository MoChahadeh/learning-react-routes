

export default function Home({text, setText}) {
    return (
        <div>
            <h1>Home</h1>
            <p>{text}</p>
            <button onClick={() => setText("This was change by the home page")}>Change text</button>
            <a href="/about">got to about</a>
        </div>
    )
}