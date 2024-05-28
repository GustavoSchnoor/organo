import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='footer'>
            <section> 
                <ul> 
                    <li>
                        <a href="http://www.facebook.com" target='_blank' rel='noreferrer'>
                            <img src='/imagens/fb.png' alt='facebook logo' />
                        </a>
                    </li>
                    <li>
                        <a href='http://www.twitter.com' target='_blank' rel='noreferrer'>
                            <img src='/imagens/tw.png' alt='twitter logo' />
                        </a>
                    </li>
                    <li>
                        <a href='http://www.instagram.com' target='_blank' rel='noreferrer'>
                            <img src='/imagens/ig.png' alt='instagram logo' />
                        </a>
                    </li>
                </ul>
            </section>

            <section>
                <img src='/imagens/logo.png' alt='logo footer' />
            </section>

            <section>
                <p>
                    Desenvolvido por <a href='http://github.com/gustavoschnoor' target='_blank' rel='noreferrer'>Gustavo Schnoor</a>
                </p>
            </section>
        </footer>
    )
}

export default Rodape