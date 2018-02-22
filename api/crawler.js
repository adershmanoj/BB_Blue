import {Meteor} from 'meteor/meteor';

export default function crawler(link){
	var linkSplit = link.split('/');
	var link = linkSplit[2]+'/product-reviews/'+linkSplit[5]; //product reviews page url
	var reviewsCrawler = require('amazon-reviews-crawler');
	//one page only
	reviewsCrawler(link)
		.then(function(results){
			Meteor.call('tagger', results);
		})
		.catch(function(err){
			new Meteor.Error(err);
		})
}
 