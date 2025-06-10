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

    // --- Elements for Daily Inspiration ---
    const quoteElement = document.querySelector('.daily-inspiration-section .quote');
    const attributionElement = document.querySelector('.daily-inspiration-section .attribution');

    // --- Data ---
    const articlesData = [
        {
            category: 'Habit Building',
            title: 'The Power of Keystone Habits',
            description: 'Discover how focusing on one key habit can transform multiple areas of your life.',
            author: 'Jane Doe',
            date: 'March 14, 2024',
            readTime: '5 min read',
            imagePlaceholder: '600 x 400',
            imageUrl: 'https://images.pexels.com/photos/4964985/pexels-photo-4964985.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
            url:'https://example.com/keystone-habits'
        },
        {
            category: 'Goal Setting',
            title: 'SMART Goals: The Secret to Achievement',
            description: 'Learn how to set Specific, Measurable, Achievable, Relevant, and Time-bound goals.',
            author: 'John Smith',
            date: 'February 19, 2024',
            readTime: '7 min read',
            imagePlaceholder: '600 x 400',
            imageUrl: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1'
        },
        {
            category: 'Personal Development',
            title: 'Mindfulness for a Productive Day',
            description: 'Incorporate mindfulness techniques to reduce stress and boost focus throughout your day.',
            author: 'Alice Green',
            date: 'March 31, 2024',
            readTime: '6 min read',
            imagePlaceholder: '600 x 400',
            imageUrl: 'https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1'
        },
        {
            category: 'Personal Skills',
            title: 'The Art of Effective Communication',
            description: 'Improve your interpersonal skills by mastering active listening and clear expression.',
            author: 'David Lee',
            date: 'January 9, 2024',
            readTime: '8 min read',
            imagePlaceholder: '600 x 400',
            imageUrl: 'https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1'
        }
        // Add more articles if needed
    ];

    const inspirationalQuotes = [
        // Original unique set
        { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    ];

    // --- Functions ---

    // Navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Check if the link is *not* for an external page or a section switch
            if (!link.href.endsWith('.html') && link.dataset.target) {
                e.preventDefault();
                const targetId = link.dataset.target;

                pageSections.forEach(section => section.classList.add('hidden'));
                const targetSection = document.getElementById(targetId);
                if (targetSection) targetSection.classList.remove('hidden');

                navLinks.forEach(nav => nav.classList.remove('active'));
                if (link.closest('nav')) link.classList.add('active'); // Only activate main nav links

                window.scrollTo(0, 0);
            } else if (link.href.endsWith('.html') && !link.dataset.target) {
                // This is a link to a different page (like SignUp.html), let default behavior happen
                // No e.preventDefault() here
            } else if (link.dataset.target) { // Handle buttons styled as nav-links that switch sections
                 e.preventDefault();
                const targetId = link.dataset.target;

                pageSections.forEach(section => section.classList.add('hidden'));
                const targetSection = document.getElementById(targetId);
                if (targetSection) targetSection.classList.remove('hidden');
                window.scrollTo(0, 0);
            }
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
                <img class="article-image" src="${article.imageUrl || 'https://via.placeholder.com/' + article.imagePlaceholder}" alt="${article.title}">
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
    if (featuredArticlesGrid) displayArticles(articlesData.slice(0, 2), featuredArticlesGrid); // Display first 2 as featured

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


    // Goals
    function renderGoals() {
        if (!goalsList || !activeGoalsCount) return; // Guard clause

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
    }

    if (newGoalDateInput) { // Set default date for new goals
        newGoalDateInput.valueAsDate = new Date();
    }

    if (addGoalBtn && newGoalInput && newGoalDateInput) {
        addGoalBtn.addEventListener('click', () => {
            const goalText = newGoalInput.value.trim();
            const goalDate = newGoalDateInput.value;
            if (goalText) {
                goals.push({ text: goalText, date: goalDate, completed: false });
                newGoalInput.value = '';
                // Optionally reset date or keep it: newGoalDateInput.valueAsDate = new Date();
                renderGoals();
                showToast(`Goal Added! "${goalText.substring(0, 20)}..."`);
            } else {
                showToast('Please enter a goal description.', 3000);
            }
        });

        newGoalInput.addEventListener('keyup', (event) => {
            if (event.key === "Enter") {
                addGoalBtn.click();
            }
        });
    }

    if (goalsList) {
        goalsList.addEventListener('click', (e) => {
            const target = e.target;
            const index = target.dataset.index;

            if (target.type === 'checkbox') {
                goals[index].completed = target.checked;
                renderGoals();
                const status = target.checked ? "completed" : "marked as active";
                showToast(`Goal "${goals[index].text.substring(0,20)}..." ${status}.`);
            } else if (target.closest('.delete-goal-btn')) {
                const actualButton = target.closest('.delete-goal-btn');
                const goalIndexToDelete = actualButton.dataset.index; // Get index from button itself
                const goalText = goals[goalIndexToDelete].text;
                goals.splice(goalIndexToDelete, 1);
                renderGoals();
                showToast(`Goal Removed: "${goalText.substring(0, 20)}..."`);
            }
        });
    }

    // Add a default goal for demonstration if the list is empty
    if (goals.length === 0) {
        goals.push({ text: 'Run 5km', date: '2025-05-25', completed: false });
    }
    if (goalsList) renderGoals(); // Initial render of goals


    // AI Tips
    if (aiTipsForm && aiGoalInput && aiResponseArea && aiResponseText) {
        aiTipsForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const userGoal = aiGoalInput.value.trim();
            if (userGoal) {
                // Simple placeholder AI response
                aiResponseText.innerHTML = `
                    <p>Okay, for your goal: "<strong>${userGoal}</strong>", here are some tailored tips:</p>
                    <ul>
                        <li><strong>Break it Down:</strong> Divide your goal into smaller, manageable steps. What's the very first small action you can take?</li>
                        <li><strong>Set Milestones:</strong> Define clear, measurable milestones. How will you know you're making progress?</li>
                        <li><strong>Seek Knowledge:</strong> Identify books, courses, mentors, or online communities related to your goal.</li>
                        <li><strong>Practice Consistently:</strong> Schedule dedicated time for your goal. Even 15-30 minutes daily can make a huge difference.</li>
                        <li><strong>Track Progress:</strong> Use a journal, app, or spreadsheet to monitor your advancements and identify patterns.</li>
                        <li><strong>Stay Positive & Adapt:</strong> Visualize success, affirm your abilities, and be prepared to adjust your plan if needed. Challenges are part of the process.</li>
                    </ul>
                    <p>Remember, consistency and self-compassion are key. Good luck on your journey with "${userGoal}"!</p>
                `;
                aiResponseArea.classList.remove('hidden');
                showToast('AI tips generated!');
            } else {
                aiResponseArea.classList.add('hidden');
                showToast('Please enter a goal to get tips.', 3000);
            }
        });
    }

    // Daily Inspiration
    function getDayOfYear(date = new Date()) {
        const start = new Date(date.getFullYear(), 0, 0);
        const diff = (date - start) + ((start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000);
        const oneDay = 1000 * 60 * 60 * 24;
        return Math.floor(diff / oneDay);
    }

    function setDailyInspiration() {
        if (!quoteElement || !attributionElement) {
            // console.warn("Daily inspiration elements not found."); // Optional: for debugging
            return;
        }

        if (inspirationalQuotes.length === 0) {
            quoteElement.textContent = "No inspirational quotes available today.";
            attributionElement.textContent = "";
            return;
        }

        const today = new Date();
        const dayOfYear = getDayOfYear(today);
        const quoteIndex = (dayOfYear - 1) % inspirationalQuotes.length;
        const selectedQuote = inspirationalQuotes[quoteIndex];

        quoteElement.textContent = `"${selectedQuote.quote}"`;
        attributionElement.textContent = `— ${selectedQuote.author}`;
    }

    // Initial Page Setup
    const initialPage = document.getElementById('home-page');
    if (initialPage) {
        pageSections.forEach(section => section.classList.add('hidden'));
        initialPage.classList.remove('hidden');
        const homeLink = document.querySelector('nav ul li a[data-target="home-page"]');
        if (homeLink) {
            homeLink.classList.add('active');
        }
    }

    // Call functions that need to run on page load
    setDailyInspiration(); // Set the daily quote

}); // End of DOMContentLoaded
