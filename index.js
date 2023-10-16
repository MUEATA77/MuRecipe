//  DRAFT///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// $("div").on("click", function (docs) {
//     var val = docs.target;
//     var val2 = $(val).attr("class");
//     console.log(val2)
// });
//  DRAFT///////////////////////////////////////////////////////////////////////////////////////////////////////////////////










///////////////////////////////////////////////////  weather API /////////////////////////////////////////////////////////////////////////

// $("button").on("click", function () {
//     var getThem = $("input").val();
    
//     async function fetchData() {
//         let response = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+getThem+"&appid=75ceafccc0645a39e03dafe6dcaac6e9");
//         let data = await response.json();
//         data.weather.forEach(function(info) {
//           $(".cloud").text(info.main);
//           $(".dec").text(info.description);
//           $(".icon").attr("src" , info.icon);
//         });
//   //   document.querySelector("h1").innerHTML = data.joke
//       }
    
  
//     fetchData();

///////////////////////////////////////////////////  weather API /////////////////////////////////////////////////////////////////////////












//  DRAFT///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// var arr = ["ALi","yousef","ahmed"];
    
// for (let i = 0; i < arr.length; i++) {
//     var addThem = $('<h1></h1>').text(arr[i]);
//     $('body').append(addThem);
// }
  
// });

//  DRAFT///////////////////////////////////////////////////////////////////////////////////////////////////////////////////






























//   //recipes API--------->YOUSEF


// async function recipeId(idd,cd) {
//   var fetchId = await fetch("https://api.spoonacular.com/recipes/"+idd+"/information?includeNutrition=false&apiKey=e585ee0425174e6bb2e88501d709c5ad");
//   var getRecId = await fetchId.json();
//   cd(getRecId)


//   //for referring
//   // var details = getRecId.extendedIngredients;

//   // for (let i = 0; i < details.length; i++) {                                      
//   //   var elementt = details[i];
//   //   console.log(elementt.name,elementt.nameClean,elementt.amount,elementt.unit);
//   // }
//   //for referring
 
// }






// $(".button1").on("click", function () {
//   $("img").remove();
//     $("p").remove();
//     $("h1").remove();
//     $("h5").remove();
//     $("h3").remove();
//     $(".remo").remove();
//     $("a").remove();
//     $("span").remove();
// var getThem = $(".input1").val();

// // search/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// async function fetchData() {
//   var link = "https://api.spoonacular.com/recipes/complexSearch?query="+getThem+"&number=100&apiKey=e585ee0425174e6bb2e88501d709c5ad"
//   let response = await fetch(link);
//   let data = await response.json();
//   let arrNames = data.results;

//   // console.log(arrNames[0].id, arrNames[0].image, arrNames[0].title); //for referring

//   var div1 = $("<div></div>").attr("class","row col-11 m-auto remo"); //CSS Bootstrap
//   $("body").append(div1);
//   for (let i = 0; i < arrNames.length; i++) {
//       var addImg = $("<img>").attr({
//         "src":arrNames[i].image,
//         "alt":arrNames[i].id,
//         "class":"card-img-top"
//       });
      
//       var div2 = $("<div></div>").attr("class","col-lg-4 col-6 m-auto mb-3 remo");
//       $(div1).append(div2);
//   var div3 = $("<div></div>").attr("class","card col-12 remo");
//       $(div3).append(addImg);
//       $(div2).append(div3);

//       var div4 = $("<div></div>").attr("class","card-content remo");
//       var addName = $("<h2></h2>").text(arrNames[i].title);
//       var addA = $("<a></a>").attr("class","button").text("Find out more");
//       var addSpan = $("<span></span>").attr("class","material-symbols-outlined").text("arrow_right_alt");
//       $(addA).append(addSpan);

//       $(div4).append(addName);
//       $(div4).append(addA);
//       $(div3).append(div4);

//       //  //related to CSS Bootstrap
//   }
// // search//////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//   // on Image clicked////////////////////////////////////////////////////////////////////////////////////////////////////////
//   $("img").on("click", function (event) {
//   let altId = event.target.alt;
//     // let altId = event; //for referring
//   // console.log(altId);  //for referring
//    recipeId(altId,function(inger){
//     $("img").remove();
//     $("p").remove();
//     $("h1").remove();
//     $("h3").remove();
//     $(".remo").remove();
//     $("a").remove();
//     $("span").remove();
//     var subImg = $("<img>").attr("src",inger.image);
//     var oneName = $("<h1></h1>").text(inger.title);
//     $("body").append(subImg,oneName);
//     var arr2 = inger.extendedIngredients;
// for (let g = 0; g < arr2.length; g++) {
//   var amont1 = $("<h3></h3>").text(arr2[g].name);
//   var amont2 = $("<h5></h5>").text(arr2[g].nameClean);
//   var amont3 = $("<p></p>").text(arr2[g].amount);
//   var amont4 = $("<p></p>").text(arr2[g].unit);
//   $("body").append(amont1,amont2,amont3,amont4);
// }



// });

// });
// // on Image clicked////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// }


// fetchData();

// });































// //my editing on the recipes API---------> WITHOUT ANIMATION ON CARDS

// $(".button1").on("click", function () {
//   $("img").remove();
//     $("p").remove();
//     $("h1").remove();
//     $("h3").remove();
//     $("h5").remove();
//     $(".remo").remove();
// var categ = $(".input1").val();
// // console.log = (categ); // //for referring

// // search///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// async function fetchData() {
//   var link = "https://api.spoonacular.com/recipes/complexSearch?query="+categ+"&number=100&apiKey=54236fd247944e76ae314b72c5d22d95"
//   let response = await fetch(link);
//   let data = await response.json();
//   let arrNames = data.results;

//   // for (let a = 0; a < arrNames.length; a++) {
   
//   //    console.log(arrNames[a].id, arrNames[a].image, arrNames[a].title);                //  //for referring
//   // }
 

//   var divThem = $("<div></div>").attr("class","w-auto m-auto row col-11 remo"); //CSS Bootstrap
//   $("body").append(divThem);

//   for (let i = 0; i < arrNames.length; i++) {
//       var addImg = $("<img>").attr({
//         "src":arrNames[i].image,
//         "alt":arrNames[i].id,
//         "class": "card-img-top"
//       });
//       var divDad = $("<div></div>").attr("class","col-lg-3 col-md-4 col-6 m-auto mb-3 remo");
//       $(divThem).append(divDad);

//       var div1 = $("<div></div>").attr("class","card remo");
//       $(div1).append(addImg);
//       $(divDad).append(div1);
//       var addName = $("<h5></h5>").text(arrNames[i].title).attr("class","card-titl");
//       var div2 = $("<div></div>").attr("class","card-body remo"); 
//       $(div2).append(addName);
//       $(div1).append(div2);
//     //   var divCard = $(divThem).append(addImg,addName);
//     //  $("body").append(divCard); //related to CSS Bootstrap
//   }
// // search//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//   // on Image clicked////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   $("img").on("click", function (event) {
//     let idd = event.target.alt;
// // console.log (idd); // //for referring
// $("img").remove();
//       $("p").remove();
//       $("h1").remove();
//       $("h3").remove();
//       $("h5").remove();
//       $(".remo").remove();

//     async function recipeId() {
      

//       var fetchId = await fetch("https://api.spoonacular.com/recipes/"+idd+"/information?includeNutrition=false&apiKey=54236fd247944e76ae314b72c5d22d95");
//       var getRecId = await fetchId.json();
//       var sens = getRecId;
//       // console.log(sens); // //for referring
  
//       var subImg = $("<img>").attr("src",sens.image);
//       var oneName = $("<h1></h1>").text(sens.title);
//       $("body").append(subImg,oneName);
    
//       var details = sens.extendedIngredients;
//       for (let m = 0; m < details.length; m++) {
      
//         // console.log(details[m]) // //for referring
//         var amont1 = $("<h3></h3>").text(details[m].name);
//         var amont2 = $("<h5></h5>").text(details[m].nameClean);
//         var amont3 = $("<p></p>").text(details[m].amount);
//         var amont4 = $("<p></p>").text(details[m].unit);
//         $("body").append(amont1,amont2,amont3,amont4);
//       }
    
    
     
     
//     }

//     recipeId();


// });

// // on Image clicked///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// }


// fetchData();

// });











































// //my editing on the recipes API---------> WITH ANIMATION ON CARDS

// $(".button1").on("click", function () {
//   $("img").remove();
//     $("p").remove();
//     $("h1").remove();
//     $("h2").remove();
//     $("h3").remove();
//     $("h4").remove();
//     $("h5").remove();
//     $(".remo").remove();
//     $("a").remove();
//     $("span").remove();
// var categ = $(".input1").val();
// // console.log = (categ); // //for referring

// // search///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// async function fetchData() {
//   var link = "https://api.spoonacular.com/recipes/complexSearch?query="+categ+"&number=100&apiKey=54236fd247944e76ae314b72c5d22d95"
//   let response = await fetch(link);
//   let data = await response.json();
//   let arrNames = data.results;


// // console.log (arrNames[0]);
//   // for (let a = 0; a < arrNames.length; a++) {
   
//   //    console.log(arrNames[a].id, arrNames[a].image, arrNames[a].title);                //  //for referring
//   // }
 

//   var divThem = $("<div></div>").attr("class","row col-11 m-auto remo"); //CSS Bootstrap
//   $("body").append(divThem);

//   for (let i = 0; i < arrNames.length; i++) {
//     var divDad = $("<div></div>").attr("class","col-lg-4 col-6 m-auto mb-3 remo");
//   $(divThem).append(divDad);

//     var div1 = $("<div></div>").attr("class","card col-12 remo");
//     $(divDad).append(div1);

//       // var addImg = $("<img>").attr({"src" : arrNames[i].image, "alt" : arrNames[i].id});
//       // console.log (addImg);

//       var addImg = $("<img>").attr({"src" : arrNames[i].image, "class":"card-img-top"});
//       $(div1).append(addImg);
     
    
//       var div2 = $("<div></div>").attr("class", "card-content remo");
     
//       var addName = $("<h2></h2>").text(arrNames[i].title);
//       var addA = $("<a></a>").attr({"class": "button", "data-alt" : arrNames[i].id}).text("Find out more");
//       var addSpan = $("<span></span>").attr({"class":"material-symbols-outlined"}).text("arrow_right_alt");
//       $(addA).append(addSpan);

//       $(div2).append(addName, addA);

//       $(div1).append(div2);

  






//       // console.log (addName);
//     //   var divCard = $(divThem).append(addImg,addName);
//     //  $("body").append(divCard); //related to CSS Bootstrap
//   }
// // search//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//   // on Image clicked////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   $("a").on("click", function (event) {
  
//     let idd = event.target.dataset.alt;
// // console.log (idd); // //for referring
// $("img").remove();
// $("p").remove();
// $("h1").remove();
// $("h2").remove();
// $("h3").remove();
// $("h4").remove();
// $("h5").remove();
// $(".remo").remove();
// $("a").remove();
// $("span").remove();

//     async function recipeId() {
//       var fetchId = await fetch("https://api.spoonacular.com/recipes/"+idd+"/information?includeNutrition=false&apiKey=54236fd247944e76ae314b72c5d22d95");
//       var getRecId = await fetchId.json();
//       var sens = getRecId;
//       // console.log(sens); // //for referring
  
//       var subImg = $("<img>").attr("src",sens.image);
//       var oneName = $("<h3></h3>").text(sens.title);
//       $("body").append(subImg,oneName);
    
//       var details = sens.extendedIngredients;
//       for (let m = 0; m < details.length; m++) {
      
//         // console.log(details[m]) // //for referring
//         var amont1 = $("<h4></h4>").text(details[m].name);
//         var amont2 = $("<h5></h5>").text(details[m].nameClean);
//         var amont3 = $("<p></p>").text(details[m].amount);
//         var amont4 = $("<p></p>").text(details[m].unit);
//         $("body").append(amont1,amont2,amont3,amont4);
//       }
    
    
     
     
//     }
//     recipeId();

// });

// // on Image clicked///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// }


// fetchData();

// });


































































































































//my editing on the recipes API---------> WITH ANIMATION ON CARDS---------> WITH TABLE

$("table").hide();
$(".divHead2ndPage").hide();


$(".button1").on("click", function () {
  $("img").remove();
    $("p").remove();
    $("h1").remove();
    $("h2").remove();
    // $("h3").remove();
    $(".sech3").remove();
    $("h4").remove();
    // $("h5").remove();
    $(".remo").remove();
    // $("a").remove();
    $("span").remove();
    $("table").hide();
    $(".divHead2ndPage").hide();

var categ = $(".input1").val();
// console.log (categ); // //for referring

// search///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
async function fetchData() {
  var link = "https://api.spoonacular.com/recipes/complexSearch?query="+categ+"&number=100&apiKey=54236fd247944e76ae314b72c5d22d95"
  let response = await fetch(link);
  let data = await response.json();
  let arrNames = data.results;


// console.log (arrNames[0]);
  // for (let a = 0; a < arrNames.length; a++) {
   
  //    console.log(arrNames[a].id, arrNames[a].image, arrNames[a].title);                //  //for referring
  // }
 

  var divThem = $("<div></div>").attr("class","row col-11 m-auto remo"); //CSS Bootstrap
  $("body").append(divThem);

  for (let i = 0; i < arrNames.length; i++) {
    var divDad = $("<div></div>").attr("class","col-lg-4 col-md-6 col-sm-12 col-12 m-auto mb-3 remo");
  $(divThem).append(divDad);

    var div1 = $("<div></div>").attr("class","card col-12 remo");
    $(divDad).append(div1);

      // var addImg = $("<img>").attr({"src" : arrNames[i].image, "alt" : arrNames[i].id});
      // console.log (addImg);

      var addImg = $("<img>").attr({"src" : arrNames[i].image, "class":"card-img-top"});
      $(div1).append(addImg);
     
    
      var div2 = $("<div></div>").attr("class", "card-content remo");
     
      var addName = $("<h2></h2>").text(arrNames[i].title).css({"color":"white"});
      var addA = $("<a></a>").attr({"class": "button sech3", "data-alt" : arrNames[i].id}).text("Find out more").css({"color":"white"});
      var addSpan = $("<span></span>").attr({"class":"material-symbols-outlined"}).text("arrow_right_alt").css({"color":"white"});
      $(addA).append(addSpan);

      $(div2).append(addName, addA);

      $(div1).append(div2);

  






      // console.log (addName);
    //   var divCard = $(divThem).append(addImg,addName);
    //  $("body").append(divCard); //related to CSS Bootstrap
  }
// search//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



  // on Image clicked////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  $("a").on("click", function (event) {
  
    let idd = event.target.dataset.alt;
// console.log (idd); // //for referring
$("img").remove();
$("p").remove();
$("h1").remove();
$("h2").remove();
// $("h3").remove();
$(".sech3").remove();
$("h4").remove();
// $("h5").remove();
$(".remo").remove();
// $("a").remove();
$("span").remove();



    async function recipeId() {
      var fetchId = await fetch("https://api.spoonacular.com/recipes/"+idd+"/information?includeNutrition=false&apiKey=54236fd247944e76ae314b72c5d22d95");
      var getRecId = await fetchId.json();
      // console.log(getRecId); // //for referring
  


      var subImg = $("<img>").attr({"src":getRecId.image, "class":"w-100"});
      var oneName = $("<h3></h3>").attr("class", "mt-3 text-center sech3 subName").text(getRecId.title);
      $(".divHead2ndPage").append(subImg,oneName);
      
     $(".divHead2ndPage").show(); 
     
          var details = getRecId.extendedIngredients;
      for (let m = 0; m < details.length; m++) {
        // console.log (details[m]);

var addTrbody = $("<tr></tr>").attr("class","");
$("tbody").append(addTrbody);

 var addTd1 = $("<td></td>").attr("scope","row").text(details[m].name);
 var addTd2 = $("<td></td>").text(details[m].nameClean);
 var addTd3 = $("<td></td>").text(Math.floor(details[m].amount)).attr("class", "text-center");
 var addTd4 = $("<td></td>").text(details[m].unit);

 $(addTrbody).append(addTd1,addTd2,addTd3,addTd4);
      }



      $("table").show();
     
     
    }
    
    recipeId();

});

// on Image clicked///////////////////////////////////////////////////////////////////////////////////////////////////////////////
}


fetchData();

});

