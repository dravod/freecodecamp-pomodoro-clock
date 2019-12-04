import React from 'react'

class Session extends React.Component {
   constructor(props) {
     super(props);
   }

   render(){
     return(
       <div>
         <label id="session-label">
           <span>"Session Length"</span>
         </label>
         <button
          id="session-decrement"
          onClick={this.props.decrementSessionTime}
         >
           -
         </button>
        <span id="session-length">{this.props.sessionTime}</span>
        <button id="session-increment"> + </button>
       </div>
     );
   }
}

export default Session
