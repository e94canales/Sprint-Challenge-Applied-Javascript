// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

let headerContainer = document.querySelector('.header-container')
headerContainer.appendChild(header())
function header(headerData) {
    const header = document.createElement('header')
        header.classList.add('header')

    const date = document.createElement('span')
        date.classList.add('date')
        date.textContent = 'MARCH 28, 2019'
        header.appendChild(date)

    const title = document.createElement('h1')
        title.textContent = 'Lambda Times'
        header.appendChild(title)
        
    const temperature = document.createElement('span')
        temperature.classList.add('temp')
        temperature.textContent = '98°'
        header.appendChild(temperature)

    return header

    
}