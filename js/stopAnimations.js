document.addEventListener('DOMContentLoaded', () => {
	function smoothAppearing(elementClassName) {
		const elements = document.querySelectorAll(elementClassName)

		elements.forEach(element => {
			const position = element.getBoundingClientRect().top
			const windowHeight = window.innerHeight

			if (position < windowHeight && !element.classList.contains('show')) {
				setTimeout(() => {
					element.classList.add('show')
				}, Array.from(elements).indexOf(element) * 50)
			}
		})
	}

	function handleScroll() {
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
	}

	window.addEventListener('load', handleScroll)
	window.addEventListener('scroll', handleScroll)
})
