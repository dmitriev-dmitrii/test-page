const h1 = document.querySelector('h1')
const imgWrap = document.querySelector('.test-img-wrap')
const devicePixelRatio = window.devicePixelRatio
h1.innerHTML = (`devicePixelRatio: ${devicePixelRatio}`)

const buildUrl = (width) => {
	return `https://cs.sberbank-school.ru/image/${width}/auto/fit/c06390b8-b111-11ec-b4e7-0242ac1b0004`
}


const sizes = [320, 768]

// sizes.forEach(i => {
// 	imgWrap.innerHTML = imgWrap.innerHTML + `<figure class="test-img">
// 				<img src="${buildUrl(i)}" alt="${i}">
// 				<figcaption>${i}</figcaption>
// 			</figure>`

// 	if (devicePixelRatio > 1) {

// 		imgWrap.innerHTML = imgWrap.innerHTML + `<figure class="test-img">
// 				<img src="${buildUrl(i * 2)}" alt="${i * 2}">
// 				<figcaption>devicePixelRatio: ${devicePixelRatio} <br> ${i * 2}</figcaption>
// 			</figure>`

// 	}

// });



