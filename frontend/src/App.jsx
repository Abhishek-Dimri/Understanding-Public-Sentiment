import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
    const [text, setText] = useState("");
    const [sentiment, setSentiment] = useState("");
    const [score, setScore] = useState(0);

    const analyzeSentiment = async () => {
        try {
            const response = await axios.post("http://localhost:5000/analyze", { text });
            setSentiment(response.data.sentiment);
            setScore(response.data.score);
        } catch (error) {
            console.error("Error analyzing sentiment:", error);
        }
    };

    return (
        <div className="App">
            <h1>Public Sentiment Analysis</h1>
            <textarea
                placeholder="Enter your text here..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={analyzeSentiment}>Analyze</button>
            {sentiment && (
                <div>
                    <h2>Sentiment: {sentiment}</h2>
                </div>
            )}
        </div>
    );
}

export default App;