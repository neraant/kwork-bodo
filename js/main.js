// Offer slider
// Устанавливаем slide-init на слайды после загрузки страницы
$('.offer-slider').on('init', function (event, slick) {
	$('.slick-slide img, .slick-slide .slider-text-container').addClass(
		'slide-init'
	)
})

$('.offer-slider').slick({
	lazyLoad: 'ondemand',
	speed: 900,
	arrows: true,
	cssEase: 'ease-out',
	// fade: true,
})

$('.offer-next').on('click', function () {
	$('.offer-slider').slick('slickNext')
})

$('.offer-prev').on('click', function () {
	$('.offer-slider').slick('slickPrev')
})

// Technologies slider
$('.product-slider').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
})

$('.product-slider__child').slick({
	dots: true,
})

$('.address-slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: false,
})

$('.product-preview-slider-wrapper').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: true,
	arrows: true,
	loop: true,
})

$('.swiper-button-next').on('click', function () {
	$('.product-preview-slider-wrapper').slick('slickNext')
})

$('.swiper-button-prev').on('click', function () {
	$('.product-preview-slider-wrapper').slick('slickPrev')
})

$('.technologies-next').on('click', function () {
	$('.product-slider').slick('slickNext')
})

$('.technologies-prev').on('click', function () {
	$('.product-slider').slick('slickPrev')
})

// Animation
$('.more-btn').hover(
	function () {
		let parent = $(this).parent()
		$('.more-arrow', parent).css('margin-right', '8px')
	},
	function () {
		let parent = $(this).parent()
		$('.more-arrow', parent).css('margin-right', '16px')
	}
)

// Mobile menu
$('.mobile-burger').on('click', function () {
	$('.mobile-menu').toggleClass('open')
	$('.mobile-overlay').toggleClass('open')
	$('.mobile-burger').toggleClass('open')
})

// Форма обратной связи
const closeModalFormBtn = document.querySelector('.close-modal-form-image')
const openModalFormBtns = document.querySelectorAll('.open-modal-form-btn')
const modalForm = document.querySelector('.modal-form-wrapper')
const modalFormOverlay = document.querySelector('.overlay')

openModalFormBtns.forEach(openModalFormBtn => {
	openModalFormBtn.addEventListener('click', () =>
		openModalForm(modalForm, modalFormOverlay)
	)
})

closeModalFormBtn.addEventListener('click', () =>
	closeModalForm(modalForm, modalFormOverlay)
)

modalFormOverlay.addEventListener('click', () =>
	closeModalForm(modalForm, modalFormOverlay)
)

function openModalForm(modalForm, overlay) {
	modalForm.style.transform = 'translateX(0)'

	overlay.style.opacity = '1'
	overlay.style.visibility = 'visible'
}

function closeModalForm(modalForm, overlay) {
	modalForm.style.transform = 'translateX(100%)'

	overlay.style.opacity = '0'
	overlay.style.visibility = 'hidden'
}

modalForm.addEventListener('submit', e => {
	e.preventDefault()
})
