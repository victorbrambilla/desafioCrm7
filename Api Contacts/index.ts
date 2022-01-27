import * as dotenv from 'dotenv'

import express from 'express'
import cors from 'cors'
import * as note from './controllers/note'
dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())
const PORT = 4000

app.use(express.static('www'))


app.get('/notes', note.list)
app.post('/notes', note.create)
app.put('/notes', note.update)
app.delete('/notes', note.remove)


//app.listen(PORT, () => {
  //console.log(`⚡️[server]: API rodando em http://localhost:${PORT}`)
//})
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode");
});