function addRecommendation() {
    var element = document.createElement("div");
    // Get the message of the new recommendation
    
    let recommendation = document.getElementById("new_recommendation");
    let name = document.getElementById("nameRec").value;
    // If the user has left a recommendation, display a pop-up
    if (recommendation.value != null && recommendation.value.trim() != "") {
      console.log("New recommendation added");
      showPopup(true);//Call showPopup here
  
      // Create a new 'recommendation' element and set it's value to the user's message
      element.setAttribute("class","recommendation");
      element.innerHTML = "\<span\>&#8220;\</span\>" + recommendation.value + "\<span\>&#8221;\</span\>";
      // Add this element to the end of the list of recommendations
      // Reset the value of the textarea
      recommendation.value = "";
    }
    if (name != null && name.trim() != ""){
        console.log("name added",name)
        element.innerHTML += "<br>" + "\<span\>&#12316;\</span\>" + name;
        nameRec.value = "";
        
        
    }
    document.getElementById("all_recommendations").appendChild(element); 
    
    

}
function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible'
    console.log("show")
  } else {
    document.getElementById('popup').style.visibility = 'hidden'
    console.log("hide")
  }
}