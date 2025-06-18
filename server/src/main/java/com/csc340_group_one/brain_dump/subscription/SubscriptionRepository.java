package com.safeplace.braindump.subscription;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.safeplace.braindump.Article;
import com.safeplace.braindump.User;

@Repository
public interface SubscriptionRepository extends JpaRepository<Subscription, Long> {

    Subscription findById(long subscriptionid);

    @Query(value = "SELECT a.* FROM articles a JOIN subscriptions s ON a.author_user_id = s.author_user_id WHERE s.subscriber_user_id = ?1", nativeQuery = true)
    List<Article> getSubscriptionArticles(long subscriberuserid);

    @Query(value = "SELECT u.* FROM users u, subscriptions s WHERE u.user_id = s.author_user_id AND s.subscriber_user_id = ?1", nativeQuery = true)
    List<User> getSubscribedAuthors(long subscriberuserid);

    @Query(value = "SELECT s.* FROM subscriptions s WHERE s.subscriber_user_id = ?1", nativeQuery = true)
    List<Subscription> getSubscriptions(long subscriberuserid); 

}
