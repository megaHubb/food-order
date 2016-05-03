import './view_resturants.html'
import { Resturants } from '../api/resturants.js'


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