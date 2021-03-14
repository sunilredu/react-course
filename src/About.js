import React from 'react';
class About extends React.Component {
    constructor() {
        super();
       // console.warn("construro");
     //  this.state={
      //     name:'Sunil',
      //     age:30
      // }
    }
    componentDidMount() {
      //  console.warn("did mount");
      console.warn("props",this.props.name);
    }
    componentDidUpdate(){
        console.warn("props in update",this.props.name);
       // alert("name is updated")
    }
    render() {

        return (<div>
            <h1>About us Component</h1>
            <h2>{this.props.name}</h2>
           
        </div>)
    }

}

export default About;

//Constructor()
//  {

//  }
//componentDidMount()
//  {

//  }
//componentWillUnmount()
//  {

//  }
//componentDidUpdate()
//  {

//  }
