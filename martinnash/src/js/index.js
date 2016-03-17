// Javascript Entry Point



// <script>
// var myImage= new Array(); 
// myImage[0]="1.jpg";       
// myImage[1]="11.jpg";
// myImage[2]="14.jpg";
// myImage[3]="17.jpg"; 

// var ImageCnt = 0;

// function next(){
//     ImageCnt++;
//     document.getElementById("whiteBox").style.background = 'url(' + myImage[ImageCnt] + ')';
//   }
// </script>


function changeImage(current) {
	var imagesNumber = 5;

	for (i=1; i<=imagesNumber; i++) {
		if (i == current) {
			document.getElementById("normal" + current).style.display = "block";
		} else {
			document.getElementById("normal" + i).style.display = "none";
		}
	}
}