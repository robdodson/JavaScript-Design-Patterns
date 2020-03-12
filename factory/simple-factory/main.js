'use strict'

function Admin() {
  console.log('Admin created!')
}

function Customer() {
  console.log('Customer created!')
}

const UserFactory = {}
UserFactory.createUser = function(type) {
  const allTypes = {
    admin: Admin,
    customer: Customer
  }
  return new allTypes[type]()
}

var customer = UserFactory.createUser('admin')
var customer = UserFactory.createUser('customer')
