import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import fotoKakau from './img/Kakau.jpeg';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={fotoKakau}
          nome="Karine Silva "
          descricao="Oi meu nome é Karine, muito me chama de Kakau,sou Pedagoga Pós graduada em Psicopedagogia,apaixonada por educação e tecnologia, atualmente estou estudando na Labenu, curso noturno de Web Full Stack."
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem="https://cdn-icons-png.flaticon.com/512/115/115757.png"
          label="E-mail"
          labeldescricao="karine.marsi@gmail.com"
        />
        <CardPequeno
          imagem="https://img.icons8.com/ios/500/address--v1.png"
          label="Endereço"
          labeldescricao="Rua dos Bobos-Numero 0"
        />


      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://cdn-icons-png.flaticon.com/512/43/43298.png"
          nome="Pedagoga/Psicopedagoga/Desenvolvedora Web Full stack em construção."
          descricao="Graduada e Pós-Graduada na Universidade Adventista de São Paulo em 2007,atuei 14 anos nas séries inicias,atuei como Psicopedagoga com uma abordagem antiracista em 2020 e 2021, atualmente fazendo o curso na Labenu."
        />

        <CardGrande
          imagem="https://laart.art.br/wp-content/uploads/2020/08/artisatsplasticasnegras-capa-1.jpg"
          nome="Afrodeusa"
          descricao="Que defeitos?"
        />

        <CardGrande 
          imagem="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmypixeland.com%2Fwp-content%2Fuploads%2F2019%2F05%2Fmapa-astral-icone.png&f=1&nofb=1"
          nome="Mapa Astral"
          descricao=" Sol em Leão/ Ascendente em Capricòrnio/Lua em Peixes"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
