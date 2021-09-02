$(document).ready(function() {
	var v=false;
	$("button#vegOn").click(function() {
		alert("Go Veggie");
		if(v==false){
				v=true;
				$f=$(".fish").parent().parent().detach();
				$(".hamburger").replaceWith("<li class='portobello'><em>Portobello Mushroom</em></li");
				$(".meat").after("<li class='tofu'><em>Tofu</em></li>");
				$(".tofu").parent().parent().addClass("veg_leaf");
				$m=$(".meat").detach();
				alert("Go Veggie "+v);
		}
	});//end  button
	$("button#restoreMe").click(function(){
		alert("Restore Me");
		if(v==true){
			
			$(".menu_entrees li").first().before($f);
			$(".portobello").replaceWith("<li class='hamburger'>Hamburger</li>");
			$(".tofu").each(function(i) {
				$(this).after($m[i]);
			});
			alert("Restore Me"+v);
			$(".tofu").remove();
			v=false;
		}
	});//end button
});//end  document ready