import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/selfie.jpeg';
class Fun extends Component {
render() {
return (
<div className="condiv">

<img src={profilepic} className="profilepic"></img> <br></br>

<ReactTypingEffect className="typingeffect" text={['Hi! This is me. I like this typing effect.']} speed={100} eraseDelay={700}/>

</div>
)
}
}
export default Fun