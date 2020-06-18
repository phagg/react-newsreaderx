import React from "react";
//import {Text, View} from "native-base";

// Witout Hooks
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    handleButtonClick = () => {
        this.setState({
            count: this.state.count +1,
        });
    }

    render() {
        return (
            <h1 onClick={ this.handleButtonClick }>
				Clicks: { this.state.count }
			</h1>
        );
    }
}

export default () => (
<div className="row">
       <div className="col-md-12">
         <h1>Workplace</h1>
         <p>This is companys workplace so far...</p>
         <Counter/>
       </div>
    </div>        
   );


// With Hooks
// function Counter() {
//     const count = useCounterValue();
    
//       return (
//       <View>
//         <Text> Count incremented {count} times</Text>
//       </View>
//     ); 
//   }
  
//   export default Counter;
  
//   function useCounterValue() {
//     const [count, setCount] = useState(0);
//     const [isStarted, setIsStarted] = useState(false);
    
//     useEffect (() => {
//       const interval = this.setTimeout(() => {
//         setCount(count + 1);           
//         }, 1000);
      
//       return () => {
//         cleanInterval(this._interval);
//       };
//       }, isStarted);
   
//     return count;
    
//   }
