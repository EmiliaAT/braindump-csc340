package com.csc340_group_one.brain_dump.subscription;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.csc340_group_one.brain_dump.article.Article;
import com.csc340_group_one.brain_dump.user.User;


/**
 * SubscriptionService is a service class that handles the business logic for
 * managing Subscriptions.
 * It provides methods to perform CRUD operations on Subscription data.
 */
@Service
public class SubscriptionService {

  @Autowired
  private SubscriptionRepository SubscriptionRepository;


  /**
   * Method to get a Subscription by ID
   *
   * @param SubscriptionuserId The ID of the Subscription to retrieve
   * @return The Subscription with the specified ID
   */
  public Subscription getSubscriptionById(long subscriptionuserid) {
    return SubscriptionRepository.findById(subscriptionuserid);
  }

  /**
   * Method to add a new Subscription
   *
   * @param Subscription The Subscription to add
   */
  public Subscription addSubscription(Subscription Subscription) {
    return SubscriptionRepository.save(Subscription);
    
  }

  /**
   * Method to delete a Subscription
   *
   * @param Subscription   The updated Subscription information
   */
  
  public long deleteSubscription(long subscriptionid) {
    Subscription oldSubscription = SubscriptionRepository.findById(subscriptionid);
    long oldsubscriberuserid = oldSubscription.getsubscriberuserid();
    SubscriptionRepository.deleteById(subscriptionid);
    return oldsubscriberuserid;
  }

  /**
   * Method to return a list of Subscribed authors
   *
   * @param Subscriberuserid The Subscriber's id to pull the list from
   */
  public List<User> getSubscribedAuthors(long subscriberuserid){
    return SubscriptionRepository.getSubscribedAuthors(subscriberuserid);
  }

  /**
   * Method to return a list of Subscribed authors
   *
   * @param Subscriberuserid The Subscriber's id to pull the list from
   */
  public List<Article> getSubscriptionArticles(long subscriberuserid){
    return SubscriptionRepository.getSubscriptionArticles(subscriberuserid);
  }
}
