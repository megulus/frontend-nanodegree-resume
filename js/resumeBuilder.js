

var bio = {
    "name" : "Meg Dahlgren",
    "role" : "Front-End Developer-in-Training",
    "skills" : ['Python', 'R'],
    "contactInfo" : {
        "email" : "meg.dahlgren@gmail.com",
        "phone:" : "000-000-0000",
        "address" : "209 4th Street Apt 1\nJersey City, NJ 07302",
        "location" : "Jersey City, NJ",
        "github" : "github.com/megulus"
    },
    "picture" : "images/Meg_Carrickfergus_cropped_small.jpg",
    "welcomeMsg" : "Pithy tagline here...",
    "display" : function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        var formattedPicture = HTMLbioPic.replace("%data%", bio.picture);
        $("#header").prepend(formattedPicture);
        var formattedEmail = HTMLemail.replace("%data%", bio.contactInfo.email);
        $("#header").append(formattedEmail);
        $("#lets-connect").append(formattedEmail);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contactInfo.github);
        $("#header").append(formattedGithub);
        $("#lets-connect").append(formattedGithub);
        var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
        $("#header").append(formattedMsg);
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            for (x in bio.skills) {
                $("#skills").append(HTMLskills.replace("%data%", bio.skills[x]));
            }
        }
    }
};




var work = {
    "jobs" : [
        {
            "employer" : "Cypress Hills Local Development Corporation",
            "position" : "Project Manager",
            "dates" : "September 2014 - October 2015",
            "location" : "Brooklyn, NY",
            "description" : "Oversaw construction completion, lease-up and conversion to permanent financing of $14.3 million scattered-site affordable housing development in East New York."
        },
        {
            "employer" : "Bedford Stuyvesant Gateway Business Improvement District",
            "position" : "Associate",
            "dates" : "October 2011 - August 2012",
            "location" : "Brooklyn, NY",
            "description" : "Initiated and led BID's community outreach effort including starting a quarterly newsletter."
        },
        {
            "employer" : "Center for Genomic Sciences",
            "position" : "Data Analyst",
            "dates" : "November 2008 - April 2011",
            "location" : "Pittsburgh, PA",
            "description" : "Developed tools in Python and R for analysis and visualization of large genomic data sets."
        }

    ],
    "display": function () {
        for (job in work.jobs) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedPosition = HTMLworkTitle.replace("%data%", work.jobs[job].position);
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            var formattedEntry = formattedEmployer + formattedPosition;
            $(".work-entry:last").append(formattedEntry);
            $(".work-entry:last").append(formattedDates);
            $(".work-entry:last").append(formattedLocation);
            $(".work-entry:last").append(formattedDescription);
        }
    }
};


var education = {
    "schools": [
        {
            "name": "Pomona College",
            "city": "Claremont, CA",
            "major": ["Music", "German"],
            "degree": "B.A."
        },
        {
            "name": "University of California, Berkeley",
            "city": "Berkeley, CA",
            "major": ["Epidemiology"],
            "degree": "M.S."
        },
        {
            "name": "University of Pennsylvania",
            "city": "Philadelphia, PA",
            "major": ["City Planning"],
            "degree": "M.C.P."
        }
    ],
    "onlineSchools": [
        {
            "name": "Udacity",
            "program": "Front-End Web Developer Nanodegree",
            "courses": ["Intro to HTML and CSS", "Responsive Web Design Fundamentals", "JavaScript Basics"]
        }
    ],
    "displayEducation": function () {
        for (school in education.schools) {
            $("#education").append(HTMLschoolStart);
            var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
            $(".education-entry:last").append(formattedName);
            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].city);
            $(".education-entry:last").append(formattedLocation);
            if (education.schools[school].major.length > 1) {
                var additonalMajors = education.schools[school].major.slice(1);
                var formattedSingleMajor = HTMLschoolSingleMajor.replace("%data%", education.schools[school].major[0]);
                var formattedAddlMajor = '';
                for (major in additonalMajors) {
                    formattedAddlMajor += HTMLschoolAddlMajor.replace("%data%", additonalMajors[major]);

                }
                $(".education-entry:last").append(formattedSingleMajor+formattedAddlMajor);
            }
            else {
                formattedSingleMajor = HTMLschoolSingleMajor.replace("%data%", education.schools[school].major[0]);
                $(".education-entry:last").append(formattedSingleMajor);
            }
        }
    },
    "displayOnlineClasses": function () {
        $("#online-classes").append(HTMLonlineClassesStart);
        for (oschool in education.onlineSchools) {
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineSchools[oschool].name);
            var formattedProgram = HTMLonlineProgram.replace("%data%", education.onlineSchools[oschool].program);
            $(".online-school-entry:last").append(formattedOnlineSchool+formattedProgram);
            if (education.onlineSchools[oschool].courses.length > 1) {
                var additionalCourses = education.onlineSchools[oschool].courses.slice(1);
                var lastCourse = additionalCourses.pop()
                var formattedFirstCourse = HTMLonlineFirstCourse.replace("%data%", education.onlineSchools[oschool].courses[0]);
                var formattedAddl = '';
                for (course in additionalCourses) {
                    formattedAddl += HTMLonlineAddlCourse.replace("%data%", additionalCourses[course]);
                }
                var formattedLast = HTMLonlineLastCourse.replace("%data%", lastCourse);
                $(".online-school-entry:last").append(formattedFirstCourse+formattedAddl+formattedLast);
            }
            else {
                formattedSingleCourse = HTMLonlineSingleCourse.replace("%data%", education.onlineSchools[oschool].courses[0]);
                $(".online-school-entry:last").append(formattedSingleCourse);
            }
        }
    }
};




var projects = {
    "frontEndProjects" : [
        {
            "title" : "Portfolio",
            //"tools" : ["HTML", "CSS", "Bootstrap"],
            //"skills" : ["Responsive Design"],
            "dates" : "August 24 - September 19",
            "description" : "Built a responsive layout for a project portfolio. Tools used: HTML, CSS, Bootstrap.",
            "images" : ["http://dummyimage.com/300x200/bcbbbb/f8981c&text=Portfolio"]
        },
        {
            "title" : "Resume",
            //"tools" : ["JavaScript", "JQuery"],
            //"skills" : [],
            "dates" : "September 20 - October 18",
            "description" : "Used JavaScript to generate a resume from HTML and CSS templates. Tools used: JavaScript, JQuery.",
            "images" : ["http://dummyimage.com/300x200/bcbbbb/f8981c&text=Resume"]
        }
    ],
    "display" : function() {
        for (project in projects.frontEndProjects) {
            $("#projects").append(HTMLprojectStart);
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.frontEndProjects[project].title);
            $(".project-entry:last").append(formattedProjectTitle);
            var formattedDates = HTMLprojectDates.replace("%data%", projects.frontEndProjects[project].dates);
            $(".project-entry:last").append(formattedDates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.frontEndProjects[project].description);
            $(".project-entry:last").append(formattedDescription);
            if (projects.frontEndProjects[project].images.length > 0) {
                for (image in projects.frontEndProjects[project].images) {
                    var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.frontEndProjects[project].images[image]);
                    $(".project-entry:last").append(formattedProjectImage);
                }
            }
        }
    }
};

bio.display();
work.display();
projects.display();
education.displayEducation();
education.displayOnlineClasses();
// display map:
$("#mapDiv").append(googleMap);









/* Internationalizing names - this is just for the quiz


function inName() {
    var nameArray = $("#name").text().trim().split(' ');
    var newFirstName = nameArray[0].slice(0,1).toUpperCase() + nameArray[0].slice(1).toLowerCase();
    var newLastName = nameArray[1].toUpperCase();
    var internationalizedName = newFirstName + ' ' + newLastName;
    return internationalizedName;
}

var name = $("#name").text();
$("#main").append(internationalizeButton);

*/




