import { Meteor } from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import crawler from '../api/crawler';
import tag from '../api/tagger';

Meteor.methods({	
	'process'(link){
		crawler(link);
	},
	
	'tagger'(reviewData){
		tag(reviewData);
	}
});

