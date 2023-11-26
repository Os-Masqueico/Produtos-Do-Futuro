import './css/navBar.css';
import React from 'react';

class navBar extends React.Component {
    render() {
        return (
            <>
                <div className="navBar">
                    <div className="navBar__logo">
                        <img src=".//assets/logoWhite.png" alt="Docplanner Group" />
                        <p>Protudos do Futuro</p>
                    </div>
                    <div className="navBar__menu">
                        <ul>
                            <li>
                                <a>Sobre Nós</a>
                            </li>
                            <li>
                                <a>Contato</a>
                            </li>
                            <li>
                                <a>Lorem</a>
                            </li>
                        </ul>
                    </div>
                    <div className="navBar__menu">
                        <ul>
                            <li>
                                <a>Lorem</a>
                            </li>
                            <li>
                                <a>Lorem</a>
                            </li>
                            <li>
                                <a>Lorem</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        );
    }
}
export default navBar;