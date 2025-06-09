var express = require("../controllers/personalidadeController");
const { route } = require("./teste");
var router = express.Router();

router.post("/listar", function (req, res) {
    personalidadeController.listar(req, res);    
});

module.exports = router;
