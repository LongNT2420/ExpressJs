const NewRouter = require('./news');
const SiteRouter = require('./site')
function route(app){

    app.get('/', function (req, res) {
        res.render('home');
    });

    app.use('/news',NewRouter);
    app.use('/search',SiteRouter);
}

module.exports = route;