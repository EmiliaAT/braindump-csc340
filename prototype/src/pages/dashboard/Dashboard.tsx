import Article from '../../common/article/Article';
import Collection from '../../common/collection/Collection';
import User from '../../common/user/User';
import './Dashboard.css'
import Section from './Section';

export default function Dashboard() {
    const users = [new User("User [A]", [], []), new User("User [B]", [], [])];

    const articles = [new Article("Article [A]", users[0], "Test"), new Article("Article [B]", users[1], "Test"), new Article("Article [C]", users[0], "Test")];

    const collections = [new Collection("Collection [A]", users[0], [articles[0], articles[2]]), new Collection("Collection [B]", users[1], [articles[1]])];

    return (
        <div className="dashboard-container">
            {/* ... */}
            <Section title="Recent Articles" isOpen={true}>
                {articles}
            </Section>
            {/* ... */}
            <Section title="Recent Collections" isOpen={true}>
                {collections}
            </Section>
        </div>
    );
}
