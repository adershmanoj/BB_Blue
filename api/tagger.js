import {Meteor} from 'meteor/meteor';
const Tag = require("en-pos").Tag;

export default function tag(string){
	var tags = new Tag(string.split(' '))
	.initial() // initial dictionary and pattern based tagging 
	.tags;
	console.log(tags);

}