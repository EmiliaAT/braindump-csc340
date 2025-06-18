package com.safeplace.braindump.comment;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {

    Comment findById(long commentid);

    @Query(value = "SELECT c.* FROM comments c WHERE c.article_id = ?1 order by c.comment_id desc", nativeQuery = true)
    List<Comment> getCommentsByArticleId(long articleid);

}
