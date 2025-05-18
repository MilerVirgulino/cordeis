const instagramPosts = [
    {
      id: 1,
      imageUrl: "https://placehold.co/300x400",
      caption: "A Força Invisível que Move o Sertão",
      postLink: "https://drive.google.com/file/d/1ZGf86uWx6wtHtkO4C6QPqVx6SZwvOSz8/view?usp=drive_link",
      autores: "Vanessa, Marcos, Bruno",
    },
    {
      id: 2,
      imageUrl: "https://placehold.co/300x400",
      caption: "Do Lampião à Lâmpada: Luz na Ponta do Verso",
      postDate: "2024-12-08T14:00:00Z",
      postLink: "https://www.instagram.com/p/ExemploLink2",
      autores: "Vanessa, Marcos, Bruno",

    },
    {
      id: 3,
      imageUrl: "https://placehold.co/300x400",
      caption: "No Compasso da Tabuada, o Matuto Vira Doutor",
      postDate: "2024-12-07T09:00:00Z",
      postLink: "https://www.instagram.com/p/ExemploLink3",
      autores: "Vanessa, Marcos, Bruno",

    },
    {
      id: 4,
      imageUrl: "https://placehold.co/300x400",
      caption: "Quando o Vento Sopra Ciência: o Matuto e o Moinho",
      postDate: "2024-12-06T16:00:00Z",
      postLink: "https://www.instagram.com/p/ExemploLink4",
      autores: "Vanessa, Marcos, Bruno",

    }
  ];

export default function Metodologia(){
    return(
        <div className="cordeis">
        <h1>Nossos cordeis</h1>
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