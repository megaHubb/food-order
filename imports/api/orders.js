import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { Resturants } from '../api/resturants.js'

export const Orders = new Mongo.Collection('orders');

Meteor.methods({
  'order.insert'(order) {
 
    // Make sure the user is logged in before inserting a task
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Orders.insert({
      order: order.order_dtails,
      resturant_id: order.resturant,
      resturant_name: Resturants.findOne(order.resturant).name,
      createdAt: new Date(),
      owner: this.userId,
      username: Meteor.users.findOne(this.userId).profile.name,
    });

  },
  
});