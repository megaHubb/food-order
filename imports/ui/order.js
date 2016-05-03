import './order.html'
import { Resturants } from '../api/resturants.js'
import { Orders } from '../api/orders.js'
import {jsonize} from '../utils/jsonize.js'
import { Meteor } from 'meteor/meteor';


Template.order.helpers({
	resturants(){
		return Resturants.find({});
	}
});

Template.order.events({
	'submit '(event){
		event.preventDefault();
		target = event.target;
	    order = jsonize(target);
    	Meteor.call('order.insert',order);
    	target.order_dtails = '';
	},
});