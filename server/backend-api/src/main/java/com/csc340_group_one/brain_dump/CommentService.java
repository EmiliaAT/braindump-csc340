package com.csc340_group_one.brain_dump;

import java.io.IOException;
import java.io.File;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * CommentService is a service class that handles the business logic for
 * managing Comments.
 * It provides methods to perform CRUD operations on Comment data.
 */
@Service
public class CommentService {

  @Autowired
  private CommentRepository CommentRepository;


  /**
   * Method to get a Comment by ID
   *
   * @param CommentId The ID of the Comment to retrieve
   * @return The Comment with the specified ID
   */
  public Comment getCommentById(long commentId) {
    return CommentRepository.findById(commentId);
  }

  /**
   * Method to add a new Comment
   *
   * @param Comment The Comment to add
   */
  public Comment addComment(Comment Comment) {
    return CommentRepository.save(Comment);
  }

  
  /**
   * Method to update a Comment
   *
   * @param Comment   The updated Comment information
   */
  
  public Object updateComment( Comment newComment) {
    return CommentRepository.findById(newComment.getCommentid()).map(Comment -> {
        Comment.setCommentId(newComment.getCommentId());
        Comment.setCommentBody(newComment.getCommentBody());
        Comment.setCreatedTimestamp(newComment.getCreatedTimestamp());
        Comment.setArticleId(newComment.getArticleId());
        Comment.setReplyToCommentId(newComment.getReplyToCommentId());
        Comment.setCommentUserId(newComment.getCommentUserId());
        return CommentRepository.save(Comment);
      });
  }

  /**
   * Method to update a Comment
   *
   * @param Comment   The updated Comment information
   */
  
  public Object deleteComment( Comment newComment) {
    return CommentRepository.findById(newComment.getCommentid()).map(Comment -> {
        Comment.setCommentId(newComment.getCommentId());
        Comment.setCommentBody("*** Deleted Comment ***");
        Comment.setCreatedTimestamp(newComment.getCreatedTimestamp());
        Comment.setArticleId(newComment.getArticleId());
        Comment.setReplyToCommentId(newComment.getReplyToCommentId());
        Comment.setCommentUserId(newComment.getCommentUserId());
        return CommentRepository.save(Comment);
      });
  }
}