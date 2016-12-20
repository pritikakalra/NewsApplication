import React from 'react';
import {browserHistory} from 'react-router';


export default class Login extends React.Component
{

/*this is a ajax function for the URL of saving of login ID and password*/
Loginfun()
{
console.log("hii");
var uname=document.getElementById('username').value;
var pass=document.getElementById('password').value;
console.log(uname+pass);
$.ajax({

url: "http://localhost:8085/users/login",
type: "POST",
data:'username='+uname+'&password='+pass,
success : function(msg)
{
console.log("successfully logged to database");
  alert("succesfully loggedin");
  browserHistory.push('/homeComponent');
}.bind(this),
error: function(err){
console.log(err);
  alert("check the username and password");
}.bind(this)
});

}
/*closed ajax function*/



render()
 {
    return(
  <div>
    <div className="container">
         <div className="row">
              <div className="well">
                <center>
                  <b>  UserId :</b><input type="text" class="form-control" id="username" style={{"width":"50%"}}/><br/><br/>
                  <b>  Password: </b><input type="password" class="form-control" id="password"  style={{"width":"50%"}}/>
                           <p className="help-block">
                                      *fill all details to login
                               </p>
                    <div className="checkbox">
                    <input type="checkbox" /> remember me?
                        </div>
                    </center>
                          <input type="button"  value="Login" className="btn btn-success" onClick={this.Loginfun.bind(this)} style={{"margin-left":"45%"}}/>
              </div>
           </div>
    </div>
</div>


        )
}
}
