const localStorageProvider = () => {
  // When initializing, restore data from localStorage
  const map = new Map(JSON.parse(localStorage.getItem("app-cache") || "[]"));

  // Save back to localStorage on every cache change
  window.addEventListener("beforeunload", () => {
    localStorage.setItem(
      "app-cache",
      JSON.stringify(Array.from(map.entries()))
    );
  });

  // Optionally, save on tab close or periodically
  return map;
};

export default localStorageProvider;
