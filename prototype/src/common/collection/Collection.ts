import Article from "../article/Article";
import User from "../user/User";

export default class Collection {

    private title: string;

    private author: User;

    private articles: Article[];

    constructor(title: string, author: User, articles: Article[]) {
        this.title = title;
        this.author = author;
        this.articles = articles;
    }

    public getTitle(): string {
        return this.title;
    }

    public getAuthor(): User {
        return this.author;
    }

    public getArticles(): Article[] {
        return this.articles;
    }

    public setAuthor(author: User) {
        this.author = author;
    }

    public setArticles(articles: Article[]) {
        this.articles = articles;
    }

}
