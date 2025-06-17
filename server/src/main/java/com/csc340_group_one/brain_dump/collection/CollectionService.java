package com.csc340_group_one.brain_dump.collection;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CollectionService {

    @Autowired
    private CollectionRepository repository;

    public List<Collection> getCollections() {
        return this.repository.findAll();
    }

    public Optional<Collection> getCollectionById(Long id) {
        return this.repository.findById(id);
    }

    public List<Collection> getCollectionsByAuthorId(Long authorId) {
        return this.repository.getCollectionsByAuthorId(authorId);
    }

    public List<Collection> getCollectionsByTitle(String title) {
        return this.repository.getCollectionsByTitle(title);
    }

    public List<Collection> getCollectionsByArticleInclusion(Long articleId) {
        return this.repository.getCollectionsByArticleInclusion(articleId);
    }

    public Optional<Collection> addCollection(Collection collection) {
        if (this.repository.existsById(collection.getId())) {
            return Optional.empty();
        }
        collection = this.repository.save(collection);
        return this.repository.findById(collection.getId());
    }

    public void deleteCollection(Long id) {
        this.repository.deleteById(id);
    }

    public Optional<Collection> updateCollection(Long id, Collection collection) {
        collection.setId(id);
        if (!this.repository.existsById(collection.getId())) {
            return Optional.empty();
        }
        this.repository.save(collection);
        return this.repository.findById(collection.getId());
    }

}
