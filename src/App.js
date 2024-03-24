import './css/App.css';
import React from 'react';
import {Switch, Route} from 'wouter';
import Home from './page/Home.js';
import About from './page/About.js';
//export default class App extends React.Component {




	//render() {
	
	
	
	export default function App(){
		
		
		  return (<>
		  
		  
		  
		  <Switch>
		 
		 
		   <Route path="/" component={Home} />
		   
		   <Route path="/about" component={About} />
		   
		   
 <Route>
 Something went off 
 </Route>

		 
		 
		 
		  </Switch>
		  
		  
		  </>);
  }
  
  
  
	//}



//}


