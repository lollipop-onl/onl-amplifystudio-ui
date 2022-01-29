declare global {
  interface Window {
    goto(path: string): void;
    currentPath: string;
  }
}

export {};
