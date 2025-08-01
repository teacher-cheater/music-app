export const formatDuration = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs < 10 ? "0" : ""}${Math.ceil(secs)}`;
};

export const getTimepanel = (
  currentTime: number,
  totalTime: number | undefined
) => {
  if (totalTime) {
    return `${formatDuration(currentTime)} / ${formatDuration(totalTime)}`;
  }
};
