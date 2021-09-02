$(document).ready(function(){
function card(name,suit,value) {
 this.name=name;
 this.suit=suit;
 this.value=value;
}
var deck = [
new card('Ace', 'Hearts',11),
new card('Two', 'Hearts',2),
new card('Three', 'Hearts',3),
new card('Four', 'Hearts',4),
new card('King', 'Hearts',10),
new card('Ace', 'Diamonds',11),
new card('Two', 'Diamonds',2),
new card('Three', 'Diamonds',3),
new card('Queen', 'Diamonds',10),
new card('King', 'Diamonds',10),
new card('Ace', 'Clubs',11),
new card('Two', 'Clubs',2),
new card('King', 'Clubs',10),
new card('Ace', 'Spades',11),
new card('Two', 'Spades',2),
new card('Three', 'Spades',3),
new card('Jack', 'Spades',10),
new card('Queen', 'Spades',10),
new card('King', 'Spades',10)
];

var hand = {
cards : new Array(),
current_total : 0,
sumCardTotal: function(){
}
};
this.current_total = 0;
for(var i=0;i<this.cards.length;i++){
var c = this.cards[i];
this.current_total += c.value;
}
$("#hdrTotal").html("Total: " + this.current_total );
}
};
var used_cards=new Array();

function deal()
{
		for(var i=0;i<2;i++)
		{
			hit();
		}
}

function getRandom(num)
{
	var my_num=Math.floor(Math.random()*num);
	return my_num;
}

function hit() 
{
	var good_card=false;
	do{
		var index=getRandom(52);
		if(!$.inArray(index,used_cards) >-1)
		{
			good_card=true;
			var c=deck[index];
			used_cards[used_cards.length]=index;
			hand.cards[hand.cards.length]=c;
			var $d=$("<div>");
			$d.addClass("current_hand")
				.appendTo("#my_hand");
			$("<img>").attr('alt', c.name + ' of ' + c.suit )
						  .attr('title', c.name + ' of ' + c.suit )
						  .attr('src', 'cards/' + c.suit + '/' + c.name + '.jpg' )
						  .appendTo($d)
						  .fadeOut('slow')
						  .fadeIn('slow');	
		}
	}while(!good_card);
	good_card=false;
}

$("#btnDeal").click(function()
{
		alert("Hello");
		deal();
		$(this).toggle();
});

});
