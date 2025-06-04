package com.csc340_group_one.brain_dump.article;

import java.time.Instant;
import java.util.Set;

import com.csc340_group_one.brain_dump.collection.Collection;
import com.csc340_group_one.brain_dump.user.User;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
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
    @Column(name = "is_private", nullable = false)
    private Boolean isPrivate;

    @NonNull
    @Column(name = "created_by", nullable = false)
    private Instant createdBy;

    @NonNull
    @Column(name = "modified_by", nullable = false)
    private Instant modifiedBy;

    @NonNull
    @ManyToOne
    @JoinColumn(name = "author_id", nullable = false)
    private User author;

    @NonNull
    @ManyToMany(mappedBy = "articles")
    private Set<Collection> collections;

}
