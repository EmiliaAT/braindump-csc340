package com.csc340_group_one.brain_dump.article;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/articles")
public class ArticleController {

    @Autowired
    private ArticleService service;

    @GetMapping("")
    public List<Article> getArticles() {
        return this.service.getArticles();
    }

}
