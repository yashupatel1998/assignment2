let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
/* Projects page. */
/* GET Route for displaying the Login page */
router.get('/', function(req, res, next) {
    res.render('content_pages/home_page', { title: 'Home'});
  });
  
  /* home page. */
  router.get('/home', function(req, res, next) {
    res.render('content_pages/home_page', { title: 'Home'});
  });
  
  /* About Us page. */
  router.get('/about', function(req, res, next) {
    res.render('content_pages/about_page', { title: 'About'});
  });
  
  /* Projects page. */
  router.get('/projects', function(req, res, next) {
    res.render('content_pages/project', { title: 'Projects'});
  });
  
  /* GET Services page. */
  router.get('/services', function(req, res, next) {
    res.render('content_pages/service.ejs', { title: 'Services'});
  });
  
  /*  Contact Us page. */
  router.get('/contact', function(req, res, next) {
    res.render('content_pages/contact', { title: 'Contact'});
  });
  
router.get('/login', indexController.displayLoginPage);

/* POST Route for processing the Login page */
router.post('/login', indexController.processLoginPage);

/* GET Route for displaying the Register page */
router.get('/register', indexController.displayRegisterPage);

/* POST Route for processing the Register page */
router.post('/register', indexController.processRegisterPage);

/* GET to perform UserLogout */
router.get('/logout', indexController.performLogout);

module.exports = router;
