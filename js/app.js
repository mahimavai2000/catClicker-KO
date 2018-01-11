var initialCats= [
{
	name: 'Cat1',
	img: 'img/cat1.jpg',
	clickCount: 0
},
{
	name: 'Cat2',
	img: 'img/cat2.jpg',
	clickCount: 0
},
{
	name: 'Cat3',
	img: 'img/cat3.jpg',
	clickCount: 0
},
{
	name: 'Cat4',
	img: 'img/cat4.jpg',
	clickCount: 0
},
{
	name: 'Cat5',
	img: 'img/cat5.jpg',
	clickCount: 0
}
];
var ViewModel= function(){

	this.catList= ko.observableArray([]);

	initialCats.forEach(function(catItem){
		this.catList.push( new Cat(catItem));
	});

	this.currentCat=ko.observable(this.catList()[0] );

	this.incrementCounter= function(){
	this.clickCount(this.clickCount() + 1);
	};

	this.setCat=function(clickedCat){
		this.currentcat(clickedCat);
	};
}
var Cat= function(data){
	this.name=ko.observable(data.name);
	this.img=ko.observable(data.img);
	this.clickCount=ko.observable(data.clickCount);
}
ko.applyBindings(new ViewModel());