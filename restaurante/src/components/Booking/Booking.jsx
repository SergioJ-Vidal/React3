import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export const Contact = () => {
    let navigate = useNavigate();
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState("");
    const [visible, setVisible] = useState(true);
    const [data, setData] = useState({

        name: "",

        date: "",

        time: "",

        address: ""

    });

    const initialState = {
        name: "",

        date: "",

        time: "",

        address: ""
    };

    const clearState = () => {
        setData({ ...initialState });
    };

    useEffect(() => {

        if (data.name.length < 3) {
            setMessage("Name must be at least 3 characters");
            setBtnDisabled(true);
        } 
        
        else if (data.address.length < 8) {
            setMessage("Addres must be at least 8 characters");
            setBtnDisabled(true);
        } 
        
        else {
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
        localStorage.setItem("User", JSON.stringify(data));
        clearState();
        setTimeout(() => {
            navigate('/')
        }, 3000);
        setVisible(false)
    };

    return (
        <div className="booking-container">
        <div className="form-container">
            <h2>Book ur dinner!</h2>
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
                    type="date"
                    placeholder="date"
                    value={data.date}
                    onChange={handleInputChange}
                    name="date"
                    required
                />
                <br />
                <input
                    type="time"
                    placeholder="time"
                    value={data.time}
                    onChange={handleInputChange}
                    name="time"
                    required
                />
                <br />
                <input
                    type="string"
                    placeholder="Address"
                    value={data.address}
                    onChange={handleInputChange}
                    name="address"
                />
                <br />
                <button type="submit" disabled={btnDisabled}>
                    Enviar
                </button>
            </form>
            <p>{visible ? message : 'Redirecting to Home...'}</p>
        </div>
        </div>
    );
}

export default Contact;