package com.csc340_group_one.brain_dump;

import java.time.Instant;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "ArticleCollection")
public class ArticleCollection {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long    collectionId;
    private Long    articleId;
    private Instant createdTimestamp;

    public ArticleCollection() {
    }

    public ArticleCollection(Long collectionId, Long articleId, Instant createdTimestamp ) {
        this.collectionId = collectionId;
        this.articleId = articleId;
        this.createdTimestamp = createdTimestamp;
    }

    public Long getCollectionId() {
        return collectionId;
    }

    public void setCollectionId(Long collectionId) {
        this.collectionId = collectionId;
    }

    public Long getArticleId() {
        return articleId;
    }

    public void setArticleId(Long articleId) {
        this.articleId = articleId;
    }

    public Instant getCreatedTimestamp() {
        return createdTimestamp;
    }

    public void setCreatedTimestamp(Instant createdTimestamp) {
        this.createdTimestamp = createdTimestamp;
    }

}

