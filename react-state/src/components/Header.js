import React, { Component } from 'react';

class Header extends Component {
    render() {
        let {logo} = this.props;

        return (
            <header className="header">
                <nav className="header__links header__links--left">
                    <a>Home</a> |
                    <a>About</a> |
                    <a>Contact</a>
                </nav>
                <div className="header__logo">
                    {logo}
                </div>
                <div className="header__links header__links--right">
                    <input className="search" placeholder="Search..." />
                    <p className="lastPressed"></p>
                </div>
            </header>
        );
    }
}

export default Header;