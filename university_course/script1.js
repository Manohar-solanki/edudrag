const courses = [
    { course: "Computer Science", link: "https://example.com/computer-science" },
    { course: "Physics", link: "https://example.com/physics" },
    { course: "Mathematics", link: "https://example.com/mathematics" },
    { course: "Engineering", link: "https://example.com/engineering" },
    { course: "Economics", link: "https://example.com/economics" },
    { course: "Mechanical Engineering", link: "https://example.com/mechanical-engineering" },
    { course: "Chemistry", link: "https://example.com/chemistry" },
    { course: "Biology", link: "https://example.com/biology" },
    { course: "Political Science", link: "https://example.com/political-science" },
    { course: "Business Administration", link: "https://example.com/business-administration" },
    { course: "Electrical Engineering", link: "https://example.com/electrical-engineering" },
    { course: "Medicine", link: "https://example.com/medicine" },
    { course: "Psychology", link: "https://example.com/psychology" },
    { course: "History", link: "https://example.com/history" },
    { course: "Civil Engineering", link: "https://example.com/civil-engineering" },
    { course: "Chemical Engineering", link: "https://example.com/chemical-engineering" },
    { course: "English Literature", link: "https://example.com/english-literature" },
    { course: "Environmental Science", link: "https://example.com/environmental-science" },
    { course: "Information Technology", link: "https://example.com/information-technology" },
    { course: "Nursing", link: "https://example.com/nursing" },
    { course: "Art History", link: "https://example.com/art-history" },
    { course: "Architecture", link: "https://example.com/architecture" },
    { course: "Sociology", link: "https://example.com/sociology" },
    { course: "Finance", link: "https://example.com/finance" },
    { course: "Anthropology", link: "https://example.com/anthropology" },
    { course: "Geology", link: "https://example.com/geology" },
    { course: "Linguistics", link: "https://example.com/linguistics" },
    { course: "Philosophy", link: "https://example.com/philosophy" },
    { course: "Biotechnology", link: "https://example.com/biotechnology" },
    { course: "Statistics", link: "https://example.com/statistics" },
    { course: "Theater Arts", link: "https://example.com/theater-arts" },
    { course: "Agriculture", link: "https://example.com/agriculture" },
    { course: "Veterinary Science", link: "https://example.com/veterinary-science" },
    { course: "Fine Arts", link: "https://example.com/fine-arts" },
    { course: "Education", link: "https://example.com/education" },
    { course: "Communications", link: "https://example.com/communications" },
    { course: "Public Health", link: "https://example.com/public-health" },
    { course: "Information Systems", link: "https://example.com/information-systems" },
    { course: "International Relations", link: "https://example.com/international-relations" },
    { course: "Astronomy", link: "https://example.com/astronomy" },
    { course: "Oceanography", link: "https://example.com/oceanography" },
    { course: "Music", link: "https://example.com/music" },
    { course: "Religious Studies", link: "https://example.com/religious-studies" },
    { course: "Drama", link: "https://example.com/drama" },
    { course: "Dentistry", link: "https://example.com/dentistry" },
    { course: "Nutrition", link: "https://example.com/nutrition" },
];


const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

function search() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredCourses = courses.filter(course => {
        return course.course.toLowerCase().includes(searchTerm);
    });

    displayResults(filteredCourses);
}

function displayResults(results) {
    searchResults.innerHTML = '';
    if (results.length === 0) {
        searchResults.innerHTML = '<p>No results found.</p>';
    } else {
        results.forEach(course => {
            const link = document.createElement('a');
            link.href = `university_${course.course.replace(/\s+/g, '_')}.html`;
            link.textContent = course.course;
            link.classList.add('universityLink');
            searchResults.appendChild(link);
            searchResults.appendChild(document.createElement('br'));
        });
    }
}

searchInput.addEventListener('input', search);
