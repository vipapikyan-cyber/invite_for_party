"use client";
import { useEffect } from "react";

export function MobileBackground() {
  useEffect(() => {
    if (window.innerWidth <= 768) {
      const img = document.createElement('div');
      img.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: url('/pxfuel.jpg') center/cover no-repeat;
        z-index: -1;
      `;
      document.body.prepend(img);
    }
  }, []);
  
  return null;
}