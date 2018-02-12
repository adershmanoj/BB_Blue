import React from 'react';
import {Session} from 'meteor/session';

export default class SearchBar extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      error: '',
      processing: false
    };
  };
  
  submitSearch(e){
    e.preventDefault();
    const link = e.target.getElementsByTagName('input')[0].value.trim();
    const regex = /amazon.in\/(?=.*dp\/)/; //regex check for Amazon product url
		
    if(!regex.test(link)){
      this.setState({
        error: 'Empty link'
      });
    }	
		else{ //if link is valid
			Session.set('link', link);
			this.setState({processing: true}); //show processing message
		}
		
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
      <p>
        {this.state.processing ? "Please wait..fetching results" : undefined}
      </p>
    </div>
  );
  };
};