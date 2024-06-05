import { type ColorScheme } from '@svelteuidev/core';
export const prerender = false;
export const ssr = false;
 
export const toggleTheme = async () => {
  if (typeof window === 'undefined') return;
  let theme = getTheme(); // Default to dark mode
  theme = theme === 'light' ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
  applyTheme();
};
// Function to apply the theme based on the saved preference
export function applyTheme() {
  if (typeof window === 'undefined') return;
  let theme = localStorage.getItem('theme') || 'dark'; // Default to dark mode
  document.documentElement.className = theme;
}

export function getTheme(): ColorScheme | undefined {
  if (typeof window === 'undefined') return;
  let theme = (localStorage.getItem('theme') as ColorScheme) || 'dark';
  return theme;
}
