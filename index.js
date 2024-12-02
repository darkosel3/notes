
const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.static('dist'))
const Note = require('./models/note');

app.use(express.json())


  const PORT = process.env.PORT || 3001
  app.listen(PORT, ()=>{
    console.log(`Server running port ${PORT}`)
  })

  app.get('/api/notes', (request, response) => {
     Note.find({}).then(notee =>{
      response.json(notee)
    })
  })

  app.get('/api/notes/:id',(request,response) => {
    const id = request.params.id
    const note = notes.find(note => note.id == id)
    response.json(note).status(200)        
  })

app.post('/api/notes',(request,response) => {
    const randomId = Math.floor(1 + Math.random() * 1000000).toString()
    const note = {
        id: randomId,
        content: request.body.content,
        important: false
    }
    notes = notes.concat(note)
    response.json(note)
})
app.put('/api/notes/:id',(request,response)=> {
    notes.map(note => note.id == request.params.id ? request.body : note)
    if(notes.find(note=> note.id == request.params.id)){
        response.json(request.body)
    }
})


app.put('/api/notes')