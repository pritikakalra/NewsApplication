import React from 'react';

export default class DisplaySavedNews extends React.Component{

constructor(){
  super();
      this.state={Comments:""};
     this.DeleteNews=this.DeleteNews.bind(this);
     this.updateClick=this.updateClick.bind(this);
     this.updateComments=this.updateComments.bind(this);

}
updateComments(cmnt){
console.log(cmnt)
this.setState({Comments:cmnt.target.value});
}

updateClick(){
var myObj={
      Comments:this.state.Comments,
      Title:this.props.news.Title
      }
      console.log(myObj);
$.ajax({
   url:" http://localhost:8085/newsData/update",
   type: "PUT",
   data:myObj,
    success : function(msg){
     alert("Your comment is :-"+myObj.Comments);
    console.log(myObj.Comments);
    console.log("inside update");
    window.location.reload();
   }.bind(this),

});
}
DeleteNews()
{
$.ajax({

        url: " http://localhost:8085/newsData/delete",
        type: "DELETE",
        data:this.props.news,
        datatype:JSON,

        success : function(msg){
       console.log("deleted");
       alert("Data deleted successfully");

           /*msg reprewsents JSON data of news headlines sent back by external API*/
  window.location.reload();
           }.bind(this),

        error: function(err){

            console.log("Error occured "+err);

        }.bind(this)
});
}


render(){

return (

<div>
<section className="container">

              <div className="jumbotron row">
               <div className="col-sm-12">
               <h2>{this.props.news.Title}-{this.props.news.Author}</h2>

               </div>
                   <div className="col-sm-6">
                   <img src={this.props.news.urlToImage} alt="no image" width="500px" height="300px"/>

                 </div>
               <div className="col-sm-6">
               <p><b>Comments </b></p>
               <textarea class = "form-control" rows = "3" cols="50" placeholder="Type your comments/suggesstions here..." onChange={this.updateComments.bind(this)}></textarea>
               <h3>{this.props.news.Comments}</h3>
               <p><b>Description</b></p>
               <p>{this.props.news.Description}<a href={this.props.news.Url} target="_blank"><b>Read More...</b></a></p>
                 <button type="button" className="btn btn-warning btn-lg" onClick={this.updateClick}>Update</button>
             &nbsp;&nbsp;&nbsp;&nbsp;
              <button type="button" className="btn btn-danger btn-lg" onClick={this.DeleteNews}>Delete</button>
              </div>
             </div>
           </section>


</div>
)
}
}
