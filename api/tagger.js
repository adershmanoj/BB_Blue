import {Meteor} from 'meteor/meteor';
const Tag = require("en-pos").Tag;
var emotional = require("emotional");

export default function tag(reviewData){
	reviewData.reviews.forEach(function(obj){
		emotional.load(function () {
			sentences = obj.text.split('.'); //split review text into sentence array
			sentences.forEach(function(sentence){
				console.log(sentence+": ");
				console.log(emotional.get(sentence));
			});
		});
		review = obj.text.split(' ');
		var tags = new Tag(review)
		.initial() // initial dictionary and pattern based tagging 
		.tags;
		console.log(tags);
	});
	
}