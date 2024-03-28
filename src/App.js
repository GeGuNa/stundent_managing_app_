import React from 'react';
import {Switch, Route} from 'wouter';
import Home from './page/Home.js';
import About from './page/About.js';
import Prices from './page/Prices.js';
import { Header } from './page/inc/Header.js';
import { Sign_in, Sign_up } from './page/Sign.js';
//export default class App extends React.Component {




import { if_authorized } from './page/inc/inc.js';



import { HeaderForusers } from './page/inc/Header_Authorized.js';
import Index_managing from './page/managing/Index.js';
import Stundents_list from './page/managing/Stundents.js';


import './css/App.css';
import './css/bootstrap.min.css';


	//render() {
	
	
	
	export default function App() {
		
	//const if_authorized = localStorage.getItem("usr_id");

	//localStorage.setItem("usr_id", "Jura");
	
		//console.log(`${if_authorized}`)
		
		
		
		  return (<>
		  
	
	  {if_authorized ? <HeaderForusers /> : <Header />}	
		
		
		
		
		  
		  <Switch>
				<Route path="/" component={Home} />
				<Route path="/about" component={About} />
				<Route path="/pricing" component={Prices} />
				<Route path="/login" component={Sign_in} />
				<Route path="/sign_up" component={Sign_up} />
				
				{if_authorized && <>
					<Route path="/Managing" component={Index_managing} />
					<Route path="/Managing/Stundents_list" component={Stundents_list} />
				</>
				}
				
				
				
				
				
				
				<Route>Something went off </Route>
		  </Switch>
		  
		  
		  </>);
  }
  
  
  
	//}



//}


