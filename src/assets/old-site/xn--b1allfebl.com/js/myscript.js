var img_id;
var img_name;
var img_path;
var show_html = false;
var show_css = false;
var show_js = false;
$('#js_img').hide();
    
$('.btn').click(function () {
        
    img_id = $(this).attr('id'); // html
    img_name = img_id + '_img';    // html_img
    img_path = 'img/' + img_id + '.png'; // img/html.png
        //alert(img_id+' '+img_name+' '+ img_path);
        
    switch (img_id) {
    case 'html':
                
        show_html = !show_html;
                //alert("show_html= "+show_html);
        break;
    case 'css':
        show_css = !show_css;
        break;
    case 'js':
        show_js = !show_js;
        break;
    }
        
        //alert("#"+img_name+""+" - "+img_path+"");
        /*
        
        
        function show_img(flag){
            if(flag){
                $("#"+img_name+"").attr('scr', img_path+"");}
            else{
                $("#"+img_name+"").attr('scr', "");}
            }
        
        */
    if (img_id == 'html') {
        //    show_html = !show_html;
        if (show_html) {
            $('#html_img').attr('src', "img/html.png"); }
        else {
            $('#html_img').attr('src', "");
        }
    };
        
        if (img_id == 'css') {
          //  show_css = !show_css;
            if(show_css){                
                $('#css_img').attr('src', "img/css.png");}
            else{
                $('#css_img').attr('src', "");
            }
        };
        
        if (img_id == 'js') {
            //show_js = !show_js;
            if(show_js){                
                $('#js_img').show();}
            else{
                $('#js_img').hide();}
            };
    });
    
    
    // skill table
    var newSkillMarker;
    var newCell;
    var newImg;
    

    var newRow1;
    var newCell1;
    var newImg1;
    var newTable1;
    var newRowId1;
    var skills_arr = [7,7,6,4,5,4,4,3];
    
    newTable1 = document.getElementById('skill_table');
    
/* this worked correctly
    $('#skill_table > tbody > tr').each(function() {
        alert($(this).attr('id'));        
    });
*/

    function fill_row(){
        
        //newRow1 = document.getElementById('cisco_row'); //cisco_row
        //newRow1 = newTable1. document.getElementById('cisco_row'); //cisco_row
        var rowLength = newTable1.rows.length;
        //alert('rowLength='+rowLength);
        for(var i=0; i < rowLength; i++){
            newRowId1 = newTable1.rows[i].getAttribute('id');
        //    alert(newRowId1);
            newRow1 = document.getElementById(newRowId1); //cisco_row
        //    alert(newRow1);
              for( var ii=0; ii < 8; ii++){
                newCell1 = document.createElement("td");
                newCell1.setAttribute('class','html_skill');
                newImg1 = document.createElement("i");
                    if(ii < skills_arr[i]){
                        newImg1.setAttribute('class','fa fa-star');    
                    }
                    else{
                        newImg1.setAttribute('class','fa fa-star-o');
                    }
                    
                newRow1.appendChild(newCell1);
                newCell1.appendChild(newImg1);
              }
        }
    }
    
    fill_row();

    //change star to fill and empty
    $('.html_skill').click(function(){
        //refers to child object 'i' and gets its class data
        var class_item = $(this).children('i').attr('class'); //fa fa-star-o
        if (class_item == 'fa fa-star-o'){
        //set attr 'class' of the child element 'i' to 'fa fa-star' if star is empty
            $(this).children('i').attr('class','fa fa-star');
        }
        else{
            $(this).children('i').attr('class','fa fa-star-o');
        }
        //alert(class_item);
    });

/*
// when buttons clicked, star appears on that row

    $('.skills').click(function(){
    var skill_id = $(this).attr('id'); //cisco_row
        //alert(skill_id);
        newSkillMarker = document.getElementById(skill_id);
        
        newCell = document.createElement("td");
        
        //newCell.width = '30px';
        newCell.setAttribute('class','html_skill');
        
        newImg = document.createElement("i");
        //<i class="fa fa-circle "> </i>
        newImg.setAttribute('class','fa fa-star-o');
        newSkillMarker.appendChild(newCell);
        
        newCell.appendChild(newImg);

        if(document.getElementById('skill_table').rows[this.rowIndex].cells.length > 7){       
            while(newSkillMarker.childElementCount > 1)
                newSkillMarker.removeChild(newSkillMarker.lastChild);
            
        }
        
    });
*/
var education_div = true;
$("#education_div").click(function(){
   education_div = !education_div;
    education_div?$('#education_table').show('slow'):$('#education_table').hide('slow');
});



$('.univer_name').click(function(){
    alert($(this).attr('class'));
   //console.log(event.currentTarget);
    
});

$('.univer_logo').click(function(event){
   console.log($(event.target).text());
    alert($(this).attr('class'));    
});




  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-70618612-1', 'auto');
  ga('send', 'pageview');



