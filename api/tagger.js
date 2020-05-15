import {Meteor} from 'meteor/meteor';
import featureExtractor from '../api/feature';

const Tag = require("en-pos").Tag;
var emotional = require("emotional");
let regex = /^NN/; // regex to match NN, NNP, NNPS

// let featureList = [];
export default function tag(reviewData){
	
	let nounList = {}; //store nouns and count	
	reviewData.reviews.forEach(function(obj, index){
		emotional.load(function () {
			sentences = obj.text.split('.'); //split review text into sentence array
			sentences.forEach(function(sentence){					
				let analysis = emotional.get(sentence); //subjectivity and polarity analysis
				if(analysis.subjectivity > 0.3){
					words = sentence.split(' '); //word array
					words = words.map(word => word.replace(/[^\w\s]/gi, '').toLowerCase()); //removing special characters and whitespace
					tags = new Tag(words)
					.initial() // initial dictionary and pattern based tagging 
					.smooth() // further context based smoothing 
					.tags;
					for(i=0;i<tags.length;i++){
						if(regex.test(tags[i])){ // Noun
							if (!(words[i] in nounList))
								nounList[words[i]] = [1, analysis.polarity];
							else{
								nounList[words[i]][0] += 1;
								nounList[words[i]][1] += analysis.polarity;
							}
						}
					}
				}
			});
			if(index === reviewData.reviews.length-1){
				featureExtractor(nounList);
      }
		});		
	});	
}