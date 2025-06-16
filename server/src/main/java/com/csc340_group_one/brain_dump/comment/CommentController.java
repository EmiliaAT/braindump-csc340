package com.safeplace.braindump.comment;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * CommentController is a REST controller that handles HTTP requests related to
 * Comments.
 * It provides endpoints for CRUD operations on Comment data.
 */
@RestController
public class CommentController {

  @Autowired
  private CommentService CommentService;

  /**
   * Endpoint to pull back an individual comment
   *
   * @param commentid the id of the comment to pull
   * @return the comment
   */
  @CrossOrigin(origins = "http://localhost:5173")
  @GetMapping("/comments/{articleid}")
  public List<Comment> getCommentsByArticleId(@PathVariable long articleid) {
    return CommentService.getCommentsByArticleId(articleid);
  }

  /**
   * Endpoint to add a comment to an article
   *
   * @param Comment the comment to add
   * @return the comment
   */
  @CrossOrigin(origins = "http://localhost:5173")
  @PostMapping("/comment")
  public Object addComment(@RequestBody Comment Comment) {
    return CommentService.addComment(Comment);
  }

  /**
   * Endpoint to mark a comment as deleted
   *
   * @param commentid The ID of the comment to erase
   * @return the comment with prior text removed
   */
  @CrossOrigin(origins = "http://localhost:5173")
  @DeleteMapping("/comment/{commentid}")
  public void deleteComment(@PathVariable long commentid) {
    CommentService.deleteComment(commentid);
    return;
  }

  /**
   * Endpoint to update the text of a comment
   *
   * @param commentid The ID of the comment to update
   * @return the comment with updated text
   */
  @CrossOrigin(origins = "http://localhost:5173")
  @PutMapping("/comment/{commentid}")
  public void updateComment(@PathVariable long commentid, @RequestBody Comment Comment) {
    CommentService.updateComment(commentid,Comment);
    return;
  }

}