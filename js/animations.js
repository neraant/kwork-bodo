document.addEventListener('DOMContentLoaded', () => {
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

	window.addEventListener('load', () => {
		smoothAppearing('.appearing-element-quality-block')
		smoothAppearing('.appearing-element-technology-block')
		smoothAppearing('.appearing-element-technology-block-mobile')
		smoothAppearing('.appearing-element-product-block')
		smoothAppearing('.appearing-element-catalog-block')
		smoothAppearing('.appearing-element-shops-block')
		smoothAppearing('.appearing-element-info-block')
		smoothAppearing('.appearing-element-shops-map-block')
		smoothAppearing('.appearing-element-right-block')
		smoothAppearing('.appearing-element-left-block')

		smoothAppearing('.russian-map-wrapper')
		smoothAppearing('.europe-map-wrapper')
	})

	window.addEventListener('scroll', () => {
		smoothAppearing('.appearing-element-quality-block')
		smoothAppearing('.appearing-element-technology-block')
		smoothAppearing('.appearing-element-technology-block-mobile')
		smoothAppearing('.appearing-element-product-block')
		smoothAppearing('.appearing-element-catalog-block')
		smoothAppearing('.appearing-element-shops-block')
		smoothAppearing('.appearing-element-info-block')
		smoothAppearing('.appearing-element-shops-map-block')
		smoothAppearing('.appearing-element-right-block')
		smoothAppearing('.appearing-element-left-block')

		smoothAppearing('.russian-map-wrapper')
		smoothAppearing('.europe-map-wrapper')
	})
})
