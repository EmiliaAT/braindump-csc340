package com.csc340_group_one.brain_dump;

import java.time.Instant;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Subscription")
public class Subscription {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long    subscriptionId;
    private Instant createdTimestamp;
    private Long    subscriberUserId;
    private Long    authorUserId;

    public Subscription() {
    }

    public Subscription(Long subscriptionId, Instant createdTimestamp, Long subscriberUserId, Long authorUserId ) {
        this.subscriptionId = subscriptionId;
        this.createdTimestamp = createdTimestamp;
        this.subscriberUserId = subscriberUserId;
        this.authorUserId = authorUserId;
    }

    public Subscription( Instant createdTimestamp, Long subscriberUserId, Long authorUserId ) {
        this.createdTimestamp = createdTimestamp;
        this.subscriberUserId = subscriberUserId;
        this.authorUserId = authorUserId;
    }

    public Long getSubscriptionId() {
        return subscriptionId;
    }

    public void setSubscriptionId(Long subscriptionId) {
        this.subscriptionId = subscriptionId;
    }

    public Instant getCreatedTimestamp() {
        return createdTimestamp;
    }

    public void setCreatedTimestamp(Instant createdTimestamp) {
        this.createdTimestamp = createdTimestamp;
    }

    public Long getSubscriberUserId() {
        return subscriberUserId;
    }

    public void setSubscriberUserId(Long subscriberUserId) {
        this.subscriberUserId = subscriberUserId;
    }

    public Long getAuthorUserId() {
        return authorUserId;
    }

    public void setAuthorUserId(Long authorUserId) {
        this.authorUserId = authorUserId;
    }

}

