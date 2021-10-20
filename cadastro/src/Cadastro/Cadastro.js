import React from "react"
import "./Cadastro.css"

export default function Cadastro(){
    return(
        <div className="form">
          

            <form action="">
            <h1>Cadastro</h1>
            <p>Preencha os dados abaixo para começar.</p>
                <input type="text" name="nome" id="nome" placeholder="Nome" className="cad"/> <br />
                <input type="text" name="sobrenome" id="sobrenome" placeholder="Sobrenome" className="cad" /> <br />
                <input type="email" name="email" id="email" placeholder="Email" className="cad"/> <br />
                <input type="password" name="senha" id="senha" placeholder="Senha" className="cad"/> <br />

                <input type="button" value="Concluir cadastro" id="botao" />
            </form>
        </div>

        
    )
}