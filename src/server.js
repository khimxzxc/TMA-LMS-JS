// server.js
const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const path = require('path');

// Настраиваем Express сервер для Telegram Mini App
const app = express();
app.use(express.static(path.join(__dirname, 'client'))); // Статические файлы для веб-приложения

// API токен бота
const token = '7791072810:AAFOZRBTbtv4sfihIzhCm_saijOqV3J40gg';
const bot = new TelegramBot(token, { polling: true });

// Обработка команды /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Привет! Вы можете запустить мини-приложение.');
});

// Запуск веб-приложения через мини-апп
app.get('/webapp', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

app.listen(3000, () => {
  console.log('Сервер запущен на http://localhost:3000');
});
