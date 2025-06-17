package com.csc340_group_one.brain_dump.comment;

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
 * Comments. It provides endpoints for CRUD operations on Comment data.
 */
@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class CommentController {

  @Autowired
  private CommentService service;

  /**
   * Endpoint to pull back an individual comment
   *
   * @param commentid the id of the comment to pull
   * @return the comment
   */
  @GetMapping("/comments/{articleid}")
  public List<Comment> getCommentsByArticleId(@PathVariable long articleid) {
    return service.getCommentsByArticleId(articleid);
  }

  /**
   * Endpoint to add a comment to an article
   *
   * @param Comment the comment to add
   * @return the comment
   */
  @PostMapping("/comment")
  public Object addComment(@RequestBody Comment Comment) {
    return service.addComment(Comment);
  }

  /**
   * Endpoint to mark a comment as deleted
   *
   * @param id The ID of the comment to erase
   * @return the comment with prior text removed
   */
  @DeleteMapping("/comment/{commentid}")
  public void deleteComment(@PathVariable Long id) {
    service.deleteComment(id);
    return;
  }

  /**
   * Endpoint to update the text of a comment
   *
   * @param id The ID of the comment to update
   * @return the comment with updated text
   */
  @PutMapping("/comment/{commentid}")
  public void updateComment(@PathVariable Long id,
      @RequestBody Comment comment) {
    service.updateComment(id, comment);
    return;
  }
}
