package com.example.bp.service;

import com.example.bp.domain.Lead;
import com.example.bp.domain.User;
import com.example.bp.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LeadService {

    @Autowired
    UserRepo userRepo;

    public void telegramNotification(Lead lead){
        List<User> users = userRepo.findByCallCenter();
        TelegramBot bot = new TelegramBot();
        String message = "Новая заявка на звонок!\n" +
                "system.bezproblem.eu/lead/"+lead.getId();
        for (User usr : users){
            if (!usr.getChatId().isEmpty()){
                bot.sndMsg(Long.valueOf(usr.getChatId()),message);
            }
        }
    }
}
