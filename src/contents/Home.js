import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/profile_photo.jpeg';
import Social from '../components/Social'

class Home extends Component {

render() {
return (

<div className="condiv home">

<img src={profilepic} className="profilepic"></img> <br></br>

<ReactTypingEffect className="typingeffect" text={['I am Maggie Ronan','I am a web developer']} speed={100} eraseDelay={700}/>

<Social />

</div>
)
}
}

export default Home