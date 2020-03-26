import React, { Component } from 'react'
class ProjectDetails extends Component {
render() {
return (
<div class="project-details">
<div class="compdet">
<h3>{this.props.title}</h3>
<p class="secondtext">{this.props.description}</p>
<p class="secondtext">{this.props.from} - {this.props.to}</p>
<p class="link">{this.props.link}</p>
</div>
</div>
)
}
}
export default ProjectDetails