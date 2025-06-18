package com.csc340_group_one.brain_dump;

import com.csc340_group_one.brain_dump.user.User;
import com.csc340_group_one.brain_dump.user.UserService;
import java.util.ArrayList;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {

  @Autowired
  private UserService service;

  @GetMapping("")
  public Optional<User> getAuth(@RequestParam String username,
      @RequestParam String password) {
    return this.service.getUserByUsername(username).flatMap(
        user -> user.getPassword().equals(password) ? Optional.of(user)
            : Optional.empty());
  }

  @PostMapping("")
  public Optional<User> createAuth(@RequestParam String username,
      @RequestParam String password) {
    this.service.addUser(new User(username, password, new ArrayList<>(),
        new ArrayList<>(), new ArrayList<>(),
        new ArrayList<>()));
    return this.service.getUserByUsername(username);
  }
}
