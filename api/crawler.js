import {Meteor} from 'meteor/meteor';

export default ReviewDB = new Meteor.Collection('reviews');
if(Meteor.isServer){ 
 
  //testing crawler
  Meteor.publish("crawlerResult", function(){
    return ReviewDB.find({});
  });
  
  Meteor.methods({
    'crawler'(link){
      //ReviewDB.remove(reviewData);
      var linkSplit = link.split('/');
      var reviewsCrawler = require('amazon-reviews-crawler');
      reviewsCrawler(linkSplit[5])
        .then(function(results){
          storeReviews(results);
        })
        .catch(function(err){
          new Meteor.error(err);
        })
    }
  });
  function storeReviews(results){
    reviewData = results;
    ReviewDB.insert(reviewData); //testing crawler remove later
  }
};
