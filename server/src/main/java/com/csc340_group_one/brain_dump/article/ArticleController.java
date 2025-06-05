package com.csc340_group_one.brain_dump.article;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/articles")
public class ArticleController {

    @Autowired
    private ArticleService service;

    @GetMapping("")
    public List<Article> getArticles() {
        return this.service.getArticles();
    }

    @GetMapping("{id}")
    public Optional<Article> getArticleById(@PathVariable Long id) {
        return this.service.getArticleById(id);
    }

    @GetMapping("user/{authorId}")
    public List<Article> getArticlesByAuthorId(@PathVariable Long authorId) {
        return this.service.getArticlesByAuthorId(authorId);
    }

    @GetMapping("collection/{collectionId}")
    public List<Article> getArticlesByCollectionInclusion(@PathVariable Long collectionId) {
        return this.service.getArticlesByCollectionInclusion(collectionId);
    }

    @GetMapping("title/{title}")
    public List<Article> getArticlesByTitle(@PathVariable String title) {
        return this.service.getArticlesByTitle(title);
    }

}
