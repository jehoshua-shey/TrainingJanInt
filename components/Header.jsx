import React from 'react'

const Header = () => {
    return (
        <React.Fragment>
            <nav>
                <div className="logo">G10<span>PAY</span></div>
                <ul className="menu-list">
                    <li className="menu-item">
                        <label className="menu-item-label">Exchange</label>
                        <div className="g10-dropdown">
                            <div className="dropdown-con">
                                <ul className="dropdown-list">
                                    <li className="dropdown-item">P2P</li>
                                    <li className="dropdown-item">Markets</li>
                                    <li className="dropdown-item">Buy with credit</li>
                                    <li className="dropdown-item">BITCOIN ETFS</li>
                                    <li className="dropdown-item">ETHEREUM ETFS</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <a href="" className="menu-item"><li>About</li></a>
                    <a href="" className="menu-item"><li>Features</li></a>
                    <a href="/login" className="menu-item"><li>Log In</li></a>
                    <a href="/signup" className="menu-item"><li>Sign Up</li></a>
                </ul>
            </nav>
        </React.Fragment>
    )
}

export default Header