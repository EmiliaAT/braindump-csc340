package com.csc340_group_one.brain_dump.collection;

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
    private CollectionService service;

    @GetMapping("")
    public List<Collection> getCollections() {
        return this.service.getCollections();
    }

    @GetMapping("{id}")
    public Optional<Collection> getCollectionById(@PathVariable Long id) {
        return this.service.getCollectionById(id);
    }

    @GetMapping("user/{authorId}")
    public List<Collection> getCollectionsByAuthorId(@PathVariable Long authorId) {
        return this.service.getCollectionsByAuthorId(authorId);
    }

    @GetMapping("articles/{articleId}")
    public List<Collection> getCollectionsByArticleInclusion(@PathVariable Long articleId) {
        return this.service.getCollectionsByArticleInclusion(articleId);
    }

    @GetMapping("title/{title}")
    public List<Collection> getCollectionsByTitle(@PathVariable String title) {
        return this.service.getCollectionsByTitle(title);
    }

    @PostMapping("")
    public Optional<Collection> addCollection(@RequestBody Collection collection) {
        return this.service.addCollection(collection);
    }

    @PutMapping("{id}")
    public Optional<Collection> updateCollection(@PathVariable Long id, @RequestBody Collection collection) {
        System.out.println(collection);
        return this.service.updateCollection(id, collection);
    }

    @DeleteMapping("{id}")
    public void deleteCollection(@PathVariable Long id,
            @RequestParam Optional<Long> articleId) {
        if (articleId.isEmpty()) {
            this.service.deleteCollection(id);
        } else {
            Optional<Collection> optCollection = this.service.getCollectionById(id);
            if (optCollection.isEmpty()) {
                return;
            }
            Collection collection = optCollection.get();
            collection.setArticles(
                    collection.getArticles()
                            .stream()
                            .filter(article -> article.getId() != articleId.get())
                            .collect(Collectors.toList()));
            this.service.updateCollection(id, collection);
        }
    }
}
