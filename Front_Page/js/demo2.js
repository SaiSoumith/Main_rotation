(function(){

	var button = document.getElementById('cn-button'), /* cn-button */
    wrapper = document.getElementById('cn-wrapper');
 //   abc= document.getElementById('x');

    //open and close menu when the button is clicked
	var open = false;var open2=false;
	button.addEventListener('mouseover', handler, false);  /*click*/

	function handler(){
	  if(!open){
	    this.innerHTML = "Close";
	    classie.add(wrapper, 'opened-nav');
	  }
	  else{
	    this.innerHTML = "Menu";
		classie.remove(wrapper, 'opened-nav');
	  }
	  open = !open;
	}

/*	abc.addEventListener('mouseover', handler3, false);

	function handler3(){
	  if(!open2 && open){
	  	open =true; open2=!open2;
	 //   this.innerHTML = "Close";
	  //  classie.add(wrapper, 'opened-nav');
	  }
	  else{
	   // this.innerHTML = "Menu";
	//	classie.remove(wrapper, 'opened-nav');
	  }
	//  open2 = !open2;
	}  
*/

/*	button.addEventListener('mouseout',handler2,false);
		function handler2() {
		//	if(!open2){
		open=false;
	    this.innerHTML = "Menu";
		classie.remove(wrapper, 'opened-nav');// }
	}  */
/*	var myHoverInterval = null;

	var btn = document.getElementById("foo");

	btn.addEventListener("mouseover", function() {
	    if (myHoverInterval != null) {
	        return;
	    }
	    myHoverInterval = setInterval(function() {
	        console.log('Doing something');
	    }, 1000);
	});

	btn.addEventListener("mouseout", function() {
	    if (myHoverInterval != null) {
	        clearInterval(myHoverInterval);
	        myHoverInterval = null;
	    }
	});  */

	function closeWrapper(){
		classie.remove(wrapper, 'opened-nav');
	}

}) ();
