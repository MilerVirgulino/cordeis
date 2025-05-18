import React from "react";
import imagemCabeca from "./imagens/image.png";  // Imagem principal
import imagemLaterais from "./imagens/cordeisfamosos-capa.png";  // Imagem de fundo
import InstagramFeed from "./InstagramFeed";
import Parceiros from "./Parceiros";
import Missao from "../Missao";
export default function Home() {
  return (
    <div>

    <div className="imagem-container" style={{ backgroundImage: `url(${imagemLaterais})` }}>
      
    </div>
    <div className="parceiros">
        <Parceiros/>
        <hr className='linha-separacao'/>
    </div>
   
    
    
    </div>
    
  );
}
