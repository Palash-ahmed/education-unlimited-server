const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./Data/courses.json');
const details = require('./Data/details.json');

app.get('/', (req, res)=> {
    res.send('Course Details API running');
});

app.get('/course-category', (req, res)=>{
    res.send(courses)
});

app.get('/course/:id', (req, res)=>{
    const id = req.params.id;

    if(id === '08'){
        res.send(details);
    }
    else{
        const course_details = details.filter(detail=> detail.category_id === id);
        res.send(course_details);
    }
})

app.get('/details', (req, res)=>{
    res.send(details);
})

app.get('/details/:id', (req, res)=> {
    const id = req.params.id;
    const courseDetails= details.find(detail => detail._id === id);
    res.send(courseDetails);
})

app.listen(port, ()=>{
    console.log('Education Unlimited server running on port', port);
})