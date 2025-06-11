package com.csc340_group_one.brain_dump.subscription;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.csc340_group_one.brain_dump.article.Article;
import com.csc340_group_one.brain_dump.user.User;

/**
 * SubscriptionController is a REST controller that handles HTTP requests related to
 * Subscriptions.
 * It provides endpoints for CRUD operations on Subscription data.
 */
@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class SubscriptionController {

  @Autowired
  private SubscriptionService SubscriptionService;

  /**
   * Endpoint to pull back an individual subscription
   *
   * @param subscriptionid the id of the subscription to pull
   * @return the subscription
   */
  @GetMapping("/subscription/{id}")
  public Subscription getSubscriptionById(@PathVariable long id) {
    return SubscriptionService.getSubscriptionById(id);
  }

  /**
   * Endpoint to add a subscription to an author
   *
   * @param Subscription the subscription to add
   * @return the subscription
   */
  @PostMapping("/subscription")
  public Subscription addSubscription(@RequestBody Subscription Subscription) {
    return SubscriptionService.addSubscription(Subscription);
  }

  /**
   * Endpoint to delete a subscription
   *
   * @param subscriptionuserid The ID of the subscriber
   * @param authoruserid the id of the author
   * @return the subscription list that remains after delete
   */
  @DeleteMapping("/subscription/{subscriptionid}")
  public List<User> deleteBySubscriptionId(@PathVariable long subscriptionid) {
    long subscriberuserid = SubscriptionService.deleteSubscription(subscriptionid);
    return SubscriptionService.getSubscribedAuthors(subscriberuserid);
  }

  /**
   * Endpoint to pull back an individuals list of subscribed authors
   *
   * @param subscriberuserid the id of the subscriber to pull the list from
   * @return the subscription list
   */
  @GetMapping("/subscription/authors/{subscriberuserid}")
  public List<User> getSubscribedAuthors(@PathVariable long subscriberuserid) {
    return SubscriptionService.getSubscribedAuthors(subscriberuserid);
  }

  /**
   * Endpoint to pull back articles from subscribed authors for a given subscriber
   *
   * @param subscriptionid the id of the subscription to pull
   * @return the subscription
   */
  @GetMapping("/subscription/articles/{subscriberuserid}")
  public List<Article> getSubscriptionArticles(@PathVariable long subscriberuserid) {
    return SubscriptionService.getSubscriptionArticles(subscriberuserid);
  }
}