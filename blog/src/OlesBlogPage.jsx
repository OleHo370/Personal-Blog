import './ProjectPage.css';
import { useEffect } from 'react';
import { AnimatedSection } from './AnimatedSection';

export default function OlesBlogPage() {
  useEffect(function scrollToTop() {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="hcpage">
      <AnimatedSection className="hcmainbox" delay={0.2}>
        <h1>Olé's Blog</h1>

        <AnimatedSection className="hccontentbox" delay={0.2}>
          <h2>Project Summary</h2>
          <p>I developed a portfolio website with smooth animations, photos, videos, and links to showcase my projects and blogs.</p>
          
          <h3>Frontend Development</h3>
          <ul>
            <li>Designed and styled multiple full pages with HTML and CSS, including a home page with a Contact Me form and individual project blog pages with photos and videos</li>
            <li>Used Framer Motion to create reusable React animation and hover effects</li>
            <li>Implemented a system that resizes and restructures the website sections based on screen size automatically for mobile and desktop usage</li>
            <li>Created a procedurally generated blocky gradient background component that adapts to vertical/horizontal layouts and dynamically calculates grid dimensions</li>
            <li>Added smooth scroll-to-section navigation with route-based state management using React Router</li>
            <li>Built a Contact Me form that automatically sends emails to me via EmailJS API when users submit, with real-time form validation and success/error feedback states</li>
          </ul>
        </AnimatedSection>
      </AnimatedSection>
    </div>
  );
}