import Article from '../../common/article/Article';
import Collection from '../../common/collection/Collection';
import User from '../../common/user/User';
import './Dashboard.css'
import Section from '../../common/section/Section';

interface DashboardProps {
    user: User;
    articles: Article[];
    collections: Collection[];
}

export default function Dashboard({ user, articles, collections }: DashboardProps) {
    return (
        <div className="dashboard-container">
            {/* ... */}
            <div className="dashboard-greeting-container">
                <h1 className="dashboard-greeting-title">Hello, {user.getName()}!</h1>
            </div>
            <hr className="dashboard-greeting-break" />
            {/* ... */}
            <Section title="Your Articles" isOpen={true}>
                {articles.filter((article) => article.getAuthor() === user)}
            </Section>
            {/* ... */}
            <Section title="Your Collections" isOpen={true}>
                {collections.filter((collection) => collection.getAuthor() === user)}
            </Section>
        </div>
    );
}
