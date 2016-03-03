var courses = require('./courseData') .courses;
var authors = require('./authorData').authors;

var routes = {
    "getAuthors": {
        url: "/getAuthors",
        method: "GET",
        handler: function (xhr, doneFn, language) {
            let retVal = authors;
            doneFn(200, retVal);
        }
    },
    "getCourses": {
        url: "/getCourses",
        method: "GET",
        handler: function (xhr, doneFn) {
            let retVal = courses;
            doneFn(200, retVal);
        }
    }
};

export default routes;
