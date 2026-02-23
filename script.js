const cards = document.querySelectorAll(".job-card");
const tabButtons = document.querySelectorAll(".tab-btn");
const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");
const totalCount = document.getElementById("totalCount");
const emptyState = document.getElementById("emptyState");

let currentTab = "all";

function updateCounts() {
  let interview = 0;
  let rejected = 0;
  let visible = 0;
  let total = document.querySelectorAll(".job-card").length;

  document.querySelectorAll(".job-card").forEach(card => {
    const status = card.dataset.status;

    if (status === "interview") interview++;
    if (status === "rejected") rejected++;

    if (
      currentTab === "all" ||
      status === currentTab
    ) {
      if (!card.classList.contains("hidden")) visible++;
    }
  });

  interviewCount.innerText = interview;
  rejectedCount.innerText = rejected;
  totalCount.innerText = total;

  if (visible === 0) {
    emptyState.classList.remove("hidden");
  } else {
    emptyState.classList.add("hidden");
  }
}

function filterTab(tab) {
  currentTab = tab;

  document.querySelectorAll(".job-card").forEach(card => {
    const status = card.dataset.status;

    if (tab === "all" || status === tab) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });

  document.querySelectorAll('.delete-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const card = e.target.closest('.card');
    if (card) {
      card.remove();
    }
    updateCounts();
    updateEmptyState();
  });
});

  updateCounts();
}

document.addEventListener("click", function (e) {

  if (e.target.classList.contains("tab-btn")) {
    tabButtons.forEach(btn => {
      btn.classList.remove("bg-blue-500", "text-white");
      btn.classList.add("bg-gray-300");
    });

    e.target.classList.add("bg-blue-500", "text-white");
    e.target.classList.remove("bg-gray-300");

    filterTab(e.target.dataset.tab);
  }

  if (e.target.classList.contains("interview-btn")) {
    const card = e.target.closest(".job-card");
    card.dataset.status = "interview";
    filterTab(currentTab);
  }

  if (e.target.classList.contains("reject-btn")) {
    const card = e.target.closest(".job-card");
    card.dataset.status = "rejected";
    filterTab(currentTab);
  }

  if (e.target.classList.contains("delete-btn")) {
    const card = e.target.closest(".job-card");
    card.remove();
    filterTab(currentTab);
  }

});

updateCounts();

