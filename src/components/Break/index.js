import React from 'react'

class Break extends React.Component {
   constructor(props) {
     super(props);
   }

   render(){
     return(
       <div>
         <label id="break-label">
           <span>"Break Length"</span>
         </label>
         <button
          id="break-decrement"
          onClick={this.props.decrementBreakTime}
          > -
          </button>
         <span id="break-length">{this.props.breakTime}</span>
         <button
          id="break-increment"
          onClick={this.props.incrementBreakTime}
         > +
         </button>
       </div>
     );
   }
}

export default Break
