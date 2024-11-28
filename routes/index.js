const express = require('express')
const router = express.Router()

// @DESC LOGIN/LANDING PAGE
// @ROUTE GET /

router.get('/', (req, res) => {
    res.render('login')
})

// @DESC DASHBOARD
// @ROUTE GET /dashboard

router.get('/dashboard', (req, res) => {
    res.render('dashboard')
})

module.exports = router