/* eslint-disable max-len */
/* eslint-disable no-console */
import { Telegraf } from 'telegraf';
import { LoadTelegramConfig } from '../util/load-configs.js';

const { BOT_TOKEN, CHATS_LIST } = LoadTelegramConfig();

const telegraf = new Telegraf(BOT_TOKEN);
const { telegram } = telegraf;

CHATS_LIST.forEach((chat) => {
  telegram
    .sendMessage(
      chat.id,
      `Бот обновился:
• добавлена поддержка Kemono Party, Очобы.
• Пофиксил Reddit – особенно галереи и гифки.
• Из нового:
• • бот полностью переписан
• • теперь он отвечает на сообщения, в которых есть ссылка или НЕСКОЛЬКО ссылок на платформы. Т.е. можно отправить вставить ссылки на Пиксив и Твиттер – бот обработает оба-джва
• • теперь в спойлеры можно засовывать не только картинки, но и гифки и видео
• • убрал оценки и текстовые спойлеры – с Telegram неплохо нативно поддерживает это.

Запуск бота через 15 мин.`
    )
    .then(console.log)
    .catch(console.warn);
});
