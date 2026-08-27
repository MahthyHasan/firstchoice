import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useMainJs = () => {
  const location = useLocation();

  useEffect(() => {
    const init = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 50));

        const $ = (await import('jquery')).default;
        window.$ = window.jQuery = $;

        try {
          const { gsap } = await import('gsap');
          window.gsap = gsap;

          try {
            const { ScrollTrigger } = await import('gsap/ScrollTrigger');
            window.ScrollTrigger = ScrollTrigger;
            if (gsap && ScrollTrigger) gsap.registerPlugin(ScrollTrigger);
          } catch (e) {}

          try {
            const { SplitText } = await import('gsap/SplitText');
            window.SplitText = SplitText;
            if (gsap && SplitText) gsap.registerPlugin(SplitText);
          } catch (e) {}
        } catch (e) {}

        try { window.Swiper = (await import('swiper')).default; } catch (e) {}
        try { window.Lenis = (await import('lenis')).default; } catch (e) {}
        try { window.Choices = (await import('choices.js')).default; } catch (e) {}
        try { window.flatpickr = (await import('flatpickr')).default; } catch (e) {}
        try { window.Odometer = (await import('odometer')).default; } catch (e) {}

        if (window.ScrollTrigger && typeof window.ScrollTrigger.getAll === 'function') {
          window.ScrollTrigger.getAll().forEach(t => t.kill());
        }

        const script = document.querySelector('#hospil-main-js');
        if (script) script.remove();

        const newScript = document.createElement('script');
        newScript.id = 'hospil-main-js';
        newScript.src = `/assets/js/main.js?v=${Date.now()}`;
        document.body.appendChild(newScript);
      } catch (err) {
        console.error('Error initializing main.js:', err);
      }
    };

    init();
  }, [location.pathname]);
};

export default useMainJs;
