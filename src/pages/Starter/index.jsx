import { Button } from '@/components'
import { Wrapper } from './styled'
import './styles.css'

function Starter() {

    return (
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
            <Wrapper gap={10}>
                <Button to='/login'>Começar</Button>
                <Button to='/Home' variant='secondary'>Cadastre-se</Button>
            </Wrapper>
        </section>
    )
}

export default Starter