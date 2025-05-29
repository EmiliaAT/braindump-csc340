import { MouseEventHandler } from 'react';
import './Header.css';

interface HeaderProps {
    suffix: "Dashboard" | "Discover" | undefined;
    onTestA: MouseEventHandler<HTMLButtonElement>;
    onTestB: MouseEventHandler<HTMLButtonElement>;
}

export default function Header({ suffix, onTestA, onTestB }: HeaderProps) {
    // ...
    const suffixComponent = (typeof suffix !== undefined)
        ? <p className="header-suffix">{suffix}</p>
        : <></>;

    return (
        <header className="header-container">
            {/* ... */}
            <div className="header-title-container">
                <p className="header-title">Brain<span className="header-title-accent">Dump</span></p>
                {suffixComponent}
            </div>
            {/* ... */}
            <div className="header-button-container">
                <button className="header-button" onClick={onTestA}>Test A</button>
                <button className="header-button" onClick={onTestB}>Test B</button>
            </div>
        </header>
    );
}
