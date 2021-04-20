//Traffic Widget Data
    
    //Weekly Traffic data set
    var weeklyTrafficData = {
        labels: ['16-22','23-29','30-5','6-12','13-19','20-26','27-3','4-10','11-17','18-24','25-31'],
        datasets: [
            {
                data: [750,1250,1000,1500,2000,1500,1750,1250,1750,2000,1750,2250],
                backgroundColor: 'rgba(227,227,246, 0.7)',
                lineTension: 0,
                pointBorderColor: '#7477BF',
                pointRadius: 6,
                pointBorderWidth: 2,
                pointBackgroundColor: '#fff'
            }     
        ]
    };

    //Hourly Traffic data set
    var hourlyTrafficData = {
        labels: ['16-22','23-29','30-5','6-12','13-19','20-26','27-3','4-10','11-17','18-24','25-31'],
        datasets: [
            {
                data: [500,1750,1250,1750,2000,1750,2250,750,1250,1000,1500,2000],
                backgroundColor: 'rgba(115, 176, 190, 0.4)',
                lineTension: 0,
                pointBorderColor: '#73b0be',
                pointRadius: 6,
                pointBorderWidth: 2,
                pointBackgroundColor: '#fff'
            }     
        ]
    };
    
    //Daily Traffic data set
    var todayTrafficData = {
      labels: ['16-22','23-29','30-5','6-12','13-19','20-26','27-3','4-10','11-17','18-24','25-31'],
      datasets: [
          {
              data: [1750,1250,1500,1750,2250,750,1250,1500,2000,1000,1750,2000],
              backgroundColor: 'rgba(126, 190, 162, 0.4)',
              lineTension: 0,
              pointBorderColor: '#7EBEA2',
              pointRadius: 6,
              pointBorderWidth: 2,
              pointBackgroundColor: '#fff'
          }     
      ]
    };
    
    //Monthly Traffic data set
    var monthlyTrafficData = {
      labels: ['16-22','23-29','30-5','6-12','13-19','20-26','27-3','4-10','11-17','18-24','25-31'],
      datasets: [
          {
              data: [1750,1250,1750,1500,2000,2000,1750,2250,750,1500,1250,1000],
              backgroundColor: 'rgba(76, 75, 113, 0.3)',
              lineTension: 0,
              pointBorderColor: '#4c4b71',
              pointRadius: 6,
              pointBorderWidth: 2,
              pointBackgroundColor: '#fff'
          }     
      ]
    };
    
    
//Draw Traffic Chart
var traffic = document.getElementById("traffic-widget").getContext("2d");
var trafficChart = new Chart(traffic, {
    type: 'line',
    data: weeklyTrafficData,
    animation: {
        animateScale: true
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    max: 2500,
                    min: 500,
                    stepSize: 500
                },
                gridLines: {
                    drawTicks: false,
                    color: '#cdcdcd'
                }
            }],
            xAxes: [{
                gridLines: {
                    drawTicks: false,
                    color: '#cdcdcd'
                }
            }]
        }
    }
});
    


//Traffic Widget Buttons
    //Used jQuery here for ease of syntax
    
    //Change traffic chart active button label on click
    $("#chart-buttons a").click(function() {
        $('#chart-buttons a').removeClass("active"); //take off active class from other buttons
        $(this).addClass("active"); //add active button class to this one
    });
    
    //Update traffic chart to appropriate data set on button click
     $("#button-hourly").click(function() {
         trafficChart.config.data = hourlyTrafficData;
         trafficChart.update();
     });
     
     $("#button-weekly").click(function() {
         trafficChart.config.data = weeklyTrafficData;
         trafficChart.update();
     });
     
     $("#button-daily").click(function() {
         trafficChart.config.data = todayTrafficData;
         trafficChart.update();
     });
     
     $("#button-monthly").click(function() {
         trafficChart.config.data = monthlyTrafficData;
         trafficChart.update();
     });
 

//Daily Traffic Widget

    //Daily Traffic data set
    var dailyTrafficData = {
        labels: ['M','T','W','T','F','S','S'],
        datasets: [
            {    label: 'Morning',
                data: [50,100,175,125,225,200,100],
                backgroundColor: '#7477BF'
            },
            {    label: 'Afternoon',
                data: [75,150,50,200,175,100,125],
                backgroundColor: '#73b0be'
            }
        ]
    };

    //Draw Daily Traffic chart
    var dailyTraffic = document.getElementById("daily-traffic-widget").getContext("2d");
    var dailyTrafficChart = new Chart(dailyTraffic, {
        type: 'bar',
        data: dailyTrafficData,
        animation: {
            animateScale: true
        },
        options: {
            legend: {
                position: 'bottom'
            },
            scales: {
                yAxes: [{
                    type: 'linear',
                    ticks: {
                        max: 250,
                        min: 0,
                        stepSize: 50
                    },
                    gridLines: {
                        drawTicks: false,
                        color: '#cdcdcd'
                    }
                }],
                xAxes: [{
                    gridLines: {
                        drawTicks: false,
                        color: '#cdcdcd'
                    }
                }]
            }
        }
    });


//Mobile Users Widget

    //Mobile User data set
    var mobileData = {
        labels: [
            'Phones',
            'Tablets',
            'Desktops',
            'Other',
        ],
        datasets: [
            {
                data: [20,20,55,5],
                backgroundColor: [
                    '#73b0be',
                    '#7EBEA2',
                    '#7477BF',
                    '#4c4b71'
                ]
            }
        ]
    };

    //Draw Mobile User Chart
    var mobileUsers = document.getElementById("mobile-users-widget").getContext("2d");
    var mobileChart = new Chart(mobileUsers, {
        type: 'doughnut',
        data: mobileData,
        animation: {
            animateScale: true
        },
        options: {
            elements: {
                arc: {
                    borderWidth: 0
                }
            },
            legend: {
                position: 'bottom',
                labels: {
                    boxWidth: 15
                }
            }
        }
    });


//New Members Widget

var newMemberName = document.getElementById("new-member-list").querySelectorAll(".member-name");
var newMemberEmail = document.getElementById("new-member-list").querySelectorAll(".member-email");
var newMemberDate = document.getElementById("new-member-list").querySelectorAll("li .member-date");
var newMemberAvatar = document.getElementById("new-member-list").querySelectorAll("li .member-avatar");

    //Member Data JSON - avatars from radfaces.com
    var newMemberData = [
        {"name": "Pete Wrigley",
          "image": "http://www.radfaces.com/images/avatars/little-pete-wrigley.jpg",
          "icon": "icons/post.svg",
          "email": "pete.wrigley@example.com",
          "date": "29/03/2021",
          "activity": " posted YourApp\'s SEO tips",
          "activity_time": "8 hours ago"}, 
        {"name": "Aeon Flux",
          "image": "http://www.radfaces.com/images/avatars/aeon-flux.jpg",
          "icon": "icons/like.svg",
          "email": "aeon.flux@example.com",
          "date": "03/04/2021",
          "activity": " signed up for YourApp",
          "activity_time": "6 hours ago"},
        {"name": "Alan Frog",
          "image": "http://www.radfaces.com/images/avatars/alan-frog.jpg",
          "icon": "icons/comment.svg",
          "email": "alan.frog@example.com",
          "date": "03/04/2021",
          "activity": " commented on YourApp\'s SEO tips",
          "activity_time": "5 hours ago"},
        {"name": "Amanda Bynes",
          "image": "http://www.radfaces.com/images/avatars/amanda-bynes.jpg",
          "icon": "icons/like.svg",
          "email": "amanda.bynes@example.com",
          "date": "04/04/2021",
          "activity": " signed up for YourApp",
          "activity_time": "3 hours ago"},
        {"name": "April O'Neil",
          "image": "http://www.radfaces.com/images/avatars/april-oneil.jpg",
          "icon": "icons/post.svg",
          "email": "april.oneil@example.com",
          "date": "20/04/2021",
          "activity": " posted Facebook\'s 2020 changes",
          "activity_time": "2 hours ago"}
        ];
    
// Replace placeholder text with member data from JSON    
    //jQuery used to create forEach loops because the syntax is much easier to understand

$.each(newMemberData, function(i, item) {
    var fullName = newMemberData[i].name;
        $(newMemberName).each(function() {
            $(newMemberName[i]).text(fullName);
        });
    var email = newMemberData[i].email;
        $(newMemberEmail).each(function() {
            $(newMemberEmail[i]).text(email);
        });    
    var date = newMemberData[i].date;
         $(newMemberDate).each(function() {
             $(newMemberDate[i]).text(date);
         });   
     var avatar = newMemberData[i].image;  
        $(newMemberAvatar).each(function() {
            $(newMemberAvatar[i]).attr('src', avatar);
        }); 
 });


// Member Activity Widget

var activityMemberName = document.getElementById("member-activity-list").querySelectorAll("li .member-name"); //holds both name and activity

var activityTime = document.getElementById("member-activity-list").querySelectorAll("li .activity-time");
var memberAvatar = document.getElementById("member-activity-list").querySelectorAll("li .member-avatar");
var activityIcon = document.getElementById("member-activity-list").querySelectorAll("li .activity-icon");

// Replace placeholder text with member activity data from JSON   

$.each(newMemberData.reverse(), function(i, item) {
    var fullName = newMemberData[i].name;
    var activity = newMemberData[i].activity;
        $(activityMemberName).each(function() {
            $(activityMemberName[i]).text(fullName + " " + activity);
        });

    var time = newMemberData[i].activity_time;
        $(activityTime).each(function() {
            $(activityTime[i]).text(time);
        });
 
     var avatar = newMemberData[i].image;  
        $(memberAvatar).each(function() {
            $(memberAvatar[i]).attr('src', avatar);
        }); 
        
    var actIcon = newMemberData[i].icon;
        $(activityIcon).each(function() {
            $(activityIcon[i]).attr('src', actIcon);
        });
        
 });
 
// Notification Alert Bar
    //Used jQuery again here for ease of syntax/use
 
 //Close Alert on Click
 $(".closebtn").click(function() {
     $(".alert").fadeOut("fast");
     $("#notifier").fadeOut("fast");
 });
 
 //Notification Menu toggle
 $(".icon-notify").click(function() {
     $(".notify-menu").fadeToggle("slow");
 });
     //Clicking on menu also closes it
     $(".notify-menu").click(function() {
         $(".notify-menu").fadeOut("slow");
     });


//Local Storage
    //Timezone Select menu
    var select = document.querySelector('.dropdown');
    var selectOption = select.options[select.selectedIndex];
    var lastSelected = localStorage.getItem('select');
    
    if (lastSelected) {
        select.value = lastSelected;
    }
    
    select.onchange = function () { //when it changes
       lastSelected = select.options[select.selectedIndex].value; 
       localStorage.setItem('select', lastSelected); //store the new value
    };
    
    //Settings Switches
  
        //Save Email Notification Setting
            $(function () {
              var checked = localStorage.getItem("email-pref");
            
              if (checked !== null) {
                  $("input[name='email-switch']").attr("checked", "checked");
              }
            });

            $("input[name='email-switch']").click(function () {
            
              if ($(this).is(":checked")) {
                  localStorage.setItem("email-pref", $(this).val());
              } else {
                  localStorage.removeItem("email-pref");
              }
            });
   
       //Save Profile Privacy Setting
           $(function () {
             var checked = localStorage.getItem("profile-pref");
           
             if (checked !== null) {
                 $("input[name='profile-switch']").attr("checked", "checked");
             }
           });

           $("input[name='profile-switch']").click(function () {
           
             if ($(this).is(":checked")) {
                 localStorage.setItem("profile-pref", $(this).val());
             } else {
                 localStorage.removeItem("profile-pref");
             }
           });
 
//Validate Message Form & Modals
function validateForm(event) {
    var messageUser = document.forms["messageForm"]["searchUser"].value;
    var messageContent = document.forms["messageForm"]["message"].value;
    if ( messageUser === null || messageUser === "" ) { //if the user field is empty
        $('#dialog-no-sent').fadeIn('slow').delay(2000).fadeOut('slow'); //show error message
        event.preventDefault(event); //stop page from reloading
    } else if ( messageContent === null || messageContent === "" ) { //if the message field is empty
        $('#dialog-no-sent').fadeIn('slow').delay(2000).fadeOut('slow'); //show error message
        event.preventDefault(event);
    } else {
        $('#dialog-sent').fadeIn('slow').delay(2000).fadeOut('slow'); //otherwise, show sent message
         $("input[name='searchUser']").val(""); //clears text
         $("textarea").val(""); //clears text
         event.preventDefault(event);
    }
}

$(".send-button").click(function(event) { 
    validateForm(event);
});


//Autocomplete user search text from JSON
    //Used jQuery-UI Autocomplete widget

$('#user-search').autocomplete({
        minLength: 1,
        source: function (request, response) {
           response($.map(newMemberData, function (value, key) {
                return {
                    label: value.name
                };
            }));
        
    },    
        focus: function(event, ui) {
            $('#search').val(ui.item.name);
            return false;
        },
        // Once a value in the drop down list is selected,
        select: function(event, ui) {
            // Put the name value into the input
            $('#user-search').val(ui.item.name);
        }
    });

