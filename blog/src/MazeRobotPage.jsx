import './ProjectPage.css';
import { useEffect } from 'react';
import { AnimatedSection } from './AnimatedSection';

export default function MazeRobotPage() {
  useEffect(function scrollToTop() {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="hcpage">
      <AnimatedSection className="hcmainbox" delay={0.2}>
        <h1>Maze-Navigating Robot Car</h1>

        <AnimatedSection className="hccontentbox" delay={0.2}>
          <h2>Project Summary</h2>
          <p>I built an autonomous robot that is capable of navigating mazes.</p>
          
          <h3>Software</h3>
          <ul>
            <li>Programmed Arduino code that implemented the Left Hand Rule: prioritize left turn, then forward, right, or U-turn based on sensor readings</li>
            <li>Used distance thresholds (3cm for obstacles, 10cm for open paths) to make real-time navigation decisions</li>
            <li>Created directional matrices that rotate motor control patterns as the robot changes orientation</li>
            <li>Implemented path logging with simplification rules to debug and analyze the maze solution</li>
          </ul>

          <h3>Hardware</h3>
          <ul>
            <li>Assembled a robot with four mechanum wheels for omnidirectional movement</li>
            <li>Mounted four ultrasonic sensors on each side of the robot for 360-degree obstacle detection</li>
            <li>Integrated and soldered four DC motors controlled by Arduino GPIO pins</li>
            <li>3D-printed a custom case using Onshape to house the electronics and sensors</li>
          </ul>
        </AnimatedSection>
      </AnimatedSection>
    </div>
  );
}