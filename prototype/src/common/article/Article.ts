import User from "../user/User";

export default class Article {

    private title: string;

    private author: User;

    private content: string;

    constructor(title: string, author: User, content: string) {
        this.title = title;
        this.author = author;
        this.content = content;
    }

    public getTitle() {
        return this.title;
    }

    public getAuthor(): User {
        return this.author;
    }

    public getContent(): string {
        return this.content;
    }

    public setAuthor(author: User) {
        this.author = author;
    }

    public setContent(content: string) {
        this.content = content;
    }

}
