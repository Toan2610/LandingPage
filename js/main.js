
// Phần show Ảnh
const gallery=document.querySelectorAll('.gallery img');
const galleryShow=document.querySelector('.gallery__show')
const galleryShowImageImg=document.querySelector('.gallery__show__image img')
const next=document.querySelector('i.next');
const prev=document.querySelector('i.prev');
const nextcm=document.querySelector('i.nextcm');
const prevcm=document.querySelector('i.prevcm');
const listCommentItem=document.querySelector('.list__comment__item');
	
	let curenIndex=0;

//Gán link ảnh 
	function showImg(){

		if (curenIndex==0) {
			prev.style.opacity='0';
		}
		else{
			prev.style.opacity='1';


		}

		if (curenIndex==gallery.length-1) {
			next.style.opacity='0';
		}
		else{
			next.style.opacity='1';
		}
		galleryShowImageImg.src=gallery[curenIndex].src	

					
	}
//Lấy dữ liệu và hiển thị gallery__show
gallery.forEach(function(item,index) {
	item.addEventListener('click', function(e) {
		curenIndex=index;
		
		showImg();
		galleryShow.style.display='flex';

			
	});
	
});

// Next SlideImg
next.addEventListener('click',function(e){
	if (curenIndex<gallery.length-1) {
		curenIndex++;
		showImg();
	}
	e.stopPropagation();
	

})

// Prev SlideImg
prev.addEventListener('click',function(e){
	if (curenIndex>0) {
		curenIndex--;
		showImg();
	}
	e.stopPropagation();
})




galleryShow.addEventListener('click',function(e){
	galleryShow.style.display='none'


})
galleryShowImageImg.addEventListener('click',function(e){
	e.stopPropagation();


})

//Phần đổ dữ liệu vào wr__statistical

const statisticalItemSpan=document.querySelectorAll('.statistical__item__span');

function count(el){
	const numberEl=el.querySelector('span');
	const to=parseInt(numberEl.innerText);
	let count=0;
	const time=100;
	const step=to/time;
	

	const counting=setInterval(()=>{
		count +=step;
		if(count>to){
			clearInterval(counting);
			el.innerText=to;
		}
		else{
			el.innerText=Math.round(count);
		}

	}, 1);

}
statisticalItemSpan.forEach((item)=>{
	count(item);

})




// Onscroll


const content=document.querySelector('.content');
const contentImg=document.querySelector('.content__img');





const showOnScroll=document.querySelectorAll('.show-on-scroll');

function toggleOnScroll(el) {
	const rect=el.getClientRects()[0];
	const heightScreen=window.innerHeight;
	if(!(rect.bottom<0 || rect.top>heightScreen )){
	el.classList.add('start')
	}
	else{
	el.classList.remove('start')
	


	}
	
}
function checkAnimation(){
	showOnScroll.forEach(function(item) {
	toggleOnScroll(item);
});

}
window.onscroll=checkAnimation;

	

let commentIndex=0;
// Next Comment
nextcm.addEventListener('click',function(e){
	if(commentIndex==-1520){
		commentIndex=-1520
	}
	else{
		commentIndex -=380;
		listCommentItem.style.transform=`translateX(${commentIndex}px)`;
		listCommentItem.style. transition=`all 0.4s linear`
	}
})

// Prev Comment
prevcm.addEventListener('click',function(e){
	if (commentIndex< 0){
		commentIndex +=380;
		listCommentItem.style.transform=`translateX(${commentIndex}px)`;
		listCommentItem.style. transition=`all 0.4s linear`
	}
	else{
		commentIndex =-380;
	}
})


// MEnu
const navigationNav=document.querySelector('.navigation__nav');
const navIcon=document.querySelector('.navigation__nav--icon');

navigationNav.addEventListener('click',function(){
	navIcon.classList.toggle('hide');
})