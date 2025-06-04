package com.csc340_group_one.brain_dump;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Tag")
public class Tag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long    tagId;
    private String  tagName;
    private Long    authorUserId;

    public Tag() {
    }

    public Tag(Long tagId, String tagName, Long authorUserId ) {
        this.tagId = tagId;
        this.tagName = tagName;
        this.authorUserId = authorUserId;
    }

    public Tag( String tagName, Long authorUserId ) {
        this.tagName = tagName;
        this.authorUserId = authorUserId;
    }

    public Long getTagId() {
        return tagId;
    }

    public void setTagId(Long tagId) {
        this.tagId = tagId;
    }

    public String getTagName() {
        return tagName;
    }

    public void setTagName(String tagName) {
        this.tagName = tagName;
    }

    public Long getAuthorUserId() {
        return authorUserId;
    }

    public void setAuthorUserId(Long authorUserId) {
        this.authorUserId = authorUserId;
    }

}

