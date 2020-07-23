import React from "react";
import Button from "../Button/Button";
import './App.css';

const App = () => {
    return <div className='App'>
            <div className="top">4:43</div>
            <div className="display">0</div>
            <div className="buttons">AC</div>
                <Button  content="AC"/>
                <Button  content="±"/>
                <Button  content="%"/>
                <Button  content="÷"/>
            <div className="bottom">-</div> 
        </div>;
}

export default App;