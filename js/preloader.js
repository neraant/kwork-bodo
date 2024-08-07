window.addEventListener('load', function () {
	const progressText = document.querySelector('.progress-bar-text')
	const arrow = document.querySelector('.loader-arrow')
	let progress = 0
	const duration = 3000 // Продолжительность анимации стрелки в миллисекундах

	// Устанавливаем начальную ширину для анимации
	arrow.style.maxWidth = '0%'

	// Обновление текста прогресс-бара
	const updateProgress = () => {
		if (progress < 100) {
			progress += 1 // Увеличиваем прогресс на 1% каждую итерацию
			progressText.textContent = `${progress}%`
			arrow.style.maxWidth = `${progress}%` // Синхронизация с прогрессом

			setTimeout(updateProgress, duration / 100) // Обновление прогресса с интервалом
		} else {
			setTimeout(function () {
				const preloader = document.getElementById('preloader')
				preloader.style.display = 'none'

				const content = document.getElementById('content')
				content.classList.add('show')

				// Запуск анимаций после скрытия прелоадера
				requestAnimationFrame(() => {
					document
						.querySelectorAll(
							'.offer-slider-image-container, .offer-slider-text-container, .slider-btns-container, .slider-text-container, .offer-slider-image-animation, .sand-image-container, .leaf-container, .main-page-header.header'
						)
						.forEach(el => {
							el.classList.add('start-animation')
						})

					const offerBgTop = document.querySelector('.offer-bg-top')
					if (offerBgTop) {
						offerBgTop.classList.add('start-animation')
					}
				})
			}, 1000) // Задержка перед скрытием прелоадера
		}
	}

	updateProgress() // Запуск обновления прогресс-бара
})
