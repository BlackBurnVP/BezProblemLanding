package com.example.bp.service;

import org.telegram.telegrambots.bots.TelegramLongPollingBot;
import org.telegram.telegrambots.meta.api.methods.send.SendMessage;
import org.telegram.telegrambots.meta.api.objects.Message;
import org.telegram.telegrambots.meta.api.objects.Update;
import org.telegram.telegrambots.meta.exceptions.TelegramApiException;

public class TelegramBot extends TelegramLongPollingBot {
    private final String token = System.getenv("BOT_TOKEN");
    private final String name = System.getenv("BOT_NAME");

    @Override
    public void onUpdateReceived(Update update) {
        System.out.println("Back Office Bot update");
        if (update != null) {
            if (update.hasMessage()) {
                Message message = update.getMessage();
                Long chatId = message.getChatId();
                String text = message.getText();
                if (text.equals("/start")) {
                    sndMsg(chatId, "Поздравляем! Вы подписались на уведомление BezProblem BackOffice");
                } else if (text.equals("/id")) {
                    sndMsg(1894959176L, chatId.toString());
                }
            }
        }
    }

    public void sndMsg(Long chatId, String message) {
        SendMessage sendMessage = new SendMessage();
        sendMessage.enableMarkdown(true);
        sendMessage.setChatId(chatId.toString());
        sendMessage.setText(formatText(message));
        sendMessage.setParseMode("HTML");

        try {
            execute(sendMessage);
        } catch (TelegramApiException e) {
            e.printStackTrace();
        }
    }

    public String formatText(String input){
        return input
                .replaceAll("strong", "b")
                .replaceAll("italic", "i")
                .replaceAll("<div>","")
                .replaceAll("</div","")
                .replaceAll("<p>","")
                .replaceAll("</p>","")
                .replaceAll("&nbsp;","")
                .replaceAll(">","")
                .replaceAll("&zwj;♂️","");
    }

    @Override
    public String getBotUsername() {
        return name;
    }

    @Override
    public String getBotToken() {
        return token;
    }
}
