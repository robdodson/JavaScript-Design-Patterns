"use strict";

function Admin() {
	console.log('Admin created!');
}

function Customer() {
	console.log('Customer created!');
}

var UserFactory = {};
UserFactory.createUser = function(type) {
    if (type == 'admin') {
        return new Admin();
    } else if (type == 'customer') {
        return new Customer();
    }
};

var customer = UserFactory.createUser('admin');
var customer = UserFactory.createUser('customer');