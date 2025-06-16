package com.csc340_group_one.brain_dump.collection;

import com.csc340_group_one.brain_dump.article.Article;
import com.csc340_group_one.brain_dump.user.User;
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
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
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
@Table(name = "collections")
public class Collection {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "collection_id", nullable = false)
    private Long id;

    @NonNull
    @Column(name = "title", nullable = false)
    private String title;

    @NonNull
    @Column(name = "is_public", nullable = false)
    private Boolean isPublic;

    @NonNull
    @ManyToOne
    @JoinColumn(name = "author_id", nullable = false)
    @JsonIgnoreProperties("collections")
    private User author;

    @NonNull
    @ManyToMany
    @JoinTable(name = "collection_articles", joinColumns = @JoinColumn(name = "collection_id", nullable = false), inverseJoinColumns = @JoinColumn(name = "article_id", nullable = false))
    @JsonIgnore
    private Set<Article> articles;
}
