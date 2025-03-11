import { EmojiButton } from "https://cdn.jsdelivr.net/npm/@joeattardi/emoji-button@4.6.2/dist/index.js";

document.addEventListener('DOMContentLoaded', () => {
  const changeCursorBtn = document.getElementById('changeCursorBtn');
  const cursorModal = document.getElementById('cursorModal');
  const closeCursorModal = document.getElementById('closeCursorModal');
  const openEmojiPicker = document.getElementById('openEmojiPicker');
  const selectedEmojiDiv = document.getElementById('selectedEmoji');
  const sizeSlider = document.getElementById('sizeSlider');
  const sizeValue = document.getElementById('sizeValue');
  const opacitySlider = document.getElementById('opacitySlider');
  const opacityValue = document.getElementById('opacityValue');
  const applyCursorBtn = document.getElementById('applyCursorBtn');

  // Open modal on button click
  changeCursorBtn.addEventListener('click', () => {
    cursorModal.style.display = 'block';
  });

  // Close modal on close button click
  closeCursorModal.addEventListener('click', () => {
    cursorModal.style.display = 'none';
  });

  // Update slider display values
  sizeSlider.addEventListener('input', () => {
    sizeValue.textContent = sizeSlider.value;
  });
  opacitySlider.addEventListener('input', () => {
    opacityValue.textContent = opacitySlider.value;
  });

  // Initialize Emoji Picker using the imported EmojiButton
  const picker = new EmojiButton({
    position: 'bottom-start',
    zIndex: 9999 // or any large number higher than your modal
  });
  openEmojiPicker.addEventListener('click', () => {
    picker.togglePicker(openEmojiPicker);
  });
  picker.on('emoji', selection => {
    selectedEmojiDiv.textContent = selection.emoji;
  });

  // Convert chosen emoji into a cursor image via canvas
  function emojiToCursor(emoji, size, opacity) {
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    ctx.font = `${size}px serif`;
    ctx.globalAlpha = opacity;
    // Center the emoji in the canvas
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(emoji, size / 2, size / 2);
    return canvas.toDataURL('image/png');
  }

  // Apply the new cursor when the apply button is clicked
  applyCursorBtn.addEventListener('click', () => {
    const emoji = selectedEmojiDiv.textContent;
    const size = parseInt(sizeSlider.value);
    const opacity = parseFloat(opacitySlider.value);
    if (!emoji || emoji === '(None selected)') {
      alert('Please pick an emoji for your cursor.');
      return;
    }
    const cursorUrl = emojiToCursor(emoji, size, opacity);
    // Apply the custom cursor to the body element
    document.body.style.cursor = `url(${cursorUrl}) ${size / 2} ${size / 2}, auto`;
    cursorModal.style.display = 'none';
  });

  // Close modal if clicking outside the content area
  window.addEventListener('click', (e) => {
    if (e.target === cursorModal) {
      cursorModal.style.display = 'none';
    }
  });
});
