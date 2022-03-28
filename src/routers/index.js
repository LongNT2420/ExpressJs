const NewRouter = require('./news');
const SiteRouter = require('./site')
function route(app){

    // app.get('/home', function (req, res) {
    //     res.render('home');
    // });
    app.get('/',SiteRouter);

    app.get('/news/:id',NewRouter);
    app.get('/news',NewRouter);

    app.get('/search',SiteRouter);
    
    // app.post('/search', function (req, res) {
    //     console.log(req.body);
    //     res.send('');
    // });
}

module.exports = route;