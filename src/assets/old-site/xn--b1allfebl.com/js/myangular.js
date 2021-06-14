var app = angular.module('myApp', [])

app.controller('eduCtrl', function($scope) {
    $scope.sortType     = 'name'; // set the default sort type
    $scope.sortReverse  = false;  // set the default sort order
    $scope.searchFish   = '';     // set the default search/filter term
  
  // create the list of sushi rolls 
    $scope.education_data = { education: [
    //var education1 = [
    {
        year: "2016",
        univer_name: "The Hong Kong University of Science and Technology",
        univer_logo: "img/univer_logo_HK.png",
        link : "https://www.coursera.org/learn/hybrid-mobile-development",
        univer_logo_id: "",
        univer_logo_width: 60,
        course: "Server-side Development with NodeJS. Express, MongoDB",
        spec: "Full Stack Web Development Specialization"
    },
    {
        year: "2016",
        univer_name: "The Hong Kong University of Science and Technology",
        univer_logo: "img/univer_logo_HK.png",
        link : "https://www.coursera.org/learn/hybrid-mobile-development",
        univer_logo_id: "",
        univer_logo_width: 60,
        course: "Multiplatform Mobile App Development with Web Technologies. Ionic,  AngularJS, Cordova",
        spec: "Full Stack Web Development Specialization"
    },
    {
        year:"2016",
        univer_name:"University of Alberta",
        univer_logo: "img/univer_logo_alberta.png",
        univer_logo_id: "alberta",
        univer_logo_width: 50,
        course:"Client Needs and Software Requirements",
        link : "https://www.coursera.org/learn/software-processes-and-agile-practices",
        spec:"The Software Product Management Specialization"
    },
    {
        year:"2015",
        univer_name:"University of Alberta",
        univer_logo: "img/univer_logo_alberta.png",
        univer_logo_id: "alberta",
        univer_logo_width: 50,
        course:"Software Processes and Agile Practices",
        link : "https://www.coursera.org/learn/software-processes-and-agile-practices",
        spec:"The Software Product Management Specialization"
    },
    {
        year: "2015",
        univer_name: "The Hong Kong University of Science and Technology",
        univer_logo: "img/univer_logo_HK.png",
        link : "https://www.coursera.org/learn/angular-js/",
        univer_logo_id: "",
        univer_logo_width: 60,
        course: "Front-End JavaScript Frameworks: AngularJS",
        spec: "Full Stack Web Development Specialization"
    },
    {
        year: "2015",
        univer_name: "The Hong Kong University of Science and Technology",
        univer_logo: "img/univer_logo_HK.png",
        link : "https://www.coursera.org/learn/web-frameworks/",
        univer_logo_id: "",
        univer_logo_width: 60,
        course: "Front-End Web UI Frameworks and Tools. Bootstrap CSS, JS",
        spec: "Full Stack Web Development Specialization"
    },
    {
        year: "2015",
        univer_name: "The Hong Kong University of Science and Technology",
        univer_logo: "img/univer_logo_HK.png",
        link : "https://www.coursera.org/learn/html-css-javascript",
        univer_logo_id: "",
        univer_logo_width: 60,
        course: "HTML, CSS and JavaScript for Beginners",
        spec: "Full Stack Web Development Specialization"
    },  
    {
        year: "2015",
        univer_name: "University of London",
        univer_logo: "img/univer_logo_london.png",
        univer_logo_id: "",
        link : "https://www.coursera.org/learn/meteor-development/",
        univer_logo_width: 60,
        course: "Introduction to Meteor.js Development"
    },
    {
        year: "2015",
        univer_name: "University of London",
        univer_logo: "img/univer_logo_london.png",
        univer_logo_id: "",
        link : "https://www.coursera.org/learn/responsive-web-design/",
        univer_logo_width: 60,
        course: "Responsive Web Design. Handlebars Templates"
    },
    {
        year: "2015",
        univer_name: "University of London",
        univer_logo: "img/univer_logo_london.png",
        link : "https://www.coursera.org/learn/website-coding",
        univer_logo_id: "",
        univer_logo_width: 60,
        course: "Responsive Website Basics: Code with HTML, CSS, and JavaScript"
    },

    {
        year: "2015",
        univer_name: "Duke University",
        univer_logo: "img/univer_logo_duke.png",
        link : "https://www.coursera.org/learn/duke-programming-web",
        univer_logo_id: "",
        univer_logo_width: 60,
        course: "Programming and the Web for Beginners"
    },
    {
        year: "2015",
        univer_name: "University of California, San Diego",
        univer_logo: "img/univer_logo_ucsd.png",
        link : "https://www.coursera.org/learn/object-oriented-java/",
        univer_logo_id: "",
        univer_logo_width: 70,
        course: "Object Oriented Programming in Java"
    },
    {
        year: "2015",
        univer_name: "Rice University",
        univer_logo: "img/univer_logo_rice.png",
        link : "https://www.coursera.org/course/interactivepython2/",
        univer_logo_id: "",
        univer_logo_width: 60,
        course: "Interactive Programming in Python II"
    },
    {
        year: "2015",
        univer_name: "Rice University",
        univer_logo: "img/univer_logo_rice.png",
        link : "https://www.coursera.org/course/interactivepython1/",
        univer_logo_id: "",
        univer_logo_width: 60,
        course: "Interactive Programming in Python I"
    },
    {
        year: "2015",
        univer_name: "University of Michigan",
        univer_logo: "img/univer_logo_michigan.png",
        link : "https://www.coursera.org/maestro/api/certificate/get_certificate?course_id=972508",
        univer_logo_id: "",
        univer_logo_width: 40,
        course: "Programming for Everybody (Python)"
    },
    {
        year: "2015",
        univer_name: "CISCO Academy",
        univer_logo: "img/univer_logo_cisco.png",
        link : "",
        univer_logo_id: "",
        univer_logo_width: 90,
        course: "CCNA Routing & Switching"
    },
    {
        year: "2014",
        univer_name: "CA Step",
        //univer_logo: "",
        link : "",
        univer_logo_id: "",
        univer_logo_width: 60,
        course: "Software Developing Course"
    },
    {
        year: "2012",
        univer_name: "Watchguard Network Systems",
        univer_logo: "img/univer_logo_wg.png",
        link : "",
        univer_logo_id: "",
        univer_logo_width: 60,
        course: "Configuration Course"
    },
    {
        year: "1998",
        univer_name: "Odessa Polytechnic University",
        univer_logo: "",
        link : "",
        univer_logo_id: "",
        univer_logo_width: 60,
        course: "Electronic Equipment Construction"
    }
]};
    
    $scope.filtName = '';
    $scope.isSelected = false;
    
    $scope.select = function(e){
        $scope.isSelected = !$scope.isSelected;
        console.log('$scope.isSelected='+$scope.isSelected);
        name = $(e.target).html();
        if($scope.isSelected)
            {
                $scope.filtName = name;        
            }
        else{
            $scope.filtName = '';
            }
        
        
        console.log($scope.filtName);
    };
    

    
    
});


