document.addEventListener("DOMContentLoaded", function () {
    const courses = [
        { course: "Computer Science", link: "/computer_science_and_engineer/index.html" },
        { course: "Computer Science", link: "https://example.com/computer-science" },
        { course: "Computer Science", link: "https://example.com/computer-science" },
        { course: "Physics", link: "https://example.com/physics" },
        { course: "Mathematics", link: "https://example.com/mathematics" },
        { course: "Engineering", link: "https://example.com/engineering" },
        { course: "Engineering", link: "https://example.com/engineering" },
        { course: "Economics", link: "https://example.com/economics" },
        { course: "Mechanical Engineering", link: "https://example.com/mechanical-engineering" },
        { course: "Chemistry", link: "https://example.com/chemistry" },
        { course: "Chemistry", link: "https://example.com/chemistry" },
        { course: "Biology", link: "https://example.com/biology" },
        { course: "Political Science", link: "https://example.com/political-science" },
        { course: "Political Science", link: "https://example.com/political-science" },
        { course: "Political Science", link: "https://example.com/political-science" },
        { course: "Political Science", link: "https://example.com/political-science" },
        { course: "Political Science", link: "https://example.com/political-science" },
        { course: "Business Administration", link: "https://example.com/business-administration" },
        { course: "Electrical Engineering", link: "https://example.com/electrical-engineering" },
        { course: "Medicine", link: "https://example.com/medicine" },
        { course: "Medicine", link: "https://example.com/medicine" },
        { course: "Psychology", link: "https://example.com/psychology" },
        { course: "History", link: "https://example.com/history" },
        { course: "History", link: "https://example.com/history" },
        { course: "Civil Engineering", link: "https://example.com/civil-engineering" },
        { course: "Chemical Engineering", link: "https://example.com/chemical-engineering" },
        { course: "Chemical Engineering", link: "https://example.com/chemical-engineering" },
        { course: "English Literature", link: "https://example.com/english-literature" },
        { course: "Environmental Science", link: "https://example.com/environmental-science" },
        { course: "Environmental Science", link: "https://example.com/environmental-science" },
        { course: "Machine Learning(ML)", link: "https://example.com/environmental-science" },
        { course: "Machine Learning(ML)", link: "https://example.com/environmental-science" },
        { course: "Machine Learning(ML)", link: "https://example.com/environmental-science" },
        { course: "Machine Learning(ML)", link: "https://example.com/environmental-science" },
        // Add more courses here...
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
                link.href = course.link;
                link.textContent = course.course;
                link.classList.add('courseLink');
                searchResults.appendChild(link);
                searchResults.appendChild(document.createElement('br'));
            });
        }
    }

    searchInput.addEventListener('input', search);
});
