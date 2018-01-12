import React from 'react';
import {Session} from 'meteor/session';

export default class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      error: ''
    };
  };
  
  submitSearch(e){
    e.preventDefault();
    const link = e.target.getElementsByTagName('input')[0].value.trim();
    
    if(link === ''){
      this.setState({
        error: 'Empty link'
      });
    };
    
    //regex check for Amazon url here
    
    Session.set('link', link);
  };
  
  render(){
    return (
    <div>
      <form onSubmit={this.submitSearch.bind(this)}>
        <label>
          <input placeholder="Enter Amazon product link here" />
          <button>Search</button>
        </label>
      </form>
    </div>
  );
  };
};