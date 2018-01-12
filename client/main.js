import {Meteor} from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Session } from 'meteor/session';
import {Tracker} from 'meteor/tracker';

import App from '../ui/App';

Meteor.startup(() => {
  Session.set('link': '');
  Tracker.autorun(() => {
    const link = Session.get('link');
    if(!!link){ // if link is set 
      processLink(link);
    }
    
    ReactDOM.render(<App/>, document.getElementById('app'));
  });
});

function processLink(link){
  const reviews = crawler(link);
}