import React from 'react';
import "./Button.css";

/* === Function based === */
const Button = (props) => {
  return (
    <button onClick={props.flipSwitch} className={props.statusClass + " text"}>
      {props.text}
    </button>
  )
}

/* === Class based === */
// class Button extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       status: true,
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick = () =>
//     this.setState(prevState => ({
//       status: !prevState.status
//     }));

//   render() {
//     let statusClass = this.state.status ? "light": "dark";

//     return (
//       <div className={"wrapper " + statusClass}>
//         <h1>Light Switch is {this.state.status ? "on" : "off"}</h1>
//         <button 
//           onClick={this.handleClick}
//           className={statusClass}
//         >
//             Click
//         </button>
//       </div>
//     )
//   }
// }


export default Button;