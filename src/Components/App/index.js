import React from "react";
import Button from "../Button/Button";
import './App.css';

const App = () => {
    return <div className='App'>
            <div className="top">4:43</div>
            <div className="display">0</div>
            <div className="buttons">
                <Button  content="AC"/>
                <Button  content="±"/>
                <Button  content="%"/>
                <Button  content="÷"/>
                <Button  content="7"/>
                <Button  content="8"/>
                <Button  content="9"/>
                <Button  content="×"/>
                <Button  content="4"/>
                <Button  content="5"/>
                <Button  content="6"/>
                <Button  content="−"/>
                <Button  content="1"/>
                <Button  content="2"/>
                <Button  content="3"/>
                <Button  content="+"/>
                <Button  content="0"/>
                <Button  content="."/>
                <Button  content="="/>
            </div>
            <div className="bottom">-</div> 
        </div>;
}

export default App;