var React = require('react');
import DisplaySavedNews from './DisplaySavedNews.jsx';
export default class FavourNews extends  React.Component{
constructor(){
  super();
     this.Favourites=this.Favourites.bind(this);
     this.state={str:[]};
}

componentDidMount()
{

this.Favourites();
}

Favourites()
{

$.ajax({


        url: "http://localhost:8085/newsData/view",
        type: "GET",
        dataType: 'JSON',

        success : function(msg){
       console.log("viewed");
             this.setState({str:msg});
           /*msg reprewsents JSON data of news headlines sent back by external API*/

           }.bind(this),

        error: function(err){

            console.log("Error occured "+err);

        }.bind(this)
});
}
render()
{
var object=this.state.str.map(function(e){
return(
<DisplaySavedNews news={e} />

);
}
);
return(
<div>
{object}
</div>
)
}
}
