import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import {Session} from 'meteor/session';

import {Meteor} from 'meteor/meteor'
import ReviewDB from '../api/crawler';//remove later

export default () => {
  //remove later
  Meteor.subscribe("crawlerResult");
  const reviews = ReviewDB.find({}).fetch();
  const link = Session.get('link');
  function printReviews(){
    return JSON.stringify(reviews[0]);
  }
  return (
    <div>
      <Header title ="BB_BLUE"/>
      <SearchBar/>
      <p>{(!!reviews[0] && !!link) ?  printReviews() : undefined}</p>
    </div>
  );
};