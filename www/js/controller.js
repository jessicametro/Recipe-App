var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};





// app.initialize();
   
   
   
   
$(document).ready(function(){
	displayRecipeGrid();
});




function camera(){
	var settings = {
		quality: 100,
		destinationType: Camera.DestinationType.DATA_URL,
		sourceType: Camera.PictureSourceType.CAMERA,
		saveToPhotoAlbum: true,
	};
	navigator.camera.getPicture(cameraSuccess, cameraFailure, settings);
}

function cameraSuccess(imageData){
	console.log("saved photo");
	document.getElementById('image').src = "data:image/jpeg;base64," + imageData;  //  id might need to be changed to class 'newCoverPhoto'
}

function cameraFailure(){
	alert("Error");
}




function actionSaveRecipe(parentDiv, oldRecipe) {
	var recipe = createOrEditRecipe(parentDiv);
	if (recipe.name.trim() == '') {
		alert("Your recipe needs a name!");
	} else {
		deleteRecipe(oldRecipe);
		saveRecipe(recipe);
		displayRecipe(recipe);
		displayRecipeGrid();
		$.mobile.changePage("#cookbook", {      
			transition: "fade",    
		});
	}
}

function actionDisplayRecipe(name) {
	var recipe = retrieveRecipe(name);
	displayRecipe(recipe);
	$.mobile.changePage( "#cookbook", {      
		transition: "fade",    
	});
}

function actionEditRecipe(recipe) {
	displayEditableRecipe(recipe);
	$.mobile.changePage( "#editRecipe", {      
		transition: "fade",    
	});
}

function actionDeleteRecipe(parentDiv, oldRecipe) {
	deleteRecipe(oldRecipe);
	displayRecipeGrid();
	$.mobile.changePage( "#grid", {      
		transition: "fade",    
	});
}

