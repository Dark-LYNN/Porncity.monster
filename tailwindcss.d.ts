// types/tailwindcss.d.ts
declare module 'tailwindcss' {
    export interface Config {
      content: string[];
      theme: {
        extend: Record<string, any>;
      };
      plugins: any[];
    }
  }
  