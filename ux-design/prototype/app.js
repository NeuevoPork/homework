const recommendations = [
  {
    title: "Michael Clayton",
    meta: "2007 • 1h 59m • Legal Thriller • R",
    provider: "Max",
    imdb: "7.2",
    letterboxd: "3.7",
    synopsis:
      "A “fixer” at a prestigious law firm is pulled into a corporate corruption case that could implode his career.",
    why: [
      "You rate cerebral thrillers 8.1/10 on average.",
      "Shares tone with Zodiac and Sicario.",
      "Strong critic consensus with low mainstream fatigue."
    ],
    lane: [
      ["Night Moves", "Neo-noir, 1h 54m"],
      ["The Insider", "Journalistic tension"],
      ["A Most Wanted Man", "Spy realism"],
      ["Margin Call", "One-night pressure"],
      ["Enemy of the State", "Safe pick"]
    ]
  },
  {
    title: "Thief",
    meta: "1981 • 2h 03m • Crime • R",
    provider: "Criterion",
    imdb: "7.4",
    letterboxd: "4.0",
    synopsis:
      "A meticulous safecracker planning retirement is pulled into one final, dangerous job by the Chicago mob.",
    why: [
      "You consistently rate mood-forward crime films highly.",
      "Matches your 80s auteur preference cluster.",
      "High craft alignment: score, cinematography, pacing."
    ],
    lane: [
      ["Manhunter", "Stylized procedural"],
      ["The Long Good Friday", "UK crime classic"],
      ["Blow Out", "Paranoia + craft"],
      ["To Live and Die in L.A.", "Neon chase energy"],
      ["The Driver", "Minimalist cool"]
    ]
  }
];

let index = 0;

const refs = {
  title: document.getElementById("movieTitle"),
  meta: document.getElementById("movieMeta"),
  providerBadge: document.getElementById("providerBadge"),
  providerLabel: document.getElementById("providerLabel"),
  imdb: document.getElementById("imdbScore"),
  letterboxd: document.getElementById("letterboxdScore"),
  synopsis: document.getElementById("movieSynopsis"),
  whyList: document.getElementById("whyList"),
  laneContainer: document.getElementById("laneContainer")
};

function render(movie) {
  refs.title.textContent = movie.title;
  refs.meta.textContent = movie.meta;
  refs.providerBadge.textContent = movie.provider;
  refs.providerLabel.textContent = movie.provider;
  refs.imdb.textContent = movie.imdb;
  refs.letterboxd.textContent = movie.letterboxd;
  refs.synopsis.textContent = movie.synopsis;

  refs.whyList.innerHTML = "";
  movie.why.forEach((point) => {
    const li = document.createElement("li");
    li.textContent = point;
    refs.whyList.appendChild(li);
  });

  refs.laneContainer.innerHTML = "";
  movie.lane.forEach(([name, sub]) => {
    const div = document.createElement("article");
    div.className = "lane-item";
    div.innerHTML = `<strong>${name}</strong><p>${sub}</p>`;
    refs.laneContainer.appendChild(div);
  });
}

function swapRecommendation() {
  index = (index + 1) % recommendations.length;
  render(recommendations[index]);
}

document.getElementById("swapButton").addEventListener("click", swapRecommendation);
document.getElementById("shuffleLane").addEventListener("click", swapRecommendation);
document.getElementById("playButton").addEventListener("click", () => {
  alert(`Prototype action: open ${recommendations[index].provider}`);
});

render(recommendations[index]);
