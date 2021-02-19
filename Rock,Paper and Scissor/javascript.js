function rpsgame(choice){
	var humanchoice,botchoice;
	humanchoice=choice.id;
	botchoice=['rock','paper','scissor'][Math.floor(Math.random()*3)];
	result=winner(humanchoice,botchoice);
	message=display(result);
	rpsdisplay(humanchoice,botchoice,message);
}
function winner(humanchoice,botchoice)
{
	var d={
		'rock':{'scissor':1,'rock':0,'paper':-1},
		'scissor':{'scissor':0,'rock':-1,'paper':1},
		'paper':{'scissor':-1,'rock':1,'paper':0}
	}
	return d[humanchoice][botchoice];
}
function display(result)
{
	if (result==-1){
		return {'message':'You Lost','color':'red'};
	}
	else if(result==1){
		return {'message':'You Won','color':'green'};
	}
	else{
		return {'message':'You Tied','color':'yellow'};
	}
}
function rpsdisplay(humanchoice,botchoice,message)
{
	var img={
		'rock': document.getElementById('rock').src,
		'paper': document.getElementById('paper').src,
		'scissor': document.getElementById('scissor').src

	}
    document.getElementById('rock').remove();
	document.getElementById('paper').remove();
	document.getElementById('scissor').remove();
	
	var humanDiv=document.createElement('div');
	var messageDiv=document.createElement('div');
	var botDiv=document.createElement('div');
	humanDiv.innerHTML="<img src='"+img[humanchoice]+"' height=200 width=200 style='box-shadow: 0px 10px 50px rgba(37,50,220,1);'>"
	messageDiv.innerHTML="<h1 style='color:"+message['color']+"; font-size:60px; padding:30px; '>"+message['message']+"</h1>"
	botDiv.innerHTML="<img src='"+img[botchoice]+"'height=200 width=200 style='box-shadow: 0px 10px 50px rgba(220,50,220,1);'>"
	document.getElementById('flex-box-1').appendChild(humanDiv);
	document.getElementById('flex-box-1').appendChild(messageDiv);
	document.getElementById('flex-box-1').appendChild(botDiv);
}

