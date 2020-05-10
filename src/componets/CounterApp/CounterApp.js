// import React, { Component } from "react";

// class CounterApp extends Component{
//   state = {
//     counter: 0
//   }

//   updateCounter(value) {
//     this.setState({
//         counter: this.state.counter + value
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h1>Counter<strong>{this.state.counter}</strong></h1>
//         <hr/>
//         <div>
//           <button onClick={() => this.updateCounter(1)}>Add + 1</button>
//           <button onClick={() => this.updateCounter(-1)}>Sub - 1</button>
//         </div>
//       </div>
//     );
//   };
// }
// export default CounterApp;


// import React, { useState } from "react";

// function CounterApp() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <h1>
//         Counter<strong>{count}</strong>
//       </h1>
//       <hr />
//       <div>
//         <button onClick={() => setCount(count + 1)}>Add + 1</button>
//         <button onClick={() => setCount(count - 1)}>Sub - 1</button>
//       </div>
//     </div>
//   );
// }

// export default CounterApp;
