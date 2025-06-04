package com.csc340_group_one.brain_dump;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Collection")
public class Collection {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long    collectionId;
    private String  collectionName;
    private Long    authorUserId;

    public Collection() {
    }

    public Collection(Long collectionId, String collectionName, Long authorUserId ) {
        this.collectionId = collectionId;
        this.collectionName = collectionName;
        this.authorUserId = authorUserId;
    }

    public Collection( String collectionName, Long authorUserId ) {
        this.collectionName = collectionName;
        this.authorUserId = authorUserId;
    }

    public Long getCollectionId() {
        return collectionId;
    }

    public void setCollectionId(Long collectionId) {
        this.collectionId = collectionId;
    }

    public String getCollectionName() {
        return collectionName;
    }

    public void setCollectionName(String collectionName) {
        this.collectionName = collectionName;
    }

    public Long getAuthorUserId() {
        return authorUserId;
    }

    public void setAuthorUserId(Long authorUserId) {
        this.authorUserId = authorUserId;
    }

}

