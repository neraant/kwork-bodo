document.addEventListener('DOMContentLoaded', () => {
	// Открытые dropdownbar
	document.querySelectorAll('.custom-select').forEach(function (customSelect) {
		const trigger = customSelect.querySelector('.custom-select-trigger')
		const options = customSelect.querySelectorAll('.custom-option')

		trigger.addEventListener('click', function () {
			customSelect.classList.toggle('open')
		})

		options.forEach(option => {
			option.addEventListener('click', function () {
				trigger.textContent = this.textContent
				customSelect.classList.remove('open')
			})
		})
	})

	document.addEventListener('click', function (event) {
		if (!event.target.closest('.custom-select')) {
			document
				.querySelectorAll('.custom-select')
				.forEach(function (customSelect) {
					customSelect.classList.remove('open')
				})
		}
	})

	// Ползунок диапазона цены
	const slider = document.getElementById('slider')

	noUiSlider.create(slider, {
		start: [0, 173000],
		connect: true,
		range: {
			min: 0,
			max: 173000,
		},
	})

	const minPriceValue = document.getElementById('minPriceValue')
	const maxPriceValue = document.getElementById('maxPriceValue')

	slider.noUiSlider.on('update', function (values, handle) {
		if (handle === 0) {
			minPriceValue.textContent = Math.round(values[0])
		} else {
			maxPriceValue.textContent = Math.round(values[1])
		}
	})

	// Закрытие/открытие фильтров
	const openFilterBtn = document.querySelector('.all-filters-btn')
	const closeFilterBtn = document.querySelector('.close-filter-wrapper-btn')
	const overlayFilter = document.querySelector('.filter-overlay')

	const filterContainer = document.querySelector('.filter-container')

	openFilterBtn.addEventListener('click', () => {
		filterContainer.classList.add('opened')
		overlayFilter.classList.add('opened')
	})

	closeFilterBtn.addEventListener('click', () => {
		filterContainer.classList.remove('opened')
		overlayFilter.classList.remove('opened')
	})

	overlayFilter.addEventListener('click', () => {
		filterContainer.classList.remove('opened')
		overlayFilter.classList.remove('opened')
	})

	window.addEventListener('click', () => {
		if (
			!filterContainer.contains(event.target) &&
			!openFilterBtn.contains(event.target)
		) {
			filterContainer.classList.remove('opened')
			overlayFilter.classList.remove('opened')
		}
	})

	// Открытие/закрытие пунктов меню
	const filterItemContainers = document.querySelectorAll(
		'.filter-item-container'
	)

	filterItemContainers.forEach(filterItem => {
		const filterTitle = filterItem.querySelector('.filter-subtitle')
		const filterContent = filterItem.querySelector('.filter-item-wrapper')

		filterTitle.addEventListener('click', () => {
			if (filterContent.classList.contains('opened')) {
				filterContent.classList.remove('opened')
				filterTitle.classList.remove('opened')
			} else {
				filterContent.classList.add('opened')
				filterTitle.classList.add('opened')
			}
		})
	})
})
