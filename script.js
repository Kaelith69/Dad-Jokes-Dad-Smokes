const JOKE_FILE = 'dad_jokes_formatted.txt';
const STORAGE_KEY = 'dadJokes_premium_v1';

// Elements
const jokeText = document.getElementById('joke-text');
const nextBtn = document.getElementById('next-btn');
const copyBtn = document.getElementById('copy-btn');
const tweetBtn = document.getElementById('tweet-btn');
const addBtn = document.getElementById('add-btn');
const newJokeInput = document.getElementById('new-joke-input');
const toast = document.getElementById('toast');

// State
let jokes = [];
let currentJoke = "";

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadJokes();

    // Event Listeners
    nextBtn.addEventListener('click', showRandomJoke);
    copyBtn.addEventListener('click', copyToClipboard);
    tweetBtn.addEventListener('click', tweetJoke);
    addBtn.addEventListener('click', addUserJoke);
    newJokeInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addUserJoke();
    });
});

async function loadJokes() {
    try {
        const response = await fetch(JOKE_FILE);
        if (!response.ok) throw new Error('Failed to load jokes file');

        const text = await response.text();
        const fileJokes = text.split('\n').filter(line => line.trim().length > 0);

        const storedJokes = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        jokes = [...fileJokes, ...storedJokes];

        if (jokes.length === 0) {
            jokes = ["Why did the developer go broke? Because he used up all his cache."];
        }

        showRandomJoke();
    } catch (error) {
        console.error('Error loading jokes:', error);
        jokes = ["I'm reading a book on anti-gravity. It's impossible to put down!"]; // Fallback
        showRandomJoke();
    }
}

function showRandomJoke() {
    // Animate out
    jokeText.style.opacity = '0';
    jokeText.style.transform = 'scale(0.95)';
    jokeText.style.transition = 'all 0.2s ease';

    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * jokes.length);
        currentJoke = jokes[randomIndex];

        // Clean up quotes if present in the data (since we have UI quotes)
        let cleanJoke = currentJoke;
        // Optionally remove surrounding quotes if your data has them, 
        // but the data seems to vary. We'll display as is for now,
        // or simple trim.

        jokeText.textContent = cleanJoke;

        // Animate in
        jokeText.style.opacity = '1';
        jokeText.style.transform = 'scale(1)';
    }, 200);
}

function copyToClipboard() {
    if (!currentJoke) return;

    navigator.clipboard.writeText(currentJoke).then(() => {
        showToast("Joke copied to clipboard!");
    }, (err) => {
        console.error('Could not copy text: ', err);
        showToast("Failed to copy.");
    });
}

function tweetJoke() {
    if (!currentJoke) return;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(currentJoke)} 🤣 #DadJokes`;
    window.open(twitterUrl, '_blank');
}

function addUserJoke() {
    const joke = newJokeInput.value.trim();
    if (joke) {
        const storedJokes = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        storedJokes.push(joke);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(storedJokes));

        jokes.push(joke);
        newJokeInput.value = '';
        showToast("Joke added successfully!");
    } else {
        showToast("Please enter a joke first!");
    }
}

function showToast(message) {
    toast.textContent = message;
    toast.className = "show";
    setTimeout(() => { toast.className = toast.className.replace("show", ""); }, 3000);
}
