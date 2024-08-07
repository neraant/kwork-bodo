document.addEventListener('DOMContentLoaded', function () {
	const svgMap = document.getElementById('svg-map')
	const pointImages = svgMap.querySelectorAll('.point-image')
	const imageUrl = 'img/point-logo.png' // путь к маленькому изображению
	const imageSize = 19 // размер маленького изображения

	pointImages.forEach(point => {
		const bbox = point.getBBox()
		const image = document.createElementNS(
			'http://www.w3.org/2000/svg',
			'image'
		)
		image.setAttributeNS(null, 'href', imageUrl)
		image.setAttributeNS(null, 'x', bbox.x + bbox.width / 2 - imageSize / 2)
		image.setAttributeNS(
			null,
			'y',
			bbox.y + bbox.height / 2 - imageSize / 2 - 3
		)
		image.setAttributeNS(null, 'width', imageSize)
		image.setAttributeNS(null, 'height', imageSize)
		svgMap.appendChild(image)
		console.log('image')
	})
})
