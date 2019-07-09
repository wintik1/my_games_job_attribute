// JavaScript Document

var chetyre1 = document.getElementById('chetyre1');
var	chetyre2 = document.getElementById('chetyre2');
var	chetyre3 = document.getElementById('chetyre3');
	
		

chetyre1.addEventListener('change', function(){
	if(chetyre1.checked){
		
				
		if(chetyre2.checked){
			
			if(chetyre3.checked){
				
			chetyre3.checked = ''
			}
		}	
	}
});

chetyre2.addEventListener('change', function(){
	if(this.checked){
	if(chetyre1.checked){
		if(chetyre3.checked){
			chetyre1.checked = '';
		}
		}
	}
});
chetyre3.addEventListener('change', function(){
	if(this.checked){
		if(chetyre1.checked){
			if(chetyre2.checked){
				chetyre2.checked = '';
			}
		}
	}
})


