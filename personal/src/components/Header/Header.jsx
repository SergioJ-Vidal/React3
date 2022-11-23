import React from "react";

const Header = () => {

    return <header className="App-header">
        <h3>Personal Page</h3>
        <div>
            <div
                className="navigation-menu">
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </header>

};

export default Header;