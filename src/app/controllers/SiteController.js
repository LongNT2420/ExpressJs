const Course = require('../models/Course');

class SiteController {
    home(req,res,next){
        Course.find({})
            .then(course=>res.render('home'))
            .catch(next);
    }
    search(req,res){
        res.render('search');
    }
}

module.exports = new SiteController;