
export const playCorrectSound = () => {
  const audio = new Audio('/correct-answer.mp3');
  audio.play().catch(() => {
    // Silently fail if audio playback fails
  });
};

export const playIncorrectSound = () => {
  const audio = new Audio('/incorrect-answer.mp3');
  audio.play().catch(() => {
    // Silently fail if audio playback fails
  });
};

export const vibrate = () => {
  if (navigator.vibrate) {
    navigator.vibrate(200);
  }
};
