document.getElementById('show-plans').addEventListener('click', fetchPlans);

let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;


document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides; 
    updateCarousel();
});


document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; 
    updateCarousel(); 
});


function fetchPlans() {
    fetch('http://localhost:3000/api/plans')
        .then(response => response.json())
        .then(plans => {
            const plansContainer = document.querySelector('.plans');
            plansContainer.innerHTML = ''; 

            plans.forEach((plan, index) => {
                const planDiv = document.createElement('div');
                planDiv.classList.add('plan');
                planDiv.style.opacity = 0; 
                planDiv.innerHTML = `
                    <h3>${plan.name}</h3>
                    <p>${plan.speed} for ${plan.price}</p>
                    <button onclick="subscribe('${plan.name}')">Subscribe Now</button>
                `;
                plansContainer.appendChild(planDiv);

              
                setTimeout(() => {
                    planDiv.style.opacity = 1; 
                    planDiv.style.transition = 'opacity 0.5s';
                }, index * 300); 
            });

            updateCarousel();
        })
        .catch(error => {
            console.error('Error fetching plans:', error);
        });
}


function updateCarousel() {
    const carouselContainer = document.querySelector('.carousel-container');
    const offset = -currentIndex * 100; 
    carouselContainer.style.transform = `translateX(${offset}%)`; 
}


function subscribe(plan) {
    alert(`Gracias por elegir el ${plan}! Nuestro equipo se pondrá en contacto contigo pronto.`);
}
