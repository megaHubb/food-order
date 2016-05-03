import './edit_resturant.html'
import { Resturants } from '../api/resturants.js'
import {jsonize} from '../utils/jsonize.js'

Template.editResturant.events({
	'submit '(event){
		event.preventDefault();
		target = event.target;
		resturant = jsonize(target);
    	Meteor.call('resturant.update',resturant);
		$('.modal').modal('hide');
	},

});