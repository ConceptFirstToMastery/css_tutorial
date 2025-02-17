// Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark")
    ? "☀️"
    : "🌙";
});

// Fetch AI News
async function fetchNews() {
  const response = await fetch(
    "https://newsapi.org/v2/everything?q=artificial%20intelligence&apiKey=43a32281832c4846b63647935650fcb8"
  );
  const data = await response.json();

  const featuredNews = document.getElementById("featured-news");
  const newsList = document.getElementById("news-list");

  // Display Featured News
  if (data.articles.length > 0) {
    featuredNews.innerHTML = `
            <h3>${data.articles[0].title}</h3>
            <p>${data.articles[0].description}</p>
            <a href="${data.articles[0].url}" target="_blank">Read more</a>
        `;
  }

  // Display Latest News
  data.articles.slice(1, 5).forEach((article) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<a href="${article.url}" target="_blank">${article.title}</a>`;
    newsList.appendChild(listItem);
  });
}

fetchNews();
