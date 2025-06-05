package com.csc340_group_one.brain_dump.article;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ArticleService {

    @Autowired
    private ArticleRepository repository;

    public List<Article> getArticles() {
        return this.repository.findAll();
    }

    public Article getArticleById(Long id) {
        return this.repository.findById(id).orElse(null);
    }

    public Article addArticle(Article article) {
        return this.repository.save(article);
    }

}
