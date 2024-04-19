import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
function SignUpForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signUp } = useAuth();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signUp(email, password);
            navigate('/jobs');
            console.log("Signed up successfully");
        }
        catch (error) {
            alert(error.message);
        }
    };
    return (_jsxs("form", { onSubmit: handleSubmit, children: [_jsx("input", { type: "email", placeholder: "Email", value: email, onChange: (e) => setEmail(e.target.value) }), _jsx("input", { type: "password", placeholder: "Password", value: password, onChange: (e) => setPassword(e.target.value) }), _jsx("button", { type: "submit", className: "sign-btn", children: "Create Account" })] }));
}
export default SignUpForm;
