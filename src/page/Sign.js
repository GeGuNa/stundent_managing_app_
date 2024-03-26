import React from 'react';
import { Link } from 'wouter'


export function Sign_in() {
	
	
	return (<>
	
	<div className="wrapper_cntr">
	
		<div className="h_h1z">Login</div>
		<div className="textCntq1z">Enter your details</div>
		
		<div className="pform12">
		
			<input type="text" className="input" placeholder="Username or Email Address"/> 
		
			<input type="text" className="input" placeholder="Enter your Password"/>
		

	
		
			<button className="button">Login</button>
		
		
		
		</div>
		
		<div className="textCntq1z">
		
			Don't have account? <Link className="clq1z_a" href="/sign_up">Register Now</Link> 

		</div>
		
		
		
		
	</div>
	
	
	</>)
}



export function Sign_up(){
	return (<>
	
	
	
	
	<div className="wrapper_cntr">
	
		<div className="h_h1z">Sign up</div>
		<div className="textCntq1z">Enter your details</div>
		
		
		
		<form>
		<div class="pform12">
			<input type="text" className="input" placeholder="Username" required/> 
		
		
			<input type="text" className="input" placeholder="Email Address" required/> 
		
			<input type="text" className="input" placeholder="Enter your Password" required/>
			
			
			<input type="text" className="input" placeholder="Address" required/>
			
			<input type="number" className="input" placeholder="Age" required/>
			
		

	
		
			<button className="button">Registration</button>
		
		
		
			<div className="textCntq1z">
		
			Have account? <Link className="clq1z_a" href="/login">Sign in</Link> 

		</div>
		
		
		
		
		</div>
		</form>
		
		
		
		
	</div>
	
	
	
	
	
	</>)
}


