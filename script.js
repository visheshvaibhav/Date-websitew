const pages = [
  {
    time: "11:00 PM",
    title: "Food Order",
    subtitle: "We let cravings pick the opening scene 🍕",
    loveLine: "What I love about you: 11:00 PM food order"
  },
  {
    time: "12:00 AM",
    title: "Gather Around",
    subtitle: "Midnight pulls us into the same cozy orbit ✨",
    loveLine: "What I love about you: 12:00 AM gather around"
  },
  {
    time: "12:30 AM",
    title: "Date Starts",
    subtitle: "Officially entering our favorite little universe 💫",
    loveLine: "What I love about you: 12:30 AM date starts"
  },
  {
    time: "1:30 AM",
    title: "Date Ends / Dare Starts",
    subtitle: "Soft ending, bold beginning — just how we do it 😏",
    loveLine: "What I love about you: 1:30 AM date ends / dare starts"
  },
  {
    time: "2:30 AM",
    title: "Game / Tambola",
    subtitle: "Luck, laughter, and playful chaos on repeat 🎟️",
    loveLine: "What I love about you: 2:30 AM game/tambola"
  },
  {
    time: "4:00 AM",
    title: "Sleepy Time",
    subtitle: "Yawns, smiles, and a heart completely full 😴",
    loveLine: "What I love about you: 4:00 AM sleepy time"
  },
  {
    time: "Final",
    title: "Will you go on this magical date with me?",
    subtitle: "One sweet yes, and the night becomes a story ✨",
    loveLine: "What I love about you: Final invitation page",
    cta: "💖 Say YES to this magical date 💖"
  }
];

const pageContainer = document.getElementById("page-container");
const indicator = document.getElementById("page-indicator");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let currentPage = 0;

function renderPage(index) {
  const page = pages[index];

  pageContainer.innerHTML = `
    <p class="time">${page.time}</p>
    <h1 class="title">${page.title}</h1>
    <p class="subtitle">${page.subtitle}</p>
    <p class="love-line">${page.loveLine}</p>
    ${page.cta ? `<p class="cta">${page.cta}</p>` : ""}
  `;

  indicator.textContent = `Page ${index + 1} of ${pages.length}`;
  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === pages.length - 1;
}

prevBtn.addEventListener("click", () => {
  if (currentPage > 0) {
    currentPage -= 1;
    renderPage(currentPage);
  }
});

nextBtn.addEventListener("click", () => {
  if (currentPage < pages.length - 1) {
    currentPage += 1;
    renderPage(currentPage);
  }
});

renderPage(currentPage);
