const {Router} = require('express');
const router = router();

router.get('/views', (req, res) => {
    res.send("hola");
})
module.exports = router