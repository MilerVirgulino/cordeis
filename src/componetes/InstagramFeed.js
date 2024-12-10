import React from 'react';

// Simulação do JSON com as postagens
const instagramPosts = [
  {
    id: 1,
    imageUrl: "https://via.placeholder.com/1080x566",
    caption: "Aprendendo matemática de uma maneira divertida! #Matematica #Escola",
    postDate: "2024-12-09T10:00:00Z",
    postLink: "https://www.instagram.com/p/ExemploLink1",
  },
  {
    id: 2,
    imageUrl: "https://via.placeholder.com/1080x566",
    caption: "Nova turma de álgebra iniciando! #Matematica #NovosAlunos",
    postDate: "2024-12-08T14:00:00Z",
    postLink: "https://www.instagram.com/p/ExemploLink2",
  },
  {
    id: 3,
    imageUrl: "https://via.placeholder.com/1080x566",
    caption: "Nosso evento de ciências! 🧑‍🔬 #Ciência #EscolaDeMatematica",
    postDate: "2024-12-07T09:00:00Z",
    postLink: "https://www.instagram.com/p/ExemploLink3",
  },
  {
    id: 4,
    imageUrl: "https://via.placeholder.com/1080x566",
    caption: "Preparando os alunos para os desafios do futuro! 🚀 #MatematicaParaTodos",
    postDate: "2024-12-06T16:00:00Z",
    postLink: "https://www.instagram.com/p/ExemploLink4",
  }
];

export default function InstagramFeed() {
  return (
    <div className="instagram-feed">
      
      {instagramPosts.map(post => (
        <div key={post.id} className="post">
          <a href={post.postLink} target="_blank" rel="noopener noreferrer">
            <img src={post.imageUrl} alt={post.caption} />
            <p>{post.caption}</p>
          </a>
        </div>
      ))}
          <hr className='linha-separacao'/>
    </div>
  );
}
