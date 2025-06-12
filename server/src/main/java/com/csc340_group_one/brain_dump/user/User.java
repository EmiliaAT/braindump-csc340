package com.csc340_group_one.brain_dump.user;

import java.time.Instant;
import java.util.Optional;
import java.util.Set;

import com.csc340_group_one.brain_dump.article.Article;
import com.csc340_group_one.brain_dump.collection.Collection;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

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
    @JsonProperty("user_id")
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
    @Column(name = "created_by", nullable = false)
    @JsonProperty("created_by")
    private Instant createdBy;

    @NonNull
    @Column(name = "modified_by", nullable = false)
    @JsonProperty("modified_by")
    private Instant modifiedBy;

    @NonNull
    @OneToMany(mappedBy = "author")
    @JsonIgnore
    private Set<Article> articles;

    @NonNull
    @OneToMany(mappedBy = "author")
    @JsonIgnore
    private Set<Collection> collections;

    @Getter(value = AccessLevel.NONE)
    @Setter(value = AccessLevel.NONE)
    @OneToOne(optional = true)
    @JoinColumn(name = "homepage_id", nullable = true)
    @JsonProperty("homepage")
    @JsonIgnoreProperties("author_id")
    private Article homepage;

    public Optional<Article> getHomepage() {
        return Optional.ofNullable(this.homepage);
    }

    public void setHomepage(Article article) {
        this.homepage = article;
    }

}
