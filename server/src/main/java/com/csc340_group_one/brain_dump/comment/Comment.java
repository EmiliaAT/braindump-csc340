package com.csc340_group_one.brain_dump.comment;

import java.time.Instant;

/* import java.time.Instant; */


import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
/* 
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
*/

@Entity
@Table(name = "comments")
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "comment_id", nullable = false)
    @JsonProperty("comment_id")
    private Long    commentid;
    @Column(name = "comment_body", nullable = true)
    @JsonProperty("comment_body")
    private String  commentbody;
    @Column(name = "created_timestamp", nullable = true)
    @JsonProperty("created_timestamp")
    private Instant createdtimestamp;
    @Column(name = "article_id", nullable = true)
    @JsonProperty("article_id")
    private Long    articleid;
    @Column(name = "reply_to_comment_id", nullable = true)
    @JsonProperty("reply_to_comment_id")
    private Long    replytocommentid;
    @Column(name = "comment_user_id", nullable = true)
    @JsonProperty("comment_user_id")
    private Long    commentuserid;

    public Comment() {
    }

    public Comment(Long commentid, String commentbody, Instant createdtimestamp, Long articleid, Long replytocommentid, Long commentuserid ) {
        this.commentid = commentid;
        this.commentbody = commentbody;
        this.createdtimestamp = createdtimestamp;
        this.articleid = articleid;
        this.replytocommentid = replytocommentid;
        this.commentuserid = commentuserid;
    }

    public Comment( String commentbody, Instant createdtimestamp, Long articleid, Long replytocommentid, Long commentuserid ) {
        this.commentbody = commentbody;
        this.createdtimestamp = createdtimestamp;
        this.articleid = articleid;
        this.replytocommentid = replytocommentid;
        this.commentuserid = commentuserid;
    }

    public Long getcommentid() {
        return commentid;
    }

    public void setcommentid(Long commentid) {
        this.commentid = commentid;
    }

    public String getcommentbody() {
        return commentbody;
    }

    public void setcommentbody(String commentbody) {
        this.commentbody = commentbody;
    }

    public Instant getcreatedtimestamp() {
        return createdtimestamp;
    }

    public void setcreatedtimestamp(Instant createdtimestamp) {
        this.createdtimestamp = createdtimestamp;
    }

    public Long getarticleid() {
        return articleid;
    }

    public void setarticleid(Long articleid) {
        this.articleid = articleid;
    }

    public Long getreplytocommentid() {
        return replytocommentid;
    }

    public void setreplytocommentid(Long replytocommentid) {
        this.replytocommentid = replytocommentid;
    }

    public Long getcommentuserid() {
        return commentuserid;
    }

    public void setcommentuserid(Long commentuserid) {
        this.commentuserid = commentuserid;
    }

}

