import imagemLaterais from "./imagens/cordeisfamosos-capa.png";  // Imagem de fundo
import Parceiros from "./Parceiros";
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
