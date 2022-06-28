const TelegramApi = require('node-telegram-bot-api')
const translate = require("@vitalets/google-translate-api")
require('dotenv').config()

const Buttons = require("./options")
console.log(Buttons)

const token = process.env.TOKEN
const bot = new TelegramApi(token, {polling: true})

const options = {
    from: "uz",
    to: "en"
}

const start = async () => {
    bot.on('message', async (msg) => {
        console.log(msg)
        const chatId = msg.chat.id
        const text = msg.text

        switch (text) {
            case '🇺🇸 En - Uz 🇺🇿':
                options.from = 'en'
                options.to = 'uz'
                await bot.sendMessage(chatId, "Ok")
                break;

            case '🇺🇿 Uz - En 🇺🇸':
                options.from = 'uz'
                options.to = 'en'
                await bot.sendMessage(chatId, "Ok")
                break;

            case '🇷🇺 Ru - Uz 🇺🇿':
                options.from = 'ru'
                options.to = 'uz'
                await bot.sendMessage(chatId, "Ok")
                break;

            case '🇺🇿 Uz - Ru 🇷🇺':
                options.from = 'uz'
                options.to = 'ru'
                await bot.sendMessage(chatId, "Ok")
                break;

            case '🇷🇺 Ru - En 🇺🇸':
                options.from = 'ru'
                options.to = 'en'
                await bot.sendMessage(chatId, "Ok")
                break;

            case '🇺🇸 En - Ru 🇷🇺':
                options.from = 'en'
                options.to = 'ru'
                await bot.sendMessage(chatId, "Ok")
                break;
            case '🇰🇷 Kr - UZ 🇺🇿':
                options.from = 'ko'
                options.to = 'uz'
                await bot.sendMessage(chatId, "Ok")
                break;
            case '🇺🇿 Uz - Kr 🇰🇷':
                options.from = 'uz'
                options.to = 'ko'
                await bot.sendMessage(chatId, "Ok")
                break;
            case '🇹🇷 Tr - Uz 🇺🇿':
                options.from = 'tr'
                options.to = 'uz'
                await bot.sendMessage(chatId, "Ok")
                break;
            case '🇺🇿 Uz - Tr 🇹🇷':
                options.from = 'uz'
                options.to = 'tr'
                await bot.sendMessage(chatId, "Ok")
                break;

            case '/start':
                await bot.sendMessage(chatId, "Welcome", Buttons)
                break;

            default:
                const translatedText = await translate(text, options)
                await bot.sendMessage(chatId, translatedText.text)
                break;
        }
    })
}

start()