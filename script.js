const copyBtn = document.getElementById('copyBtn');

const promptText = `
It’s 2027. You’re doing $800,000 months.
I just launched to $600 in sales and I’m humiliated.

What three things did you fix in the next launch that 10x’d it?
The positioning shift.
The new avatar.
The pain point you missed.

Save me before I quit.
`;

copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(promptText.trim());
  copyBtn.textContent = 'Copied';
  setTimeout(() => {
    copyBtn.textContent = 'Copy Prompt';
  }, 1500);
});
