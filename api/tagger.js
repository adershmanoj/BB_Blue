import {Meteor} from 'meteor/meteor';
const Tag = require("en-pos").Tag;
var emotional = require("emotional");
var nounList = []; //store nouns and count

export default function tag(reviewData){
	console.log('------------- Crawler and sentiment analysis output -----------------');
	reviewData.reviews.forEach(function(obj){
		emotional.load(function () {
			sentences = obj.text.split('.'); //split review text into sentence array
			sentences.forEach(function(sentence){
				var analysis = emotional.get(sentence); //subjectivity and polarity analysis
				console.log(sentence);
				console.log('subjectivity: ' + analysis.subjectivity);
				console.log('------------- Tagger output -----------------');
				if(analysis.subjectivity > 0.3){
					console.log("success");
//					words = sentence.split(' '); //word array
//					tags = new Tag(words)
//					.initial() // initial dictionary and pattern based tagging 
//					.smooth() // further context based smoothing 
//					.tags;
//					let regex = /NN/; // regex to match NN, NNP, NNPS
//					for(i=0;i<tags.length;i++){
//						if(regex.test(tags[i])){ // Noun
//							console.log(words[i]);		
//						}
//					}
				}
			});
		});		
	});	
}