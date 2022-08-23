package com.example.bp.domain;

import com.example.bp.domain.User;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "call_request")
public class Lead {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String credentials;
    private String phoneNumber;
    private Origins origin;

    private String CallComment;
    private boolean isCalled;
    @ManyToOne
    private User createdBy;
    @ManyToOne
    private User updatedBy;
    private Date created;
    private Date update;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCredentials() {
        return credentials;
    }

    public void setCredentials(String credentials) {
        this.credentials = credentials;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public Origins getOrigin() {
        return origin;
    }

    public void setOrigin(Origins origin) {
        this.origin = origin;
    }

    public String getCallComment() {
        return CallComment;
    }

    public void setCallComment(String callComment) {
        CallComment = callComment;
    }

    public boolean isCalled() {
        return isCalled;
    }

    public void setCalled(boolean called) {
        isCalled = called;
    }

    public User getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(User createdBy) {
        this.createdBy = createdBy;
    }

    public User getUpdatedBy() {
        return updatedBy;
    }

    public void setUpdatedBy(User updatedBy) {
        this.updatedBy = updatedBy;
    }

    public Date getCreated() {
        return created;
    }

    public void setCreated(Date created) {
        this.created = created;
    }

    public Date getUpdate() {
        return update;
    }

    public void setUpdate(Date update) {
        this.update = update;
    }
}
