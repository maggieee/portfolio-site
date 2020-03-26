import React, { Component } from 'react';
import Navitem from './Navitem';
import Social from '../components/Social';

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state={
        'NavItemActive':''
        }
    }
    
    activeitem=(x)=>
    {
        if(this.state.NavItemActive.length>0){
        document.getElementById(this.state.NavItemActive).classList.remove('active');
    }

    this.setState({'NavItemActive':x},()=>{
    document.getElementById(this.state.NavItemActive).classList.add('active');
    });
    };

    render() {
        return (
            <nav>
                <ul>
                    <Navitem item="Home" tolink="/home" activec={this.activeitem}></Navitem>
                    {/* <Navitem item="About" tolink="/about" activec={this.activeitem}></Navitem> */}
                    <Navitem item="Projects" tolink="/projects" activec={this.activeitem}></Navitem>
                    <Navitem item="Education" tolink="/education" activec={this.activeitem}></Navitem>
                    <Navitem item="Resume" tolink="/resume" activec={this.activeitem}></Navitem>
                    <Navitem item="Fun" tolink="/fun" activec={this.activeitem}></Navitem>
                </ul>

                <Social />
            </nav>
        )
    }
}



export default Navbar