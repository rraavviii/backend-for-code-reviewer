const express = require('express');
const aiRoutes=require('./routes/ai.routes')
const cors=require('cors')
const app=express()


app.use(cors({
    origin: "https://your-frontend-url.vercel.app", 
    methods: "GET,POST",
    credentials: true
  }));

app.use(express.json())
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
app.use('/ai',aiRoutes)

module.exports=app;