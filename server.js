const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 9000

app.use(cors())

const presidents = {
    'obama': {
        'fullName': 'Barack Obama',
        'birthLocation': 'Hawaii, USA',
        'age': 60
    },
    'biden': {
        'fullName': 'Joe Biden',
        'birthLocation': 'Delaware, USA',
        'age': 82
    },
    'unknown': {
        'fullName': 'unknown',
        'birthLocation': 'unknown',
        'age': 0
    }
}


app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:lastName', (request, response) => {
    const presidentName = request.params.lastName.toLocaleLowerCase()
    if (presidents[presidentName]){
        response.json(presidents[presidentName])
    }else{
        response.json(presidents['unknown'])
    }

})

app.listen(process.env.PORT || PORT, () =>{
    console.log(`The server is now running on port ${PORT}!`)
})