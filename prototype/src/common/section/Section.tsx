import { useState } from 'react';
import './Section.css';
import Article from '../article/Article';
import Collection from '../collection/Collection';

export default function Section({ title, isOpen, children }: { title: string, isOpen: boolean, children?: (Article | Collection)[] }) {
    // ...
    const [open, setOpen] = useState(isOpen);

    // ...
    const articleCard = (article: Article) => (
        <div className="section-card" key={article.getTitle() + "-" + article.getAuthor().getName()}>
            <div className="section-card-header">
                <p className="section-card-title">{article.getTitle()}</p>
                <p className="section-card-author">{"- " + article.getAuthor().getName()}</p>
            </div>
            <div className="section-card-content">
                {"\"" + article.getContent() + "\""}
            </div>
        </div>
    );

    // ...
    const collectionCard = (collection: Collection) => (
        <div className="section-card" key={collection.getTitle() + "-" + collection.getAuthor().getName()}>
            <div className="section-card-header">
                <p className="section-card-title">{collection.getTitle()}</p>
                <p className="section-card-author">{"- " + collection.getAuthor().getName()}</p>
            </div>
            <div className="section-card-content">
                {collection.getArticles().map((article) => <p>{"- " + article.getTitle() + ", " + article.getAuthor().getName()}</p>)}
            </div>
        </div>
    );

    // ...
    const content = () => (
        <>
            <hr className="section-break" />
            <div className="section-content">
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
        <div className="section-container">
            {/* ... */}
            <div className="section-header">
                <h2 className="section-title">{title}</h2>
                <h2 className="section-toggle" onClick={() => setOpen(!open)}>{"[" + (open ? "v" : ">") + "]"}</h2>
            </div>
            {/* ... */}
            {open ? content() : <></>}
        </div>
    );
}
