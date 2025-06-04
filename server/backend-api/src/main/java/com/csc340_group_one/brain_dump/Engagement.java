package com.csc340_group_one.brain_dump;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Engagement")
public class Engagement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long    articleId;
    private Long    viewCount;
    private Long    commentCount;

    public Engagement() {
    }

    public Engagement(Long articleId, Long viewCount, Long commentCount ) {
        this.articleId = articleId;
        this.viewCount = viewCount;
        this.commentCount = commentCount;
    }

    public Engagement( Long viewCount, Long commentCount ) {
        this.viewCount = viewCount;
        this.commentCount = commentCount;
    }

    public Long getArticleId() {
        return articleId;
    }

    public void setArticleId(Long articleId) {
        this.articleId = articleId;
    }

    public Long getViewCount() {
        return viewCount;
    }

    public void setViewCount(Long viewCount) {
        this.viewCount = viewCount;
    }

    public Long getCommentCount() {
        return commentCount;
    }

    public void setCommentCount(Long commentCount) {
        this.commentCount = commentCount;
    }

}

