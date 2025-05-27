import miler from './imagens/miler.jpg'
import cecilia from './imagens/cecilia.jpg'

export default function Contact(){

    return(
        <div className="professores">
            <h2> Professores responsáveis</h2>
            <p> Quem são os mestres por trás dessa jornada? </p>

            <div className="professor1">
                <h2>Profª Ana Cecília – A Guardiã das Palavras</h2>
                <img src={cecilia}/>
                <p className="nosso-projeto"> Formada em Letras, nossa querida Profª Ana Cecília é a maga da gramática e a poeta das ideias. Foi dela a centelha criativa que inspirou a turma a transformar
                     conteúdos escolares em literatura de cordel. Com olhar atento, revisou os textos, lapidou as rimas e organizou cada detalhe com o capricho de quem acredita na arte e no poder da educação. </p>
            </div>

            <div className="professor1">
                <h2>Prof. Miler Virgulino – O Cientista dos Versos</h2>
                <img src={miler}/>
                <p className="nosso-projeto"> Formado em Física e mestre no ensino dela, o Prof. Miler é mais do que um educador: é um verdadeiro alquimista das palavras científicas! Foi ele quem nos ajudou a colocar a Física dentro dos cordéis, 
                    como quem coloca estrela em garrafa. Além disso, foi o programador do nosso universo digital — desenvolvendo o site onde você está agora, abrindo as portas para o mundo ver nosso trabalho. </p>
            </div>
            
            
        </div>
    )
}