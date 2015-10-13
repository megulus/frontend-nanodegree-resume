

var bio = {
    "name" : "Meg Dahlgren",
    "role" : "Experienced Grumper",
    "skills" : ['Python', 'R', 'grumping', 'poking', 'nagging'],
    "contactInfo" : {
        "email" : "meg.dahlgren@gmail.com",
        "phone:" : "000-000-0000",
        "address" : "209 4th Street Apt 1\nJersey City, NJ 07302",
        "github: " : "github.com/megulus"
    },
    "picture" : "picture URL here",
    "welcomeMsg" : "I am The Meg and I am GRUMPY!",
    "display" : function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
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
    "schools" : [
        {
            "name" : "Pomona College",
            "city" : "Claremont, CA",
            "major" : ["Music", "German"],
            "degree" : "B.A."
        },
        {
            "name" : "University of California, Berkeley",
            "city" : "Berkeley, CA",
            "major" : "Epidemiology",
            "degree" : "M.S."
        },
        {
            "name" : "University of Pennsylvania",
            "city" : "Philadelphia, PA",
            "major" : "City Planning",
            "degree" : "M.C.P."
        }
    ],
    "onlineCourses" : [
        {
            "name" : "Udacity Front-End Web Developer Nanodegree",
            "courses" : ["Intro to HTML and CSS", "Responsive Web Design Fundamentals", "JavaScript Basics"]
        }
    ],
    "displayEducation" : function() {
        for (school in education.schools) {
            $("#education").append(HTMLschoolStart);
            var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
            $(".education-entry:last").append(formattedName);
            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].city);
            $(".education-entry:last").append(formattedLocation);
            var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
            $(".education-entry:last").append(formattedMajor);
            if (education.schools[school].major > 1) {
                for (major in education.schools[school].major) {
                    formattedMajor += HTMLschoolMajor.replace("%data%", education.schools[school].major);
                }
                $(".education-entry:last").append(formattedMajor);
            }

        if (education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            for (school in education.onlineCourses) {
                $("#education").append(HTMLschoolStart);
                var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[school].name);
                $(".education-entry:last").append(formattedOnlineSchool);
                if (education.onlineCourses[school].courses.length > 0) {
                    for (course in education.onlineCourses[school].courses) {
                        var formattedCourse = HTMLonlineTitle.replace("%data%", education.onlineCourses[school].courses[course]);
                        $(".education-entry:last").append(formattedCourse);
                    }
                }
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




