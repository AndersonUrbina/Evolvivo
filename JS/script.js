const openButton = document.getElementById('open-siderbar-button')
const navbar = document.getElementById('navbar')

const media = window.matchMedia('(max-width: 768px)');

media.addEventListener('change', (e) => updateNavbar(e))

function updateNavbar () {
    const isMobile = e.matches
    console.log(isMobile)
    if (isMobile) {
        navbar.setAttribute('inert', '')
    }
    else {
        //Desktop view
        navbar.removeAttribute('inert')
    }
}
function openSidebar(){
    navbar.classList.add('show')
    openButton.setAttribute('aria-expanded', 'true')
    navbar.removeAttribute('inert')
}
function closeSidebar(){
    navbar.classList.remove('show')
    openButton.setAttribute('aria-expanded', 'false')
    navbar.setAttribute('inert', '')
}

updateNavbar(media)

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
    // NEW: Element for the saved articles grid
    const savedArticlesGrid = document.getElementById('saved-articles-grid');

    // --- Elements for Goals ---
    const newGoalInput = document.getElementById('new-goal-input');
    const newGoalDateInput = document.getElementById('new-goal-date');
    const addGoalBtn = document.getElementById('add-goal-btn');
    const goalsList = document.getElementById('goals-list');
    const activeGoalsCount = document.getElementById('active-goals-count');
    let goals = []; // Initialize goals array

    // --- Data ---
    const articlesData = [
        // (Your article data remains exactly the same)
        { category: 'Habit Building', title: 'The Power of Keystone Habits', description: 'Discover how focusing on one key habit can transform multiple areas of your life.', author: 'Jane Doe', date: 'January 14, 2025', readTime: '5 min read', imageUrl: 'https://images.pexels.com/photos/4964985/pexels-photo-4964985.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1', url: 'https://evolvivo.com/2025/January/Habit-Building/The-Power-of-Keystone-Habits/' },
        { category: 'Goal Setting', title: 'SMART Goals: The Secret to Achievement', description: 'Learn how to set Specific, Measurable, Achievable, Relevant, and Time-bound goals.', author: 'John Smith', date: 'January 19, 2025', readTime: '7 min read', imageUrl: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1', url: 'https://evolvivo.com/2025/January/Goal-Setting/SMART-Goals-The-Secret-to-Achievement/' },
        { category: 'Personal Development', title: 'Mindfulness for a Productive Day', description: 'Incorporate mindfulness techniques to reduce stress and boost focus throughout your day.', author: 'Alice Green', date: 'January 31, 2025', readTime: '6 min read', imageUrl: 'https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1', url: 'https://evolvivo.com/2025/January/Personal-Development/Mindfulness-for-a-Productive-Day/' },
        { category: 'Personal Skills', title: 'The Art of Effective Communication', description: 'Improve your interpersonal skills by mastering active listening and clear expression.', author: 'David Lee', date: 'February 9, 2025', readTime: '8 min read', imageUrl: 'https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1', url: 'https://evolvivo.com/2025/January/Personal-Skills/The-Art-of-Effective-Communication/' },
        { category: 'Productivity', title: 'The Pomodoro Technique: A Guide to Focused Work', description: 'Boost your productivity by breaking down work into focused intervals separated by short breaks.', author: 'Sophia Carter', date: 'February 15, 2025', readTime: '5 min read', imageUrl: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1', url: 'https://evolvivo.com/2025/January/Productivity/The-Pomodoro-Technique-A-Guide-to-Focused-Work/' },
        { category: 'Technology', title: "Demystifying AI: How It's Shaping Our Future", description: "A beginner-friendly overview of Artificial Intelligence and its impact on our daily lives.", author: 'Alex Chen', date: 'March 2, 2025', readTime: '10 min read', imageUrl: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1', url: "https://evolvivo.com/2025/January/Technology/Demystifying-AI-How-It's-Shaping-Our-Future/" },
        { category: 'Personal Finance', title: 'Building Your First Budget: A Step-by-Step Guide', description: 'Take control of your finances with this simple, practical guide to creating a budget that works for you.', author: 'Michael Rodriguez', date: 'January 28, 2025', readTime: '7 min read', imageUrl: 'https://images.pexels.com/photos/6863261/pexels-photo-6863261.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1', url: 'https://evolvivo.com/2025/January/Personal-Finance/Building-Your-First-Budget-A-Step-by-Step-Guide/' },
        { category: 'Health & Wellness', title: "The Science of Sleep: Why It's More Important Than You Think", description: 'Discover the profound effects of quality sleep on your physical and mental health.', author: 'Emily Richards', date: 'February 21, 2025', readTime: '9 min read', imageUrl: 'https://images.pexels.com/photos/3771047/pexels-photo-3771047.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1', url: "https://evolvivo.com/2025/January/Health-&-Wellness/The-Science-of-Sleep-Why-It's-More-Important-Than-You-Think/" },
        { category: 'Career Development', title: 'Navigating a Career Change: From Passion to Profession', description: 'Practical advice and inspiration for successfully transitioning to a new career path.', author: 'Ben Carter', date: 'March 5, 2025', readTime: '8 min read', imageUrl: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1', url: 'https://evolvivo.com/2025/January/Career-Development/Navigating-a-Career-Change-From-Passion-to-Profession/' },
        { category: 'Creativity', title: 'Unlocking Your Creative Potential: Habits of Innovative Minds', description: 'Learn the daily habits and mindsets that can help you generate groundbreaking ideas.', author: 'Olivia Gray', date: 'February 11, 2025', readTime: '6 min read', imageUrl: 'https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1', url: 'https://evolvivo.com/2025/January/Creativity/Unlocking-Your-Creative-Potential-Habits-of-Innovative-Minds/' },
        { category: 'Mindfulness & Well-being', title: 'An Introduction to Mindfulness Meditation', description: 'Simple techniques to reduce stress and increase presence in your everyday life.', author: 'Kenji Tanaka', date: 'January 21, 2025', readTime: '7 min read', imageUrl: 'https://images.pexels.com/photos/2253272/pexels-photo-2253272.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1', url: 'https://evolvivo.com/2025/January/Mindfulness-&-Well-being/An-Introduction-to-Mindfulness-Meditation/' },
        { category: 'Travel', title: 'Sustainable Travel: Exploring the World Responsibly', description: 'Tips on how to minimize your environmental impact and support local communities while you travel.', author: 'Maria Garcia', date: 'February 29, 2025', readTime: '10 min read', imageUrl: 'https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1', url: 'https://evolvivo.com/2025/January/Travel/Sustainable-Travel-Exploring-the-World-Responsibly/' },
        { category: 'Culinary Arts', title: 'Meal Prep Mastery: Healthy Eating Made Easy', description: 'A comprehensive guide to planning and preparing your meals for the week to save time and eat better.', author: 'Liam Wilson', date: 'January 27, 2025', readTime: '6 min read', imageUrl: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1', url: 'https://evolvivo.com/2025/January/Culinary-Arts/Meal-Prep-Mastery-Healthy-Eating-Made-Easy/' },
        { category: 'Leadership', title: 'The Empathetic Leader: Why Compassion is a Superpower', description: 'Explore how empathy builds stronger teams, fosters innovation, and drives success in the modern workplace.', author: 'Aisha Khan', date: 'March 8, 2025', readTime: '8 min read', imageUrl: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1', url: 'https://evolvivo.com/2025/January/Leadership/The-Empathetic-Leader-Why-Compassion-is-a-Superpower/' },
        { category: 'Habits', title: 'The Power of a Morning Routine: Start Your Day with Intention', description: 'Learn how to craft a personalized morning routine that sets you up for a productive and positive day.', author: 'Sarah Jenkins', date: 'February 3, 2025', readTime: '7 min read', imageUrl: 'https://images.pexels.com/photos/3734031/pexels-photo-3734031.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1', url: 'https://evolvivo.com/2025/January/Habits/The-Power-of-a-Morning-Routine-Start-Your-Day-with-Intention/' }
    ];

    // NEW: Array to hold the titles of saved articles
    let savedArticleTitles = [];

    // (Toast function is unchanged)
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
        }
    }

    // --- Article and Bookmark Functions ---
    // NEW: Functions to load and save bookmarks from localStorage
    function loadSavedArticles() {
        const saved = localStorage.getItem('evolvivoSavedArticles');
        savedArticleTitles = saved ? JSON.parse(saved) : [];
    }

    function saveArticlesState() {
        localStorage.setItem('evolvivoSavedArticles', JSON.stringify(savedArticleTitles));
    }

    // MODIFIED: createArticleCard now swaps between 'far' and 'fas' for a true filled icon
    function createArticleCard(article) {
        const isBookmarked = savedArticleTitles.includes(article.title);
        
        // NEW: Determine which icon class to use (far for regular, fas for solid/filled)
        const iconStyleClass = isBookmarked ? 'fas' : 'far';
        const bookmarkedClass = isBookmarked ? 'bookmarked' : '';

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
                        <a href="${article.url || '#'}" target="_blank" rel="noopener noreferrer" class="read-more-link"> Read More<span class="sr-only"> about this article</span> <i class="fas fa-arrow-right"></i></a>
                        
                        <!-- The icon now uses the dynamic style class to be either 'far' or 'fas' -->
                        <i class="${iconStyleClass} fa-bookmark bookmark-icon ${bookmarkedClass}" data-title="${article.title}"></i>
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
    
    // NEW: Function to display only saved articles
    function displaySavedArticles() {
        if (savedArticlesGrid) {
            const savedArticlesData = articlesData.filter(article => savedArticleTitles.includes(article.title));
            if (savedArticlesData.length > 0) {
                displayArticles(savedArticlesData, savedArticlesGrid);
            } else {
                savedArticlesGrid.innerHTML = `<p style="
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
">You haven't saved any articles yet. Click the bookmark icon on an article to save it here!</p>`;
            }
        }
    }
    
    // NEW: Event listener for bookmarking (using event delegation)
    document.addEventListener('click', (e) => {
        if (e.target.matches('.bookmark-icon')) {
            const icon = e.target;
            const articleTitle = icon.dataset.title;

            if (savedArticleTitles.includes(articleTitle)) {
                // Remove from saved
                savedArticleTitles = savedArticleTitles.filter(title => title !== articleTitle);
                icon.classList.remove('bookmarked');
                showToast('Article removed from saved.');
            } else {
                // Add to saved
                savedArticleTitles.push(articleTitle);
                icon.classList.add('bookmarked');
                showToast('Article saved!');
            }
            
            saveArticlesState(); // Save the new state
            // Re-render all article grids to reflect the change everywhere
            displayArticles(articlesData, allArticlesGrid);
            // MODIFIED: Show the last 10 articles
            displayArticles(articlesData.slice(-10), featuredArticlesGrid);
            displaySavedArticles();
        }
    });


    // (Article search logic is unchanged)
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
            if (event.key === "Enter") articleSearchBtn.click();
        });
    }


    // --- Goals Functions ---
    // (All goals functions are unchanged)
    function loadGoals() {
        const savedGoals = localStorage.getItem('evolvivoGoals');
        goals = savedGoals ? JSON.parse(savedGoals) : [{ text: 'Explore the features of Evolvivo', date: new Date().toISOString().split('T')[0], completed: false }];
    }
    function saveGoals() {
        localStorage.setItem('evolvivoGoals', JSON.stringify(goals));
    }
    // ... rest of goal functions ...
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

    // --- Initial Page Setup ---
    function init() {
        // (Initial page setup is unchanged)
        const initialPage = document.getElementById('home-page');
        if (initialPage) {
            pageSections.forEach(section => section.classList.add('hidden'));
            initialPage.classList.remove('hidden');
            const homeLink = document.querySelector('nav ul li a[data-target="home-page"]');
            if (homeLink) homeLink.classList.add('active');
        }
        
        loadGoals();
        renderGoals();
        
        // NEW: Load saved articles state and render all article sections on startup
        loadSavedArticles();
        if (allArticlesGrid) displayArticles(articlesData, allArticlesGrid);
        // MODIFIED: Show the last 10 articles, with the newest ones first
        if (featuredArticlesGrid) displayArticles(articlesData.slice(-10).reverse(), featuredArticlesGrid);
        
        displaySavedArticles();
    }
    
    init();

}); // End of DOMContentLoaded

function showForm(formId) {
    document.querySelectorAll('.wrapper').forEach(wrapper => formId.classList.remove('active'));
    document.getElementById(formId).classList.add('active');
}
window.dataLayer = window.dataLayer || [];
	    function gtag(){dataLayer.push(arguments);}
	    gtag('js', new Date());

	    gtag('config', 'G-QTB83RBKB6');