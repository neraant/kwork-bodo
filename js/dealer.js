document.addEventListener('DOMContentLoaded', () => {
	// Яндекс карта
	ymaps.ready(init)
	function init() {
		var map = new ymaps.Map('map', {
			center: [55.76, 37.64], // Координаты центра карты
			zoom: 10,
			controls: [],
		})

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

			map.geoObjects.add(placemark)
		})
	}
})
