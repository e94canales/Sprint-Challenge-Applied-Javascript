// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.
const cardContainer = document.querySelector('.cards-container')

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then ( response => {
        let articles = response.data.articles
        // console.log(articles);
        Object.keys(articles).forEach( key => {
            // console.log(key);
            
            articles[key].forEach( obj => {                
                cardContainer.appendChild(createCard(obj))                
            })

            
        }) 

    })
    .catch ( error => {
        console.log('error', error);
        
    })


function createCard (data) {
    const card = document.createElement('div')
        card.classList.add('card', 'hide', 'show')

    const headline = document.createElement('div')
        headline.classList.add('headline')
        headline.textContent = data.headline
        card.appendChild(headline)

    const author = document.createElement('div')
        author.classList.add('author')
        card.appendChild(author)

    const imgContainer = document.createElement('div')
        imgContainer.classList.add('img-container')
        author.appendChild(imgContainer)

    const authorImg = document.createElement('img')
        authorImg.src = data.authorPhoto
        imgContainer.appendChild(authorImg)

    const authorName = document.createElement('span')
        authorName.textContent = `By: ${data.authorName}`
        author.appendChild(authorName)

    return card
}

