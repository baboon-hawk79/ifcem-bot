module.exports = {
    homeoptions: {
        reply_markup: ( {
            inline_keyboard: [
                [{text: 'Повернутися назад', callback_data: '/start'}],
            ]
        })
    },
    
    options: {
        reply_markup: ( {
            inline_keyboard: [
                [{text: 'Як слід діяти в аварійних ситуаціях', callback_data: 'emergency'}],
                [{text: 'Список номерів телефонів', callback_data: 'phone'}],   
                [{text: 'Основні вимоги безпеки та поведінки', callback_data: 'safety'}],
                [{text: 'Офіційний вебсайт підприємства', url: 'https://www.ifcem.if.ua/'}],
            ]
        })
    }
    
}