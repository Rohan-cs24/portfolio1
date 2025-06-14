// Fruit Website JavaScript
class FruitWebsite {
    constructor() {
        this.fruits = [
            {
                id: 1,
                name: 'Apple',
                emoji: '🍎',
                price: '356/kg',
                category: 'stone',
                description: 'Crisp, sweet, and refreshing apples packed with fiber and vitamin C. Perfect for snacking or baking.',
                nutrition: [
                    'Rich in dietary fiber',
                    'High in vitamin C',
                    'Contains antioxidants',
                    'Good source of potassium',
                    'Low in calories'
                ],
                facts: [
                    'Over 7,500 varieties exist worldwide',
                    'Apples float because they are 25% air',
                    'The science of apple growing is called pomology',
                    'China produces about half of the world\'s apples'
                ]
            },
            {
                id: 2,
                name: 'Orange',
                emoji: '🍊',
                price: '90/kg',
                category: 'citrus',
                description: 'Juicy citrus fruit bursting with vitamin C and natural sweetness. Great for fresh juice or eating.',
                nutrition: [
                    'Excellent source of vitamin C',
                    'Contains folate',
                    'Rich in fiber',
                    'Good source of potassium',
                    'Contains flavonoids'
                ],
                facts: [
                    'Orange trees can live for over 100 years',
                    'Brazil produces the most oranges in the world',
                    'Oranges are actually berries botanically',
                    'The color orange was named after the fruit'
                ]
            },
            {
                id: 3,
                name: 'Banana',
                emoji: '🍌',
                price: '100/kg',
                category: 'tropical',
                description: 'Creamy, sweet tropical fruit rich in potassium and natural sugars. Perfect for smoothies and energy.',
                nutrition: [
                    'High in potassium',
                    'Good source of vitamin B6',
                    'Contains vitamin C',
                    'Rich in dietary fiber',
                    'Natural source of energy'
                ],
                facts: [
                    'Bananas are berries, but strawberries aren\'t',
                    'Bananas can help improve your mood',
                    'They ripen faster in brown paper bags',
                    'India produces the most bananas globally'
                ]
            },
            {
                id: 4,
                name: 'Grapes',
                emoji: '🍇',
                price: '200/kg',
                category: 'berries',
                description: 'Sweet, juicy grapes perfect for snacking or making wine. Rich in antioxidants and natural sugars.',
                nutrition: [
                    'High in antioxidants',
                    'Contains resveratrol',
                    'Good source of vitamin K',
                    'Rich in vitamin C',
                    'Contains natural sugars'
                ],
                facts: [
                    'Grapes have been cultivated for over 6,000 years',
                    'There are over 8,000 grape varieties',
                    'Grapes can be frozen and eaten like ice cream',
                    'Wine grapes are smaller and sweeter than table grapes'
                ]
            },
            {
                id: 5,
                name: 'Strawberry',
                emoji: '🍓',
                price: '356/kg',
                category: 'berries',
                description: 'Sweet, fragrant berries packed with vitamin C and antioxidants. Perfect for desserts and smoothies.',
                nutrition: [
                    'Very high in vitamin C',
                    'Rich in antioxidants',
                    'Contains manganese',
                    'Good source of fiber',
                    'Low in calories'
                ],
                facts: [
                    'Strawberries are the only fruit with seeds on the outside',
                    'California produces 75% of US strawberries',
                    'Strawberries belong to the rose family',
                    'They are 92% water'
                ]
            },
            {
                id: 6,
                name: 'Pineapple',
                emoji: '🍍',
                price: '100/kg',
                category: 'tropical',
                description: 'Tropical fruit with sweet, tangy flavor and natural enzymes. Great for digestion and immune support.',
                nutrition: [
                    'Contains bromelain enzyme',
                    'High in vitamin C',
                    'Good source of manganese',
                    'Contains vitamin B6',
                    'Rich in antioxidants'
                ],
                facts: [
                    'Pineapples take 18-20 months to grow',
                    'They were a symbol of hospitality in colonial America',
                    'Pineapples don\'t ripen after being picked',
                    'Costa Rica is the world\'s largest producer'
                ]
            },
            {
                id: 7,
                name: 'Mango',
                emoji: '🥭',
                price: '100/kg',
                category: 'tropical',
                description: 'Sweet, tropical fruit rich in vitamins A and C. Known as the "king of fruits" for its delicious taste.',
                nutrition: [
                    'Very high in vitamin A',
                    'Excellent source of vitamin C',
                    'Contains vitamin E',
                    'Good source of fiber',
                    'Rich in antioxidants'
                ],
                facts: [
                    'Mangoes are related to cashews and pistachios',
                    'India produces 40% of the world\'s mangoes',
                    'Mango trees can live for hundreds of years',
                    'There are over 1,000 varieties of mangoes'
                ]
            },
            {
                id: 8,
                name: 'Kiwi',
                emoji: '🥝',
                price: '200/kg',
                category: 'tropical',
                description: 'Small fruit with fuzzy skin and bright green flesh. Extremely high in vitamin C and fiber.',
                nutrition: [
                    'Higher vitamin C than oranges',
                    'Rich in dietary fiber',
                    'Contains vitamin K',
                    'Good source of potassium',
                    'Contains antioxidants'
                ],
                facts: [
                    'Kiwis are also called Chinese gooseberries',
                    'You can eat the skin - it\'s very nutritious',
                    'New Zealand is famous for kiwi production',
                    'Kiwis can help improve sleep quality'
                ]
            },
            {
                id: 9,
                name: 'Lemon',
                emoji: '🍋',
                price: '100/kg',
                category: 'citrus',
                description: 'Tart citrus fruit perfect for cooking, drinks, and natural cleaning. High in vitamin C and citric acid.',
                nutrition: [
                    'High in vitamin C',
                    'Contains citric acid',
                    'Good source of fiber',
                    'Contains flavonoids',
                    'Very low in calories'
                ],
                facts: [
                    'Lemons were used to prevent scurvy in sailors',
                    'Lemon trees can produce fruit year-round',
                    'Argentina is the world\'s largest lemon producer',
                    'Lemons are actually a hybrid fruit'
                ]
            },
            {
                id: 10,
                name: 'Peach',
                emoji: '🍑',
                price: '356/kg',
                category: 'stone',
                description: 'Soft, sweet stone fruit with fuzzy skin. Rich in vitamins A and C, perfect for summer desserts.',
                nutrition: [
                    'Good source of vitamin A',
                    'Contains vitamin C',
                    'Rich in fiber',
                    'Contains potassium',
                    'Low in calories'
                ],
                facts: [
                    'Peaches are native to China',
                    'Georgia is known as the "Peach State"',
                    'Peaches and nectarines are the same species',
                    'White peaches are sweeter than yellow ones'
                ]
            },
            {
                id: 11,
                name: 'Blueberry',
                emoji: '🫐',
                price: '200/kg',
                category: 'berries',
                description: 'Small, sweet berries packed with antioxidants. Known as a superfood for brain health and immunity.',
                nutrition: [
                    'Extremely high in antioxidants',
                    'Good source of vitamin C',
                    'Contains vitamin K',
                    'Rich in fiber',
                    'Low in calories'
                ],
                facts: [
                    'Blueberries are one of the few truly blue foods',
                    'They can improve memory and brain function',
                    'Maine produces the most wild blueberries',
                    'Blueberries are native to North America'
                ]
            },
            {
                id: 12,
                name: 'Lime',
                emoji: '🍈',
                price: '100/kg',
                category: 'citrus',
                description: 'Small, tart citrus fruit perfect for cocktails and cooking. Rich in vitamin C and citric acid.',
                nutrition: [
                    'High in vitamin C',
                    'Contains citric acid',
                    'Good source of fiber',
                    'Contains flavonoids',
                    'Very low in calories'
                ],
                facts: [
                    'Limes were used to prevent scurvy in the British Navy',
                    'Key limes are different from Persian limes',
                    'Mexico produces most of the world\'s limes',
                    'Lime juice can be used as a natural preservative'
                ]
            }
        ];

        this.currentFilter = 'all';
        this.modal = document.getElementById('fruitModal');
        
        this.init();
    }

    init() {
        this.renderFruits();
        this.attachEventListeners();
        this.initializeAnimations();
        this.handleNavigation();
    }

    attachEventListeners() {
        // Filter tabs
        document.querySelectorAll('.filter-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                this.filterFruits(e.target.dataset.filter);
            });
        });

        // Navigation links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                this.smoothScrollTo(targetId);
                this.setActiveNavLink(link);
            });
        });

        // Modal events
        document.querySelector('.close-modal').addEventListener('click', () => {
            this.closeModal();
        });

        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.closeModal();
            }
        });

        // Recipe buttons
        document.querySelectorAll('.recipe-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.showRecipeDetails(e.target);
            });
        });

        // Scroll event for navbar
        window.addEventListener('scroll', () => {
            this.handleScroll();
        });

        // Keyboard events
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.classList.contains('show')) {
                this.closeModal();
            }
        });
    }

    renderFruits() {
        const fruitsGrid = document.getElementById('fruitsGrid');
        fruitsGrid.innerHTML = '';

        this.fruits.forEach(fruit => {
            const fruitCard = this.createFruitCard(fruit);
            fruitsGrid.appendChild(fruitCard);
        });
    }

    createFruitCard(fruit) {
        const card = document.createElement('div');
        card.className = 'fruit-card';
        card.dataset.category = fruit.category;
        card.dataset.fruitId = fruit.id;

        card.innerHTML = `
            <span class="fruit-emoji">${fruit.emoji}</span>
            <h3>${fruit.name}</h3>
            <div class="price">${fruit.price}</div>
            <p>${fruit.description.substring(0, 100)}...</p>
            <div class="fruit-tags">
                <span class="fruit-tag">${this.getCategoryName(fruit.category)}</span>
                <span class="fruit-tag">Fresh</span>
                <span class="fruit-tag">Organic</span>
            </div>
        `;

        card.addEventListener('click', () => {
            this.showFruitDetails(fruit);
        });

        return card;
    }

    getCategoryName(category) {
        const categoryNames = {
            'citrus': 'Citrus',
            'tropical': 'Tropical',
            'berries': 'Berries',
            'stone': 'Stone Fruit'
        };
        return categoryNames[category] || category;
    }

    filterFruits(filter) {
        this.currentFilter = filter;

        // Update active filter tab
        document.querySelectorAll('.filter-tab').forEach(tab => {
            tab.classList.toggle('active', tab.dataset.filter === filter);
        });

        // Filter fruit cards
        document.querySelectorAll('.fruit-card').forEach(card => {
            const category = card.dataset.category;
            const shouldShow = filter === 'all' || category === filter;
            
            if (shouldShow) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    }

    showFruitDetails(fruit) {
        // Populate modal content
        document.querySelector('.fruit-emoji').textContent = fruit.emoji;
        document.querySelector('.fruit-name').textContent = fruit.name;
        document.querySelector('.fruit-description').textContent = fruit.description;

        // Populate nutrition list
        const nutritionList = document.querySelector('.nutrition-list');
        nutritionList.innerHTML = '';
        fruit.nutrition.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            nutritionList.appendChild(li);
        });

        // Populate facts list
        const factsList = document.querySelector('.facts-list');
        factsList.innerHTML = '';
        fruit.facts.forEach(fact => {
            const li = document.createElement('li');
            li.textContent = fact;
            factsList.appendChild(li);
        });

        // Show modal
        this.modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        this.modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }

    showRecipeDetails(button) {
        const recipeCard = button.closest('.recipe-card');
        const recipeName = recipeCard.querySelector('h3').textContent;
        
        // Simple notification for recipe viewing
        this.showNotification(`Opening ${recipeName} recipe details...`, 'info');
        
        // In a real application, this would open a detailed recipe view
        setTimeout(() => {
            this.showNotification(`${recipeName} recipe loaded successfully!`, 'success');
        }, 1000);
    }

    smoothScrollTo(targetId) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }

    setActiveNavLink(activeLink) {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        activeLink.classList.add('active');
    }

    handleNavigation() {
        // Update active nav link based on scroll position
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section[id]');
            const navLinks = document.querySelectorAll('.nav-link');
            
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.clientHeight;
                
                if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }

    handleScroll() {
        const navbar = document.querySelector('.navbar');
        
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    }

    initializeAnimations() {
        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.fruit-card, .benefit-card, .recipe-card').forEach(el => {
            el.classList.add('fade-in');
            observer.observe(el);
        });

        // Animate floating fruits
        this.animateFloatingFruits();
    }

    animateFloatingFruits() {
        const floatingFruits = document.querySelectorAll('.floating-fruit');
        
        floatingFruits.forEach((fruit, index) => {
            // Add random movement
            setInterval(() => {
                const currentX = parseFloat(fruit.style.getPropertyValue('--x'));
                const currentY = parseFloat(fruit.style.getPropertyValue('--y'));
                
                const deltaX = (Math.random() - 0.5) * 10;
                const deltaY = (Math.random() - 0.5) * 10;
                
                const newX = Math.max(5, Math.min(95, currentX + deltaX));
                const newY = Math.max(10, Math.min(90, currentY + deltaY));
                
                fruit.style.setProperty('--x', `${newX}%`);
                fruit.style.setProperty('--y', `${newY}%`);
            }, 3000 + index * 500);
        });
    }

    showNotification(message, type = 'info') {
        // Remove existing notification
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 25px;
            border-radius: 10px;
            color: white;
            font-weight: 600;
            z-index: 10000;
            animation: slideInNotification 0.3s ease;
            max-width: 300px;
            word-wrap: break-word;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        `;
        
        switch (type) {
            case 'success':
                notification.style.background = 'linear-gradient(45deg, #27ae60, #2ecc71)';
                break;
            case 'error':
                notification.style.background = 'linear-gradient(45deg, #e74c3c, #c0392b)';
                break;
            case 'info':
                notification.style.background = 'linear-gradient(45deg, #3498db, #2980b9)';
                break;
            default:
                notification.style.background = 'linear-gradient(45deg, #95a5a6, #7f8c8d)';
        }
        
        // Add animation styles if not already present
        if (!document.querySelector('style[data-fruit-notification]')) {
            const style = document.createElement('style');
            style.setAttribute('data-fruit-notification', 'true');
            style.textContent = `
                @keyframes slideInNotification {
                    from {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
            `;
            document.head.appendChild(style);
        }
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.animation = 'slideInNotification 0.3s ease reverse';
                setTimeout(() => {
                    if (notification.parentNode) {
                        notification.parentNode.removeChild(notification);
                    }
                }, 300);
            }
        }, 4000);
    }

    // Search functionality (bonus feature)
    searchFruits(query) {
        const searchTerm = query.toLowerCase();
        const fruitCards = document.querySelectorAll('.fruit-card');
        
        fruitCards.forEach(card => {
            const fruitName = card.querySelector('h3').textContent.toLowerCase();
            const fruitDescription = card.querySelector('p').textContent.toLowerCase();
            
            const matches = fruitName.includes(searchTerm) || fruitDescription.includes(searchTerm);
            
            if (matches || searchTerm === '') {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    }

    // Random fruit suggestion
    getRandomFruit() {
        const randomIndex = Math.floor(Math.random() * this.fruits.length);
        return this.fruits[randomIndex];
    }

    // Seasonal fruits (bonus feature)
    getSeasonalFruits(season) {
        const seasonalFruits = {
            spring: ['strawberry', 'kiwi'],
            summer: ['peach', 'mango', 'pineapple', 'blueberry'],
            fall: ['apple', 'grapes'],
            winter: ['orange', 'lemon', 'lime']
        };
        
        const currentSeasonFruits = seasonalFruits[season.toLowerCase()] || [];
        return this.fruits.filter(fruit => 
            currentSeasonFruits.some(seasonal => 
                fruit.name.toLowerCase().includes(seasonal)
            )
        );
    }
}

// Initialize the fruit website when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.fruitWebsite = new FruitWebsite();
});

// Add some interactive features
document.addEventListener('DOMContentLoaded', () => {
    // Add hover effects to fruit cards
    document.addEventListener('mouseover', (e) => {
        if (e.target.closest('.fruit-card')) {
            const emoji = e.target.closest('.fruit-card').querySelector('.fruit-emoji');
            if (emoji) {
                emoji.style.transform = 'scale(1.2) rotate(10deg)';
            }
        }
    });

    document.addEventListener('mouseout', (e) => {
        if (e.target.closest('.fruit-card')) {
            const emoji = e.target.closest('.fruit-card').querySelector('.fruit-emoji');
            if (emoji) {
                emoji.style.transform = 'scale(1) rotate(0deg)';
            }
        }
    });

    // Add click ripple effect to buttons
    document.querySelectorAll('.btn, .filter-tab, .recipe-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            if (!document.querySelector('style[data-ripple]')) {
                const style = document.createElement('style');
                style.setAttribute('data-ripple', 'true');
                style.textContent = `
                    @keyframes ripple {
                        to {
                            transform: scale(2);
                            opacity: 0;
                        }
                    }
                `;
                document.head.appendChild(style);
            }
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                if (ripple.parentNode) {
                    ripple.parentNode.removeChild(ripple);
                }
            }, 600);
        });
    });

    // Initialize page with smooth entrance animation
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Performance optimization: Lazy loading for fruit cards
const lazyLoadFruits = () => {
    const fruitCards = document.querySelectorAll('.fruit-card:not(.loaded)');
    
    fruitCards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight + 100) {
            card.classList.add('loaded');
            // Add loading animation
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.6s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100);
        }
    });
};

window.addEventListener('scroll', lazyLoadFruits);
window.addEventListener('resize', lazyLoadFruits);
