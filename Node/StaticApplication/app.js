const express = require('express');
const { engine } = require('express-handlebars')
const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

const port = 3000;
app.listen(port,()=>{
    console.log(`Listening on the url http://localhost:${port}`)
})

app.get('/',(req,res)=>{
    res.render('home',{title: 'Home - best portfolio'})
});
app.get('/about',(req,res)=>{
    res.render('about',{title: 'about - ArmaantechDeveloper'})
})
app.use((req, res, next) => {
    res.render('404',{title: 'page not found'})
})