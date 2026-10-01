// ================= MOBILE MENU =================

function toggleMenu() {

    const navMenu = document.getElementById("navMenu");

    navMenu.classList.toggle("active");

}


// Close mobile menu after clicking a link

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        document.getElementById("navMenu").classList.remove("active");

    });

});



// ================= BOOKING FORM =================

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;
    const guests = document.getElementById("guests").value;

    const message = document.getElementById("bookingMessage");


    // Check dates

    if (new Date(checkout) <= new Date(checkin)) {

        message.textContent = "❌ Check-out date must be after check-in date.";
        message.style.color = "red";

        return;

    }


    // Successful booking request

    message.textContent =
        `✓ Thank you ${name}! Your booking request has been received.`;

    message.style.color = "green";


    console.log("Booking Details:");

    console.log("Name:", name);
    console.log("Phone:", phone);
    console.log("Check-in:", checkin);
    console.log("Check-out:", checkout);
    console.log("Guests:", guests);


    // Reset form

    bookingForm.reset();

});



// ================= SET MINIMUM DATE =================

const today = new Date().toISOString().split("T")[0];

document.getElementById("checkin").setAttribute("min", today);
document.getElementById("checkout").setAttribute("min", today);



// ================= SCROLL ANIMATION =================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(

    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.1
    }

);


sections.forEach(function(section) {

    observer.observe(section);

});
