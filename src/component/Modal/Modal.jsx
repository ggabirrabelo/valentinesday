import React, { useEffect, useState } from "react";
import "./Modal.css";

const Modal = ({open, modalRef, close, text, more}) => {

    const [estilonao, setEstiloNao] = useState('')

    const nao = () => {
        alert("Tenta de novo, se conseguir na próxima então eu aceito sua decisão");
        setEstiloNao('estilonao')
    }

    return(
        <div> {
            open === "show" ? 
            <div>
                <div className="background"></div>
                <div ref={modalRef} className="modal">
                    <p className="title">Todas as vezes que me apaixonei por você</p>
                    <p>{text}</p>
                    
                    {more ?  <div><button onClick={close}>Sim</button>  <button onClick={nao} className={estilonao} id="no">Não</button> </div>: <button onClick={close}>fechar</button>}
                </div>
            </div>
        : null}



        </div>
    )
}

export default Modal;