const Database = require("../models/index");

class PlansService {

    constructor() {
        this.Plan = Database["Plan"];
    }

    async getAll() {
        try {
            return await this.Plan.findAll();
        } catch (error) {

            return undefined;
        }
    }

    async getByAll() {
        try {
            return await this.Plan.findAll();
        } catch (error) {

            return undefined;
        }
    }

    async store(plans) {

        var errors = {};

        if (plans.import != undefined) {
            plans.import = true;
        } else {
            plans.import = false;
        }

        var isValid = this.validate(plans, errors);

        if (isValid) {

            try {
                await this.Plan.create(plans);
                return true;
            } catch (error) {
                errors.system_msg = "Nao foi possivel salvar o plano!";
                return errors;

            }
        } else {
            return errors;
        }


    }

    validate(plan, errors) {
        var errorCount = 0;

        //title validation
        if (plan.title == undefined) {
            errors.title_msg = " Título inválido!";
            errorCount++;
        } else {
            if (plan.title.length < 3) {
                errors.title_msg = "Título inválido!"
                errorCount++;
            }
        }

        //List validation
        if (plan.list == undefined) {
            errors.list_msg = "Quantidade de lista inválida!"
            errorCount++;
        } else {
            if (plan.list < 1) {
                errors.list_msg = "Quantidade de lista inválida!"
                errorCount++;
            }
        }
        //Cliente validation

        if (plan.client == undefined) {
            errors.cliente_msg = "Quantidade de Cliente inválida "
            errorCount++;
        } else {
            if (plan.cliente < 1) {

                errors.cliente_msg = "Quantidade de Cliente inválida "
                errorCount++;
            }
        }
        //Value Validation

        if (plan.value == undefined) {
            errors.value_msg = "Valor inválido"
            errorCount++;
        } else {
            if (plan.value < 1000) {
                errors.value_msg = "Valor inválido"
                errorCount++;
            }
        }


        if (errorCount == 0) {
            return true;
        } else {
            return false;
        }
    }


}

module.exports = new PlansService();