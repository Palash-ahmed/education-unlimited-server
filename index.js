const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./Data/courses.json');

app.get('/', (req, res)=> {
    res.send('Course Details API running');
});

app.get('/all-courses', (req, res)=>{
    res.send(courses)
})

app.listen(port, ()=>{
    console.log('Education Unlimited server running on port', port);
})