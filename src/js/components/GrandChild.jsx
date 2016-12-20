import React from 'react';
import $ from 'jquery';

export default class GrandChild extends React.Component{

constructor()
   {
     super();
     this.saveNewsFromExternalAPI=this.saveNewsFromExternalAPI.bind(this);

   }
   buttonHandler()
   {
   console.log("Button");

   }
   saveNewsFromExternalAPI() {
   console.log("In side Save");
   $.ajax({
   url: "/newsData/adddatatodb",
   type: "POST",
   dataType: 'JSON',
   data:this.props.dataa,
   success : function(msg){
    console.log('success'+msg);

   }.bind(this),
   error: function(err){
   console.log("Error occured "+JSON.stringify(err));
   }.bind(this)
   });
   }


render(){

return (

<div>
  <section className="container" >
                   <section className="jumbotron" style={{"margintop": "10%"}}>
                       <h4>{this.props.dataa.author}</h4>
                       <img src={this.props.dataa.urlToImage} alt="" style={{"width": "250px"}}/>
                       <h4>{this.props.dataa.title}</h4>
                       <h4>{this.props.dataa.description}</h4>
                       <h4>{this.props.dataa.url}</h4>
                       <h4>{this.props.dataa.publishedAt}</h4>
                       <input type="button" className="btn btn-info" value="Save" onClick={this.saveNewsFromExternalAPI} style={{"margin": "10"}}/>


                   </section>

  </section>
</div>


)

}

}
