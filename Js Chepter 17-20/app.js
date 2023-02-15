// -----------------------    chepter no 14-14-16  -------
// ----------------- Arrays---------


// ------------------- Question no 1 --------------
// var students=[];


// ------------------- Question no 2 --------------
// var students=new Array();


// ------------------- Question no 3 --------------
// var names=["Fahad","Ali","Zulfiqar"];


// ------------------- Question no 4 --------------
// var nums=[11,22,33,44];


// ------------------- Question no 5 --------------
// var boolean=[true,false];


// ------------------- Question no 6 --------------
// var mix=["fahad",110,true];


// ------------------- Question no 7 --------------
// var eduInPak=["SSC","HSC","BCS","Bcom","BS","MS","M.Phil","Phd"];
// document.write(eduInPak);


// ------------------- Question no 8 --------------
//  var students=["Fahad","Ali","Naveed"];
//  var marks=[320,480,230];
//  var tmarks=500;
 
//  document.write("<h1>"+"Score of " + students[0]+ " and  " + marks[0]+"   Percentage  =   % "+ (marks[0]/tmarks)*100 + "</h1>");
//  document.write("<h1>"+"Score of " + students[1]+ " and  " + marks[1]+"   Percentage  =   % "+ (marks[1]/tmarks)*100 + "</h1>");
//  document.write("<h1>"+"Score of " + students[2]+ " and  " + marks[2]+"   Percentage  =   % "+ (marks[2]/tmarks)*100 + "</h1>");




// ------------------- Question no 9 (a)--------------
// var colors=["Green"," Yellow"," Brown"," SkyBlue"];
// document.write("<h2>"+colors+"</h2>");
// var nameColor=prompt("which color you want add to the beginning");
// colors.unshift(nameColor);
// document.write("<h1>"+ colors +"</h1>");


// ------------------- Question no 9 (b)--------------
// var colors=["Green"," Yellow"," Brown"," SkyBlue"];
// document.write("<h2>"+colors+"</h2>");
// var endColor=prompt("Which Color You Want Add to the End");
// colors.push(endColor);
// document.write("<h2>"+colors+"</h2>");


// ------------------- Question no 9 (C)--------------
// var colors=["Green"," Yellow"," Brown"," Blue"];
// document.write("<h2>"+colors+"</h2><br/><br/>");
// colors.unshift("Pink","Red");
// document.write("<h2>"+colors+"</h2>");


// ------------------- Question no 9 (D)--------------
// var colors=["Green"," Yellow"," Brown"," Blue"];
// document.write("<h2>"+colors+"</h2><br/><br/>");
// colors.shift();
// document.write("<h2>"+colors+"</h2>");


// ------------------- Question no 9 (E)--------------
// var colors=["Green"," Yellow"," Brown"," Blue"];
// document.write("<h2>"+colors+"</h2><br/><br/>");
// colors.pop()
// document.write("<h2>"+colors+"</h2>");


// ------------------- Question no 9 (F)--------------
// var colors=["Green"," Yellow"," Brown"," SkyBlue"];
// document.write("<h2>"+colors+"</h2>");
// var indexColor=prompt("Which index You Want Add color");
// var nameColor=prompt("Which color You Want Add ");
// colors.splice(indexColor,0,nameColor);

// document.write("<h2>"+colors+"</h2>");




// ------------------- Question no 9 (G)--------------
// var colors=["Green"," Yellow"," Brown"," SkyBlue"];
// document.write("<h2>"+colors+"</h2>");
// var indexColor=prompt("Which index You Want Add color");
// var nameColor=prompt("Which color You Want Add ");
// colors.splice(indexColor,nameColor);

// document.write("<h2>"+colors+"</h2>");




// ------------------- Question no 10 --------------
// var scores=[340,200,550,180,460]
// document.write("<h3>"+ scores +"</h3>");

// scores.sort()
// document.write("<h2>"+ scores +"</h2>");




// ------------------- Question no 11 --------------
// var cities=["Peshawar"," Isalamabad"," Karachi"," Nawabasha"," Lahore"]
// document.write("<h1> Cities List </h1>");
// document.write("<h3>"+ cities +"</h3><br/><br/>");

// document.write("<h1> Selected Cities List </h1>");
// var selectCities=cities.slice(2,4)
// document.write("<h3>"+ selectCities +"</h3>");




// ------------------- Question no 12 --------------
// var arry =["This","Is","My","Bike"];
// document.write("<h3>"+ arry +"</h3>");

// var withJoin=arry.join(" ")
// document.write("<h2>"+ withJoin +"</h2>");





// ------------------- Question no 13 --------------
// document.write("<h5> by FiFo Method</h5>"); 

// var foods=["Chicken of 4 Feb","  Beaf of 5 Feb","  Chicken of 6 Feb","  Mutton of 7 Feb"]
// document.write("<h2>"+ foods +"</h2>");

// var out =foods[0]
// document.write("<h3>First Out for make Biryani  = "+ out +"</h3><hr />");

// out =foods[1]
// document.write("<h3>2nd Out for make Biryani  = "+ out +"</h3><hr />");

// out =foods[2]
// document.write("<h3>3rd Out for make Biryani  = "+ out +"</h3><hr />");

// out =foods[3]
// document.write("<h3>4th Out for make Biryani  = "+ out +"</h3><hr />");






// ------------------- Question no 14 --------------
// document.write("<h4> According to the LiFo Method</h4>"); 


// var flower=["Jasmin","Rose","Iris","Gerbera","Orchid"];

// document.write("<h3>"+ flower +"</h3>");

// flower.pop()
// document.write("<h3> OUT = Orchid </h3>");

// flower.pop()
// document.write("<h3> OUT = Gerbera </h3>");

// flower.pop()
// document.write("<h3> OUT = Iris </h3>");

// flower.pop()
// document.write("<h3> OUT = Rose </h3>");

// flower.pop()
// document.write("<h3> OUT = Jasmin </h3>");



 




// ------------------- CLass assignment of swaping array eliment --------------

// var flower=["Jasmin","Rose","Iris","Gerbera"];
// document.write("<h3>"+ flower +"</h3>");

// [flower[0],flower[3]]=[flower[3],flower[0]]

// document.write("<br/><h3>"+ flower +"</h3>");

// [flower[1],flower[2]]=[flower[2],flower[1]]

// document.write("<br/><h3>"+ flower +"</h3>");












