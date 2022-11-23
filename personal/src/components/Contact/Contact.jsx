import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export const Contact = () => {
    let navigate = useNavigate();
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState("");
    const [visible, setVisible] = useState(true);
    const [data, setData] = useState({

        name: "",

        email: "",

        address: ""

    });

    const initialState = {
        name: "",

        email: "",

        address: ""
    };

    const clearState = () => {
        setData({ ...initialState });
    };

    useEffect(() => {

        if (data.name.length < 3) {
            setMessage("Name must be at least 3 characters");
            setBtnDisabled(true);
        } else {
            setMessage(null);
            setBtnDisabled(false);
        }
    }, [data]);

    const handleInputChange = (event) => {
        console.log(event.target.name)
        setData({
            ...data,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Sending data..." + data.name + " " + data.email + " " + data.address);
        localStorage.setItem("User", JSON.stringify({"name": data.name, "email": data.email, "Address": data.address}));
        clearState();
        setTimeout(() => {
            navigate('/')
        }, 3000);
        setVisible(false)
    };

    return (
        <div>
            <div>UserForm</div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={data.name}
                    onChange={handleInputChange}
                    name="name"
                />
                <br />
                <input
                    type="email"
                    placeholder="Email"
                    value={data.email}
                    onChange={handleInputChange}
                    name="email"
                />
                <br />
                <input
                    type="string"
                    placeholder="Address"
                    value={data.address}
                    onChange={handleInputChange}
                    name="address"
                />
                <button type="submit" disabled={btnDisabled}>
                    Enviar
                </button>
            </form>
            <p>{visible ? message : 'Redirecting to Home...'}</p>
        </div>
    );
}

export default Contact;