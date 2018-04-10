import {Meteor} from 'meteor/meteor';
const Tag = require("en-pos").Tag;
var emotional = require("emotional");
var nounList = []; //store nouns and count
let senRegEx = /w+/
let regex = /^NN/; // regex to match NN, NNP, NNPS

// let featureList = [];
export default function tag(reviewData){
	console.log('------------- Crawler and sentiment analysis output -----------------');
	reviewData.reviews.forEach(function(obj){
		emotional.load(function () {
			console.log('--------------');
			sentences = obj.text.split('.'); //split review text into sentence array
			sentences.forEach(function(sentence){
				if(senRegEx.test(sentence)){
					console.log("sentence: " + sentence);
					var analysis = emotional.get(sentence); //subjectivity and polarity analysis
					if(analysis.subjectivity > 0.3){
						console.log('subjectivity: ' + analysis.subjectivity);
						console.log('polarity: ' + analysis.polarity);
						words = sentence.split(' '); //word array
						tags = new Tag(words)
						.initial() // initial dictionary and pattern based tagging 
						.smooth() // further context based smoothing 
						.tags;
						for(i=0;i<tags.length;i++){
							if(regex.test(tags[i])){ // Noun
								console.log("Tagger: " + words[i]);	
								// if(!featureList.includes(words[i])) {
								// 	featureList.push()
								// }
							}
						}
					}
				}
			});
		});		
	});	
}
