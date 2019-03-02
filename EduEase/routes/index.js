'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'EduEase' });
});

router.post('/sl', (req, res, next) => {

    return res.render('studentLogin', { title: 'EduEase' });

});

router.post('/ss', (req, res, next) => {

    return res.render('studentSignup', { title: 'EduEase' });

});

router.post('/tl', (req, res, next) => {

    return res.render('teacherLogin', { title: 'EduEase' });

});

router.post('/ts', (req, res, next) => {

    return res.render('teacherSignup', { title: 'EduEase' });

});

router.post('/SignupTeacher', function (req, res) {

    //TODO
    res.render('teacherLogin', { title: 'Express Pool' });

});

router.post('/SignupStudent', function (req, res) {

    //TODO
    res.render('studentLogin', { title: 'Express Pool' });

});

router.post('/loginStudent', function (req, res) {
    console.log("Inside Login Student")
    res.render('student', { title: 'Express Pool' });

});

router.post('/loginTeacher', function (req, res) {
    res.render('teacher', { title: 'Express Pool' });

});

module.exports = router;
