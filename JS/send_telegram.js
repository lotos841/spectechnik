const TOKEN = '6822964163:AAHgykG-ky3JVGFFF9R7ygLBxtqXAAt-45w';
const CHATID = '-1002136733259';
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`
const name = document.getElementById('name')
const tel = document.getElementById('tel')


let validation = new JustValidate('form')

validation.addField('#name', [
    {
        rule: 'required',
        errorMessage: 'Введите имя'
    },
    {
        rule: 'minLength',
        value: 2,
        errorMessage: 'Минимум 2 символа в имени'
    }
]).addField("#tel", [
    {
        rule: 'required',
        errorMessage: 'Введите телефон'
    },
    {
        rule: 'minLength',
        value: 6,
        errorMessage: 'Минимум 6 символов в телефоне'
    }
]).onSuccess(function () {
    document.getElementById('form').addEventListener('submit', function(e) {
        e.preventDefault()
    
        const text = document.getElementById('message').value
        console.log(text)
    
        let message = '<b>Завявка с сайта</b>\n';
        message += `<b>имя отправителя: ${name.value}</b>\n`
        message += `<b>📞 телефон отправителя: ${tel.value}</b>\n`
        message += `<b>Сообщение: ${text}</b>\n`

        axios.post(URL_API, {
            chat_id: CHATID,
            parse_mode: 'html',
            text: message
        })
        .then((res) => {
            name.innerHTML = ""
            tel.innerHTML = ""
            alert("заявка отправлена успешно")
        })
        .catch((err) => {
            console.warn(err)
        })
    })
})

