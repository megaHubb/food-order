import './add_resturant.html'
import { Resturants } from '../api/resturants.js'
import { Meteor } from 'meteor/meteor';
import {jsonize} from '../utils/jsonize.js'


Template.newResturant.events({
  'submit .save'(event) {
    event.preventDefault();
    target = event.target;
    resturant = jsonize(target);
    Meteor.call('resturant.add',resturant);
    // Clear form
    target.name.value = '';
    target.address.value = '';
    target.phone.value = '';
  },
});