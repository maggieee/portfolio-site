import React, { Component } from 'react'
import ProjectDetails from '../components/ProjectDetails';
class Projects extends Component {
    render() {
        return (
        <div className="condiv">
        <h1 className="subtopic">Projects</h1>
        <ProjectDetails title="BrightBook" description="A Social Network for Hackbrighters" from="February 2020" to="Present"/>
        <ul> 
        <p><a href='https://www.loom.com/share/9c99797b6528409d9c4ae929ba616342' target='_blank'><i class="fa fa-video"></i> View video walkthrough</a></p>
        <p><a href='https://www.brightbook.club' target='_blank'><i class="fa fa-globe" aria-hidden="true"></i> Go to website</a></p>
        <p><a href='https://github.com/maggieee/brightbook' target='_blank'><i class='fab fa-github'></i> View project on GitHub</a></p>
        </ul>
        <br></br>
        <ProjectDetails title="Happy Happy Hour" description="A project made for the 2020 DeveloperWeek Hackathon using the TomTom Maps API" from="Feb 15 2020" to="Feb 16 2020"/>
        <p><a href='https://devpost.com/software/happy-happy-hour-74ypbj' target='_blank'><i class="fa fa-globe" aria-hidden="true"></i> View project on DevPost</a></p>
        <p><a href='https://github.com/nancydyc/Happy-Happy-Hour' target='_blank'><i class='fab fa-github'></i> View project on GitHub</a></p>
        </div>
        )
        }
        }
export default Projects