export function formatChatTime(input: string | Date) {
  const date = typeof input === "string" ? new Date(input) : input;
  const now = new Date();

  const oneDayMs = 24 * 60 * 60 * 1000;
  const diffMs = now.getTime() - date.getTime();

  const isSameDay =
    now.getFullYear() === date.getFullYear() &&
    now.getMonth() === date.getMonth() &&
    now.getDate() === date.getDate();

  // Less than 1 minute ago: show "Just now"
  if (diffMs < 60 * 1000) {
    return "now";
  }

  // Less than 1 hour ago: show minutes ago (e.g., "15 min ago")
  if (diffMs < 60 * 60 * 1000) {
    const minutes = Math.floor(diffMs / (60 * 1000));
    return `${minutes} min`;
  }

  // Same day: show time (e.g., "14:30")
  if (isSameDay && diffMs < oneDayMs) {
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    });
  }

  // Within the last 7 days: show weekday (e.g., "Mon")
  if (diffMs < 7 * oneDayMs) {
    return date.toLocaleDateString([], {
      weekday: "short"
    });
  }

  // Older: show date (e.g., "2023-09-15")
  return date.toLocaleDateString([], {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit"
  });
}
