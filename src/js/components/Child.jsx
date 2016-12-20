import React from 'react';
import GrandChild from './GrandChild.jsx';


export default class ChildReact extends React.Component{

constructor()
   {
     super();

     this.submitHandler=this.submitHandler.bind(this);
   }

submitHandler(){

    console.log("Button");
    console.log(document.getElementById("search").value);
    var searchItem=document.getElementById("search").value;
    this.props.ajaxUrl(searchItem);

}

render(){

return (

    <div>




        <div className="input-group" style={{"paddingeft":"400px"}}>
            <input type="text" className="form-control" placeholder="Search" id="search" />
            <div className="input-group-btn">
              <button className="btn btn-default" type="button" onClick={this.submitHandler}>
                <i className="glyphicon glyphicon-search"></i>
              </button>
            </div>
       </div>

    </div>



)

}




}
