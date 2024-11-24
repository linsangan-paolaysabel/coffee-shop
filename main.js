
 let favoriteCount = 0; // Initialize favorite count
    const favoriteItems = []; // Array to hold favorite items

    // Event listener for Add to Favorites button
    document.querySelectorAll('.add-to-favorites-button').forEach(function(button) {
        button.addEventListener('click', function() {
            const menuItem = this.closest('.menu-item'); // Get the closest menu item
            const itemInfo = menuItem.querySelector('.item-info h3').innerText; // Get item name
            const itemImageSrc = menuItem.querySelector('.item-image img').src; // Get item image source

            // Check if item is already in favorites
            const isFavorite = favoriteItems.some(item => item.name === itemInfo);

            if (!isFavorite) {
                // Add item to favorites
                favoriteItems.push({ name: itemInfo, image: itemImageSrc });
                favoriteCount++; // Increment the favorite count
                document.getElementById('favorite-count').innerText = favoriteCount; // Update displayed count

                // Change button text to "Added to Favorites" and disable it
                this.innerText = 'Added to Favorites';
                this.disabled = true; // Disable button
                this.classList.add('added-to-favorites'); // Optionally add a class for styling
            }
            if (!menuItem) return;
        });
    });

    // Event listener for favorite icon click
    document.getElementById('favorite-icon').addEventListener('click', function() {
        const favoriteList = document.getElementById('favorite-list');
        favoriteList.innerHTML = ''; // Clear previous items
        favoriteItems.forEach(function(item, index) {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<img src="${item.image}" alt="${item.name}" class="favorite-item-image"> 
                                  <span>${item.name}</span> 
                                  <i class="fas fa-trash delete-icon" data-index="${index}"></i>`; // Add delete icon
            favoriteList.appendChild(listItem);
        });
        document.getElementById('favoriteModal').style.display = 'block'; // Show modal
    });

    // Event listener for delete icon click
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-icon')) {
            const index = event.target.getAttribute('data-index'); // Get index of item to delete
            const deletedItem = favoriteItems[index]; // Get the item being deleted

            // Find the corresponding button for the deleted item
            const menuItems = document.querySelectorAll('.menu-item');
            menuItems.forEach(function(menuItem) {
                const itemName = menuItem.querySelector('.item-info h3').innerText;
                if (itemName === deletedItem.name) {
                    const addButton = menuItem.querySelector('.add-to-favorites-button');
                    addButton.innerText = 'Add to Favorites'; // Reset button text
                    addButton.disabled = false; // Re-enable button
                    addButton.classList.remove('added-to-favorites'); // Remove added class
                }
            });

            favoriteItems.splice(index, 1); // Remove item from favorites
            favoriteCount--; // Decrement the favorite count
            document.getElementById('favorite-count').innerText = favoriteCount; // Update displayed count
            event.target.parentElement.remove(); // Remove the item from the modal
        }
    });

    // Modal close functionality
    document.querySelector('.close').onclick = function() {
        document.getElementById('favoriteModal').style.display = 'none'; // Close modal
    };

    window.onclick = function(event) {
        if (event.target == document.getElementById('favoriteModal')) {
            document.getElementById('favoriteModal').style.display = 'none'; // Close modal if clicked outside
        }
    };

    document.querySelectorAll('.overlay-plus-icon').forEach(function(plusIcon) {
        plusIcon.addEventListener('click', function() {
            const itemInfo = this.closest('.menu-item').querySelector('.item-info');
            const description = itemInfo.querySelector('.description');

            if (description.style.display === "none") {
                description.style.display = "block"; // Show description
            } else {
                description.style.display = "none"; // Hide description
            } if (!description) return;

        });
    });

    document.addEventListener('DOMContentLoaded', () => {
        // Swiper Initialization
        const swiper = new Swiper('.slider-wrapper', {
            loop: true,
            grabCursor: true,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            },
        });
    
        // ScrollReveal Initialization
        const srTop = ScrollReveal({
            origin: 'top',
            distance: '80px',
            duration: 2000,
            reset: true,
        });
        
        //HOME 
        srTop.reveal('.home-container', {});
        srTop.reveal('.featured-name', { delay: 200 });
        srTop.reveal('.featured-text-info', { delay: 300 });
        srTop.reveal('.menu-button', { delay: 300 });
        srTop.reveal('.home-img', { delay: 400 });
        srTop.reveal('.underline', { delay: 400 });

        // ScrollReveal Initialization
        const srLeft = ScrollReveal({
            origin: 'left',
            distance: '80px',
            duration: 2000,
            reset: true,
        });

        //RECOMMENDED CONTAINER
        srLeft.reveal('.menu-item1',{delay: 100})

        // ScrollReveal Initialization
        const srRight = ScrollReveal({
            origin: 'right',
            distance: '80px',
            duration: 2000,
            reset: true,
        });

        //RECOMMENDED CONTAINER
        srRight.reveal('.menu-item2',{delay: 100})

        // ScrollReveal Initialization
        const srBottom = ScrollReveal({
            origin: 'bottom',
            distance: '80px',
            duration: 2000,
            reset: true,
        });

        //RECOMMENDED CONTAINER
        srBottom.reveal('.coffee-brand',{delay: 100})
    });
    
const navMenu = document.querySelector('.nav-menu');
const navMenuBtn = document.querySelector('.nav-menu-btn');

navMenuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});


