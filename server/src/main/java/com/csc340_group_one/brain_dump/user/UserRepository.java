package com.csc340_group_one.brain_dump.user;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepository extends JpaRepository<User, Long> {

    @Query(value = "SELECT u.* FROM users u WHERE u.email = ?1", nativeQuery = true)
    public Optional<User> getUserByEmail(String email);

    @Query(value = "SELECT u.* FROM users u WHERE u.username = ?1", nativeQuery = true)
    public Optional<User> getUserByUsername(String username);

    @Query(value = "SELECT u.* FROM users u JOIN articles a ON a.author_id = "
            + "u.user_id WHERE a.article_id ="
            + " ?1", nativeQuery = true)
    public Optional<User> getUserByArticleCreation(Long articleId);

    @Query(value = "SELECT u.* FROM users u JOIN collections c ON c.author_id "
            + "= u.user_id WHERE"
            + " c.collection_id = ?1", nativeQuery = true)
    public Optional<User> getUserByCollectionCreation(Long collectionId);
}
