class NewController {
    index(req,res){
        res.render('news')
    }
    // NEW/DETAILS
    show(req,res) {
        res.send('NEW DETAILS')
    }
}

module.exports = new NewController;