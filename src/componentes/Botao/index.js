import './Botao.css';

// Novo jeito usando CHILDREN para pegar o que esta dentro da tag <Botao> AQUI </Botao> que esta em Formulario/index.js e colocar aqui usando o props.children
const Botao = (props) => {
    return (
        <button className='botao'>
            {props.children}
        </button>
    )
}

export default Botao;