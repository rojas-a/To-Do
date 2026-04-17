import React from 'react';
import './App.css';
import ListItems from './ListItems';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);

const CATEGORIES = ['All', 'Activism', 'Resources', 'Opportunities', 'Wellness', 'Education'];

const QUOTES = [
  { text: "The time is always right to do what is right.", author: "Dr. Martin Luther King Jr." },
  { text: "Power concedes nothing without a demand.", author: "Frederick Douglass" },
  { text: "I am not free while any woman is unfree.", author: "Audre Lorde" },
  { text: "You can kill a revolutionary but you can never kill the revolution.", author: "Fred Hampton" },
  { text: "Each time a woman stands up for herself, she stands up for all women.", author: "Maya Angelou" },
  { text: "Injustice anywhere is a threat to justice everywhere.", author: "Dr. Martin Luther King Jr." },
  { text: "I am deliberate and afraid of nothing.", author: "Audre Lorde" },
  { text: "We must always take sides. Neutrality helps the oppressor, never the victim.", author: "Elie Wiesel" },
  { text: "The most common way people give up their power is by thinking they don't have any.", author: "Alice Walker" },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: { text: '', category: 'Activism', key: '' },
      filter: 'All',
      quoteIndex: Math.floor(Math.random() * QUOTES.length),
    };
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
    this.setFilter = this.setFilter.bind(this);
  }

  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== '') {
      const items = [...this.state.items, { ...newItem, completed: false }];
      this.setState({
        items,
        currentItem: { text: '', category: newItem.category, key: '' },
      });
    }
  }

  handleInput(e) {
    this.setState({
      currentItem: { ...this.state.currentItem, text: e.target.value, key: Date.now() },
    });
  }

  handleCategory(e) {
    this.setState({
      currentItem: { ...this.state.currentItem, category: e.target.value },
    });
  }

  deleteItem(key) {
    this.setState({ items: this.state.items.filter(item => item.key !== key) });
  }

  setUpdate(text, key) {
    const items = this.state.items.map(item =>
      item.key === key ? { ...item, text } : item
    );
    this.setState({ items });
  }

  toggleComplete(key) {
    const items = this.state.items.map(item =>
      item.key === key ? { ...item, completed: !item.completed } : item
    );
    this.setState({ items });
  }

  setFilter(filter) {
    this.setState({ filter });
  }

  render() {
    const { items, currentItem, filter, quoteIndex } = this.state;
    const quote = QUOTES[quoteIndex];
    const filtered = filter === 'All' ? items : items.filter(i => i.category === filter);
    const completedCount = items.filter(i => i.completed).length;

    return (
      <div className="App">
        <header className="app-header">
          <div className="logo-area">
            <span className="fist-icon">✊🏾</span>
            <h1>Rise Up</h1>
            <p className="tagline">Community Action Hub for People of Color</p>
          </div>
          <blockquote className="quote">
            <p>"{quote.text}"</p>
            <cite>— {quote.author}</cite>
          </blockquote>
        </header>

        <div className="form-section">
          <form id="to-do-form" onSubmit={this.addItem}>
            <input
              type="text"
              placeholder="Add a resource, action item, or goal..."
              value={currentItem.text}
              onChange={this.handleInput}
            />
            <select value={currentItem.category} onChange={this.handleCategory}>
              {CATEGORIES.filter(c => c !== 'All').map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <button type="submit">Add</button>
          </form>
        </div>

        <div className="stats-bar">
          <span className="stat">{items.length} total</span>
          <span className="stat completed-stat">{completedCount} done</span>
          <span className="stat pending-stat">{items.length - completedCount} pending</span>
        </div>

        <div className="filter-bar">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => this.setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <ListItems
          items={filtered}
          deleteItem={this.deleteItem}
          setUpdate={this.setUpdate}
          toggleComplete={this.toggleComplete}
        />
      </div>
    );
  }
}

export default App;
