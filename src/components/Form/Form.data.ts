import { RMC_PAGES } from '../../config/pages-url.config'
import type { IFormData } from './Form.types'

export const AUTH: IFormData = {
	mainTitle: 'Авторизация',
	title: 'Вход в систему',
	button: 'Войти',
	afterButton: {
		text: 'Ещё не зарегестрированы?',
		buttonText: 'Регистрация',
		link: RMC_PAGES.REG,
	},
	fields: [
		{
			placeholder: 'Введите ваш email',
			registerType: 'email',
			registerRequired: 'Это поле обязательно для заполнения!',
		},
		{
			placeholder: 'Введите ваш пароль',
			registerType: 'password',
			registerRequired: 'Это поле обязательно для заполнения!',
		},
	],
}

export const REG: IFormData = {
	mainTitle: 'Регистрация',
	title: 'Создать аккаунт',
	button: 'Зарегистрироваться',
	afterButton: {
		text: 'Уже зарегестрированы?',
		buttonText: 'Авторизация',
		link: RMC_PAGES.AUTH,
	},
	fields: [
		{
			placeholder: 'Введите ваш email',
			registerType: 'email',
			registerRequired: 'Это поле обязательно для заполнения!',
		},
		{
			placeholder: 'Введите ваш пароль',
			registerType: 'password',
			registerRequired: 'Это поле обязательно для заполнения!',
		},
		{
			placeholder: 'Повторите пароль',
			registerType: 'password2',
			registerRequired: 'Это поле обязательно для заполнения!',
		},
	],
}
