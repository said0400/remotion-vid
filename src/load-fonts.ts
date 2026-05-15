import { continueRender, delayRender } from "remotion";

// تحميل خط Cairo من Google Fonts
export const loadCairoFont = () => {
  const handle = delayRender("Loading Cairo font...");

  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href =
    "https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap";

  link.onload = () => {
    continueRender(handle);
  };

  link.onerror = () => {
    console.error("Failed to load Cairo font");
    continueRender(handle);
  };

  document.head.appendChild(link);

  return handle;
};
