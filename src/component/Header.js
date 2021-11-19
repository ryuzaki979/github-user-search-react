import React, {useState} from "react";
import moon from "../assets/icon-moon.svg"
import sun from "../assets/icon-sun.svg"


const Header = ()=>{
    const [mode,setMode] = useState("light")
    const theme = document.body.classList

    const handleMode = ()=>{
        console.log('hello')
        if(theme.contains('dark-theme')){
            setMode('light')
            theme.remove('dark-theme')
        }
        else{
            setMode('dark')
            theme.add('dark-theme')
        }
    }

    return <> 
        <header className="container header flex">
            <p className="header__logo">
                devfinder
            </p>
            <button className="button mode-button flex"
                onClick = {handleMode}>
                <span className="mode-button__text">
                    {mode === "dark" ? "light" : "dark"}
                </span>
                <img src={mode === "dark" ? sun : moon} 
                alt="" className="mode-button__icon" />
            </button>
        </header>
    </>
}


export default Header