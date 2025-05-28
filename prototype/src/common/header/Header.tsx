import { MouseEventHandler } from 'react';
import './Header.css';

interface HeaderProps {
    onTestA: MouseEventHandler<HTMLButtonElement>;
    onTestB: MouseEventHandler<HTMLButtonElement>;
}

export default function Header({ onTestA, onTestB }: HeaderProps) {
    return (
        <header className="header-container">
            <div className="header-title-container">
                <p className="header-title">Brain<span className="header-title-accent">Dump</span></p>
            </div>
            <div className="header-button-container">
                <button className="header-button" onClick={onTestA}>Test A</button>
                <button className="header-button" onClick={onTestB}>Test B</button>
            </div>
        </header>
    );
}
