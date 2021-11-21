const PORT = 5000
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

app.get('/', (req, res) => {
    axios('https://www.leparisien.fr')
        .then(reponse => {
            const html = reponse.data
            const $ = cheerio.load(html)
            const articles = []

            $('.story-preview.story-text-bottom.text-right-for-mobile.flex-feed-unit', html).each(function () {
                const titre = $(this).find('.story-headline').text()
                const url = $(this).find('a').attr('href')
                articles.push({
                    titre,
                    url
                })
            })
            res.json(articles)
        }).catch(err => console.log(err))

})

app.listen(PORT, () => console.log(`serveur demarre sur le port ${PORT}`))

