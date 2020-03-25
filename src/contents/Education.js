import React, { Component } from 'react';
import Widecard from '../components/Widecard';
class Education extends Component {
render() {
return (
<div className="condiv">
<h1 className="subtopic">My Education</h1>
<Widecard title="Software Engineering" where="Hackbright Academy" from="January 2020" to="Present"/>
<Widecard title="Digital/Electronic Media Studies" where="Pomona College" from="2004" to="2008"/>
</div>
)
}
}
export default Education