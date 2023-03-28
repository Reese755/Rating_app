function Signup({onSignup, updateSignupFormData}) {

    return (
        <>
        {/* <div className="login-container" id="login-container">
        <div className="login-form-container sign-up-container"> */}
            <form className="login-form" onSubmit={onSignup}>
                <h1>Create Account</h1>
        
             
                <input className="login-input" name="username" placeholder="Username" onChange={updateSignupFormData}/>
                <input className="login-input" name="email" placeholder="Email" onChange={updateSignupFormData}/>
                <input className="login-input" name="password" placeholder="Password" onChange={updateSignupFormData}/>
                <button className="login-button">Sign Up</button>
            </form>
        {/* </div>
        </div> */}
        </>
    )
}

export default Signup;