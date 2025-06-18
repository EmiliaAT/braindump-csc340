package com.csc340_group_one.brain_dump.collection;

import com.csc340_group_one.brain_dump.article.Article;
import com.csc340_group_one.brain_dump.article.ArticleService;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/collections")
@CrossOrigin(origins = "http://localhost:5173")
public class CollectionController {

    @Autowired
    private CollectionService collectionService;

    @Autowired
    private ArticleService articleService;

    @GetMapping("")
    public List<Collection> getCollections() {
        return this.collectionService.getCollections();
    }

    @GetMapping("{id}")
    public Optional<Collection> getCollectionById(@PathVariable Long id) {
        return this.collectionService.getCollectionById(id);
    }

    @GetMapping("user/{authorId}")
    public List<Collection> getCollectionsByAuthorId(@PathVariable Long authorId) {
        return this.collectionService.getCollectionsByAuthorId(authorId);
    }

    @GetMapping("articles/{articleId}")
    public List<Collection> getCollectionsByArticleInclusion(@PathVariable Long articleId) {
        return this.collectionService.getCollectionsByArticleInclusion(articleId);
    }

    @GetMapping("title/{title}")
    public List<Collection> getCollectionsByTitle(@PathVariable String title) {
        return this.collectionService.getCollectionsByTitle(title);
    }

    @PostMapping("")
    public Optional<Collection> addCollection(@RequestBody Collection collection) {
        return this.collectionService.addCollection(collection);
    }

    @PutMapping("{id}")
    public void updateCollection(@PathVariable Long id,
            @RequestParam Optional<Long> articleId) {
        if (!articleId.isEmpty()) {
            Optional<Collection> optCollection = this.collectionService.getCollectionById(id);
            Optional<Article> optArticle = this.articleService.getArticleById(articleId.get());
            if (optCollection.isEmpty() || optArticle.isEmpty()) {
                return;
            }
            Collection collection = optCollection.get();
            Article article = optArticle.get();
            List<Article> articles = collection.getArticles();
            articles.add(article);
            collection.setArticles(articles);
            this.collectionService.updateCollection(id, collection);
        }
    }

    @DeleteMapping("{id}")
    public void deleteCollection(@PathVariable Long id,
            @RequestParam Optional<Long> articleId) {
        if (articleId.isEmpty()) {
            this.collectionService.deleteCollection(id);
        } else {
            Optional<Collection> optCollection = this.collectionService.getCollectionById(id);
            if (optCollection.isEmpty()) {
                return;
            }
            Collection collection = optCollection.get();
            collection.setArticles(
                    collection.getArticles()
                            .stream()
                            .filter(article -> article.getId() != articleId.get())
                            .collect(Collectors.toList()));
            this.collectionService.updateCollection(id, collection);
        }
    }
}
