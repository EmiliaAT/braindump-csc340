import { useState } from 'react';
import './Section.css';
import Article from '../../common/article/Article';
import Collection from '../../common/collection/Collection';

export default function Section({ title, isOpen, children }: { title: string, isOpen: boolean, children?: (Article | Collection)[] }) {
    // ...
    const [open, setOpen] = useState(isOpen);

    // ...
    const articleCard = (article: Article) => (
        <div className="dashboard-section-card">
            <div className="dashboard-card-header">
                <p className="dashboard-card-title">{article.getTitle()}</p>
                <p className="dashboard-card-author">{"- " + article.getAuthor().getName()}</p>
            </div>
            <div className="dashboard-card-content">
                {"\"" + article.getContent() + "\""}
            </div>
        </div>
    );

    // ...
    const collectionCard = (collection: Collection) => (
        <div className="dashboard-section-card">
            <div className="dashboard-card-header">
                <p className="dashboard-card-title">{collection.getTitle()}</p>
                <p className="dashboard-card-author">{"- " + collection.getAuthor().getName()}</p>
            </div>
            <div className="dashboard-card-content">
                {collection.getArticles().map((article) => <p>{"- " + article.getTitle() + ", " + article.getAuthor().getName()}</p>)}
            </div>
        </div>
    );

    // ...
    const content = () => (
        <>
            <hr className="dashboard-section-break" />
            <div className="dashboard-section-content">
                {
                    children?.map((child) => (child instanceof Article)
                        ? articleCard(child)
                        : ((child instanceof Collection)
                            ? collectionCard(child)
                            : <></>
                        ))
                }
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
