import React, { useState, useEffect } from 'react'
import './styles.css'

function Starter() {
    
function Continue() {

}

    return(
        <section className='section--start'>
            <img className='start__logo' src="" alt="" />
            <img className='start__img' src="" alt="" />
            <div className='start__div--1'>
                <p className='start__p p--title'>Produtos com qualidade garantida</p>
                <p className='start__p'>Produtos feitos a mão com a melhor qualidade</p>
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