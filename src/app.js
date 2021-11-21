const feedDisplay = document.querySelector('#actus')

fetch('http://localhost:5000/')
    .then(reponse => {
                       return reponse.json()
                     }
         )
    .then(data => {
                data.forEach(articleData => {
                    const article =
                    `<div class="col-xs-6 col-md-4">
                    <h3><a target="_blank" href=https:` + articleData.url + `>` + articleData.titre + `</a>
                    </h3></div>`
                    feedDisplay.insertAdjacentHTML("beforeend", article)
                })
    })
    .catch(err => console.log(err))


