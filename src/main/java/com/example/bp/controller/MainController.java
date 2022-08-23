package com.example.bp.controller;

import com.example.bp.domain.Lead;
import com.example.bp.repository.LeadRepo;
import com.example.bp.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Date;
import java.util.Map;

@Controller
public class MainController {

    @Autowired
    UserRepo userRepo;
    @Autowired
    LeadRepo leadRepo;

    @GetMapping
    public String main(){
        return "index";
    }

    @PostMapping("/call")
    public String callRequest(
            Lead lead
    ){
        lead.setOrigin("Landing");
        lead.setCreated(new Date());
        lead.setCreatedBy(userRepo.getSystemUser());
        leadRepo.save(lead);
        return "redirect:/";
    }
}
