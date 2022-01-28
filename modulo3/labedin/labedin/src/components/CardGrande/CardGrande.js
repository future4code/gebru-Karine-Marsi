import React from 'react';
import styled from 'styled-components';

const ImagemContainer = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`;

const Titulo = styled.h4`
    margin-bottom: 15px;
`;

const CardGrandeCss = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`;

const CardGrandeDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`;


function CardGrande(props) {
    return (
        <CardGrandeCss>
            <ImagemContainer src={ props.imagem }></ImagemContainer>
            <CardGrandeDiv>
                <Titulo>{ props.nome }</Titulo>
                <p>{ props.descricao }</p>
            </CardGrandeDiv>
        </CardGrandeCss>
    )
}

export default CardGrande;