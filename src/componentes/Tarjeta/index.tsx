import React from 'react';
import type { ReactNode } from 'react';
import styles from './card.module.css';

interface CardProps {
  title?: string;
  children: ReactNode;
  onClick?: () => void;
  actionText?: string;
 onActionClick?: (e?: React.MouseEvent) => void;
  status?: string;
  statusColor?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  children,
  onClick,
  actionText,
  onActionClick,
  status,
  statusColor
}) => {
  return (
    <div 
      className={`${styles.card} ${onClick ? styles.clickable : ''}`} 
      onClick={onClick ? onClick : undefined}
    >
      <div className={styles.cardHeader}>
        {title && <h3 className={styles.cardTitle}>{title}</h3>}
        {status && (
          <div 
            className={styles.cardStatus} 
            style={{ backgroundColor: statusColor || '#e0e0e0' }}
          >
            {status}
          </div>
        )}
      </div>
      <div className={styles.cardContent}>
        {children}
      </div>
      {actionText && (
        <div className={styles.cardActions}>
          <button 
            className={styles.cardActionButton} 
            onClick={(e) => {
              e.stopPropagation();
              onActionClick && onActionClick();
            }}
          >
            {actionText}
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;