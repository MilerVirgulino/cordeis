import arteUrbana from "./imagens/arteUrbana.png"
import morteVidaEstrelas from "./imagens/morteVidaEstrelas.png"
import revolcaoDosBichos from './imagens/revolucaodosbichos.png'
import arteNasCidades from "./imagens/artesNasCidades.png"
import ondasEletromagneticas from "./imagens/ondasEletromagneticas.png"
import revolucaoDosBichos2 from "./imagens/revolucaoDosBichos2.png"
import musicasBrasileiras from './imagens/muscasbrasileiras.png'
import missoesEspaciais from './imagens/missoesEspaciais.png'
import revolucaoDosBichos3 from './imagens/revoloucaodosbichos3.png'
import acustica from './imagens/acustica.png'
import teatro from './imagens/teatro.png'
import revolucaoDosBichos4 from './imagens/revolucaodosbichos4.png'


const autores = ['Ana Luiza, Francisco Rafael, Heitor Barros, Heitor Oliveira, Rafael Castro, Rodrigo Isaac',
  'Ana Beatriz, Antônio Marcos, Arthur Nunes, Carlos Evandro, José Tavares',
  'Davi Daniel, João Vitor, Maria Júlia, Sophia Barros, Vitor Inácio', 'Eduardo Souza, Gabriel Fuentes, Giulia Pereira João Gabriel, Renato Reis']
const instagramPosts = [
    {
      id: 1,
      imageUrl: arteUrbana,
      caption: "Artes Urbanas",
      postLink: "https://drive.google.com/file/d/1IYqGwwN6z_UdErImc5C9ZuCGHt8M_H6G/view?usp=sharing",
      autores: autores[0],
    },
    {
      id: 2,
     imageUrl: morteVidaEstrelas,
      caption: "Morte e Vida das Estrelas",
      postLink: "https://drive.google.com/file/d/1L_V5PEc0nfuLUmCNkeRijkCrGCNDieFY/view?usp=sharing",
      autores: autores[0],

    },
    {
      id: 3,
      imageUrl: revolcaoDosBichos,
      caption: "Revolução dos Bichos",
      postLink: "https://drive.google.com/file/d/1dkI2TfAtB7o826lkXO3d3CkaKIMs2qAf/view?usp=sharing",
      autores: autores[0],

    },
    {
      id: 4,
      imageUrl: arteNasCidades,
      caption: "Arte nas Cidades",
      postLink: "https://drive.google.com/file/d/1BME52RnfJGqAjm3TZAbHOXruUFYwwBG1/view?usp=sharing",
      autores: autores[1],


    },
    {
      id: 5,
      imageUrl: ondasEletromagneticas,
      caption: "Ondas Eletromagnéticas",
      postLink: "https://drive.google.com/file/d/1qgEZgfQAHJOESGFRLBKIyC6RfcEpnSni/view?usp=sharing",
      autores: autores[1],


    },
    {
      id: 6,
      imageUrl: revolucaoDosBichos2,
      caption: "Revolução dos Bichos",
      postLink: "https://drive.google.com/file/d/14VaseTX5Ipz-an-9XuU1DQcO38qFs7Ak/view?usp=sharing",
      autores: autores[1],


    },
    {
      id: 7,
      imageUrl: musicasBrasileiras,
      caption: "Músicas Brasileira",
      postLink: "https://drive.google.com/file/d/19bBcDrJNK_HtTVsYjvZIAGjrJU8gpobS/view?usp=sharing",
      autores: autores[2],


    },
    {
      id: 8,
      imageUrl: missoesEspaciais,
      caption: "Missões Espaciais",
      postLink: "https://drive.google.com/file/d/1ekXRfCu97Ra6bDEwEs9EWYvFieN17EZd/view?usp=sharing",
      autores: autores[2],


    },
    {
      id: 9,
      imageUrl: revolucaoDosBichos3,
      caption: "A Revolução dos Bichos",
      postLink: "https://drive.google.com/file/d/1o3vvNzcCTdW_DmZgpIUwrLCsSE9XtALF/view?usp=sharing",
      autores: autores[2],


    },
    {
      id: 10,
      imageUrl: acustica,
      caption: "Acústica",
      postLink: "https://drive.google.com/file/d/1hdKDOWDdXf8erlrY8Ce59OJqkolBMMp7/view?usp=sharing",
      autores: autores[3],


    },
    {
      id: 11,
      imageUrl: teatro,
      caption: "Teatro",
      postLink: "https://drive.google.com/file/d/1kt0R0dsACVimgAZlyrNyg4SkVe2DhMyb/view?usp=sharing",
      autores: autores[3],


    },
    {
      id: 12,
      imageUrl: revolucaoDosBichos4,
      caption: "A Revolução dos Bichos",
      postLink: "https://drive.google.com/file/d/1La15ckf7SGDn-2VsrhAkQkVB90bV49_w/view?usp=sharing",
      autores: autores[3],


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