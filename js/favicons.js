const pageTitles = [
    "EntropyX: Chaos Lab - Chaos Lab",
];

const emojis = ["🔮", "✨", "👁️", "🌠", "🗝️", "🎲", "📚", "🎵", "📖", "😂", "🏈", "🧩", "✈️", "📊", "🍳", "💡", "🔑", "🧭", "🔭", "🌟"];

function setRandomFavicon() {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    const randomEmoji = emojis[randomIndex];
    const titleIndex = Math.floor(Math.random() * pageTitles.length);
    const randomTitle = pageTitles[titleIndex];

    // Update the page title
    document.getElementById('pageTitle').innerText = randomTitle;

    // Update the favicon
    const faviconLink = document.querySelector("link[rel='icon']");
    faviconLink.href = `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${randomEmoji}</text></svg>`;
}
window.onload = setRandomFavicon;
setInterval(setRandomFavicon, 20000); // Change every 5 seconds