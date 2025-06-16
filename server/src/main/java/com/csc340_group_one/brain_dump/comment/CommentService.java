package com.safeplace.braindump.comment;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

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
  public List<Comment> getCommentsByArticleId(long articleid) {
    return CommentRepository.getCommentsByArticleId(articleid);
  }

  /**
   * Method to add a new Comment
   *
   * @param Comment The Comment to add
   */
  public Comment addComment(Comment Comment) {
    LocalDateTime now = LocalDateTime.now();
    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
    String formattedNow = now.format(formatter);
    Comment.setcreatedtimestamp(formattedNow);
    return CommentRepository.save(Comment);
  }

  
  /**
   * Method to update a Comment
   *
   * @param Comment   The updated Comment information
   */
  
  public void updateComment(long commentid, Comment newComment) {
    newComment.setcommentid(commentid);
    Comment oldComment = CommentRepository.findById(commentid);
    newComment.setarticleid(oldComment.getarticleid());
    newComment.setcreatedtimestamp(oldComment.getcreatedtimestamp());
    newComment.setcommentuserid(oldComment.getcommentuserid());
    newComment.setcommentusername(oldComment.getcommentusername());
    if (oldComment.getcommentbody() != "*** Deleted Comment ***") {
      CommentRepository.save(newComment);
    };
    return ;
  }

  /**
   * Method to update a Comment
   *
   * @param Comment   The updated Comment information
   */
  
  public void deleteComment(long commentid) {
    Comment targetComment = CommentRepository.findById(commentid);
    targetComment.setcommentbody("*** Deleted Comment ***");
    CommentRepository.save(targetComment);
    return;
  }
}