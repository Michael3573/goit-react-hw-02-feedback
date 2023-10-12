import React from 'react';
import styles from './Section.module.css'; // Импорт стилей

const Section = ({ title, children }) => (
  <div>
    <h2 className={styles['hero-text']}>{title}</h2>
    {children}
  </div>
);

export default Section;
