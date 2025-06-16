package com.csc340_group_one.brain_dump.user;

import com.csc340_group_one.brain_dump.article.Article;
import com.csc340_group_one.brain_dump.collection.Collection;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import java.util.List;
import java.util.Set;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@RequiredArgsConstructor
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id", nullable = false)
    private Long id;

    @NonNull
    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @NonNull
    @Column(name = "username", nullable = false, unique = true)
    private String username;

    @NonNull
    @Column(name = "password", nullable = false)
    private String password;

    @NonNull
    @OneToMany(mappedBy = "author")
    @JsonIgnore
    private Set<Article> articles;

    @NonNull
    @OneToMany(mappedBy = "author")
    @JsonIgnore
    private Set<Collection> collections;

    @NonNull
    @ManyToMany(mappedBy = "subscriptions")
    @JsonIgnoreProperties({ "subscribers", "subscriptions" })
    private List<User> subscribers;

    @NonNull
    @ManyToMany
    @JoinTable(name = "subscriptions", joinColumns = @JoinColumn(name = "subscriber", nullable = false), inverseJoinColumns = @JoinColumn(name = "subscribee", nullable = false))
    @JsonIgnoreProperties({ "subscribers", "subscriptions" })
    private List<User> subscriptions;
}
