import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import {Session} from 'meteor/session';
import {Meteor} from 'meteor/meteor'
import CssBaseline from 'material-ui/CssBaseline';
import Result from '../api/feature';//remove later


export default () => {
  return (
    <div>
			<CssBaseline />
      <Header title ="BB_BLUE"/>
      <SearchBar/>
    </div>
  );
};