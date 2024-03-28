import React from 'react'
import {Link} from 'wouter';


export function HeaderForusers(){
	
	
return (<>
	
	
	<div className="Header">
			<div className="container">
			
			<div className="row">
			
			
					<div className="col-1">
							<img style={{    height: '40px'	 }} src="/icons/logo.svg"/>
						</div>
				
				
						<div className="col-8">
								<div className="hdr_centerstyle jcenter">
										<div> <a href="">Products</a> </div>
										<div> <a href="">Resources</a> </div>
										<div> <a href="">Docs</a> </div>
										<div> <a href="">Prices</a> </div>
										<div> <a href="">Company</a> </div>
										<div> <a href="">Contact</a> </div>
										<div> <a href="">About us</a> </div>
								</div>
						</div>
				
						<div className="col-3">
								<div className="usrComps">
									<Link href="/" className="xz_1"> Username </Link>
									<i className="fa-regular fa-envelope"></i>
									<i className="fa-solid fa-user"></i>
								</div>
						</div>
			
			
			</div>
				
				
				
			</div>
	</div>
	 
	 
	 
	</>)	
	
	
	
	
}

export function Header(){
	
	return (<>
	
	
	<div className="Header">
			<div className="container">
			
			<div className="row">
			
			
					<div className="col-1">
							<img style={{    height: '40px'	 }} src="/icons/logo.svg"/>
						</div>
				
				
						<div className="col-8">
								<div className="hdr_centerstyle jcenter">
										<div> <a href="">Products</a> </div>
										<div> <a href="">Resources</a> </div>
										<div> <a href="">Docs</a> </div>
										<div> <a href="">Prices</a> </div>
										<div> <a href="">Company</a> </div>
										<div> <a href="">Contact</a> </div>
										<div> <a href="">About us</a> </div>
								</div>
						</div>
				
						<div className="col-3">
								<div className="fright1">
									<button className="button">Sign in</button>
									<button className="button">Sign up</button>
								</div>
						</div>
			
			
			</div>
				
				
				
			</div>
	</div>
	 
	 
	 
	</>)
}
