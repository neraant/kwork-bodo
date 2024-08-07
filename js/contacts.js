document.addEventListener('DOMContentLoaded', () => {
	let menuListItems = document.querySelectorAll('.locations-menu-list-item')
	let subMenuListItems = document.querySelectorAll('.locations-submenu-list')

	menuListItems.forEach((menuListItem, index) => {
		menuListItem.addEventListener('click', () => {
			menuListItems.forEach(item => item.classList.remove('opened'))
			subMenuListItems.forEach(subMenu => subMenu.classList.remove('opened'))

			menuListItem.classList.add('opened')
			subMenuListItems[index].classList.add('opened')
		})
	})

	// Яндекс карта
	ymaps.ready(init)
	function init() {
		var map = new ymaps.Map('map', {
			center: [55.76, 37.64], // Координаты центра карты
			zoom: 10,
			controls: [],
		})

		const isMobileDevice = isMobile()

		// Данные для меток: координаты, описание и параметры иконки
		if (!isMobileDevice) {
			var places = [
				{
					coords: [55.905505, 37.662833],
					content:
						'МТЦ “ГРАНД-1”<br>ул. Бутаково, д.4, Ленинградское ш., 100 м от МКАД, МТЦ Гранд-1 (этаж 1, павильон №46/1)<br>+7 (499) 301-74-15',
					icon: '../img/icon/map-icon.svg',
				},
				{
					coords: [55.8892, 37.669546],
					content:
						'МТЦ “ГРАНД-1”<br>ул. Бутаково, д.4, Ленинградское ш., 100 м от МКАД, МТЦ Гранд-1 (этаж 1, павильон №46/1)<br>+7 (499) 301-74-15',
					icon: '../img/icon/map-icon.svg',
				},
				{
					coords: [55.572062, 37.467238],
					content:
						'МТЦ “ГРАНД-1”<br>ул. Бутаково, д.4, Ленинградское ш., 100 м от МКАД, МТЦ Гранд-1 (этаж 1, павильон №46/1)<br>+7 (499) 301-74-15',
					icon: '../img/icon/map-icon.svg',
				},
			]
		} else {
			var places = [
				{
					coords: [55.905505, 37.662833],
					content: '',
					icon: '../img/icon/map-icon.svg',
				},
				{
					coords: [55.8892, 37.669546],
					content: '',
					icon: '../img/icon/map-icon.svg',
				},
				{
					coords: [55.572062, 37.467238],
					content: '',
					icon: '../img/icon/map-icon.svg',
				},
			]
		}

		// Добавляем каждую метку на карту
		places.forEach(function (place) {
			var placemark = new ymaps.Placemark(
				place.coords,
				{
					balloonContent: place.content,
				},
				{
					iconLayout: 'default#image',
					iconImageHref: place.icon,
					iconImageSize: [50, 48],
					iconImageOffset: [-15, -42],
				}
			)

			// Обработка клика по метке
			placemark.events.add('click', function () {
				openModal()
			})

			map.geoObjects.add(placemark)
		})
	}

	function isMobile() {
		return window.innerWidth < 560
	}

	// Функция для открытия модального окна
	function openModal() {
		let modal = document.querySelector('.address-section .container')
		let overlay = document.querySelector('.overlay')

		if (modal) {
			modal.style.bottom = '0%'
			overlay.classList.add('active')
		}
	}

	// Функция для закрытия модального окна
	function closeModal() {
		let modal = document.querySelector('.address-section .container')
		let overlay = document.querySelector('.overlay')

		if (modal) {
			modal.style.bottom = '-100%'
			overlay.classList.remove('active')
		}
	}

	// Обработка свайпов для закрытия модального окна
	let modal = document.querySelector('.address-section .container')
	console.log(modal)

	if (modal) {
		let hammer = new Hammer(modal)
		hammer.get('swipe').set({
			direction: Hammer.DIRECTION_VERTICAL,
			threshold: 10, // Минимальное расстояние в пикселях для распознавания свайпа
			velocity: 0.3, // Минимальная скорость для распознавания свайпа
		})

		// Закрытие модального окна по свайпу вниз
		hammer.on('swipedown', function () {
			console.log('Свайп вниз распознан')
			closeModal()
		})
	}
})
