const router = require('express').Router();
const passport = require('passport');

router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/signup', (req, res, next) => {
  res.render('signup');
});

router.get('/politica', (req, res, next) => {
  res.render('politica');
});

router.get('/deporte', (req, res, next) => {
  res.render('deporte');
});

router.get('/economia', (req, res, next) => {
  res.render('economia');
});

router.get('/variado', (req, res, next) => {
  res.render('variado');
});

router.get('/reportar', (req, res, next) => {
  res.render('reportar');
});

router.get('/perfil', (req, res, next) => {
  res.render('perfil');
});


router.get('/educacion', (req, res, next) => {
  res.render('educacion');
});

router.get('/salud', (req, res, next) => {
  res.render('salud');
});

router.post('/signup', passport.authenticate('local-signup', {
  successRedirect: '/secciones',
  failureRedirect: '/signup',
  failureFlash: true
})); 

router.get('/signin', (req, res, next) => {
  res.render('signin');
});


router.post('/signin', passport.authenticate('local-signin', {
  successRedirect: '/secciones',
  failureRedirect: '/signin',
  failureFlash: true
}));

router.get('/secciones',isAuthenticated, (req, res, next) => {
  res.render('secciones');
});

router.get('/logout', (req, res, next) => {
  req.logout();
  res.redirect('/');
});


function isAuthenticated(req, res, next) {
  if(req.isAuthenticated()) {
    return next();
  }

  res.redirect('/')
}


module.exports = router;
