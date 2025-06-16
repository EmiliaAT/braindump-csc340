package com.csc340_group_one.brain_dump.article;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ArticleRepository extends JpaRepository<Article, Long> {

    @Query(value = "SELECT a.* FROM articles a WHERE a.author_id = ?1", nativeQuery = true)
    public List<Article> getArticlesByAuthorId(Long authorId);

    @Query(value = "SELECT a.* FROM articles a JOIN collection_articles ca ON "
            + "a.article_id = ca.article_id"
            + " WHERE ca.collection_id = ?1", nativeQuery = true)
    public List<Article> getArticlesByCollectionInclusion(Long collectionId);

    @Query(value = "SELECT a.* FROM articles a WHERE a.title LIKE ?1", nativeQuery = true)
    public List<Article> getArticlesByTitle(String title);
}
