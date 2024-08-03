import { MouseEvent, useRef, useState } from 'react';
import { Box, Link, List, ListItem } from '@mui/material';
import { BrandsPublic } from '../../../../app/config';
import { Link as RouterLink } from 'react-router-dom';

import { useStyles } from './styles';

export const MainBrands = () => {
  const classes = useStyles();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentScroll, setCurrentScroll] = useState(0);
  const [isMouseMoved, setIsMouseMoved] = useState<boolean>(false);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - containerRef.current.offsetLeft);
      setCurrentScroll(containerRef.current.scrollLeft);
      setIsMouseMoved(false);
    }
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1;
    containerRef.current.scrollLeft = currentScroll - walk;
    setIsMouseMoved(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (containerRef.current) {
      containerRef.current.style.cursor = 'grab';
      containerRef.current.style.userSelect = 'auto';
    }
  };

  const handleElementClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isMouseMoved) {
      e.preventDefault();
    }
  };

  return (
    <Box
      component="section"
      ref={containerRef}
      className={classes.container}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      style={{ cursor: isDragging ? 'grabbing' : 'grab', userSelect: isDragging ? 'none' : 'auto' }}
    >
      <List className={classes.links}>
        {[...Object.values(BrandsPublic), ...Object.values(BrandsPublic)].map((brand, index) => {
          return (
            <ListItem key={index} className={classes.listItem}>
              <Link component={RouterLink} to="/" onClick={handleElementClick} className={classes.link}>
                <Box className={classes.imageContainer}>
                  <Box component="img" className={classes.image} src={brand} alt={`Brand ${index}`} draggable={false} />
                </Box>
              </Link>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};
