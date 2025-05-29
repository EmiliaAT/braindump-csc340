import Article from '../../common/article/Article';
import Collection from '../../common/collection/Collection';
import Section from '../../common/section/Section';
import './Discover.css';

interface DiscoverProps {
    articles: Article[];
    collections: Collection[];
}

export default function Discover({ articles, collections }: DiscoverProps) {
    return (
        <div className="discover-container">
            {/* ... */}
            <div className="discover-greeting-container">
                <h1 className="discover-greeting-title">Recommended:</h1>
            </div>
            <hr className="discover-greeting-break" />
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
