import React from 'react';
import {Switch, Route} from 'wouter';
import Home from './page/Home.js';
import About from './page/About.js';
import Prices from './page/Prices.js';
//export default class App extends React.Component {



import './css/App.css';


	//render() {
	
	
	
	export default function App(){
		
		
		  return (<>
		  
		  
		  
		  <Switch>
		 
		 
		   <Route path="/" component={Home} />
		   
		   <Route path="/about" component={About} />
		   
		    <Route path="/pricing" component={Prices} />
		   
		   
		  
		   
 <Route>
 Something went off 
 </Route>

		 
		 
		 
		  </Switch>
		  
		  
		  </>);
  }
  
  
  
	//}



//}


