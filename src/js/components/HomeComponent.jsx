import React from 'react';
import Child from './Child.jsx'
import ComponentManager from './ComponentManager.jsx'
import SiblingChild from './SiblingChild.jsx'
import ReactDOM from 'react-dom';

export default class HomeComponent extends React.Component
{
constructor()
{
super();
this.state={Msg:[]};
this.fetchNewsFromExternalAPI=this.fetchNewsFromExternalAPI.bind(this);

}
buttonHandler()
{
console.log("Button");
this.setState({Sdata:"New State From Main js"});
}
fetchNewsFromExternalAPI(url) {

console.log("Value of url is "+url);

$.ajax({

url: "https://newsapi.org/v1/articles?source=" +url+"&sortBy=top&apiKey=58104e4d8cec41b1837916c6436b0198",

type: "GET",

dataType: 'JSON',



success : function(msg){


/*msg reprewsents JSON data of news headlines sent back by external API*/
console.log("Msg is  "+msg.articles[0].title);
this.setState({Msg:msg.articles})

}.bind(this),

error: function(err){

console.log("Error occured "+err);

}.bind(this)
});
}
render()
{
console.log("State message"+this.state.Msg);
return (
<div>
<Child ajaxUrl={this.fetchNewsFromExternalAPI} />
<SiblingChild onData={this.state.Msg} />
</div>
)
}
}
