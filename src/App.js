import React from 'react';
import './App.css';

function App(props) {
  const [isContainerActive, setIsContainerActive] = React.useState(false);
  const signUpButton = () => {
    console.log("button is working");
    setIsContainerActive(false);
 };  
 const signInButton = () => {
    console.log("button is working");

    setIsContainerActive(true);
 };
  return (
    <>
    <div id="container" className={`container${isContainerActive ? " right-panel-active" : ""}`}>
	<div className="form-container sign-up-container">
		<form action="#">
			<h1>Create Account</h1>
			<span>or use your email for registration</span>
			<input type="text" placeholder="Name" />
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<button onClick={signUpButton}>Sign Up</button>
		</form>
	</div>
	<div className="form-container sign-in-container">
		<form action="#">
			<h1>Sign in</h1>
			<span>or use your account</span>
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<h6 >Forgot your password?</h6>
			<button onClick={signInButton}>Sign In</button>
		</form>
	</div>
	<div className="overlay-container">
		<div className="overlay">
			<div className="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<button className="ghost" id="signIn" >Sign In</button>
			</div>
			<div className="overlay-panel overlay-right">
				<h1>Hello, Friend!</h1>
				<p>Enter your personal details and start journey with us</p>
				<button className="ghost" id="signUp"  >Sign Up</button>
			</div>
		</div>
	</div>
</div>

    </>
  );
}

export default App;
