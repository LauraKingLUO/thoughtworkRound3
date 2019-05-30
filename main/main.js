

module.exports = function main(inputs) {
    // write your code here...
	var distance=inputs.distance;
	var parkTime=inputs.parkTime;	
	var summary;
	if(distance<=2)
	{
	    summary = 6 + parkTime * 0.25;
	}
	else if(distance>2 && distance<=8)
	{
		summary = 6 + (distance-2)*0.8 + parkTime*0.25;
	}
	else if(distance >8)
	{
	    summary = 6 + 4.8 + 1.2*(distance-8) + parkTime*0.25;		
	}
    summary = Math.round(summary);
	return summary;
};
