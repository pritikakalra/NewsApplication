var React = require('react');
export default class Contact extends  React.Component{

render()
{
 return(
   <div className="container-fluid">
       <div className="row">
           <div className="col-md-12">
               <div className="jumbotron">
                   <h2>
                       Contact Us
                   </h2>
                   <p>
                       This is Contact Us.
                   </p>
                   <p>
                       <a className="btn btn-primary btn-large" href="#">Contact Here</a>
                   </p>
               </div>
           </div>
       </div>
   </div>
 );
}
}
