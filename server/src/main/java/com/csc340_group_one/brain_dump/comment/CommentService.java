package com.csc340_group_one.brain_dump.comment;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


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
  public Optional<Comment> getCommentById(long commentid) {
    return CommentRepository.findById(commentid);
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
  
  public Object updateComment(long commentid, Comment newComment) {
    newComment.setcommentid(commentid);
    return CommentRepository.save(newComment);
  }

  /**
   * Method to update a Comment
   *
   * @param Comment   The updated Comment information
   */
  
  public Object deleteComment(Comment newComment) {
    return CommentRepository.findById(newComment.getcommentid()).map(Comment -> {
        Comment.setcommentid(newComment.getcommentid());
        Comment.setcommentbody("*** Deleted Comment ***");
        Comment.setcreatedtimestamp(newComment.getcreatedtimestamp());
        Comment.setarticleid(newComment.getarticleid());
        Comment.setreplytocommentid(newComment.getreplytocommentid());
        Comment.setcommentuserid(newComment.getcommentuserid());
        return CommentRepository.save(Comment);
      });
  }
}