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
})
