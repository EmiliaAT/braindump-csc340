package com.csc340_group_one.brain_dump.collection;

import java.util.Set;

import com.csc340_group_one.brain_dump.article.Article;
import com.csc340_group_one.brain_dump.user.User;

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

@Entity
@Table(name = "collections")
public class Collection {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "table_id", nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "author_id", nullable = false)
    private User author;

    @ManyToMany
    @JoinTable(name = "collection_articles", joinColumns = @JoinColumn(name = "collection_id", nullable = false), inverseJoinColumns = @JoinColumn(name = "article_id", nullable = false))
    private Set<Article> articles;

}
