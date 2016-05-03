import './view_resturants.html'
import { Resturants } from '../api/resturants.js'
import { ReactiveDict } from 'meteor/reactive-dict';


Template.body.onCreated(function bodyOnCreated() {
  this.state = new ReactiveDict();
  Meteor.subscribe('resturants');
});
  
Template.body.helpers({
	resturants(){
		return Resturants.find({});
	},
	
});

Template.resturantView.helpers({
	
	is_owner() {
	    return (this.owner === Meteor.userId());
  },
});


Template.body.events({
	'click .remove'(){
		Meteor.call('resturant.remove',this._id);
	}

});