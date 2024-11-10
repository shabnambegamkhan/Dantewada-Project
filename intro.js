// document.getElementById('contact-form').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the default form submission

//     // Simple form validation
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;

//     if (name && email && message) {
//         alert('Thank you for your message!');
//         // You can add functionality here to actually send the message to a server
//     } else {
//         alert('Please fill out all fields.');
//     }
// });



        // // Select all images with the class 'slider-image'
        // const images = document.querySelectorAll('.slider-image');
        // let currentIndex = 0;

        // function changeImage(slider) {
        //     // Hide all images
        //     images.forEach((img) => {
        //         img.classList.remove('active');
        //     });

        //     // Show the current image
        //     images[currentIndex].classList.add('active');

        //     // Update index for the next image
        //     currentIndex = (currentIndex + 1) % images.length;
        // }

        // // Initialize slider with the first image active
        // // changeImage(slider);

        // // Change image every 3 seconds
        // // setInterval(changeImage, 3000);
        // setTimeout(changeImage,1000);
        // changeImage();
    
// intro.js
window.onload = function() {
    const images = document.querySelectorAll('#slider img');
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].style.display = 'none'; // Hide current image
        currentIndex = (currentIndex + 1) % images.length; // Move to next image
        images[currentIndex].style.display = 'block'; // Show next image
    }

    // Initially hide all images except the first one
    images.forEach((img, index) => {
        if (index !== 0) img.style.display = 'none';
    });

    // Set interval to change images every second (1000 milliseconds)
    setInterval(showNextImage, 2000);
};
