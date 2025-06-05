package com.csc340_group_one.brain_dump.comment;

import java.time.Instant;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Comment")
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long    commentId;
    private String  commentBody;
    private Instant createdTimestamp;
    private Long    articleId;
    private Long    replyToCommentId;
    private Long    commentUserId;

    public Comment() {
    }

    public Comment(Long commentId, String commentBody, Instant createdTimestamp, Long articleId, Long replyToCommentId, Long commentUserId ) {
        this.commentId = commentId;
        this.commentBody = commentBody;
        this.createdTimestamp = createdTimestamp;
        this.articleId = articleId;
        this.replyToCommentId = replyToCommentId;
        this.commentUserId = commentUserId;
    }

    public Comment( String commentBody, Instant createdTimestamp, Long articleId, Long replyToCommentId, Long commentUserId ) {
        this.commentBody = commentBody;
        this.createdTimestamp = createdTimestamp;
        this.articleId = articleId;
        this.replyToCommentId = replyToCommentId;
        this.commentUserId = commentUserId;
    }

    public Long getCommentId() {
        return commentId;
    }

    public void setCommentId(Long commentId) {
        this.commentId = commentId;
    }

    public String getCommentBody() {
        return commentBody;
    }

    public void setCommentBody(String commentBody) {
        this.commentBody = commentBody;
    }

    public Instant getCreatedTimestamp() {
        return createdTimestamp;
    }

    public void setCreatedTimestamp(Instant createdTimestamp) {
        this.createdTimestamp = createdTimestamp;
    }

    public Long getArticleId() {
        return articleId;
    }

    public void setArticleId(Long articleId) {
        this.articleId = articleId;
    }

    public Long getReplyToCommentId() {
        return replyToCommentId;
    }

    public void setReplyToCommentId(Long replyToCommentId) {
        this.replyToCommentId = replyToCommentId;
    }

    public Long getCommentUserId() {
        return commentUserId;
    }

    public void setCommentUserId(Long commentUserId) {
        this.commentUserId = commentUserId;
    }

}

