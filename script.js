document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const pageSections = document.querySelectorAll('.page-section');
    const toastNotification = document.getElementById('toast-notification');
    const toastMessage = document.getElementById('toast-message');

    // Dummy Article Data
    const articlesData = [
        {
            category: 'Habit Building',
            title: 'The Power of Keystone Habits',
            description: 'Discover how focusing on one key habit can transform multiple areas of your life.',
            author: 'Jane Doe',
            date: 'March 14, 2024',
            readTime: '5 min read',
            imagePlaceholder: '600 x 400',
            imageUrl: 'https://images.pexels.com/photos/4964985/pexels-photo-4964985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            category: 'Goal Setting',
            title: 'SMART Goals: The Secret to Achievement',
            description: 'Learn how to set Specific, Measurable, Achievable, Relevant, and Time-bound goals.',
            author: 'John Smith',
            date: 'February 19, 2024',
            readTime: '7 min read',
            imagePlaceholder: '600 x 400'
        },
        {
            category: 'Personal Development',
            title: 'Mindfulness for a Productive Day',
            description: 'Incorporate mindfulness techniques to reduce stress and boost focus throughout your day.',
            author: 'Alice Green',
            date: 'March 31, 2024',
            readTime: '6 min read',
            imagePlaceholder: '600 x 400'
        },
        {
            category: 'Personal Skills',
            title: 'The Art of Effective Communication',
            description: 'Improve your interpersonal skills by mastering active listening and clear expression.',
            author: 'David Lee',
            date: 'January 9, 2024',
            readTime: '8 min read',
            imagePlaceholder: '600 x 400'
        }
    ];

    // --- Navigation ---
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.dataset.target;
            
            pageSections.forEach(section => {
                section.classList.add('hidden');
            });
            
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.remove('hidden');
            }

            navLinks.forEach(nav => nav.classList.remove('active'));
            // Highlight active link in main nav only
            if (link.closest('nav')) {
                 link.classList.add('active');
            }
            window.scrollTo(0,0); // Scroll to top on page change
        });
    });

    // --- Toast Notification ---
    let toastTimeout;
    function showToast(message, duration = 3000) {
        toastMessage.textContent = message;
        toastNotification.classList.add('show');
        toastNotification.classList.remove('hidden');

        clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => {
            toastNotification.classList.remove('show');
            // Wait for animation to finish before hiding
            setTimeout(() => toastNotification.classList.add('hidden'), 500);
        }, duration);
    }

    // --- Articles Page ---
    const allArticlesGrid = document.getElementById('all-articles-grid');
    const featuredArticlesGrid = document.getElementById('featured-articles-grid');
    const articleSearchInput = document.getElementById('article-search-input');
    const articleSearchBtn = document.getElementById('article-search-btn');

    function createArticleCard(article) {
        return `
            <div class="article-card">
                <div class="placeholder-img">${article.imagePlaceholder}</div>
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
                        <a href="#" class="read-more-link">Read More <i class="fas fa-arrow-right"></i></a>
                        <i class="far fa-bookmark bookmark-icon"></i>
                    </div>
                </div>
            </div>
        `;
    }

    function displayArticles(articles, gridElement) {
        gridElement.innerHTML = articles.map(article => createArticleCard(article)).join('');
    }
    
    // Populate articles
    if (allArticlesGrid) displayArticles(articlesData, allArticlesGrid);
    if (featuredArticlesGrid) displayArticles(articlesData.slice(0, 2), featuredArticlesGrid); // Show 2 featured

    if (articleSearchBtn) {
        articleSearchBtn.addEventListener('click', () => {
            const searchTerm = articleSearchInput.value.toLowerCase();
            const filteredArticles = articlesData.filter(article => 
                article.title.toLowerCase().includes(searchTerm) ||
                article.description.toLowerCase().includes(searchTerm) ||
                article.category.toLowerCase().includes(searchTerm)
            );
            displayArticles(filteredArticles, allArticlesGrid);
            if (filteredArticles.length === 0) {
                allArticlesGrid.innerHTML = "<p>No articles found matching your search.</p>";
            }
        });
    }
     if (articleSearchInput) {
        articleSearchInput.addEventListener('keyup', (event) => {
            if (event.key === "Enter") {
                 articleSearchBtn.click();
            }
        });
    }


    // --- Goals Page ---
    const newGoalInput = document.getElementById('new-goal-input');
    const newGoalDateInput = document.getElementById('new-goal-date');
    const addGoalBtn = document.getElementById('add-goal-btn');
    const goalsList = document.getElementById('goals-list');
    const activeGoalsCount = document.getElementById('active-goals-count');
    let goals = [];

    function renderGoals() {
        goalsList.innerHTML = '';
        goals.forEach((goal, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <div class="goal-item-content">
                    <input type="checkbox" data-index="${index}" ${goal.completed ? 'checked' : ''}>
                    <span class="goal-text ${goal.completed ? 'completed' : ''}">${goal.text}</span>
                </div>
                <div class="goal-meta">
                    ${goal.date ? `<span class="goal-date"><i class="fas fa-calendar-alt"></i> ${goal.date}</span>` : ''}
                    <button class="delete-goal-btn" data-index="${index}"><i class="fas fa-trash-alt"></i></button>
                </div>
            `;
            goalsList.appendChild(li);
        });
        activeGoalsCount.textContent = goals.filter(g => !g.completed).length; // Count only non-completed for "active"
    }
    
    // Set default date for goal to today
    if(newGoalDateInput) {
        newGoalDateInput.valueAsDate = new Date();
    }


    if (addGoalBtn) {
        addGoalBtn.addEventListener('click', () => {
            const goalText = newGoalInput.value.trim();
            const goalDate = newGoalDateInput.value;
            if (goalText) {
                goals.push({ text: goalText, date: goalDate, completed: false });
                newGoalInput.value = '';
                // newGoalDateInput.value = ''; // Optionally reset date or keep it
                renderGoals();
                showToast(`Goal Added! "${goalText.substring(0,20)}..." has been added to your goals.`);
            }
        });
    }
    if (newGoalInput) {
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
            } else if (target.closest('.delete-goal-btn')) {
                const goalText = goals[index].text;
                goals.splice(index, 1);
                renderGoals();
                showToast(`Goal Removed: "${goalText.substring(0,20)}..."`);
            }
        });
    }
    
    // Example initial goal
    goals.push({ text: 'Run 5km', date: '2025-05-25', completed: false });
    if (goalsList) renderGoals();


    // --- AI Tips Page ---
    const aiTipsForm = document.getElementById('ai-tips-form');
    const aiGoalInput = document.getElementById('ai-goal-input');
    const aiResponseArea = document.getElementById('ai-response-area');
    const aiResponseText = document.getElementById('ai-response-text');

    if (aiTipsForm) {
        aiTipsForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const userGoal = aiGoalInput.value.trim();
            if (userGoal) {
                // Simulate AI response
                aiResponseText.innerHTML = `
                    <p>Okay, for your goal: "<strong>${userGoal}</strong>", here are some tailored tips:</p>
                    <ul>
                        <li><strong>Break it Down:</strong> Divide your goal into smaller, manageable steps.</li>
                        <li><strong>Set Milestones:</strong> Celebrate small wins along the way to stay motivated.</li>
                        <li><strong>Seek Knowledge:</strong> Research resources, courses, or mentors related to your goal.</li>
                        <li><strong>Practice Consistently:</strong> Dedicate regular time, even if it's just a little each day.</li>
                        <li><strong>Track Progress:</strong> Keep a journal or use an app to monitor your advancements.</li>
                        <li><strong>Stay Positive:</strong> Visualize success and maintain a growth mindset.</li>
                    </ul>
                    <p>Remember, consistency is key. Good luck!</p>
                `;
                aiResponseArea.classList.remove('hidden');
                showToast('AI tips generated!');
            } else {
                aiResponseArea.classList.add('hidden');
                showToast('Please enter a goal to get tips.', 3000);
            }
        });
    }


    // --- Initialize: Show Home Page by default ---
    const initialPage = document.getElementById('home-page');
    if (initialPage) {
        pageSections.forEach(section => section.classList.add('hidden'));
        initialPage.classList.remove('hidden');
        // Ensure home nav link is active
        document.querySelector('nav ul li a[data-target="home-page"]').classList.add('active');
    }
});
