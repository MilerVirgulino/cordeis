import React from "react";
import imagemCabeca from "./imagens/image.png";  // Imagem principal
import imagemLaterais from "./imagens/laterais.jpg";  // Imagem de fundo
import InstagramFeed from "./InstagramFeed";
import Parceiros from "./Parceiros";
import Missao from "../Missao";
export default function Home() {
  return (
    <div>

    <div className="imagem-container" style={{ backgroundImage: `url(${imagemLaterais})` }}>
      <img className="imagem-cabeca" src={imagemCabeca} alt="Imagem de exemplo" />
    </div>
    <div className="parceiros">
        <Parceiros/>
        <hr className='linha-separacao'/>
    </div>
    <div className="nossamissao">
        <Missao/>
        <hr className='linha-separacao'/>

    </div>
    <div className="instagram-posts">
        <InstagramFeed/>
    </div>
    
    </div>
    
  );
}
