import './Dashboard.css'
import Section from './Section';

export default function Dashboard() {
    return (
        <div className="dashboard-container">
            {/* ... */}
            <Section title="Recent Articles" isOpen={true}>
                <div className="dashboard-section-card">
                    Test 1
                </div>
                <div className="dashboard-section-card">
                    Test 2
                </div>
                <div className="dashboard-section-card">
                    Test 3
                </div>
            </Section>
            {/* ... */}
            <Section title="Recent Collections" isOpen={true}>
                <div className="dashboard-section-card">
                    Test 1
                </div>
                <div className="dashboard-section-card">
                    Test 2
                </div>
                <div className="dashboard-section-card">
                    Test 3
                </div>
                <div className="dashboard-section-card">
                    Test 4
                </div>
                <div className="dashboard-section-card">
                    Test 5
                </div>
                <div className="dashboard-section-card">
                    Test 6
                </div>
            </Section>
        </div>
    );
}
