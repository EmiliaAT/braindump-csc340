import Article from "../article/Article";
import Collection from "../collection/Collection";

export default class User {

    private name: string;

    private articles: Article[];

    private collections: Collection[];

    constructor(name: string, articles: Article[], collections: Collection[]) {
        this.name = name;
        this.articles = articles;
        this.collections = collections;
    }

    public getName(): string {
        return this.name;
    }

    public getArticles(): Article[] {
        return this.articles;
    }

    public getCollections(): Collection[] {
        return this.collections;
    }

    public setArticles(articles: Article[]) {
        this.articles = articles;
    }

    public setCollections(collections: Collection[]) {
        this.collections = collections;
    }

}
