import React, { useState, useEffect } from 'react'
import './styles.css'

function Starter() {
    
function Continue() {
    let buttonContinue = document.getElementById("buttonContinue")
    buttonContinue.textContent = "Começar"
}

    return(
        <section className='section--start'>
            <h1></h1>
            <img className='start__img' src="" alt="" />
            <div className='start__div--1'>
                <p className='start__p'></p>
                <p className='start__p'></p>
            </div>
            <div className='start__div--2'>
                <button className='button--elips'></button>
                <button className='button--elips'></button>
            </div>
            <div className='start__div--3'>
                <button id='buttonContinue' onClick={Continue} className='button--fill'>Continue</button>
                <a className='button--border'>Cadastre-se</a>
            </div>
        </section>
    )   
}

export default Starter