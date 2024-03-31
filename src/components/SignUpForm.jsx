import React, { useState } from 'react'; 

function SignUpForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <form action="">
                <input type="text" placeholder="Username"/>
                <input type="text" placeholder="Email"/>
                <input type="text" placeholder="Password" />
                <button className="signin-btn">Create Account</button>
            </form>
        </>
    )
}

export default SignUpForm