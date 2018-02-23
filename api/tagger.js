import {Meteor} from 'meteor/meteor';
const Tag = require("en-pos").Tag;
var emotional = require("emotional");

export default function tag(reviewData){
	console.log('-------------Crawler output -----------------');
	console.log(reviewData);
	reviewData.reviews.forEach(function(obj){
		emotional.load(function () {
			sentences = obj.text.split('.'); //split review text into sentence array
			sentences.forEach(function(sentence){
				var analysis = emotional.get(sentence); //subjectivity and polarity analysis
				
				words = sentence.split(' '); //word array
				tags = new Tag(words)
				.initial() // initial dictionary and pattern based tagging 
				.smooth() // further context based smoothing 
				.tags;
				
				let regex = /NN/; // regex to match NN, NNP, NNPS
				for(i=0;i<tags.length;i++){
					if(regex.test(tags[i])){ // Noun
						console.log(words[i]);		
					}
				}
			});
		});		
	});	
}