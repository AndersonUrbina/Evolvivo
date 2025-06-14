document.addEventListener('DOMContentLoaded', () => {
    // --- Elements for Navigation, Toast, Articles ---
    const navLinks = document.querySelectorAll('.nav-link');
    const pageSections = document.querySelectorAll('.page-section');
    const toastNotification = document.getElementById('toast-notification');
    const toastMessage = document.getElementById('toast-message');
    const allArticlesGrid = document.getElementById('all-articles-grid');
    const featuredArticlesGrid = document.getElementById('featured-articles-grid');
    const articleSearchInput = document.getElementById('article-search-input');
    const articleSearchBtn = document.getElementById('article-search-btn');

    // --- Elements for Goals ---
    const newGoalInput = document.getElementById('new-goal-input');
    const newGoalDateInput = document.getElementById('new-goal-date');
    const addGoalBtn = document.getElementById('add-goal-btn');
    const goalsList = document.getElementById('goals-list');
    const activeGoalsCount = document.getElementById('active-goals-count');
    let goals = []; // Initialize goals array

    // --- Elements for AI Tips ---
    const aiTipsForm = document.getElementById('ai-tips-form');
    const aiGoalInput = document.getElementById('ai-goal-input');
    const aiResponseArea = document.getElementById('ai-response-area');
    const aiResponseText = document.getElementById('ai-response-text');

    // --- Data ---
    const articlesData = [
        { category: 'Habit Building', title: 'The Power of Keystone Habits', description: 'Discover how focusing on one key habit can transform multiple areas of your life.', author: 'Jane Doe', date: 'March 14, 2024', readTime: '5 min read', imageUrl: 'https://images.pexels.com/photos/4964985/pexels-photo-4964985.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1', url: 'https://example.com/keystone-habits' },
        { category: 'Goal Setting', title: 'SMART Goals: The Secret to Achievement', description: 'Learn how to set Specific, Measurable, Achievable, Relevant, and Time-bound goals.', author: 'John Smith', date: 'February 19, 2024', readTime: '7 min read', imageUrl: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1' },
        { category: 'Personal Development', title: 'Mindfulness for a Productive Day', description: 'Incorporate mindfulness techniques to reduce stress and boost focus throughout your day.', author: 'Alice Green', date: 'March 31, 2024', readTime: '6 min read', imageUrl: 'https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1' },
        { category: 'Personal Skills', title: 'The Art of Effective Communication', description: 'Improve your interpersonal skills by mastering active listening and clear expression.', author: 'David Lee', date: 'January 9, 2024', readTime: '8 min read', imageUrl: 'https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1' }
    ];

    // --- Functions ---

    // --- FIX: Simplified and robust navigation logic ---
    // This new logic works for both <a> tags and <button> elements.
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.dataset.target;

            // If the clicked element has a 'data-target', it's for internal navigation.
            if (targetId) {
                e.preventDefault(); // Prevent default action (like form submission for buttons)

                // Hide all page sections
                pageSections.forEach(section => section.classList.add('hidden'));

                // Show the target section
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.classList.remove('hidden');
                } else {
                    console.warn(`Navigation target section with ID "${targetId}" not found.`);
                }

                // Update the active state ONLY for links in the main <nav> bar
                navLinks.forEach(nav => nav.classList.remove('active'));
                if (link.closest('nav')) {
                    link.classList.add('active');
                }
                
                window.scrollTo(0, 0);
            }
            // If there's no data-target, the script does nothing, allowing default
            // browser behavior (e.g., following the link to signup.html).
        });
    });

    // Toast Notification
    let toastTimeout;
    function showToast(message, duration = 3000) {
        if (toastMessage && toastNotification) {
            toastMessage.textContent = message;
            toastNotification.classList.add('show');
            toastNotification.classList.remove('hidden');

            clearTimeout(toastTimeout);
            toastTimeout = setTimeout(() => {
                toastNotification.classList.remove('show');
                setTimeout(() => toastNotification.classList.add('hidden'), 500);
            }, duration);
        } else {
            console.warn("Toast elements not found in the DOM.");
        }
    }

    // Articles
    function createArticleCard(article) {
        return `
            <div class="article-card">
                <img class="article-image" src="${article.imageUrl}" alt="${article.title}">
                <div class="article-card-content">
                    <span class="article-category">${article.category}</span>
                    <h3>${article.title}</h3>
                    <p class="description">${article.description}</p>
                    <div class="article-meta">
                        <span><i class="fas fa-user"></i> ${article.author}</span>
                        <span><i class="fas fa-calendar-alt"></i> ${article.date}</span>
                        <span><i class="fas fa-clock"></i> ${article.readTime}</span>
                    </div>
                    <div class="article-footer">
                        <a href="${article.url || '#'}" target="_blank" rel="noopener noreferrer" class="read-more-link"> Read More <i class="fas fa-arrow-right"></i></a>
                        <i class="far fa-bookmark bookmark-icon"></i>
                    </div>
                </div>
            </div>
        `;
    }

    function displayArticles(articles, gridElement) {
        if (gridElement) {
            gridElement.innerHTML = articles.map(article => createArticleCard(article)).join('');
        }
    }

    if (allArticlesGrid) displayArticles(articlesData, allArticlesGrid);
    if (featuredArticlesGrid) displayArticles(articlesData.slice(0, 2), featuredArticlesGrid);

    if (articleSearchBtn && articleSearchInput && allArticlesGrid) {
        articleSearchBtn.addEventListener('click', () => {
            const searchTerm = articleSearchInput.value.toLowerCase().trim();
            const filteredArticles = articlesData.filter(article =>
                article.title.toLowerCase().includes(searchTerm) ||
                article.description.toLowerCase().includes(searchTerm) ||
                article.category.toLowerCase().includes(searchTerm) ||
                article.author.toLowerCase().includes(searchTerm)
            );
            displayArticles(filteredArticles, allArticlesGrid);
            if (filteredArticles.length === 0) {
                allArticlesGrid.innerHTML = "<p>No articles found matching your search.</p>";
            }
        });

        articleSearchInput.addEventListener('keyup', (event) => {
            if (event.key === "Enter") {
                articleSearchBtn.click();
            }
        });
    }

    // Goals (with Local Storage for persistence)
    function loadGoals() {
        const savedGoals = localStorage.getItem('evolvivoGoals');
        goals = savedGoals ? JSON.parse(savedGoals) : [{ text: 'Explore the features of Evolvivo', date: new Date().toISOString().split('T')[0], completed: false }];
    }

    function saveGoals() {
        localStorage.setItem('evolvivoGoals', JSON.stringify(goals));
    }

    function renderGoals() {
        if (!goalsList || !activeGoalsCount) return;

        goalsList.innerHTML = '';
        goals.forEach((goal, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <div class="goal-item-content">
                    <input type="checkbox" id="goal-${index}" data-index="${index}" ${goal.completed ? 'checked' : ''}>
                    <label for="goal-${index}" class="goal-text ${goal.completed ? 'completed' : ''}">${goal.text}</label>
                </div>
                <div class="goal-meta">
                    ${goal.date ? `<span class="goal-date"><i class="fas fa-calendar-alt"></i> ${goal.date}</span>` : ''}
                    <button class="delete-goal-btn" data-index="${index}" aria-label="Delete goal"><i class="fas fa-trash-alt"></i></button>
                </div>
            `;
            goalsList.appendChild(li);
        });
        activeGoalsCount.textContent = goals.filter(g => !g.completed).length;
        saveGoals();
    }

    if (newGoalDateInput) {
        newGoalDateInput.valueAsDate = new Date();
    }

    if (addGoalBtn && newGoalInput && newGoalDateInput) {
        const addNewGoal = () => {
            const goalText = newGoalInput.value.trim();
            if (goalText) {
                goals.push({ text: goalText, date: newGoalDateInput.value, completed: false });
                newGoalInput.value = '';
                renderGoals();
                showToast(`Goal Added!`);
            } else {
                showToast('Please enter a goal description.');
            }
        };
        addGoalBtn.addEventListener('click', addNewGoal);
        newGoalInput.addEventListener('keyup', (event) => {
            if (event.key === "Enter") {
                addGoalBtn.click();
            }
        });
    }

    if (goalsList) {
        goalsList.addEventListener('click', (e) => {
            const checkbox = e.target.closest('input[type="checkbox"]');
            const deleteBtn = e.target.closest('.delete-goal-btn');
            
            if (checkbox) {
                const index = checkbox.dataset.index;
                goals[index].completed = checkbox.checked;
            } else if (deleteBtn) {
                const index = deleteBtn.dataset.index;
                goals.splice(index, 1);
                showToast(`Goal Removed.`);
            }
            renderGoals();
        });
    }

    // AI Tips (No changes needed here)
    if (aiTipsForm && aiGoalInput && aiResponseArea && aiResponseText) {
        aiTipsForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const userGoal = aiGoalInput.value.trim();
            if (userGoal) {
                aiResponseText.innerHTML = `<p>Okay, for your goal: "<strong>${userGoal}</strong>", here are some tailored tips:</p><ul><li><strong>Break it Down:</strong> Divide your goal into smaller, manageable steps. What's the very first small action you can take?</li><li><strong>Set Milestones:</strong> Define clear, measurable milestones. How will you know you're making progress?</li><li><strong>Practice Consistently:</strong> Schedule dedicated time for your goal. Even 15-30 minutes daily can make a huge difference.</li><li><strong>Track Progress:</strong> Use a journal, app, or spreadsheet to monitor your advancements and identify patterns.</li></ul><p>Good luck on your journey with "${userGoal}"!</p>`;
                aiResponseArea.classList.remove('hidden');
                showToast('AI tips generated!');
            } else {
                aiResponseArea.classList.add('hidden');
                showToast('Please enter a goal to get tips.');
            }
        });
    }

    // --- Initial Page Setup ---
    function init() {
        // Set initial page to show
        const initialPage = document.getElementById('home-page');
        if (initialPage) {
            pageSections.forEach(section => section.classList.add('hidden'));
            initialPage.classList.remove('hidden');
            const homeLink = document.querySelector('nav ul li a[data-target="home-page"]');
            if (homeLink) {
                homeLink.classList.add('active');
            }
        }
        
        // Load and render goals
        loadGoals();
        renderGoals();
    }
    
    init();

}); // End of DOMContentLoaded
