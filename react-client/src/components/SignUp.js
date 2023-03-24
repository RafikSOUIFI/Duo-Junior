import { useState } from "react";
import axios from "axios";
const SignUp = ({ userData, setUserData }) => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const getun = (event) => {
        setUserName(event.target.value)
        setError("")
    }

    const getpw = (event) => {
        setPassword(event.target.value)
        setError("")
    }

    const getcpw = (event) => {
        setConfirmPassword(event.target.value)
        setError("")
    }

    const userDetail = {
        username: username,
        password: password
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError("Passwords do not match");
        }
        else if (username.length < 5) {
            setError("Username too short");
        }
        else {
            axios.post("http://localhost:6001/api/customers",userDetail).then((res) => {
                setError("Congratulation, you created an account")
            }).catch((err) => {
                console.log(err);
            })
        }
    }




    return (
        <section className="signup">
            <h2 className="signup__heading">Sign Up</h2>
            <form className="signup__form" onSubmit={handleSubmit}>
                <label className="signup__label">
                    Username:
                    <input
                        className="signup__input"
                        value={username}
                        onChange={getun}
                        required
                    />
                </label>
                <label className="signup__label">
                    Password:
                    <input
                        className="signup__input"
                        type="password"
                        value={password}
                        onChange={getpw}
                        required
                    />
                </label>
                <label className="signup__label">
                    Confirm Password:
                    <input
                        className="signup__input"
                        type="password"
                        value={confirmPassword}
                        onChange={getcpw}
                        required
                    />
                </label>
                <div className="signup__error">{error}</div>
                <button className="signup__button" type="submit">
                    Sign Up
                </button>
            </form>
        </section>
    );
}

export default SignUp