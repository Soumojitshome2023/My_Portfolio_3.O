// // active page header link color change script

// // Get all the <a> elements inside the navigation

// function isElementInViewport(id) {
//     const element = document.getElementById(id);

//     if (!element) {
//       // Element with the specified ID not found
//       return false;
//     }

//     const rect = element.getBoundingClientRect();

//     return (
//       rect.top >= 0 &&
//       rect.left >= 0 &&
//       rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
//   }

// ======================================================


const laptopnavLinks = document.querySelectorAll("#control a");

function pagecall(id, ind) {

    let xyz = document.getElementById(id);

    xyz.addEventListener("mouseenter", function () {
        laptopnavLinks[ind].style.color = "yellow";

    });
    xyz.addEventListener("mouseleave", function () {
        laptopnavLinks[ind].style.color = "";

    });

}

pagecall("home", 0);
pagecall("about", 1);
pagecall("edu", 2);
pagecall("skill", 3);
pagecall("project", 4);
pagecall("contact", 5);
pagecall("footer", 6);



// ======================================================






// const laptopnavLinks = document.querySelectorAll("#control a");

// function pagecall(ind, start_height, end_height) {

//     // console.log(document.documentElement.scrollTop)

//     if (document.documentElement.scrollTop <= end_height && document.documentElement.scrollTop >= start_height) {

//         laptopnavLinks[ind].style.color = "yellow";

//     }
//     else {
//         laptopnavLinks[ind].style.color = "";
//         // console.log("first")

//     }
// }

// pagecall(0, 0, 490);
// window.onscroll = function () {

//     pagecall(0, 0, 490);
//     pagecall(1, 500, 1100);
//     pagecall(2, 1110, 2190);
//     pagecall(3, 2200, 2850);
//     pagecall(4, 2860, 4720);
//     pagecall(5, 4730, 5400);
//     pagecall(6, 5410, 5450);


// };




// ===========================================================
// Create an Intersection Observer
// const observer = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {

//       } else {

//       }
//     });
//   });

//   // Specify the element you want to observe
//   const targetElement = document.getElementById("your-element-id");

//   // Start observing the target element
//   observer.observe(targetElement);


