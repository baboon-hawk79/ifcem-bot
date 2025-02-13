const TelegramApi = require('node-telegram-bot-api')
const {options, homeoptions} = require('./options')
const token = ''

const bot = new TelegramApi(token, {polling: true})

const chats = {}

const returnhome = async (chatId) => {
    await bot.sendMessage(chatId, `Вас вітає бот-помічник від ПрАТ "Івано-Франківськцемент".\n\nЩо вміє цей бот?\n- Розповісти як слід діяти в аварійних ситуаціях;\n- Надати список номерів телефонів на випадок аварійних та небезпечних ситуацій;\n- Розповісти про основні вимоги безпеки та поведінки на території підприємства.`, options)
}

const start = () => {
    bot.setMyCommands([
        {command: '/start', description: 'Отримати вітальне повідомлення з основною інформацією.'},
        {command: '/commandlist', description: 'Отримати список команд.'},
        {command: '/emergency', description: 'Отримати інформацію про дії в аварійних ситуаціях.'}
    ])
    
    bot.on('message', async req => {
        console.log(req)
        const text = req.text;
        const chatId = req.chat.id;
        if (text == '/emergency') {
            return await bot.sendMessage(chatId, `Дії в аварійній ситуації:\nУ разі пожежі чи інших аварійних ситуаціях покиньте небезпечну зону. Слідуйте за супроводжуючим або згідно зі схемою евакуації та знакам, що вказують на найближчий вихід.`)
        }
        if (text == '/start') {
            return returnhome(chatId)
        }
        return await bot.sendMessage(chatId, 'Мені не відома ця команда. Будь ласка, напишіть /start, щоб побачити що вміє цей бот.')
    });

    bot.on('callback_query', (query) => {
        const chatId = query.message.chat.id;
        if(query.data === '/start') {
            returnhome(chatId) }
        if (query.data === 'emergency') {
            bot.sendMessage(chatId, 'Дії в аварійній ситуації:\nУ разі пожежі чи інших аварійних ситуаціях покиньте небезпечну зону. Слідуйте за супроводжуючим або згідно зі схемою евакуації та знакам, що вказують на найближчий вихід.', homeoptions);}
        else if (query.data === 'phone') {
            bot.sendMessage(chatId, 'телефон', homeoptions);}
        else if (query.data === 'safety') {
            bot.sendMessage(chatId, 'безпека', homeoptions);
        }
    }
)}

start()
