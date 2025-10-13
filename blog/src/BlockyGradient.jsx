import { useState, useEffect, useRef } from 'react';

export default function BlockyGradient() {
  const [blocks, setBlocks] = useState([]);
  const [dimensions, setDimensions] = useState({ rows: 20, cols: 40 });
  const [isVertical, setIsVertical] = useState(false);
  const containerRef = useRef(null);

  useEffect(function checkScreenSize() {
    function handleResize() {
      setIsVertical(window.innerWidth <= 960);
    }
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return function cleanup() {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(function updateDimensions() {
    function calculateDimensions() {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        const height = containerRef.current.offsetHeight;
        
        const blockSize = 20;
        const cols = Math.max(20, Math.floor(width / blockSize));
        const rows = Math.max(10, Math.floor(height / blockSize));
        
        setDimensions({ rows, cols });
      }
    }
    
    setTimeout(calculateDimensions, 0);
    window.addEventListener('resize', calculateDimensions);
    
    return function cleanup() {
      window.removeEventListener('resize', calculateDimensions);
    };
  }, []);

  useEffect(function generateBlocks() {
    const {rows, cols} = dimensions;
    const initBlocks = [];
    
    if (isVertical) {
      const transitionStart = rows * 0.5;
      const transitionEnd = rows * 0.9;
      
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          let orangeIntensity;
          
          if (row < transitionStart) {
            orangeIntensity = 0;
          } 
          else if (row > transitionEnd) {
            orangeIntensity = 1;
          } 
          else {
            const transitionProgress = (row - transitionStart) / (transitionEnd - transitionStart);
            const randomOffset = (Math.random() - 0.5) * 0.3;
            orangeIntensity = Math.max(0, Math.min(1, transitionProgress + randomOffset));
          }
          
          initBlocks.push({
            id: `${row}-${col}`,
            orangeIntensity
          });
        }
      }
    } 
    else {
      const transitionStart = cols * 0.5;
      const transitionEnd = cols * 0.9;
      
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          let orangeIntensity;
          
          if (col < transitionStart) {
            orangeIntensity = 0;
          } 
          else if (col > transitionEnd) {
            orangeIntensity = 1;
          } 
          else {
            const transitionProgress = (col - transitionStart) / (transitionEnd - transitionStart);
            const randomOffset = (Math.random() - 0.5) * 0.3;
            orangeIntensity = Math.max(0, Math.min(1, transitionProgress + randomOffset));
          }
          
          initBlocks.push({
            id: `${row}-${col}`,
            orangeIntensity
          });
        }
      }
    }
    
    setBlocks(initBlocks);
  }, [isVertical, dimensions]);

  return (
    <div 
      ref={containerRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'grid',
        gridTemplateColumns: `repeat(${dimensions.cols}, 1fr)`,
        gridTemplateRows: `repeat(${dimensions.rows}, 1fr)`,
        pointerEvents: 'none'
      }}
    >
      {blocks.map(function renderBlock(block) {
        const r = 255;
        const g = Math.round(255 - (115 * block.orangeIntensity));
        const b = Math.round(255 - (255 * block.orangeIntensity));
        
        return (
          <div
            key={block.id}
            style={{
              backgroundColor: `rgb(${r}, ${g}, ${b})`,
              width: '100%',
              height: '100%'
            }}
          />
        );
      })}
    </div>
  );
}