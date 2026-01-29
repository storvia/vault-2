const promptCard = document.getElementById("promptCard");
const copyBtn = document.getElementById("copyBtn");
const ackRead = document.getElementById("ackRead");
const brutalToggle = document.getElementById("brutalToggle");
const memoryText = document.getElementById("memoryText");
const returnTop = document.getElementById("returnTop");

let brutal = false;

// Timed reveal
setTimeout(() => {
  promptCard.classList.add("show");
}, 8000);

// Read acknowledgment
ackRead.addEventListener("change", () => {
  copyBtn.disabled = !ackRead.checked;
});

// Brutal mode toggle
brutalToggle.addEventListener("click", () => {
  brutal = !brutal;
  brutalToggle.innerHTML = `Brutal mode: <span>${brutal ? "on" : "off"}</span>`;
});

// Copy logic
copyBtn.addEventListener("click", () => {
  let text = document.getElementById("promptText").innerText;

  if (brutal) {
    text += "\n\nDo not soften language. Assume competence is not the issue.";
  }

  text += "\n\n—\nFrom a private teardown.";

  navigator.clipboard.writeText(text);

  localStorage.setItem("copiedBefore", "yes");
  localStorage.setItem("copyTime", new Date().toLocaleString());

  copyBtn.innerText = "Copied";
  setTimeout(() => copyBtn.innerText = "Copy Prompt", 1500);
});

// Memory callback
if (localStorage.getItem("copiedBefore")) {
  memoryText.innerText = "Most people don’t come back. You did.";
}

// Scroll return
returnTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
