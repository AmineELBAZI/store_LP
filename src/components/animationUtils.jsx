import { useEffect } from 'react';

export const useAddKeyframes = () => {
  useEffect(() => {
    // Check if the keyframes are already added
    if (!document.querySelector('style[data-keyframes]')) {
      const style = document.createElement('style');
      style.setAttribute('data-keyframes', 'true'); // Avoid duplication
      style.innerHTML = `
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
        
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeOut {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-20px);
          }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);
};

export const fadeInAnimation = {
  animation: 'fadeIn 1s ease-in-out',
   
};

export const fadeOutAnimation = {
  animation: 'fadeOut 1s ease-in-out',
 
};
