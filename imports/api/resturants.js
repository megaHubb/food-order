import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Resturants = new Mongo.Collection('resturants');


Meteor.methods({
	'resturant.add'(resturant){
		if( !this.userId){
			throw new Meteor.Error('not-authorized');
		}
		Resturants.insert({
			name:resturant.name,
			address:resturant.address,
			phone:resturant.phone,
			createdAt: new Date(),
		    owner: this.userId,
		    username: Meteor.users.findOne(this.userId).profile.name,
		});
	},
	'resturant.remove'(resturantId){
		check(resturantId, String);
	    Resturants.remove(resturantId);
	},
	'resturant.update'(resturant){
		if( !this.userId){
			throw new Meteor.Error('not-authorized');
		}
		Resturants.update(resturant.resturant_id,{
			name:resturant.name,
			address:resturant.address,
			phone:resturant.phone,
			updatedAt: new Date(),
		    owner: this.userId,
		    username: Meteor.users.findOne(this.userId).profile.name,
		});
	},

});