package com.safeplace.braindump.subscription;

//import java.time.Instant;

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
    @JsonProperty("subscriptionId")
    private Long    subscriptionid;
    @Column(name = "subscription_created_timestamp", nullable = true)
    @JsonProperty("subscriptionCreatedTimestamp")
    private String subscriptioncreatedtimestamp;
    @Column(name = "subscriber_user_id", nullable = false)
    @JsonProperty("subscriberUserId")
    private Long    subscriberuserid;
    @Column(name = "author_user_id", nullable = false)
    @JsonProperty("authorUserId")
    private Long    authoruserid;
    @Column(name = "author_user_name", nullable = false)
    @JsonProperty("authorUserName")
    private String authorusername;

    public Subscription() {
    }

    public Subscription(Long subscriptionid, String subscriptioncreatedtimestamp, Long subscriberuserid,
     Long authoruserid, String authorusername) {
        this.subscriptionid = subscriptionid;
        this.subscriptioncreatedtimestamp = subscriptioncreatedtimestamp;
        this.subscriberuserid = subscriberuserid;
        this.authoruserid = authoruserid;
        this.authorusername = authorusername;
    }

    public Subscription( String subscriptioncreatedtimestamp, Long subscriberuserid, Long authoruserid, String authorusername) {
        this.subscriptioncreatedtimestamp = subscriptioncreatedtimestamp;
        this.subscriberuserid = subscriberuserid;
        this.authoruserid = authoruserid;
        this.authorusername = authorusername;
    }

    public Long getsubscriptionid() {
        return subscriptionid;
    }

    public void setsubscriptionid(Long subscriptionid) {
        this.subscriptionid = subscriptionid;
    }

    public String getsubscriptioncreatedtimestamp() {
        return subscriptioncreatedtimestamp;
    }

    public void setsubscriptioncreatedtimestamp(String subscriptioncreatedtimestamp) {
        this.subscriptioncreatedtimestamp = subscriptioncreatedtimestamp;
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
    
    public String getauthorusername() {
        return authorusername;
    }

    public void setauthorusername(String authorusername) {
        this.authorusername = authorusername;
    }

}

