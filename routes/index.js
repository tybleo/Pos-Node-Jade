var express = require('express');
var router = express.Router();
var fixtures = require('../models/fixtures');
var Order = require('../models/order');
var _ = require('lodash');
var moment = require('moment');

/* GET home page. */

router.get('/', function(req, res) {
    res.render('index', { title: '首页' , view: 'home', active: {home: true}});
});

router.get('/list', function(req, res) {
    res.render('list', { title: '商品列表' , view: 'list', active: {list: true}, list: fixtures.loadAllItems()});
});

router.get('/cart', function(req, res) {
    res.render('loading', { title: '购物车' , view: 'cart', active: {cart: true}});
});

router.get('/payment', function(req, res) {
    res.render('loading', { title: '付款', view: 'payment', active: {}})
});

module.exports = router;
