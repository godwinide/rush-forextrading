const router = require("express").Router();

router.get("/", (req, res) => {
    try {
        return res.render("index", { pageTitle: "Welcome", req });
    }
    catch (err) {
        return res.redirect("/");
    }
});

router.get("/support", (req, res) => {
    try {
        return res.render("contact", { pageTitle: "Contact", req });
    }
    catch (err) {
        return res.redirect("/");
    }
});

router.get("/about", (req, res) => {
    try {
        return res.render("about", { pageTitle: "About", req });
    }
    catch (err) {
        return res.redirect("/");
    }
});

router.get("/faq", (req, res) => {
    try {
        return res.render("faq", { pageTitle: "About", req });
    }
    catch (err) {
        return res.redirect("/");
    }
});

router.get("/rep", (req, res) => {
    try {
        return res.render("rep", { pageTitle: "About", req });
    }
    catch (err) {
        return res.redirect("/");
    }
});

router.get("/rules", (req, res) => {
    try {
        return res.render("rules", { pageTitle: "About", req });
    }
    catch (err) {
        return res.redirect("/");
    }
});





module.exports = router;