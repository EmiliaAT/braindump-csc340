import { useState } from 'react';
import './Dashboard.css'

function Section({ title, isOpen }: { title: string, isOpen: boolean }) {
    const [open, setOpen] = useState(isOpen);

    return (
        <div className="dashboard-section">
            {/* ... */}
            <div className="dashboard-section-header" onClick={() => setOpen(!open)}>
                <h2 className="dashboard-section-title">{title}</h2>
                <h2 className="dashboard-section-toggle">{"[" + (open ? "o" : " ") + "]"}</h2>
            </div>
            {/* ... */}
            <div className="dashboard-section-content">
                {
                    (open ? "Test" : "")
                }
            </div>
        </div>
    );
}

export default function Dashboard() {
    return (
        <div className="dashboard-container">
            <Section title="Test [A]" isOpen={true} />
            <Section title="Test [B]" isOpen={true} />
            <Section title="Test [C]" isOpen={true} />
        </div>
    );
}
