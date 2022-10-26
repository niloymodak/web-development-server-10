const express = require('express')
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json')
const course = require('./data/courses.json')

app.get('/', (req, res) => {
    res.send('Learning Api Running!')
});

app.get('/course-categories', (req, res) => {
    res.send(categories)
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    const category_course = course.filter(c => c.category_id === id);
    res.send(category_course);
})

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = course.find(c => c._id === id);
    res.send(selectedCourse);
})



app.listen(port, () => {
    console.log(`Learning platform on port`, port);
})