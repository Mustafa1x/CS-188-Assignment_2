const Hapi = require('@hapi/hapi');
const uuid = require('uuid');
const Customer = require('./index.js');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    const customer1 = new customer(uuid.v4(),
     {
        firstName: 'John',
        lastName: 'Doe',
        email: 'John.Doe@drake.edu',
        customerId: 'randomid'
    };
    const customer2 = new customer(uuid.v4(),
     {
        firstName: 'Jack',
        lastName: 'Adam',
        email: 'Jack.Adam@drake.edu',
        customerId: 'randomidd'
    };

    let customers = [customer1, customer2];

    server.route({
        method: 'GET',
        path: '/customers/{customerId}',
        handler: (request, h) => {
            return crocodiles;
        }
        });

    server.route({
        method: 'GET',
        path: '/customers',
        handler: (request, h) => {
            const {customerId} = request.params;
            const customer = customers.find(cust) => (cust.customerId === customerId);

            if(!customer){
                return h.response().code(404);
            }

            return customer;
        }

    });

    server.route({
        method: 'post',
        path: '/customers',
        handler: (request, h) => {
            const customer = request.payload;
            const ifCustomerExists = customers.find(cust) => (cust.customerId === customer.customerId);

            if (ifCustomerExists) {
                return h.response(ifCustomerExists).code(303);
            } else {
                customers.push(customer);
                return h.response(customer).code(201)
            }
        }
    });

    server.route({
        method: 'DELETE',
        path: '/customers/{customerId}',
        handler: (request, h) => {
            const {customerId} = request.params;
            const customer = customers.find(cust) => (cust.customerId === customerId);

            if (!customer){
                return h.response().code(404);
            }

            let newCustomers = [];

            customers.forEach((cust) => {
                if (cust.customerId !== customerId){
                    newCustomers.push(cust);
                }
            });

            customers = newCustomers;

            return '';
        }
     });

    server.route({
        method: 'PUT',
        path: '/customers/{customerId}',
        handler: (request, h) => {
            const {customerId} =  request.params;
            const updatedCustomer = request.payload;

            if (customerId !== updatedCustomer.customerId){
                return h.response().code(409);
            }

            let newCustomers = [];

            customers.forEach((croc) => {
                if (cust.customerId === customerId){
                    newCustomers.push(updatedCustomer);
                } else {
                    newCustomers.push(cust);
                }
            });

            customers = newCustomers;

            return '';
        }

});
    await server.start();
    console.log('Server running on %s', server.info.uri);
};

console.log('item', item);
console.log('customer', customer);
process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
