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

    async edit(req, res) {
        var plan = await PlansService.getById(req.params.id);


        res.render("plans/edit", { plan, title_msg: req.flash("title_msg"), list_msg: req.flash("list_msg"), client_msg: req.flash("client_msg"), value_msg: req.flash("value_msg") });
    }

    async update(req, res) {
        var {
            title,
            list,
            client,
            value,
            imports,

            id
        } = req.body;
        var plan = { title, list, client, value, import: imports }
        var result = await PlansService.update(id, plan);


        if (result == true) {
            res.redirect("/admin/plans")
        } else {
            req.flash('title_msg', result.title_msg);
            req.flash("list_msg", result.list_msg);
            req.flash('client_msg', result.client_msg);
            req.flash("value_msg", result.value_msg);
            res.redirect("/admin/plans/edit" + id)
        }

    }

    async deactivate(req, res) {
        var id = req.params.id;

        await PlansService.deactivate(id);
        res.redirect("/admin/plans")

    }

}


module.exports = new PlansController();
module.exports = new PlansController();