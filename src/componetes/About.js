import imagemLaterais from "./imagens/cordeisfamosos-capa.png";  // Imagem de fundo
export default function About(){
    return(
        <div>

    <div className="imagem-container" style={{ backgroundImage: `url(${imagemLaterais})` }}>
      
    </div>
    <div className="parceiros">
        <h2>Nossa Escola</h2>
        <p className="nosso-projeto">Localizado em Serra Talhada, na Avenida Sérgio Magalhães, 
            o Colégio Primeira Classe é uma instituição de ensino que se destaca pela qualidade acadêmica e pelo compromisso com a formação integral dos seus alunos. Atendemos turmas desde a Educação Infantil até o Pré-Vestibular, oferecendo um ambiente acolhedor, moderno e voltado para 
            o desenvolvimento de competências essenciais para o século XXI.</p>
            <p className="nosso-projeto">Utilizamos o sistema SAS de ensino, 
            que integra material didático de excelência com plataformas digitais 
            inovadoras, proporcionando uma aprendizagem dinâmica e conectada com as 
            exigências atuais.</p>
            
            <p className="nosso-projeto">Nosso corpo 
            docente é formado por professores graduados e mestres, 
            comprometidos com a educação de qualidade e com o sucesso de cada estudante. </p>
           <p className="nosso-projeto"> Para saber mais, acesse nosso site:</p>
            
            <a href="https://colegioprimeiraclasse.com.br" target="_blank">🌐 colegioprimeiraclasse.com.br</a>
        <hr className='linha-separacao'/>
    </div>
   
    
    
    </div>
    )
}