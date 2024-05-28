import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';

const Formulario = (props) => {

    

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')



    const aoSalvar = (evento) => {
        evento.preventDefault();
        // console.log('Form foi Submetido', nome, cargo, imagem, time)
        props.aoColaboradorCadastrado({
            nome: nome,
            cargo: cargo,
            imagem: imagem,
            time: time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto 
                    label="Nome" 
                    placeholder="Digite o seu nome" 
                    obrigatorio={true} 
                    valor={nome}
                    // esse valor veio la do CampoTexto no onChange aoDigitado com evento target value
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    label="Cargo" 
                    placeholder="Digite o seu cargo" 
                    obrigatorio={true} 
                    // esse valor veio la do CampoTexto no onChange aoDigitado com evento target value
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem" 
                    // esse valor veio la do CampoTexto no onChange aoDigitado com evento target value
                    valor={imagem}
                    // Recebemos um VALOR que é do CampoTexto Digitado pelo usuario, e ele sera aplicado no setImagem, que faz parte do estado(useState), sendo atualizado no imagem
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    label="Time" 
                    itens={props.times} 
                    obrigatorio={true} 
                    // esse valor veio la do ListaSuspensa no onChange aoDigitado com evento target value, acontece após alterar alguma opção do select
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;