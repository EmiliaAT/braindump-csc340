package com.csc340_group_one.brain_dump.user;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    @Autowired
    private UserService service;

    @GetMapping("")
    public List<User> getUsers() {
        return this.service.getUsers();
    }

    @GetMapping("{id}")
    public Optional<User> getUserById(@PathVariable Long id) {
        return this.service.getUserById(id);
    }

    @GetMapping("/name/{username}")
    public Optional<User> getUserByUsername(@PathVariable String username) {
        return this.service.getUserByUsername(username);
    }

    @GetMapping("/articles/{articleId}")
    public Optional<User> getUserByArticleCreation(@PathVariable Long articleId) {
        return this.service.getUserByArticleCreation(articleId);
    }

    @GetMapping("/collections/{collectionId}")
    public Optional<User> getUserByCollectionCreation(@PathVariable Long collectionId) {
        return this.service.getUserByCollectionCreation(collectionId);
    }

    @PostMapping("")
    public Optional<User> addUser(@RequestBody User user) {
        return this.service.addUser(user);
    }

    @PutMapping("{id}")
    public Optional<User> updateUser(@PathVariable Long id,
            @RequestBody User user) {
        return this.service.updateUser(id, user);
    }

    @DeleteMapping("{id}")
    public void deleteUser(@PathVariable Long id) {
        this.service.deleteUser(id);
    }
}
