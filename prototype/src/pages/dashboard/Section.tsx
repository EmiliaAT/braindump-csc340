import { useState } from 'react';
import './Section.css';

export default function Section({ title, isOpen, children }: { title: string, isOpen: boolean, children?: React.ReactNode }) {
    // ...
    const [open, setOpen] = useState(isOpen);

    // ...
    const content = () => (
        <>
            <hr className="dashboard-section-break" />
            <div className="dashboard-section-content">
                {children}
            </div>
        </>
    );

    return (
        <div className="dashboard-section">
            {/* ... */}
            <div className="dashboard-section-header">
                <h2 className="dashboard-section-title">{title}</h2>
                <h2 className="dashboard-section-toggle" onClick={() => setOpen(!open)}>{"[" + (open ? "v" : ">") + "]"}</h2>
            </div>
            {/* ... */}
            {open ? content() : <></>}
        </div>
    );
}
