const express = require('express');
const middleware = require('../middleware');

const router = express.Router();

router.route('/')
  .get(middleware.auth.verify, (req, res) => {
    res.render('index.ejs');
  });

router.route('/profile')
  .get(middleware.auth.verify, (req, res) => {
    res.render('index.ejs');
  });

module.exports = router;