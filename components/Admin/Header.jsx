import React from 'react'

const Header = () => {
    return (
        <React.Fragment>
            <nav>
                <a href="/"><div className="logo">G10<span>PAY</span></div></a>
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
                    <li className="menu-item">About</li>
                    <li className="menu-item">Features</li>
                    <li className="menu-item">Profile</li>
                    <li className="menu-item">Logout</li>
                </ul>
            </nav>
        </React.Fragment>
    )
}

export default Header