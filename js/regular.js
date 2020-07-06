let str =   `
            One: 'Hi Mary.' 
            Two: 'Oh, hi.'
            One: 'How are you doing?'
            Two: 'I'm doing alright. How about you?'
            One: 'Not too bad. The weather is great isn't it?'
            Two: 'Yes. It's absolutely beautiful today.'
            One: 'I wish it was like this more frequently.'
            Two: 'Me too.'
            One: 'So where are you going now?'
            Two: 'I'm going to meet a friend of mine at the department store'
            One: 'Going to do a little shopping?'
            Two: 'Yeah, I have to buy some presents for my parents.'
            One: 'What's the occasion?'
            Two: 'It's their anniversary.'
            One: 'That's great. Well, you better get going. You don't want to be late.'
            Two: 'I'll see you next time.'
            One: 'Sure.' Bye.'
            `;
console.log(str.replace(/\B'|'\B/ig, '"'));

class Validator {
    constructor(form) {
        this.validators = {
            name: {
				pattern: /^[a-zа-яё]+$/i,
				error: 'Имя содержит только буквы'
			},
            phone: {
				pattern: /^((8|\+7)[\-]?)?(\(?\d{3}\)?[\-]?)?[\d\-]{7,10}$/i,
				error: 'Введите валидный номер телефона'
			},
            email: {
				pattern: /^[\w._-]+@\w+\.[a-z]{2,4}$/i,
				error: 'E-mail выглядит как mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru'
			}
        };
        this.errorClass = 'error-msg';
        this.form = form;
        this.valid = this._validateForm();
    }
    _validateForm(){
        let errors = [...document.getElementById(this.form).querySelectorAll(`.${this.errorClass}`)];
        for (let error of errors){
            error.remove();
        }
        let formFields = [...document.getElementById(this.form).getElementsByTagName('input')];
        for (let field of formFields){
            this._validate(field);
        }
        if([...document.getElementById(this.form).querySelectorAll('.invalid')].length){
           return false;
        }
		return true;
    }
    _validate(field){
        if(this.validators[field.name].pattern){
            if(!this.validators[field.name].pattern.test(field.value)){
               field.classList.add('invalid');
               this._addErrorMsg(field);
               this._watchField(field);
            }
        }
    }
    _addErrorMsg(field){
        let error = `<div class="${this.errorClass}">${this.validators[field.name].error}</div> `;
        field.parentNode.insertAdjacentHTML('beforeend', error);
    }
    _watchField(field){
        field.addEventListener('input', () => {
            let error = field.parentNode.querySelector(`.${this.errorClass}`);
            if(this.validators[field.name].pattern.test(field.value)){
                field.classList.remove('invalid');
                field.classList.add('valid');
                if(error){
                    error.remove();
                }
            } else {
                field.classList.remove('valid');
                field.classList.add('invalid');
                if(!error){
                    this._addErrorMsg(field);
                }
            }
        });
    }
}
