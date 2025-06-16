package com.csc340_group_one.brain_dump.article;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ArticleService {

    @Autowired
    private ArticleRepository repository;

    public List<Article> getArticles() {
        return this.repository.findAll();
    }

    public Optional<Article> getArticleById(Long id) {
        return this.repository.findById(id);
    }

    public List<Article> getArticlesByAuthorId(Long authorId) {
        return this.repository.getArticlesByAuthorId(authorId);
    }

    public List<Article> getArticlesByTitle(String title) {
        return this.repository.getArticlesByTitle(title);
    }

    public List<Article> getArticlesByCollectionInclusion(Long collectionId) {
        return this.repository.getArticlesByCollectionInclusion(collectionId);
    }

    public Optional<Article> addArticle(Article article) {
        if (article.getId() != null) {
            return Optional.empty();
        }
        article = this.repository.save(article);
        return this.getArticleById(article.getId());
    }

    public Optional<Article> updateArticle(Long id, Article article) {
        article.setId(id);
        if (!this.repository.existsById(id)) {
            return Optional.empty();
        }
        this.repository.save(article);
        return this.getArticleById(id);
    }

    public void deleteArticle(Long id) {
        this.repository.deleteById(id);
    }
}
