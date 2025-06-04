package com.csc340_group_one.brain_dump;

import java.time.Instant;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "User")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long    userId;
    private String  userName;
    private String  emailAddress;
    private String  password;
    private Instant createdTimestamp;
    private String  providerFlag;
    private String  iconFilename;
    private String  biography;

    public User() {
    }

    public User(Long userId, String userName, String emailAddress, String password, Instant createdTimestamp,
                    String providerFlag, String iconFilename, String biography ) {
        this.userId = userId;
        this.userName = userName;
        this.emailAddress = emailAddress;
        this.password = password;
        this.createdTimestamp = createdTimestamp;
        this.providerFlag = providerFlag;
        this.iconFilename = iconFilename;
        this.biography = biography;
    }

    public User( String userName, String emailAddress, String password, Instant createdTimestamp,
                    String providerFlag, String iconFilename, String biography ) {
        this.userName = userName;
        this.emailAddress = emailAddress;
        this.password = password;
        this.createdTimestamp = createdTimestamp;
        this.providerFlag = providerFlag;
        this.iconFilename = iconFilename;
        this.biography = biography;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getEmailAddress() {
        return emailAddress;
    }

    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Instant getCreatedTimestamp() {
        return createdTimestamp;
    }

    public void setCreatedTimestamp(Instant createdTimestamp) {
        this.createdTimestamp = createdTimestamp;
    }

    public String getProviderFlag() {
        return providerFlag;
    }

    public void setProviderFlag(String providerFlag) {
        this.providerFlag = providerFlag;
    }

    public String getIconFilename() {
        return iconFilename;
    }

    public void setIconFilename(String iconFilename) {
        this.iconFilename = iconFilename;
    }

    public String getBiography() {
        return biography;
    }

    public void setBiography(String biography) {
        this.biography = biography;
    }

}

