package com.csc340_group_one.brain_dump.collection;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CollectionRepository extends JpaRepository<Collection, Long> {

    @Query(value = "SELECT c.* FROM collections c WHERE c.author_id = ?1", nativeQuery = true)
    public List<Collection> getCollectionsByAuthorId(Long authorId);

    @Query(value = "SELECT c.* FROM collections c JOIN collection_articles ca ON c.collection_id = ca.collection_id WHERE ca.article_id = ?1", nativeQuery = true)
    public List<Collection> getCollectionsByArticleInclusion(Long articleId);

    @Query(value = "SELECT c.* FROM collections c WHERE c.title = ?1", nativeQuery = true)
    public List<Collection> getCollectionsByTitle(String title);

}
