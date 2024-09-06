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