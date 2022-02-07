const res = require("express/lib/response");

/**
 * GET /
 * homepage
 */
exports.homepage = async(req, res)=>{
    res.render('index', { title: "homepage" });
}