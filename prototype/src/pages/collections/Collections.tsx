import Article from "../../common/article/Article";
import Collection from "../../common/collection/Collection";
import Section from "../../common/section/Section";
import User from "../../common/user/User";
import "./Collections.css";

interface CollectionsProps {
    user: User;
    articles: Article[];
    collections: Collection[];
}

export default function Collections({ user, articles, collections }: CollectionsProps) {
    // ...
    const collectionCard = (collection: Collection) => (
        <Section title={collection.getTitle()} isOpen={true} key={collection.getTitle() + "-" + collection.getAuthor().getName()}>
            {collection.getArticles()}
        </Section>
    );

    return (
        <div className="collections-container">
            {/* ... */}
            <div className="collections-greeting-container">
                <h1 className="collections-greeting-title">{user.getName()}'s Collections:</h1>
            </div>
            <hr className="collections-greeting-break" />
            {/* ... */}
            <Section title="All Articles" isOpen={true}>
                {articles.filter((article) => article.getAuthor() === user)}
            </Section>
            {/* ... */}
            {
                collections
                    .filter((collection) => collection.getAuthor() === user)
                    .map((collection) => collectionCard(collection))
            }
        </div>
    );
}
