package com.csc340_group_one.brain_dump.user;

import java.util.Set;

import com.csc340_group_one.brain_dump.article.Article;
import com.csc340_group_one.brain_dump.collection.Collection;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id", nullable = false)
    private Long id;

    @OneToMany(mappedBy = "author")
    private Set<Article> articles;

    @OneToMany(mappedBy = "author")
    private Set<Collection> collections;

    public User(Set<Article> articles, Set<Collection> collections) {
        this.articles = articles;
        this.collections = collections;
    }

}
