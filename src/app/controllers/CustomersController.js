import Customer from "../models/Customer"

class CustomersController{
    constructor(){
        this.customers = [
            {id: 1, name: "Will Github", site: "https://github.com/CancianiWill"},
            {id: 2, name: "Google", site: "http://google.com"},
            {id: 3, name: "UOL", site: "http://uol.com.br"}
        ];
    }

    // listagem
    async index(req, res) {
        const data = await Customer.findAll({
            limit: 1000,
        });
        return res.json(data)
    }

    // mostra um Costumer 
    show(req, res) {
        const id = parseInt(req.params.id);
        const customer = this.customers.find(item => item.id === id);
        const status = customer ? 200 : 404;

        return res.status(status).json(customer);
    }

    // cria um novo Costumer
    create(req, res) {
        const {name, site} = req.body;
        const id = this.customers[this.customers.length -1].id + 1;
        
        const newCustomer = {id, name, site};
        customers.push(newCustomer);
        
        return res.status(201).json(newCustomer);
    }

    // atualiza um Costumer
    update(req, res) {
        const id = parseInt(req.params.id);
        const {name, site} = req.body;

        const index = this.customers.findIndex(item => item.id === id);
        const status = index >= 0 ? 200 : 404;

        if(index >= 0) {
            this.customers[index] = {id: parseInt(id), name, site};
        }
        return res.status(status).json(this.customers[index]);
    }

    // exclui um Costumer 
    destroy(req, res) {
        const id = parseInt(req.params.id);
        const index = this.customers.findIndex(item => item.id === id);
        const status = index >= 0 ? 200 : 404;

        if (index >= 0) {
        this.customers.splice(index, 1)
        }
        return res.status(status).json();

    }
}

export default new CustomersController();