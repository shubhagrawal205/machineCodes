import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cards = () => {
  const cardData = [
    { title: 'AutoComplete', link: '/autocomplete' },
    { title: 'Infinite Scroll', link: '/infinite-scroll' },
    { title: 'Tabs', link: '/tabs' },
    { title: 'Tic Tac Toe', link: '/tic-tac-toe' },
  ];

  const navigate = useNavigate();

  const handleCardClick = (link) => {
    navigate(link);
  };

  return (
    <div style={styles.cardContainer}>
      {cardData.map((card, index) => (
        <div
          key={index}
          style={styles.card}
          onClick={() => handleCardClick(card.link)} 
        >
          <div style={styles.cardTitle}>{card.title}</div>
          <div style={styles.cardDescription}>Description for {card.title}</div>
        </div>
      ))}
    </div>
  );
};
const styles = {
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '50px',
    flexWrap: 'wrap', // Ensure the cards wrap on smaller screens
  },
  card: {
    width: '100%',  // Make the cards take full width on small screens
    maxWidth: '200px', // Limit the max width
    height: '150px', // Set a fixed height for consistency
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#210253',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'transform 0.3s, box-shadow 0.3s',
    marginBottom: '20px', // Add margin between rows of cards
  },
  cardTitle: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginTop: '10px',
    color: '#fff',
  },
  cardDescription: {
    fontSize: '12px',
    color: '#ddd',
    margin: '10px',
  },

  // Responsive styles with media queries
  '@media (min-width: 768px)': {
    cardContainer: {
      justifyContent: 'space-between', // Spread cards out when screen size is medium or large
    },
    card: {
      width: '45%',
    },
  },
  
  '@media (min-width: 1024px)': {
    card: {
      width: '22%', // Each card will take 22% of the container's width on large screens
    },
  },
};

export default Cards;
