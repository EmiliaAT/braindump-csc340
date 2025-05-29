import { MouseEventHandler } from 'react';
import './Header.css';

interface HeaderProps {
    suffix: "Dashboard" | "Discover" | "Collections" | undefined;
    onDashboard: MouseEventHandler<HTMLButtonElement>;
    onDiscover: MouseEventHandler<HTMLButtonElement>;
    onCollections: MouseEventHandler<HTMLButtonElement>;
}

export default function Header({ suffix, onDashboard, onDiscover, onCollections }: HeaderProps) {
    // ...
    const suffixComponent = (suffix !== undefined)
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
                <button className="header-button" onClick={onDashboard}>Dashboard</button>
                <button className="header-button" onClick={onDiscover}>Discover</button>
                <button className="header-button" onClick={onCollections}>Collections</button>
            </div>
        </header>
    );
}
