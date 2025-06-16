package com.safeplace.braindump.subscription;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.safeplace.braindump.Article;
import com.safeplace.braindump.User;

/**
 * SubscriptionController is a REST controller that handles HTTP requests related to
 * Subscriptions.
 * It provides endpoints for CRUD operations on Subscription data.
 */
@RestController
public class SubscriptionController {

  @Autowired
  private SubscriptionService SubscriptionService;

  /**
   * Endpoint to pull back an individual subscription
   *
   * @param subscriptionid the id of the subscription to pull
   * @return the subscription
   */
  @CrossOrigin(origins = "http://localhost:5173")
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
  @CrossOrigin(origins = "http://localhost:5173")
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
  @CrossOrigin(origins = "http://localhost:5173")
  @DeleteMapping("/subscription/delete/{subscriptionid}")
  public List<Subscription> deleteSubscription(@PathVariable long subscriptionid) {
    return SubscriptionService.deleteSubscription(subscriptionid);
  }

  /**
   * Endpoint to pull back an individuals list of subscribed authors
   *
   * @param subscriberuserid the id of the subscriber to pull the list from
   * @return the subscription list
   */
  @CrossOrigin(origins = "http://localhost:5173")
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
  @CrossOrigin(origins = "http://localhost:5173")
  @GetMapping("/subscription/articles/{subscriberuserid}")
  public List<Article> getSubscriptionArticles(@PathVariable long subscriberuserid) {
    return SubscriptionService.getSubscriptionArticles(subscriberuserid);
  }
    /**
   * Endpoint to pull back an individual subscription
   *
   * @param subscriptionid the id of the subscription to pull
   * @return the subscription
   */
  @CrossOrigin(origins = "http://localhost:5173")
  @GetMapping("/subscriptions/{subscriberuserid}")
  public List<Subscription> getSubscriptions(@PathVariable long subscriberuserid) {
    return SubscriptionService.getSubscriptions(subscriberuserid);
  }
}
