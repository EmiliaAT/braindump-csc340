package com.csc340_group_one.brain_dump.subscription;

import java.time.Instant;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "subscriptions")
public class Subscription {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "subscription_id", nullable = false)
    @JsonProperty("subscription_id")
    private Long    subscriptionid;
    @Column(name = "created_timestamp", nullable = true)
    @JsonProperty("created_timestamp")
    private Instant createdtimestamp;
    @Column(name = "subscriber_user_id", nullable = false)
    @JsonProperty("subscriber_user_id")
    private Long    subscriberuserid;
    @Column(name = "author_user_id", nullable = false)
    @JsonProperty("author_user_id")
    private Long    authoruserid;

    public Subscription() {
    }

    public Subscription(Long subscriptionid, Instant createdtimestamp, Long subscriberuserid, Long authoruserid ) {
        this.subscriptionid = subscriptionid;
        this.createdtimestamp = createdtimestamp;
        this.subscriberuserid = subscriberuserid;
        this.authoruserid = authoruserid;
    }

    public Subscription( Instant createdtimestamp, Long subscriberuserid, Long authoruserid ) {
        this.createdtimestamp = createdtimestamp;
        this.subscriberuserid = subscriberuserid;
        this.authoruserid = authoruserid;
    }

    public Long getsubscriptionid() {
        return subscriptionid;
    }

    public void setsubscriptionid(Long subscriptionid) {
        this.subscriptionid = subscriptionid;
    }

    public Instant getcreatedtimestamp() {
        return createdtimestamp;
    }

    public void setcreatedtimestamp() {
        this.createdtimestamp = Instant.now();
    }

    public Long getsubscriberuserid() {
        return subscriberuserid;
    }

    public void setsubscriberuserid(Long subscriberuserid) {
        this.subscriberuserid = subscriberuserid;
    }

    public Long getauthoruserid() {
        return authoruserid;
    }

    public void setauthoruserid(Long authoruserid) {
        this.authoruserid = authoruserid;
    }

}

