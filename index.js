require('dotenv').config()
const express = require('express')


const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/instagram', (req,res) =>{ 
    res.send("_alifaizal_") 
})

app.get('/login' , (req,res) =>{

    res.send('<h1>Welcome to Login page</h1>')
})

app.get('/about-us', (req,res) =>{
    res.send('<p>Web development involves creating and maintaining websites, encompassing aspects like web design, web publishing, web programming, and database management. It includes frontend development, which focuses on user interface and experience using HTML, CSS, and JavaScript, and backend development, which handles server-side logic, databases, and application functionality using languages like Python, Ruby, or PHP. Effective web development combines aesthetic design, functionality, and performance to create seamless and engaging online experiences.</p>')
})

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${port}`)
})