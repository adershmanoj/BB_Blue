import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import {Session} from 'meteor/session';
import {Meteor} from 'meteor/meteor'

export default () => {
  return (
    <div>
      <Header title ="BB_BLUE"/>
      <SearchBar/>
    </div>
  );
};