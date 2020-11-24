const PlansService = require("../services/PlansService")

class PlansController {

    //INDEX
    async index(req, res) {
        var plans = await PlansService.getAll();
        res.render("plans/index", { plans: plans });


    }

    //VIEW CREATE PLAN
    create(req, res) {
        res.render("plans/create", { title_msg: req.flash("title_msg"), list_msg: req.flash("list_msg"), client_msg: req.flash("client_msg"), value_msg: req.flash("value_msg") });
    }


    // SAVE PLAN
    async store(req, res) {

        var { title, list, client, value, imports } = req.body;

        var plan = { title, list, client, value, import: imports }

        var result = await PlansService.store(plan);

        if (result == true) {

        } else {
            req.flash('title_msg', result.title_msg);
            req.flash("list_msg", result.list_msg);
            req.flash('client_msg', result.client_msg);
            req.flash("value_msg", result.value_msg);
            res.redirect("/admin/plans/create")

        }

    }

    edit(req, res) {
        res.render("plans/edit");
    }

}


module.exports = new PlansController();