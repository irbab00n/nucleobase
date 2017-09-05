const express = require('express');
const middleware = require('../middleware');

const router = express.Router();

router.route('/')
  .get(middleware.auth.verify, (req, res) => {
    res.render('index.ejs', {
      user: req.user
    });
  });

router.route('/edit')
  .get(middleware.auth.verify, (req, res) => {
    res.render('index.ejs', {
      user: req.user
    });
  });

router.route('/schedule')
  .get(middleware.auth.verify, (req, res) => {
    res.render('index.ejs', {
      user: req.user
    });
  });

router.route('/trainers')
  .get(middleware.auth.verify, (req, res) => {
    res.render('index.ejs', {
      user: req.user
    });
  });

router.route('/clients')
  .get(middleware.auth.verify, (req, res) => {
    res.render('index.ejs', {
      user: req.user
    });
  });

module.exports = router;