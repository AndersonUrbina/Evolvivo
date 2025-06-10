// Lista de frases con formato { quote, author }
const inspirationalQuotes = [
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
    { quote: "The mind is everything. What you think you become.", author: "Buddha" },
    { quote: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
    { quote: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { quote: "Act as if what you do makes a difference. It does.", author: "William James" },
    { quote: "The journey of a thousand miles begins with a single step.", author: "Lao Tzu" },
    { quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
    { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { quote: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi" },
    { quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
    { quote: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
    { quote: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
    { quote: "Our greatest glory is not in never falling, but in rising every time we fall.", author: "Confucius" },
    { quote: "It is never too late to be what you might have been.", author: "George Eliot" },
    { quote: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { quote: "The secret of getting ahead is getting started.", author: "Mark Twain" },
    { quote: "If you want to lift yourself up, lift up someone else.", author: "Booker T. Washington" },
    { quote: "The best revenge is massive success.", author: "Frank Sinatra" },
    { quote: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas A. Edison" },
    { quote: "A person who never made a mistake never tried anything new.", author: "Albert Einstein" },
    { quote: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
    { quote: "Get busy living or get busy dying.", author: "Stephen King" },
    { quote: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    { quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.", author: "Thomas A. Edison" },
    { quote: "If you want to live a happy life, tie it to a goal, not to people or things.", author: "Albert Einstein" },
    { quote: "Never let the fear of striking out keep you from playing the game.", author: "Babe Ruth" },
    { quote: "Money and success don’t change people; they merely amplify what is already there.", author: "Will Smith" },
    { quote: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.", author: "Steve Jobs" },
    { quote: "Not how long, but how well you have lived is the main thing.", author: "Seneca" },
    { quote: "If life were predictable it would cease to be life, and be without flavor.", author: "Eleanor Roosevelt" },
    { quote: "The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.", author: "Henry Ford" },
    { quote: "In order to write about life first you must live it.", author: "Ernest Hemingway" },
    { quote: "The big lesson in life, baby, is never be scared of anyone or anything.", author: "Frank Sinatra" },
    { quote: "Curiosity about life in all of its aspects, I think, is still the secret of great creative people.", author: "Leo Burnett" },
    { quote: "Life is not a problem to be solved, but a reality to be experienced.", author: "Soren Kierkegaard" },
    { quote: "The unexamined life is not worth living.", author: "Socrates" },
    { quote: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
    { quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { quote: "Don't let yesterday take up too much of today.", author: "Will Rogers" },
    { quote: "You learn more from failure than from success. Don’t let it stop you. Failure builds character.", author: "Unknown" },
    { quote: "It’s not whether you get knocked down, it’s whether you get up.", author: "Vince Lombardi" },
    { quote: "If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.", author: "Steve Jobs" },
    { quote: "People who are crazy enough to think they can change the world, are the ones who do.", author: "Rob Siltanen" },
    { quote: "Failure will never overtake me if my determination to succeed is strong enough.", author: "Og Mandino" },
    { quote: "We may encounter many defeats but we must not be defeated.", author: "Maya Angelou" },
    { quote: "Knowing is not enough; we must apply. Willing is not enough; we must do.", author: "Johann Wolfgang von Goethe" },
    { quote: "Imagine your life is perfect in every respect; what would it look like?", author: "Brian Tracy" },
    { quote: "We generate fears while we sit. We overcome them by action.", author: "Dr. Henry Link" },
    { quote: "Whether you think you can or think you can’t, you’re right.", author: "Henry Ford" },
    { quote: "The man who has confidence in himself gains the confidence of others.", author: "Hasidic Proverb" },
    { quote: "Creativity is intelligence having fun.", author: "Albert Einstein" },
    { quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
    { quote: "Do one thing every day that scares you.", author: "Eleanor Roosevelt" },
    { quote: "It's no use going back to yesterday, because I was a different person then.", author: "Lewis Carroll" },
    { quote: "Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers.", author: "Socrates" },
    { quote: "Do what you feel in your heart to be right – for you’ll be criticized anyway.", author: "Eleanor Roosevelt" },
    { quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { quote: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
    { quote: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde" },
    { quote: "To succeed in life, you need two things: ignorance and confidence.", author: "Mark Twain" },
    { quote: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.", author: "Ralph Waldo Emerson" },
    { quote: "Life is a flower of which love is the honey.", author: "Victor Hugo" },
    { quote: "Keep smiling, because life is a beautiful thing and there's so much to smile about.", author: "Marilyn Monroe" },
    { quote: "Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship.", author: "Buddha" },
    { quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
    { quote: "Life is trying things to see if they work.", author: "Ray Bradbury" },
    { quote: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
    { quote: "Love the life you live. Live the life you love.", author: "Bob Marley" },
    { quote: "Life itself is the most wonderful fairy tale.", author: "Hans Christian Andersen" },
    { quote: "May you live all the days of your life.", author: "Jonathan Swift" },
    { quote: "Life is made of ever so many partings welded together.", author: "Charles Dickens" },
    { quote: "Your Vibe Attracts Your Tribe.", author: "Unknown" },
    { quote: "Every moment is a fresh beginning.", author: "T.S. Eliot" },
    { quote: "Die with memories, not dreams.", author: "Unknown" },
    { quote: "Aspire to inspire before we expire.", author: "Eugene Bell Jr." },
    { quote: "Everything you can imagine is real.", author: "Pablo Picasso" },
    { quote: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
    { quote: "Whatever you do, do it well.", author: "Walt Disney" },
    { quote: "All limitations are self-imposed.", author: "Oliver Wendell Holmes" },
    { quote: "Tough times never last but tough people do.", author: "Robert H. Schuller" },
    { quote: "Problems are not stop signs, they are guidelines.", author: "Robert H. Schuller" },
    { quote: "One day the people that don’t even believe in you will tell everyone how they met you.", author: "Johnny Depp" },
    { quote: "If I’m gonna tell a real story, I’m gonna start with my name.", author: "Kendrick Lamar" },
    { quote: "If you tell the truth you don’t have to remember anything.", author: "Mark Twain" },
    { quote: "Have enough courage to start and enough heart to finish.", author: "Jessica N. S. Yourko" },
    { quote: "Hate comes from intimidation, love comes from appreciation.", author: "Tyga" },
    { quote: "I could agree with you but then we’d both be wrong.", author: "Harvey Specter" },
    { quote: "Oh, the things you can find, if you don’t stay behind.", author: "Dr. Seuss" },
    { quote: "Determine your priorities and focus on them.", author: "Eileen McDargh" },
    { quote: "Be so good they can’t ignore you.", author: "Steve Martin" },
    { quote: "Dream as if you’ll live forever, live as if you’ll die today.", author: "James Dean" },
    { quote: "Yesterday you said tomorrow. Just do it.", author: "Nike" },
    { quote: "I don’t need it to be easy, I need it to be worth it.", author: "Lil Wayne" },
    { quote: "Never regret anything that made you smile.", author: "Mark Twain" },
    { quote: "Change the game, don’t let the game change you.", author: "Macklemore" },
    { quote: "It is better to live one day as a lion, than a thousand days as a lamb.", author: "Roman Proverb" },
    { quote: "The meaning of life is to give life meaning.", author: "Viktor Frankl" },
    { quote: "The only way out of the labyrinth of suffering is to forgive.", author: "John Green" },
    { quote: "When you stop chasing the wrong things, you give the right things a chance to catch you.", author: "Lolly Daskal" },
    { quote: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
    { quote: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
    { quote: "Eighty percent of success is showing up.", author: "Woody Allen" },
    { quote: "Your talent determines what you can do. Your motivation determines how much you’re willing to do. Your attitude determines how well you do it.", author: "Lou Holtz" },
    { quote: "Go confidently in the direction of your dreams. Live the life you've imagined.", author: "Henry David Thoreau" },
    { quote: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { quote: "The only true wisdom is in knowing you know nothing.", author: "Socrates" },
    { quote: "That which does not kill us makes us stronger.", author: "Friedrich Nietzsche" },
    { quote: "I think, therefore I am.", author: "René Descartes" },
    { quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
    { quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", author: "Aristotle" },
    { quote: "The unhappiest people in this world, are those who care the most about what other people think.", author: "C. JoyBell C." },
    { quote: "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.", author: "Charles Darwin" },
    { quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.", author: "Helen Keller" },
    { quote: "Keep your face always toward the sunshine, and shadows will fall behind you.", author: "Walt Whitman" },
    { quote: "The only person you are destined to become is the person you decide to be.", author: "Ralph Waldo Emerson" },
    { quote: "Go forth and set the world on fire.", author: "Ignatius of Loyola" },
    { quote: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.", author: "Dr. Seuss" },
    { quote: "The two most important days in your life are the day you are born and the day you find out why.", author: "Mark Twain" },
    { quote: "Life is either a daring adventure or nothing at all.", author: "Helen Keller" },
    { quote: "To dare is to lose one's footing momentarily. To not dare is to lose oneself.", author: "Soren Kierkegaard" },
    { quote: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.", author: "Jimmy Dean" },
    { quote: "Nothing is impossible, the word itself says 'I'm possible'!", author: "Audrey Hepburn" },
    { quote: "Perfection is not attainable, but if we chase perfection we can catch excellence.", author: "Vince Lombardi" },
    { quote: "The power of imagination makes us infinite.", author: "John Muir" },
    { quote: "Try to be a rainbow in someone's cloud.", author: "Maya Angelou" },
    { quote: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama" },
    { quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.", author: "Oprah Winfrey" },
    { quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.", author: "James Cameron" },
    { quote: "You must do the things you think you cannot do.", author: "Eleanor Roosevelt" },
    { quote: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
    { quote: "Do not let what you cannot do interfere with what you can do.", author: "John Wooden" },
    { quote: "The question isn’t who is going to let me; it’s who is going to stop me.", author: "Ayn Rand" },
    { quote: "Build your own dreams, or someone else will hire you to build theirs.", author: "Farrah Gray" },
    { quote: "The best way to find yourself is to lose yourself in the service of others.", author: "Mahatma Gandhi" },
    { quote: "If you can dream it, you can achieve it.", author: "Zig Ziglar" },
    { quote: "Don't be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
    { quote: "No masterpiece was ever created by a lazy artist.", author: "Anonymous" },
    { quote: "Happiness is a butterfly, which when pursued, is always beyond your grasp, but which, if you will sit down quietly, may alight upon you.", author: "Nathaniel Hawthorne" },
    { quote: "You don't have to be great to start, but you have to start to be great.", author: "Zig Ziglar" },
    { quote: "The harder the conflict, the more glorious the triumph.", author: "Thomas Paine" },
    { quote: "I attribute my success to this: I never gave or took any excuse.", author: "Florence Nightingale" },
    { quote: "The mind is its own place, and in itself can make a heaven of hell, a hell of heaven.", author: "John Milton" },
    { quote: "You must not lose faith in humanity. Humanity is an ocean; if a few drops of the ocean are dirty, the ocean does not become dirty.", author: "Mahatma Gandhi" },
    { quote: "What seems to us as bitter trials are often blessings in disguise.", author: "Oscar Wilde" },
    { quote: "The starting point of all achievement is desire.", author: "Napoleon Hill" },
    { quote: "Success is the sum of small efforts, repeated day-in and day-out.", author: "Robert Collier" },
    { quote: "All progress takes place outside the comfort zone.", author: "Michael John Bobak" },
    { quote: "Courage is resistance to fear, mastery of fear – not absence of fear.", author: "Mark Twain" },
    { quote: "Only put off until tomorrow what you are willing to die having left undone.", author: "Pablo Picasso" },
    { quote: "The difference between ordinary and extraordinary is that little extra.", author: "Jimmy Johnson" },
    { quote: "Your positive action combined with positive thinking results in success.", author: "Shiv Khera" },
    { quote: "The secret to success is to know something nobody else knows.", author: "Aristotle Onassis" },
    { quote: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson" },
    { quote: "Don't be distracted by criticism. Remember – the only taste of success some people get is to take a bite out of you.", author: "Zig Ziglar" },
    { quote: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
    { quote: "The road to success and the road to failure are almost exactly the same.", author: "Colin R. Davis" },
    { quote: "There are no secrets to a success. It is the result of preparation, hard work, and learning from failure.", author: "Colin Powell" },
    { quote: "A successful man is one who can lay a firm foundation with the bricks others have thrown at him.", author: "David Brinkley" },
    { quote: "To be successful, you must accept all challenges that come your way. You can't just accept the ones you like.", author: "Mike Gafka" },
    { quote: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
    { quote: "Success is liking yourself, liking what you do, and liking how you do it.", author: "Maya Angelou" },
    { quote: "The price of success is hard work, dedication to the job at hand, and the determination that whether we win or lose, we have applied the best of ourselves to the task at hand.", author: "Vince Lombardi" },
    { quote: "Don't aim for success if you want it; just do what you love and believe in, and it will come naturally.", author: "David Frost" },
    { quote: "The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.", author: "Mark Caine" },
    { quote: "Success is getting what you want. Happiness is wanting what you get.", author: "Dale Carnegie" },
    { quote: "Success is to be measured not so much by the position that one has reached in life as by the obstacles which he has overcome.", author: "Booker T. Washington" },
    { quote: "If A is a success in life, then A equals x plus y plus z. Work is x; y is play; and z is keeping your mouth shut.", author: "Albert Einstein" },
    { quote: "The ladder of success is best climbed by stepping on the rungs of opportunity.", author: "Ayn Rand" },
    { quote: "Success is where preparation and opportunity meet.", author: "Bobby Unser" },
    { quote: "Victory is sweetest when you've known defeat.", author: "Malcolm S. Forbes" },
    { quote: "Action is the foundational key to all success.", author: "Pablo Picasso" },
    { quote: "The best years of your life are the ones in which you decide your problems are your own.", author: "Albert Ellis" },
    { quote: "I cannot give you the formula for success, but I can give you the formula for failure--It is: Try to please everybody.", author: "Herbert Bayard Swope" },
    { quote: "You know you are on the road to success if you would do your job, and not be paid for it.", author: "Oprah Winfrey" },
    { quote: "Procrastination is the thief of time.", author: "Edward Young" },
    { quote: "The future depends on what you do today.", author: "Mahatma Gandhi" },
    { quote: "Well done is better than well said.", author: "Benjamin Franklin" },
    { quote: "Either you run the day, or the day runs you.", author: "Jim Rohn" },
    { quote: "The only way to achieve the impossible is to believe it is possible.", author: "Charles Kingsleigh (Alice in Wonderland)" },
    { quote: "What you lack in talent can be made up with desire, hustle and giving 110% all the time.", author: "Don Zimmer" },
    { quote: "Do not wait to strike till the iron is hot; but make it hot by striking.", author: "William Butler Yeats" },
    { quote: "Great minds discuss ideas; average minds discuss events; small minds discuss people.", author: "Eleanor Roosevelt" },
    { quote: "A smooth sea never made a skilled sailor.", author: "Franklin D. Roosevelt" },
    { quote: "To accomplish great things, we must not only act, but also dream; not only plan, but also believe.", author: "Anatole France" },
    { quote: "The difference between a stumbling block and a stepping stone is how high you raise your foot.", author: "Benny Lewis" },
    { quote: "Opportunity does not knock, it presents itself when you beat down the door.", author: "Kyle Chandler" },
    { quote: "It's not the load that breaks you down, it's the way you carry it.", author: "Lou Holtz" },
    { quote: "The miracle is not to fly in the air, or to walk on the water, but to walk on the earth.", author: "Chinese Proverb" },
    { quote: "Fear is a reaction. Courage is a decision.", author: "Winston Churchill" },
    { quote: "The world is changed by your example, not by your opinion.", author: "Paulo Coelho" },
    { quote: "If you want to achieve greatness stop asking for permission.", author: "Anonymous" },
    { quote: "Things work out best for those who make the best of how things work out.", author: "John Wooden" },
    { quote: "To live a creative life, we must lose our fear of being wrong.", author: "Anonymous" },
    { quote: "If you are not willing to risk the usual you will have to settle for the ordinary.", author: "Jim Rohn" },
    { quote: "Trust because you are willing to accept the risk, not because it's safe or certain.", author: "Anonymous" },
    { quote: "Take up one idea. Make that one idea your life - think of it, dream of it, live on that idea.", author: "Swami Vivekananda" },
    { quote: "All our dreams can come true if we have the courage to pursue them.", author: "Walt Disney" },
    { quote: "Good things come to people who wait, but better things come to those who go out and get them.", author: "Anonymous" },
    { quote: "If you do what you always did, you will get what you always got.", author: "Anonymous" },
    { quote: "Just when the caterpillar thought the world was ending, he turned into a butterfly.", author: "Proverb" },
    { quote: "Successful entrepreneurs are givers and not takers of positive energy.", author: "Anonymous" },
    { quote: "Whenever you see a successful person you only see the public glories, never the private sacrifices to reach them.", author: "Vaibhav Shah" },
    { quote: "Opportunities don't happen, you create them.", author: "Chris Grosser" },
    { quote: "Great ventures start from small beginnings.", author: "Demosthenes" },
    { quote: "It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.", author: "Ann Landers" },
    { quote: "If you are not willing to learn, no one can help you. If you are determined to learn, no one can stop you.", author: "Zig Ziglar" },
    { quote: "A comfort zone is a beautiful place, but nothing ever grows there.", author: "Anonymous" },
    { quote: "You don't drown by falling in the water; you drown by staying there.", author: "Ed Cole" },
    { quote: "Don't let someone else's opinion of you become your reality.", author: "Les Brown" },
    { quote: "If you're going through hell, keep going.", author: "Winston Churchill" },
    { quote: "Don't raise your voice, improve your argument.", author: "Anonymous" },
    { quote: "What defines us is how well we rise after falling.", author: "Anonymous" },
    { quote: "The best way to appreciate your job is to imagine yourself without one.", author: "Oscar Wilde" },
    { quote: "A goal without a plan is just a wish.", author: "Antoine de Saint-Exupéry" },
    { quote: "Work hard in silence, let your success be your noise.", author: "Frank Ocean" },
    { quote: "The harder you work for something, the greater you'll feel when you achieve it.", author: "Anonymous" },
    { quote: "Dream bigger. Do bigger.", author: "Anonymous" },
    { quote: "Don't stop when you're tired. Stop when you're done.", author: "Anonymous" },
    { quote: "Wake up with determination. Go to bed with satisfaction.", author: "Anonymous" },
    { quote: "Do something today that your future self will thank you for.", author: "Sean Patrick Flanery" },
    { quote: "Little things make big days.", author: "Anonymous" },
    { quote: "It's going to be hard, but hard does not mean impossible.", author: "Anonymous" },
    { quote: "Don't wait for opportunity. Create it.", author: "George Bernard Shaw" },
    { quote: "Sometimes we're tested not to show our weaknesses, but to discover our strengths.", author: "Anonymous" },
    { quote: "The key to success is to focus on goals, not obstacles.", author: "Anonymous" },
    { quote: "Dream it. Believe it. Build it.", author: "Anonymous" },
    { quote: "The happiness of your life depends upon the quality of your thoughts.", author: "Marcus Aurelius" },
    { quote: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
    { quote: "To improve is to change; to be perfect is to change often.", author: "Winston Churchill" },
    { quote: "Our intention creates our reality.", author: "Wayne Dyer" },
    { quote: "Be faithful to that which exists within yourself.", author: "André Gide" },
    { quote: "The creation of a thousand forests is in one acorn.", author: "Ralph Waldo Emerson" },
    { quote: "He who has a why to live can bear almost any how.", author: "Friedrich Nietzsche" },
    { quote: "What the mind can conceive and believe, it can achieve.", author: "Napoleon Hill" },
    { quote: "Strive for progress, not perfection.", author: "Anonymous" },
    { quote: "It always seems impossible until it's done.", author: "Nelson Mandela" },
    { quote: "Keep your eyes on the stars, and your feet on the ground.", author: "Theodore Roosevelt" },
    { quote: "Change your thoughts and you change your world.", author: "Norman Vincent Peale" },
    { quote: "Aim for the moon. If you miss, you may hit a star.", author: "W. Clement Stone" },
    { quote: "What you do today can improve all your tomorrows.", author: "Ralph Marston" },
    { quote: "A creative man is motivated by the desire to achieve, not by the desire to beat others.", author: "Ayn Rand" },
    { quote: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
    { quote: "We must let go of the life we have planned, so as to accept the one that is waiting for us.", author: "Joseph Campbell" },
    { quote: "Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.", author: "Roy T. Bennett" },
    { quote: "I am not a product of my circumstances. I am a product of my decisions.", author: "Stephen Covey" },
    { quote: "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.", author: "Winston Churchill" },
    { quote: "Experience is a hard teacher because she gives the test first, the lesson afterwards.", author: "Vernon Sanders Law" },
    { quote: "To know how much there is to know is the beginning of learning to live.", author: "Dorothy West" },
    { quote: "Goal setting is the secret to a compelling future.", author: "Tony Robbins" },
    { quote: "Concentrate all your thoughts upon the work in hand. The sun's rays do not burn until brought to a focus.", author: "Alexander Graham Bell" },
    { quote: "When we strive to become better than we are, everything around us becomes better too.", author: "Paulo Coelho" },
    { quote: "Opportunity is missed by most people because it is dressed in overalls and looks like work.", author: "Thomas Edison" },
    { quote: "The only place where success comes before work is in the dictionary.", author: "Vidal Sassoon" },
    { quote: "There are no traffic jams along the extra mile.", author: "Roger Staubach" },
    { quote: "You become what you believe.", author: "Oprah Winfrey" },
    { quote: "I would rather die of passion than of boredom.", author: "Vincent van Gogh" },
    { quote: "A truly rich man is one whose children run into his arms when his hands are empty.", author: "Unknown" },
    { quote: "It is not what you look at that matters, it is what you see.", author: "Henry David Thoreau" },
    { quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.", author: "Mahatma Gandhi" },
    { quote: "Do not take life too seriously. You will never get out of it alive.", author: "Elbert Hubbard" },
    { quote: "Everything has beauty, but not everyone sees it.", author: "Confucius" },
    { quote: "The best way to make your dreams come true is to wake up.", author: "Paul Valery" },
    { quote: "If you want to fly, give up everything that weighs you down.", author: "Buddha" },
    { quote: "Doubt kills more dreams than failure ever will.", author: "Suzy Kassem" },
    { quote: "Life is a song - sing it. Life is a game - play it. Life is a challenge - meet it. Life is a dream - realize it. Life is a sacrifice - offer it. Life is love - enjoy it.", author: "Sai Baba" },
    { quote: "The brave man is not he who does not feel afraid, but he who conquers that fear.", author: "Nelson Mandela" },
    { quote: "The only thing necessary for the triumph of evil is for good men to do nothing.", author: "Edmund Burke" },
    { quote: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
    { quote: "It’s not about how hard you can hit; it’s about how hard you can get hit and keep moving forward.", author: "Rocky Balboa (Sylvester Stallone)" },
    { quote: "Small deeds done are better than great deeds planned.", author: "Peter Marshall" },
    { quote: "Wisdom is not a product of schooling but of the lifelong attempt to acquire it.", author: "Albert Einstein" },
    { quote: "Live out of your imagination, not your history.", author: "Stephen Covey" },
    { quote: "The master has failed more times than the beginner has even tried.", author: "Stephen McCranie" },
    { quote: "A year from now you may wish you had started today.", author: "Karen Lamb" },
    { quote: "The reason we struggle with insecurity is because we compare our behind-the-scenes with everyone else’s highlight reel.", author: "Steven Furtick" },
    { quote: "Somewhere, something incredible is waiting to be known.", author: "Carl Sagan" },
    { quote: "Don't worry about failures, worry about the chances you miss when you don't even try.", author: "Jack Canfield" },
    { quote: "The greatest discovery of all time is that a person can change his future by merely changing his attitude.", author: "Oprah Winfrey" },
    { quote: "It's fine to celebrate success but it is more important to heed the lessons of failure.", author: "Bill Gates" },
    { quote: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
    { quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein" }
];

// --- Helper Functions ---
function getDayOfYear(date = new Date()) {
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = (date - start) + ((start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000);
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
}

function getQuoteForDay(day) {
    if (inspirationalQuotes.length === 0) {
        return { quote: "No inspirational quotes available.", author: "" };
    }
    const quoteIndex = (day - 1) % inspirationalQuotes.length;
    return inspirationalQuotes[quoteIndex];
}

// --- Main Function to set the quote and sharing links ---
function setDailyInspiration() {
    const quoteElement = document.getElementById("daily-quote");
    const attributionElement = document.getElementById("quote-author");

    if (!quoteElement || !attributionElement) {
        console.error("The elements #daily-quote or #quote-author were not found in the HTML. Please check your IDs.");
        return;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const requestedDay = parseInt(urlParams.get('day'), 10);

    const today = new Date();
    const currentDayOfYear = getDayOfYear(today);
    const dayToShow = (requestedDay > 0 && requestedDay <= 366) ? requestedDay : currentDayOfYear;
    
    const selectedQuote = getQuoteForDay(dayToShow);

    quoteElement.textContent = `"${selectedQuote.quote}"`;
    attributionElement.textContent = `— ${selectedQuote.author}`;

    // --- Generate and set the sharing links ---
    const shareText = `"${selectedQuote.quote}" — ${selectedQuote.author}`;
    const encodedShareText = encodeURIComponent(shareText);
    
    const permalink = `https://evolvivo.com?day=${dayToShow}`;
    const encodedPermalink = encodeURIComponent(permalink);

    const shareTwitter = document.getElementById("share-twitter");
    if (shareTwitter) {
        shareTwitter.href = `https://twitter.com/intent/tweet?text=${encodedShareText}&url=${encodedPermalink}`;
    }

    const shareFacebook = document.getElementById("share-facebook");
    if (shareFacebook) {
        // *** FIX IS HERE ***
        // Corrected the broken link parameter.
        shareFacebook.href = `https://www.facebook.com/sharer/sharer.php?u=${encodedPermalink}"e=${encodedShareText}`;
    }

    const shareLinkedin = document.getElementById("share-linkedin");
    if (shareLinkedin) {
        shareLinkedin.href = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedPermalink}`;
    }

    const shareWhatsapp = document.getElementById("share-whatsapp");
    if (shareWhatsapp) {
        const whatsappText = encodeURIComponent(`${shareText} \n\nSee quote: ${permalink}`);
        shareWhatsapp.href = `https://api.whatsapp.com/send?text=${whatsappText}`;
    }
}

// Execute the function when the DOM is completely loaded.
document.addEventListener("DOMContentLoaded", setDailyInspiration);
