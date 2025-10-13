import './ProjectPage.css';
import { useEffect } from 'react';
import { AnimatedSection } from './AnimatedSection';

export default function DrumRobotPage() {
  useEffect(function scrollToTop() {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="hcpage">
      <AnimatedSection className="hcmainbox" delay={0.2}>
        <h1>Drum-Playing Robot</h1>

        <AnimatedSection className="hccontentbox" delay={0.2}>
          <h2>Project Summary</h2>
          <p>I built a kick drum and hi-hat robot that reads MIDI files and performs complete musical pieces.</p>
          
          <h3>Software</h3>
          <ul>
            <li>Programmed an ESP32 C3 microcontroller in C++ with WiFi communication to receive MIDI data from a computer</li>
            <li>Implemented MIDI note parsing to dynamically trigger drum hits based on incoming note events</li>
            <li>Implemented audio sensing with ADC threshold detection to measure actual drum strike timing</li>
            <li>Configured PWM signals at 50 Hz with 12-bit resolution, controlling servo pulse widths from 1.3ms to 2.5ms</li>
            <li>Programmed dual independent motor subroutines (motorSpeed1 and motorSpeed2) for simultaneous kick drum control</li>
            <li>Used delayMicroseconds() for sub-millisecond precision, synchronizing drum hits to 108 BPM</li>
            <li>Achieved 72.83ms average latency with 33.94ms variance across 30 consecutive hits</li>
            <li>Maintained negligible timing drift across 3+ minute performances</li>
            <li>Successfully performed two complete songs with synchronized kick drum and hi-hat</li>
          </ul>

          <h3>Hardware</h3>
          <ul>
            <li>Designed a dual-motor structure for a kick drum controlled via a single microcontroller</li>
            <li>Soldered servos and DC motors with H-bridge drivers and MOSFETs for optimal force and sound</li>
            <li>3D-printed and laser-cut custom mechanical mounts</li>
            <li>Added heat sinks to prevent overheating while playing</li>
          </ul>
        </AnimatedSection>
      </AnimatedSection>
    </div>
  );
}