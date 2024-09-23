import React from 'react';
import "./paragrafo.css"

const Paragrafo = ({ text, color, background }) => {
    return <p className='card-paragrafo' style={{ color: color, backgroundColor: background }}>{text.toUpperCase()}</p>
}

Paragrafo.defaultProps = {
    text: 'Eu me chamo Hellen, tenho 28 anos e estou em busca de uma vaga como Dev Front End Júnior.',
    color: 'red',
    background: 'blue'
}



export default Paragrafo