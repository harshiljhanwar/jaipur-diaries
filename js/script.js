
$(document).ready( function() {

	const len = data.length;
	const col = window.innerWidth>991 ? 3 : 2;
	const blogs = $('.blogs')

	
	let i=0;
	let div = Math.floor(len/col);
	let rem = Math.floor(len%col);


	switch(rem) {
		case 2: rem=1;break;
		case 1: rem=1;break;
		default: rem=0;
	}

	while(i<div) {

		let node1 = template();
		
		
		node1.querySelector('.blog__head').innerHTML = `<strong>${data[i].name}</strong>`;
		node1.querySelector('.blog__caption').innerHTML = data[i].caption;
		node1.querySelector('.blog__img').style.backgroundImage = `url('${data[i].image}')`;
		node1.querySelector('.bt').href = data[i].link;

		blogs[0].append(node1);

		i++;


		if(i==div) {
			let el = moreBtn();
			node1.appendChild(el);
		}
	}

	div = window.innerWidth>991 ? 2*div+rem : len ;
	
	while(i<div) {

		let node2 = template();

		node2.querySelector('.blog__head').innerHTML = `<strong>${data[i].name}</strong>`;
		node2.querySelector('.blog__caption').innerHTML = data[i].caption;
		node2.querySelector('.blog__img').style.backgroundImage = `url('${data[i].image}')`;
		node2.querySelector('.bt').href = data[i].link;

		let clone = node2.cloneNode(true);
		
		blogs[1].append(node2);
		$('.blogs .d-sm-none').append(clone);

		i++;
	}

	while(i<len) {

		let node3 = template();

		node3.querySelector('.blog__head').innerHTML = `<strong>${data[i].name}</strong>`;
		node3.querySelector('.blog__caption').innerHTML = data[i].caption;
		node3.querySelector('.blog__img').style.backgroundImage = `url('${data[i].image}')`;
		node3.querySelector('.bt').href = data[i].link;

		let clone = node3.cloneNode(true);

		blogs[2].append(node3);
		$('.blogs .d-sm-none').append(clone);

		i++;
	}

})

function blog() {

	$('.home__left').toggleClass('hideLeft');
	$('.home__right').toggleClass('col-sm-12');

	$('.space').toggleClass('hideLeft');

	$('.indexContent').toggleClass('col-sm-8 col-sm-4 col-lg-3');
	$('.blogContent').toggleClass('d-block d-none');
	$('.blogContent2').toggleClass('d-lg-block');
	$('.more').toggleClass('d-sm-block');
	$('.backBtn').toggleClass('d-none');

	setTimeout(function() {$(window).scrollTop(0)}, 1100);
}

function template() {
	let html = `<div class="blog mb-5 pb-5"><div class="blog__img my-4 text-center text-sm-left w-sm-75"></div><div class="blog__head my-3 text-center text-sm-left"><strong>Albert Hall</strong></div><div class="blog__caption mt-3 mb-5 text-center text-sm-left">The monument of Albert Hall came into existence in 1876 and is renowned for its handicrafts, artwork and other masterpieces</div><div class="blog__btn"><div class="blog__btn__black"></div><a href="./places/alberthall.html" class="bt"><span>More</span></a></div></div>`
	let template;
	let parser = new DOMParser();
	template = parser.parseFromString(html, "text/html");

	let node = template.querySelector('.blog');
	let clone = node.cloneNode(true);

	return clone;
}

function moreBtn() {

	let el = document.createElement('div');
	el.classList.add('row','more','bt','text-right','d-none','d-sm-block','mt-n5','ml-auto');
	el.style.marginLeft = 'auto';
	el.style.width = 'fit-content';
	el.style.zIndex = 2;
	el.innerHTML = "See more";

	el.addEventListener('click', blog)

	return el;

}

$('.more').click(blog)
$('.backBtn').click(blog)