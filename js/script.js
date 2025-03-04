// Navigate to a Random Page
function navigateToRandomPage() {
    const pages = ['pages/page1.html', 'pages/page2.html'];
    const randomPage = pages[Math.floor(Math.random() * pages.length)];
    window.location.href = randomPage;
}

// Show Random Alert
function showAlert() {
    const messages = [
        "You've unleashed the chaos!",
        "Surprise! Nothing happened.",
        "Are you bored yet?",
        "Chaos says hello!",
        "Did you expect more?"
    ];
    alert(messages[Math.floor(Math.random() * messages.length)]);
}

// Change Background Color
function changeBackground() {
    document.body.classList.toggle('fun-bg');
}
