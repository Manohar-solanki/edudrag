document.addEventListener("DOMContentLoaded", function () {
const courses = [
    { university: "Lovely Professional University(LPU)", link: "./university_course/Lovely_Professional_University.html" },
    { university: "University B", link: "https://example.com/lpu" },
    { university: "University A", link: "https://example.com/lpu" },
    { university: "Indian Institute of Technology Bombay", link: "https://example.com/lpu" },
    { university: "Indian Institute of Science", link: "https://example.com/lpu" },
    { university: "University of Delhi", link: "https://example.com/lpu" },
    { university: "Jawaharlal Nehru University", link: "https://example.com/lpu" },
    { university: "Anna University", link: "https://example.com/lpu" , link: "https://example.com/lpu" },
    { university: "Indian Institute of Technology Madras", link: "https://example.com/lpu" },
    { university: "University of Mumbai", link: "https://example.com/lpu" },
    { university: "Indian Statistical Institute", link: "https://example.com/lpu" },
    { university: "Tata Institute of Fundamental Research", link: "https://example.com/lpu" },
    { university: "Indian Institute of Management Ahmedabad", link: "https://example.com/lpu" },
    { university: "Indian Institute of Technology Delhi", link: "https://example.com/lpu" },
    { university: "University of Calcutta", link: "https://example.com/lpu" },
    { university: "Banaras Hindu University", link: "https://example.com/lpu" },
    { university: "Indian Institute of Technology Kharagpur", link: "https://example.com/lpu" },
    { university: "University of Madras", link: "https://example.com/lpu" },
    { university: "Indian Institute of Technology Kanpur", link: "https://example.com/lpu" },
    { university: "University of Pune", link: "https://example.com/lpu" },
    { university: "Indian Institute of Science Education and Research Pune", link: "https://example.com/lpu" },
    { university: "Delhi Technological University", link: "https://example.com/lpu" },
    { university: "Indian Institute of Technology Roorkee", link: "https://example.com/lpu" },
    { university: "University of Hyderabad", link: "https://example.com/lpu" },
    { university: "Indian Institute of Technology Guwahati", link: "https://example.com/lpu" },
    { university: "Osmania University", link: "https://example.com/lpu" },
    { university: "Indian Institute of Management Bangalore", link: "https://example.com/lpu" },
    { university: "Indian Institute of Science Education and Research Mohali"},
    { university: "Savitribai Phule Pune University", link: "https://example.com/lpu" },
    { university: "Indian Institute of Technology Indore", link: "https://example.com/lpu" },
    { university: "University of Calicut", link: "https://example.com/lpu" },
    { university: "Indian Institute of Management Calcutta", link: "https://example.com/lpu" },
    { university: "Indian Institute of Technology Mandi", link: "https://example.com/lpu" },
    { university: "University of Allahabad", link: "https://example.com/lpu" },
    { university: "Indian Institute of Science Education and Research Kolkata", link: "https://example.com/lpu" },
    { university: "Visva-Bharati University", link: "https://example.com/lpu" },
    { university: "Indian Institute of Technology (BHU) Varanasi", link: "https://example.com/lpu" },
    { university: "University of Kerala", link: "https://example.com/lpu" },
    { university: "Indian Institute of Management Lucknow", link: "https://example.com/lpu" },
    { university: "Indian Institute of Technology Jodhpur", link: "https://example.com/lpu" },
    { university: "University of Mysore", link: "https://example.com/lpu" },
    { university: "Indian Institute of Science Education and Research Bhopal", link: "https://example.com/lpu" },
    { university: "Indian Institute of Technology Patna", link: "https://example.com/lpu" },
    { university: "University of Jammu", link: "https://example.com/lpu" },
    { university: "Indian Institute of Management Indore", link: "https://example.com/lpu" },
    { university: "Indian Institute of Technology Gandhinagar", link: "https://example.com/lpu" },
    { university: "University of Kashmir", link: "https://example.com/lpu" },
    { university: "Indian Institute of Science Education and Research Thiruvananthapuram", link: "https://example.com/lpu" },
    { university: "Indian Institute of Technology Bhubaneswar", link: "https://example.com/lpu" },
    { university: "University of Lucknow", link: "https://example.com/lpu" },
    { university: "Indian Institute of Management Raipur", link: "https://example.com/lpu" },
    { university: "Indian Institute of Technology Hyderabad", link: "https://example.com/lpu" },
    { university: "University of Rajasthan", link: "https://example.com/lpu" },
    // Add more courses here...
];
 // Function to handle navigation based on the selected university
    function navigateToUniversityPage(university) {
        for (const course of courses) {
            if (course.university === university) {
                window.location.href = course.link;
                break;
            }
        }
    }
const searchInput = document.getElementById('searchInput');
            const searchResults = document.getElementById('searchResults');

            function search() {
                const searchTerm = searchInput.value.toLowerCase();
                const filteredCourses = courses.filter(course => {
                    return course.university.toLowerCase().includes(searchTerm);
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
                        link.href = course.link;
                        link.textContent = course.university;
                        link.classList.add('courseLink');
                        searchResults.appendChild(link);
                        searchResults.appendChild(document.createElement('br'));
                    });
                }
            }

            searchInput.addEventListener('input', search);
        });
// Additional event listeners and initialization can be added here








document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const searchButton = document.getElementById('searchButton');

    searchButton.addEventListener('click', function() {
        const container = document.querySelector('.container');
        container.classList.add('show-search');
        setTimeout(function() {
            searchResults.classList.add('show-results');
        }, 500);
    });

    // Your other JavaScript code here
});
// Function to change background image
function changeBackgroundImage(universityName) {
    const backgroundImage = universities.find(university => university.name === universityName)?.image;
    if (backgroundImage) {
        document.getElementById('background').style.backgroundImage = `url(${backgroundImage})`;
    }
}

// Example: Change background image when clicking on "Lovely Professional University"
document.getElementById('searchResults').addEventListener('click', function(event) {
    if (event.target && event.target.nodeName === 'A') {
        changeBackgroundImage(event.target.textContent);
    }
});
