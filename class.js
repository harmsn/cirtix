class point
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		point.nbpointscreated++;
	}
	static distances(a,b){
		const dx=a.x-b.x;
		const dy=a.y-b.y;
		return Math.sqrt(dx*dx+dy*dx);
	}
	hello(){
		return 'hello ';
	}
}
const p1=new point(5,5);
const p2=new point(6,5);

function callme()
{
	const p3=new point(5,5);
	document.body.innerHTML+=p3.hello();
}
