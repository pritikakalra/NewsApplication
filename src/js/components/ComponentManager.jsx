
import React from 'react';
import Jumbo from './GrandChild.jsx';
export default class ComponentManager extends React.Component{

constructor(){
  super();
}
render()
{
console.log("Inside Component Manager Render"+this.props.cm);
var newAr=this.props.cm.map(function(e){
return  <GrandChild newsurl={e.url} title={e.title} />
});
console.log(newAr);
return (
<div>
{newAr}
</div>
)

}
}
