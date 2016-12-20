
import React from 'react';
import GrandChild from './GrandChild.jsx';


export default class SiblingChild extends React.Component{

constructor()
   {
     super();



   }

render(){
 var newAr=this.props.onData.map(function(e){

 return  <GrandChild dataa={e}/>



 });


return (

<div>

{newAr}

</div>


)

}

}
