package com.csc340_group_one.brain_dump.article;

import com.csc340_group_one.brain_dump.collection.Collection;
import com.csc340_group_one.brain_dump.user.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
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
@Table(name = "articles")
public class Article {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "article_id", nullable = false)
    private Long id;

    @NonNull
    @Column(name = "title", nullable = false)
    private String title;

    @NonNull
    @Column(name = "content", nullable = false, columnDefinition = "TEXT")
    private String content;

    @NonNull
    @Column(name = "is_public", nullable = false)
    private Boolean isPublic;

    @NonNull
    @ManyToOne
    @JoinColumn(name = "author_id", nullable = false)
    @JsonIgnoreProperties("articles")
    private User author;

    @NonNull
    @ManyToMany(mappedBy = "articles")
    @JsonIgnore
    private Set<Collection> collections;
}
