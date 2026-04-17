import React from 'react';
import './ListItems.css';
import FlipMove from 'react-flip-move';

const CATEGORY_COLORS = {
  Activism: '#ce1126',
  Resources: '#27ae60',
  Opportunities: '#d4a017',
  Wellness: '#8e44ad',
  Education: '#2980b9',
};

function ListItems(props) {
  const { items, deleteItem, setUpdate, toggleComplete } = props;

  if (items.length === 0) {
    return (
      <div className="empty-state">
        <span className="empty-icon">✊🏾</span>
        <p>Nothing here yet. Add an action item, resource, or goal above.</p>
      </div>
    );
  }

  const listItems = items.map(item => (
    <div className={`list-item ${item.completed ? 'completed' : ''}`} key={item.key}>
      <div className="item-left">
        <button
          className={`complete-btn ${item.completed ? 'done' : ''}`}
          onClick={() => toggleComplete(item.key)}
          title={item.completed ? 'Mark incomplete' : 'Mark complete'}
        >
          {item.completed ? '✓' : '○'}
        </button>
        <span
          className="category-badge"
          style={{ backgroundColor: CATEGORY_COLORS[item.category] || '#555' }}
        >
          {item.category}
        </span>
        <input
          type="text"
          value={item.text}
          onChange={e => setUpdate(e.target.value, item.key)}
          className={`item-text${item.completed ? ' done-text' : ''}`}
        />
      </div>
      <button
        className="delete-btn"
        onClick={() => deleteItem(item.key)}
        title="Remove"
      >
        ×
      </button>
    </div>
  ));

  return (
    <div className="list-container">
      <FlipMove duration={300} easing="ease-in-out">
        {listItems}
      </FlipMove>
    </div>
  );
}

export default ListItems;
