if (window.innerWidth > 991) {
	function smoothAppearing(elementClassName) {
		let elements = document.querySelectorAll(elementClassName)

		for (let i = 0; i < elements.length; i++) {
			let element = elements[i]
			let position = element.getBoundingClientRect().top
			let windowHeight = window.innerHeight

			if (position < windowHeight) {
				setTimeout(() => {
					element.classList.add('show')
				}, i * 50)
			} else {
				element.classList.remove('show')
			}
		}
	}

	new fullpage('#fullpage', {
		licenseKey: 'YOUR_LICENSE_KEY', // Вставьте сюда ваш лицензионный ключ
		autoScrolling: true,
		scrollOverflow: true,
		scrollOverflowReset: true,
		scrollOverflowOptions: {
			scrollbars: true, // Включить отображение скроллбаров
			hideScrollbars: true, // Оставлять скроллбары видимыми
			mouseWheel: true, // Поддержка скроллинга колесиком мыши
			touchScroll: true, // Поддержка скроллинга касаниями на мобильных устройствах
		},
		responsiveWidth: 991, // Ширина экрана для отключения fullPage.js
		afterLoad: function (origin, destination, direction) {
			smoothAppearing('.appearing-element-quality-block')
			smoothAppearing('.appearing-element-technology-block')
			smoothAppearing('.appearing-element-technology-block-mobile')
			smoothAppearing('.appearing-element-product-block')
			smoothAppearing('.appearing-element-catalog-block')
			smoothAppearing('.appearing-element-shops-block')
			smoothAppearing('.appearing-element-shops-map-block')
			smoothAppearing('.appearing-element-info-block')

			smoothAppearing('.russian-map-wrapper')
			smoothAppearing('.europe-map-wrapper')
		},
	})
}
