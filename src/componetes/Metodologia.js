import arteUrbana from "./imagens/arteUrbana.png"
import morteVidaEstrelas from "./imagens/morteVidaEstrelas.png"
import revolcaoDosBichos from './imagens/revolucaodosbichos.png'
import arteNasCidades from "./imagens/artesNasCidades.png"
import ondasEletromagneticas from "./imagens/ondasEletromagneticas.png"
import revolucaoDosBichos2 from "./imagens/revolucaoDosBichos2.png"


const instagramPosts = [
    {
      id: 1,
      imageUrl: arteUrbana,
      caption: "Artes Urbanas",
      postLink: "https://drive.google.com/file/d/1IYqGwwN6z_UdErImc5C9ZuCGHt8M_H6G/view?usp=sharing",
      autores: "Ana Luiza, Francisco Rafael, Heitor Barros, Heitor Oliveira, Rafael Castro, Rodrigo Isaac",
    },
    {
      id: 2,
     imageUrl: morteVidaEstrelas,
      caption: "Morte e Vida das Estrelas",
      postLink: "https://drive.google.com/file/d/1L_V5PEc0nfuLUmCNkeRijkCrGCNDieFY/view?usp=sharing",
      autores: "Ana Luiza, Francisco Rafael, Heitor Barros, Heitor Oliveira, Rafael Castro, Rodrigo Isaac",

    },
    {
      id: 3,
      imageUrl: revolcaoDosBichos,
      caption: "Revolução dos Bichos",
      postLink: "https://drive.google.com/file/d/1dkI2TfAtB7o826lkXO3d3CkaKIMs2qAf/view?usp=sharing",
      autores: "Ana Luiza, Francisco Rafael, Heitor Barros, Heitor Oliveira, Rafael Castro, Rodrigo Isaac",

    },
    {
      id: 4,
      imageUrl: arteNasCidades,
      caption: "Arte nas Cidades",
      postLink: "https://drive.google.com/file/d/1BME52RnfJGqAjm3TZAbHOXruUFYwwBG1/view?usp=sharing",
      autores: "Ana Beatriz, Antônio Marcos, Arthur Nunes, Carlos Evandro, José Tavares",


    },
    {
      id: 5,
      imageUrl: ondasEletromagneticas,
      caption: "Ondas Eletromagnéticas",
      postLink: "https://drive.google.com/file/d/1qgEZgfQAHJOESGFRLBKIyC6RfcEpnSni/view?usp=sharing",
      autores: "Ana Beatriz, Antônio Marcos, Arthur Nunes, Carlos Evandro, José Tavares",


    },
    {
      id: 6,
      imageUrl: revolucaoDosBichos2,
      caption: "Revolução dos Bichos",
      postLink: "https://drive.google.com/file/d/14VaseTX5Ipz-an-9XuU1DQcO38qFs7Ak/view?usp=sharing",
      autores: "Ana Beatriz, Antônio Marcos, Arthur Nunes, Carlos Evandro, José Tavares",


    },
  ];

export default function Metodologia(){
    return(
        <div className="cordeis">
        <h1>Nossos cordéis</h1>
        <div className="lista-de-cordeis">
        {instagramPosts.map(post => (
        <div key={post.id} className="post">
          <a href={post.postLink} target="_blank" rel="noopener noreferrer">
            <img src={post.imageUrl} alt={post.caption} />
            <p>Título: <b>{post.caption}</b></p>
            <p>Autores: <b>{post.autores}</b></p>
          </a>
        </div>
      ))}
          <hr className='linha-separacao'/>
            

        </div>
        </div>
        

        
    )
}