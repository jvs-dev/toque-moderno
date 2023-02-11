import './styles.css'

function LoadingWindow() {
    return (
        <section className='loading-window'>
            <h1 className='loading__h1'>
                <div className='loading__div'>
                    <span className='loading__span'>toque</span>
                    <hr className='loading__hr' />
                </div>
                Moderno
            </h1>
            <div className='loader'></div>
        </section>
    )
}

export default LoadingWindow