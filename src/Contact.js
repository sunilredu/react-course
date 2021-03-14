import React from 'react';
function Contact(){
    function test(){
        console.warn("test function is called");
    }
    let data="contact us from jsxmmmm";
    return(
        <div>
            <h1>{data}</h1>
            <button onClick={test}>Click Me</button>
        </div>
    )
}
export default Contact;