import Course from "./course.js";
import Person from "./person.js";

const fullName = document.getElementById('fullName');
const title = document.getElementById('title');
const slides1 = document.getElementById('slides1');
const slides2 = document.getElementById('slides2');
const slides3 = document.getElementById('slides3');

const marko = new Person('Marko', 'Radosavljevic', 'Diplomirani inzenjer elektrotehnike', 35, 'green')

fullName.innerHTML = marko.fullName();
title.innerHTML = marko.education;

let arrayOfCourses = [];

async function fetchData() {
    const response = await fetch ('https://mocki.io/v1/9afbdb67-2e31-4f2b-a2fc-7d5c22ceaaf4');
    
    const data = await response.json();
    data.data.forEach(item => {
        const course = new Course();
        course.setName(item.title);
        course.setData(item.post);
        course.setClassIcon(item.faclass);

        arrayOfCourses.push(course)
    });
}