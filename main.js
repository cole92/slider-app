import Course from "./course.js";
import Person from "./person.js";

// Pristup elementima u DOM-u
const fullName = document.getElementById('fullName');
const title = document.getElementById('title');

// Kreiranje osobe i popunjavanje informacija
const marko = new Person('Marko', 'Radosavljevic', 'Diplomirani inzenjer elektrotehnike', 35, 'green');
fullName.innerHTML = marko.fullName();
title.innerHTML = marko.education;

// Prazan niz za kurseve
let arrayOfCourses = [];

// Asinhrona funkcija za povlacenje podataka
async function fetchData() {
    const response = await fetch('https://mocki.io/v1/9afbdb67-2e31-4f2b-a2fc-7d5c22ceaaf4');
    const data = await response.json();

    data.data.forEach(item => {
        const course = new Course();
        course.setName(item.title);
        course.setData(item.post);
        course.setClassIcon(item.faclass);
        arrayOfCourses.push(course);
    });

    // Kada su podaci ucitani, generišemo HTML
    let arrayOfDivs = []; 

    // Kreiranje HTML za svaki kurs
    for (let i = 0; i < arrayOfCourses.length; i++) {
        arrayOfDivs.push(`
            <div class="col-sm-4 text-center serviceBox">
                <span class="fa-stack fa-3x">
                    <i class="fa fa-circle fa-stack-2x icon-background1"></i>
                    <i class="fa ${arrayOfCourses[i].getClassIcon()} fa-stack-1x fa-inverse"></i>
                </span>
                <h4>${arrayOfCourses[i].getName()}</h4>
                <p>${arrayOfCourses[i].getData()}</p>
            </div>
        `);
    }

    // Grupisanje kurseva po 3 i dodavanje u slajdove
    for (let i = 0; i < arrayOfDivs.length; i += 3) {
        let activeClass = (i === 0) ? 'active' : ''; // Prvi slajd je aktivan
        let newSlide = `
            <div class="carousel-item ${activeClass}">
                <div class="row">
                    ${arrayOfDivs[i] || ''} 
                    ${arrayOfDivs[i + 1] || ''} 
                    ${arrayOfDivs[i + 2] || ''}
                </div>
            </div>
        `;
        
        // Append generisanog HTML-a u Carousel
        document.querySelector('.carousel-inner').innerHTML += newSlide;
    }
}
// Pozivanje funkcije za povlacenje podataka
fetchData();

// Inicijalizacija Bootstrap Carousel-a
const carouselElement = document.querySelector('#actionsCarousel');
const carousel = new bootstrap.Carousel(carouselElement, {
    interval: 5000, // Automatski prelazak svakih 3 sekunde
    ride: 'carousel' // Automatski pokrece Carousel
});
