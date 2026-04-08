export function getStorage(key: string): string | null {
  if (typeof window === "undefined") return null;

  try {
    return localStorage.getItem(key);
  } catch (error) {
    console.error("Error reading localStorage:", error);
    return null;
  }
}

export function Store(key: string, value: string): void {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(key, value);
  } catch (error) {
    console.error("Error writing to localStorage:", error);
  }
}
