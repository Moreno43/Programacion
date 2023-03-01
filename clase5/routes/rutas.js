const {Router} = require('express')

const router = Router()

router.get("/help/", (req, res) => {
    res.render("home")
})
router.get("/web/:nombre", (req, res) => {
    res.render("web", {nombre: req.params.nombre})
})
routes.get("/info", (req, res) => {
  res.send("hola desde info");
});
module.exports = router;