package com.csc340_group_one.brain_dump.comment;

// import java.time.String;

/* import java.time.String; */

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
    @JsonProperty("commentId")
    private Long commentid;

    @Column(name = "comment_body", nullable = true)
    @JsonProperty("commentBody")
    private String commentbody;

    @Column(name = "created_timestamp", nullable = true)
    @JsonProperty("createdTimestamp")
    private String createdtimestamp;

    @Column(name = "article_id", nullable = true)
    @JsonProperty("articleId")
    private Long articleid;

    @Column(name = "comment_user_id", nullable = true)
    @JsonProperty("commentUserId")
    private Long commentuserid;

    @Column(name = "comment_user_name", nullable = true)
    @JsonProperty("commentUserName")
    private String commentusername;

    public Comment() {
    }

    public Comment(Long commentid, String commentbody, String createdtimestamp,
            Long articleid, String commentusername, Long commentuserid) {
        this.commentid = commentid;
        this.commentbody = commentbody;
        this.createdtimestamp = createdtimestamp;
        this.articleid = articleid;
        this.commentusername = commentusername;
        this.commentuserid = commentuserid;
    }

    public Comment(String commentbody, String createdtimestamp, Long articleid,
            String commentusername, Long commentuserid) {
        this.commentbody = commentbody;
        this.createdtimestamp = createdtimestamp;
        this.articleid = articleid;
        this.commentusername = commentusername;
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

    public String getcreatedtimestamp() {
        return createdtimestamp;
    }

    public void setcreatedtimestamp(String createdtimestamp) {
        this.createdtimestamp = createdtimestamp;
    }

    public Long getarticleid() {
        return articleid;
    }

    public void setarticleid(Long articleid) {
        this.articleid = articleid;
    }

    public String getcommentusername() {
        return commentusername;
    }

    public void setcommentusername(String commentusername) {
        this.commentusername = commentusername;
    }

    public Long getcommentuserid() {
        return commentuserid;
    }

    public void setcommentuserid(Long commentuserid) {
        this.commentuserid = commentuserid;
    }
}
