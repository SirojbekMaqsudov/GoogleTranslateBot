const mongoose = require("mongoose")

const TelegramApi = require('node-telegram-bot-api')
const translate = require("@vitalets/google-translate-api")

const User = require("./Models/Model")

require('dotenv').config()

mongoose.connect(process.env.DB_URL, () => {
    console.log('Connected')
})

const Buttons = require("./options")

const token = process.env.TOKEN
const bot = new TelegramApi(token, {polling: true})

const options = {
    from: "uz",
    to: "en"
}

async function createUser(id, name, username) {
    const user = await User.findOne({id})
    if (!user) {
        const newUser = new User({
            id, name, username
        })

        const savedUser = await newUser.save()
    }
}



const start = async () => {
    bot.on('message', async (msg) => {
        await createUser(msg.from.id, msg.from.first_name, msg.from.username)
        
        const chatId = msg.chat.id
        const text = msg.text
        
        switch (text) {
            case 'πΊπΈ En - Uz πΊπΏ':
                options.from = 'en'
                options.to = 'uz'
                await bot.sendMessage(chatId, "Ok", Buttons)
                break;

            case 'πΊπΏ Uz - En πΊπΈ':
                options.from = 'uz'
                options.to = 'en'
                await bot.sendMessage(chatId, "Ok", Buttons)
                break;

            case 'π·πΊ Ru - Uz πΊπΏ':
                options.from = 'ru'
                options.to = 'uz'
                await bot.sendMessage(chatId, "Ok", Buttons)
                break;

            case 'πΊπΏ Uz - Ru π·πΊ':
                options.from = 'uz'
                options.to = 'ru'
                await bot.sendMessage(chatId, "Ok", Buttons)
                break;

            case 'π·πΊ Ru - En πΊπΈ':
                options.from = 'ru'
                options.to = 'en'
                await bot.sendMessage(chatId, "Ok", Buttons)
                break;

            case 'πΊπΈ En - Ru π·πΊ':
                options.from = 'en'
                options.to = 'ru'
                await bot.sendMessage(chatId, "Ok", Buttons)
                break;
            case 'π°π· Kr - UZ πΊπΏ':
                options.from = 'ko'
                options.to = 'uz'
                await bot.sendMessage(chatId, "Ok", Buttons)
                break;
            case 'πΊπΏ Uz - Kr π°π·':
                options.from = 'uz'
                options.to = 'ko'
                await bot.sendMessage(chatId, "Ok", Buttons)
                break;
            case 'πΉπ· Tr - Uz πΊπΏ':
                options.from = 'tr'
                options.to = 'uz'
                await bot.sendMessage(chatId, "Ok", Buttons)
                break;
            case 'πΊπΏ Uz - Tr πΉπ·':
                options.from = 'uz'
                options.to = 'tr'
                await bot.sendMessage(chatId, "Ok", Buttons)
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
