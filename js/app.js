/* Refactoring helper.js and resumeBuilder.js
 * with separation of concerns - this is a project
 * for the Udacity JavaScript Design Patterns course
 */

$(function () {

    var model = {

        init: function () {

            this.bio = {

                "name": "Meg Dahlgren",
                "role": "Front-End Developer",
                "skills": ['Python', 'R', 'JavaScript'],
                "contactInfo": {
                    "email": "meg.dahlgren@gmail.com",
                    "phone:": "000-000-0000",
                    "address": "209 4th Street Apt 1\nJersey City, NJ 07302",
                    "location": "Jersey City, NJ",
                    "github": "github.com/megulus"
                },
                "picture": "images/Meg_Carrickfergus_cropped_small.jpg",
                "welcomeMsg": "Pithy tagline here..."
            };

            this.work = {

                "jobs": [
                    {
                        "employer": "Cypress Hills Local Development Corporation",
                        "position": "Project Manager",
                        "dates": "September 2014 - October 2015",
                        "location": "Brooklyn, NY",
                        "description": "Oversaw construction completion, lease-up and conversion to permanent financing of $14.3 million scattered-site affordable housing development in East New York."
                    },
                    {
                        "employer": "Bedford Stuyvesant Gateway Business Improvement District",
                        "position": "Associate",
                        "dates": "October 2011 - August 2012",
                        "location": "Brooklyn, NY",
                        "description": "Initiated and led BID's community outreach effort including starting a quarterly newsletter."
                    },
                    {
                        "employer": "Center for Genomic Sciences",
                        "position": "Data Analyst",
                        "dates": "November 2008 - April 2011",
                        "location": "Pittsburgh, PA",
                        "description": "Developed tools in Python and R for analysis and visualization of large genomic data sets."
                    }

                ]
            };

            this.education = {

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
                        "courses": ["Intro to HTML and CSS", "Responsive Web Design Fundamentals", "Responsive Images", "JavaScript Basics", "Intro to JQuery", "Object-Oriented JavaScript", "JavaScript Design Patterns", "Website Performance Optimization", "Browser Rendering Optimization"]
                    }
                ]
            };

            this.projects = {

                "frontEndProjects": [
                    {
                        "title": "Portfolio",
                        //"tools" : ["HTML", "CSS", "Bootstrap"],
                        //"skills" : ["Responsive Design"],
                        "dates": "August 24 - September 19",
                        "description": "Built a responsive layout for a project portfolio. Tools used: HTML, CSS, Bootstrap.",
                        "images": ["http://dummyimage.com/300x200/bcbbbb/f8981c&text=Portfolio"]
                    },
                    {
                        "title": "Resume",
                        //"tools" : ["JavaScript", "JQuery"],
                        //"skills" : [],
                        "dates": "September 20 - October 18",
                        "description": "Used JavaScript to generate a resume from HTML and CSS templates. Tools used: JavaScript, JQuery.",
                        "images": ["http://dummyimage.com/300x200/bcbbbb/f8981c&text=Resume"]
                    }
                ]
            };

        }


    };

    var octopus = {

        init: function () {
            model.init();
            viewResume.init();
            viewMap.init();
        },

        name: function () {
            return model.bio.name;
        },

        picture: function () {
            return model.bio.picture;
        },

        role: function () {
            return model.bio.role;
        },

        email: function () {
            return model.bio.contactInfo.email;
        },

        address: function () {
            return model.bio.contactInfo.address;
        },

        location: function () {
            return model.bio.contactInfo.location;
        },

        github: function () {
            return model.bio.contactInfo.github;
        },

        jobs: function () {
            return model.work.jobs;
        },

        schools: function () {
            return model.education.schools;
        },

        onlineSchools: function () {
            return model.education.onlineSchools;
        },

        frontEndProjects: function () {
            return model.projects.frontEndProjects;
        },

        message: function () {
            return model.bio.welcomeMsg;
        },

        skills: function () {
            return model.bio.skills;
        }


    };

    var viewResume = {

        init: function () {

            this.$header = $('#header');
            this.$topContacts = $('#topContacts');
            this.$footerContacts = $('#footerContacts');

            this.$workExperience = $('#workExperience');

            this.$projects = $('#projects');

            this.$education = $('#education');


            this.$onlineClasses = $('#online-classes');
            this.$lastOnlineEntry = $('.online-school-entry:last');


            this.renderHeader();
            this.renderWork();
            this.renderEducation();
            this.renderProjects();
            this.renderOnlineCourses();
            this.postRender();
        },

        renderHeader: function () {

            this.HTMLheaderName = '<h1 id="name">%data%</h1>';
            this.HTMLheaderRole = '<span class="white-text">%data%</span><hr/>';
            //var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
            this.HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
            this.HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
            this.HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';
            this.HTMLbioPic = '<img src="%data%" class="biopic">';
            this.HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

            this.HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
            this.HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

            var formattedName = this.HTMLheaderName.replace("%data%", octopus.name());
            var formattedRole = this.HTMLheaderRole.replace("%data%", octopus.role());
            var formattedPicture = this.HTMLbioPic.replace("%data%", octopus.picture());
            var formattedEmail = this.HTMLemail.replace("%data%", octopus.email());
            var formattedGithub = this.HTMLgithub.replace("%data%", octopus.github());
            var formattedLocation = this.HTMLlocation.replace("%data%", octopus.location());
            var formattedMsg = this.HTMLwelcomeMsg.replace("%data%", octopus.message());

            this.$header.prepend(formattedRole);
            this.$header.prepend(formattedName);
            this.$header.prepend(formattedPicture);
            this.$header.append(formattedMsg);
            this.$topContacts.append(formattedEmail);
            this.$footerContacts.append(formattedEmail);
            this.$topContacts.append(formattedGithub);
            this.$footerContacts.append(formattedGithub);
            this.$topContacts.append(formattedLocation);
            this.$footerContacts.append(formattedLocation);
            var that = this;
            if (octopus.skills().length != 0) {
                that.$header.append(that.HTMLskillsStart);
                that.$skills = $('#skills');
                octopus.skills().forEach(function (skill) {
                    var formattedSkill = that.HTMLskills.replace("%data%", skill);
                    that.$skills.append(formattedSkill);
                });
            }
        },

        renderWork: function () {

            this.HTMLworkStart = '<div class="work-entry"></div>';
            this.HTMLworkEmployer = '<a href="#">%data%';
            this.HTMLworkTitle = ' - %data%</a>';
            this.HTMLworkDates = '<div class="date-text">%data%</div>';
            this.HTMLworkLocation = '<div class="location-text">%data%</div>';
            this.HTMLworkDescription = '<p><br>%data%</p>';

            var that = this;

            if (octopus.jobs().length != 0) {
                //that.$workExperience = $('#workExperience');
                //that.$lastWorkEntry = $('.work-entry:last');
                that.$workExperience.append(that.HTMLworkStart);
                that.$lastWorkEntry = $('.work-entry:last');
                octopus.jobs().forEach(function (job) {
                    var formattedEmployer = that.HTMLworkEmployer.replace("%data%", job.employer);
                    var formattedPosition = that.HTMLworkTitle.replace("%data%", job.position);
                    var formattedDates = that.HTMLworkDates.replace("%data%", job.dates);
                    var formattedLocation = that.HTMLworkLocation.replace("%data%", job.location);
                    var formattedDesc = that.HTMLworkDescription.replace("%data%", job.description);
                    var formattedEntry = formattedEmployer + formattedPosition;
                    that.$lastWorkEntry.append(formattedEntry);
                    that.$lastWorkEntry.append(formattedDates);
                    that.$lastWorkEntry.append(formattedLocation);
                    that.$lastWorkEntry.append(formattedDesc);
                });
            }
        },

        renderEducation: function () {

            this.HTMLschoolStart = '<div class="education-entry"></div>';
            this.HTMLschoolName = '<a href="#">%data%';
            //var HTMLschoolDegree = ' -- %data%</a>';
            //var HTMLschoolDates = '<div class="date-text">%data%</div>';
            this.HTMLschoolLocation = '<div class="location-text">%data%</div>';
            this.HTMLschoolSingleMajor = '<p>Major: %data%';
            this.HTMLschoolAddlMajor = ',  %data%</p>';

            var that = this;

            if (octopus.schools().length != 0) {
                that.$education.append(that.HTMLschoolStart);
                var $lastEdEntry = $('.education-entry:last');
                octopus.schools().forEach(function (school) {
                    var formattedName = that.HTMLschoolName.replace("%data%", school.name);
                    var formattedLoc = that.HTMLschoolLocation.replace("%data%", school.city);
                    $lastEdEntry.append(formattedName);
                    $lastEdEntry.append(formattedLoc);
                    if (school.major.length > 1) {
                        var additionalMajors = school.major.slice(1);
                        var formattedSingleMajor = that.HTMLschoolSingleMajor.replace("%data%", school.major[0]);
                        var formattedAddlMajor = '';
                        for (var i = 0; i < additionalMajors.length; i++) {
                            formattedAddlMajor += that.HTMLschoolAddlMajor.replace("%data%", additionalMajors[i]);
                        }
                        $lastEdEntry.append(formattedSingleMajor + formattedAddlMajor);
                    } else {
                        formattedSingleMajor = that.HTMLschoolSingleMajor.replace("%data%", school.major[0]);
                        $lastEdEntry.append(formattedSingleMajor);
                    }
                });
            }
        },

        renderProjects: function () {

            this.HTMLprojectStart = '<div class="project-entry"></div>';
            this.HTMLprojectTitle = '<a href="#">%data%</a>';
            this.HTMLprojectDates = '<div class="date-text">%data%</div>';
            this.HTMLprojectDesc = '<p><br>%data%</p>';
            this.HTMLprojectImage = '<img src="%data%">';

            var that = this;

            if (octopus.frontEndProjects().length != 0) {
                that.$projects.append(that.HTMLprojectStart);
                var $lastProjEntry = $('.project-entry:last');
                octopus.frontEndProjects().forEach(function (project) {
                    var formattedTitle = that.HTMLprojectTitle.replace("%data%", project.title);
                    var formattedDates = that.HTMLprojectDates.replace("%data%", project.dates);
                    var formattedDesc = that.HTMLprojectDesc.replace("%data%", project.description);
                    $lastProjEntry.append(formattedTitle);
                    $lastProjEntry.append(formattedDates);
                    $lastProjEntry.append(formattedDesc);
                    if (project.images.length > 0) {
                        project.images.forEach(function (imagePath) {
                            var formmattedImage = that.HTMLprojectImage.replace("%data%", imagePath);
                            $lastProjEntry.append(formmattedImage);
                        })
                    }
                });
            }
        },

        renderOnlineCourses: function () {
            this.HTMLonlineClassesStart = '<div class="online-school-entry"></div>';
            this.HTMLonlineSchool = '<a href="#">%data%';
            this.HTMLonlineProgram = '%data%</a>';
            this.HTMLonlineSingleCourse = '<p>Course: %data%</p>';
            this.HTMLonlineFirstCourse = '<p>Courses: %data%';
            this.HTMLonlineAddlCourse = ', %data%';
            this.HTMLonlineLastCourse = ',  %data%</p>';
            //var HTMLonlineDates = '<div class="date-text">%data%</div>';
            //var HTMLonlineURL = '<br><a href="#">%data%</a>';

            var that = this;

            if (octopus.onlineSchools().length != 0) {
                that.$onlineClasses.append(that.HTMLonlineClassesStart);
                var $lastOnlineEntry = $('.online-school-entry:last');
                octopus.onlineSchools().forEach(function(school) {
                    var formattedSchool = that.HTMLonlineSchool.replace("%data%", school.name);
                    var formattedProgram = that.HTMLonlineProgram.replace("%data%", school.program);
                    $lastOnlineEntry.append(formattedSchool);
                    $lastOnlineEntry.append(formattedProgram);
                    if (school.courses.length > 1) {
                        var additionalCourses = school.courses.slice(1);
                        var lastCourse = additionalCourses.pop();
                        var formattedFirst = that.HTMLonlineFirstCourse.replace("%data%", additionalCourses[0]);
                        var formattedAddl = '';
                        additionalCourses.forEach(function(addl) {
                            formattedAddl += that.HTMLonlineAddlCourse.replace("%data%", addl);
                        });
                        var formattedLast = that.HTMLonlineLastCourse.replace("%data%", lastCourse);
                        $lastOnlineEntry.append(formattedFirst + formattedAddl + formattedLast);
                    } else {
                        var formattedSingleCourse = that.HTMLonlineSingleCourse.replace("%data%", school.courses[0]);
                        $lastOnlineEntry.append(formattedSingleCourse);
                    }

                })
            }

        },

        postRender: function () {
            if (document.getElementsByClassName('flex-item').length === 0
            ) {
                document.getElementById('topContacts').style.display = 'none';
            }
            if (document.getElementsByTagName('h1').length === 0) {
                document.getElementById('header').style.display = 'none';
            }
            if (document.getElementsByClassName('work-entry').length === 0) {
                document.getElementById('workExperience').style.backgroundColor = '#000';
            }
            if (document.getElementsByClassName('project-entry').length === 0) {
                document.getElementById('projects').style.backgroundColor = '#000';
            }
            if (document.getElementsByClassName('education-entry').length === 0) {
                document.getElementById('education').style.backgroundColor = '#000';
            }
            if (document.getElementsByClassName('flex-item').length === 0) {
                document.getElementById('lets-connect').style.backgroundColor = '#000';
            }
            if (document.getElementById('map') === null) {
                document.getElementById('mapDiv').style.backgroundColor = '#000';
            }
        }

    };

    var viewMap = {

        init: function () {

            this.googleMap = '<div id="map"></div>';
            this.$mapDiv = $('#mapDiv');
            this.locations = [];
            this.mapOptions = {
                disableDefaultUI: true
            };
            this.render();
        },

        render: function () {
            //var locations = [];
            this.$mapDiv.append(this.googleMap);
            this.map = new google.maps.Map(document.querySelector('#map'), this.mapOptions);
            window.mapBounds = new google.maps.LatLngBounds();
            this.locations.push(octopus.location());
            var that = this;
            octopus.schools().forEach(function (school) {
                that.locations.push(school.city);
            });
            octopus.jobs().forEach(function (job) {
                that.locations.push(job.location);
            });
            this.pinPoster();
            window.addEventListener('resize', function (e) {
                that.map.fitBounds(window.mapBounds);
            });
        },

        pinPoster: function () {
            var service = new google.maps.places.PlacesService(this.map);
            for (var place in this.locations) {
                var request = {
                    query: this.locations[place]
                };
                service.textSearch(request, this.callback);
            }
        },

        callback: function (results, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                viewMap.createMapMarker(results[0]);
            }
        },

        createMapMarker: function (placeData) {
            var lat = placeData.geometry.location.lat();
            var lon = placeData.geometry.location.lng();
            var name = placeData.formatted_address;
            var bounds = window.mapBounds;

            var marker = new google.maps.Marker({
                map: this.map,
                position: placeData.geometry.location,
                title: name
            });

            var infoWindow = new google.maps.InfoWindow({
                content: name
            });

            google.maps.event.addListener(marker, 'click', function () {
                infoWindow.open(this.map, marker);
            });

            bounds.extend(new google.maps.LatLng(lat, lon));
            this.map.fitBounds(bounds);
            this.map.setCenter(bounds.getCenter());
        }


    };

    octopus.init();


});