package com.csc340_group_one.brain_dump;

import java.time.Instant;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Article")
public class Article {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long    articleId;
    private String  title;
    private String  articleBody;
    private Long    authorUserId;
    private String  privacyFlag;
    private Instant createdTimestamp;
    private Long    starCount;
    private String  publishFlag;

    public Article() {
    }

    public Article(Long articleId, String title, String articleBody, Long authorUserId, String privacyFlag, Instant createdTimestamp,
                    Long starCount, String publishFlag ) {
        this.articleId = articleId;
        this.title = title;
        this.articleBody = articleBody;
        this.authorUserId = authorUserId;
        this.privacyFlag = privacyFlag;
        this.createdTimestamp = createdTimestamp;
        this.starCount = starCount;
        this.publishFlag = publishFlag;
    }

    public Article( String title, String articleBody, Long authorUserId, String privacyFlag, Instant createdTimestamp,
                    Long starCount, String publishFlag) {
        this.title = title;
        this.articleBody = articleBody;
        this.authorUserId = authorUserId;
        this.privacyFlag = privacyFlag;
        this.createdTimestamp = createdTimestamp;
        this.starCount = starCount;
        this.publishFlag = publishFlag;
    }

    public Long getArticleId() {
        return articleId;
    }

    public void setArticleId(Long articleId) {
        this.articleId = articleId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getArticleBody() {
        return articleBody;
    }

    public void setArticleBody(String articleBody) {
        this.articleBody = articleBody;
    }

    public Long getAuthorUserId() {
        return authorUserId;
    }

    public void setAuthorUserId(Long authorUserId) {
        this.authorUserId = authorUserId;
    }

    public String getPrivacyFlag() {
        return privacyFlag;
    }

    public void setPrivacyFlag(String privacyFlag) {
        this.privacyFlag = privacyFlag;
    }

    public Instant getCreatedTimestamp() {
        return createdTimestamp;
    }

    public void setCreatedTimestamp(Instant createdTimestamp) {
        this.createdTimestamp = createdTimestamp;
    }

    public Long getStarCount() {
        return starCount;
    }

    public void setStarCount(Long starCount) {
        this.starCount = starCount;
    }

    public String getPublishFlag() {
        return publishFlag;
    }

    public void setPublishFlag(String publishFlag) {
        this.publishFlag = publishFlag;
    }

}

