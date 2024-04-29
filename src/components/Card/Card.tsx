import React, { FC } from 'react';
import { Card as BCard, Badge } from 'react-bootstrap';
import './Card.css';
import '../../color.css'

interface BadgeProps {
  text: string;
  color?: string,
}

interface CardProps {
  badges?: BadgeProps[];
}

const Card: FC<CardProps> = ({ badges }) => {
  return (
    <div className="BCard" data-testid="BCard">
      <BCard>
        <BCard.Body>
          {badges && badges.map((badge, index) => (
            <span className={`badge ${badge.color || 'bg-blue'}`}>
              {badge.text}
            </span>
          ))}
        </BCard.Body>
      </BCard>
    </div>
  );
};

export default Card;