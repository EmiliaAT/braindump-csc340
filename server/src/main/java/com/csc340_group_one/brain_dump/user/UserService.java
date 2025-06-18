package com.csc340_group_one.brain_dump.user;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository repository;

    public List<User> getUsers() {
        return this.repository.findAll();
    }

    public Optional<User> getUserById(Long id) {
        return this.repository.findById(id);
    }

    public Optional<User> getUserByUsername(String username) {
        return this.repository.getUserByUsername(username);
    }

    public Optional<User> getUserByArticleCreation(Long articleId) {
        return this.repository.getUserByArticleCreation(articleId);
    }

    public Optional<User> getUserByCollectionCreation(Long collectionId) {
        return this.repository.getUserByCollectionCreation(collectionId);
    }

    public Optional<User> addUser(User user) {
        if (user.getId() != null) {
            return Optional.empty();
        }
        return Optional.of(this.repository.save(user));
    }

    public Optional<User> updateUser(Long id, User user) {
        user.setId(id);
        if (!this.repository.existsById(id)) {
            return Optional.empty();
        }
        return Optional.of(this.repository.save(user));
    }

    public void deleteUser(Long id) {
        this.repository.deleteById(id);
    }
}
