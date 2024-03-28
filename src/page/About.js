import React from 'react'
import {Link,useLocation} from 'wouter';

export default function About(){


const [location, navigate] = useLocation();


//navigate("/pricing", { replace: true })


return (<>


	{
		
		//navigate("/pricing", { replace: true })
	
	}

About <br/>

<div className="Links">
	<Link href="/">Home</Link> 
	<Link href="/about">About</Link>  
	<Link href="/pricing">Pricing</Link> 
</div>

</>)	
	
}
