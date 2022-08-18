package com.example.backoffice.domain.callCenter;

import com.example.bp.domain.User;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "call_request")
public class CallRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String credentials;
    private String phoneNumber;
    private String origin;
    private String comment;
    private boolean isCalled;
    @ManyToOne
    private User createdBy;
    @ManyToOne
    private User updatedBy;
    private Date created;
    private Date update;
}
