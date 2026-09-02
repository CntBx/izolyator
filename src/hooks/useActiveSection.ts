// import { useEffect, useState } from "react";

// export function useActiveSection(sectionIds: string[]) {
//   const [activeSection, setActiveSection] = useState<string>("");

//   useEffect(() => {
//     // На мобилках (где нет жесткого h-screen) и на десктопе 
//     // порог срабатывания (threshold) в 0.5 означает, что секция активна, если видна наполовину
//     const observerOptions = {
//       root: null, // следим относительно viewport (экрана браузера)
//       rootMargin: "-20% 0px -60% 0px", // сужаем зону фиксации под шапку
//       threshold: 0,
//     };

//     const handleIntersect = (entries: IntersectionObserverEntry[]) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           setActiveSection(entry.target.id);
//         }
//       });
//     };

//     const observer = new IntersectionObserver(handleIntersect, observerOptions);

//     sectionIds.forEach((id) => {
//       const element = document.getElementById(id);
//       if (element) observer.observe(element);
//     });

//     return () => {
//       sectionIds.forEach((id) => {
//         const element = document.getElementById(id);
//         if (element) observer.unobserve(element);
//       });
//     };
//   }, [sectionIds]);

//   return activeSection;
// }