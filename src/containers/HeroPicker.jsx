import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CSSTransitionGroup } from 'react-transition-group';

import * as Actions from '../store/actions';
import Item from './Item';

class HeroPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.appState.modalList,
      active: 0,
      direction: '',
    };
    this.moveRight = this.moveRight.bind(this);
    this.moveLeft = this.moveLeft.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  generateItems() {
    const items = [];
    let level;
    for (let i = this.state.active - 2; i < this.state.active + 3; i++) {
      let index = i;
      if (i < 0) {
        index = this.state.items.length + i;
      } else if (i >= this.state.items.length) {
        index = i % this.state.items.length;
      }
      level = this.state.active - i;
      items.push(<Item key={index} id={this.state.items[index]} level={level} />);
    }
    return items;
  }

  moveLeft() {
    let newActive = this.state.active;
    newActive -= 1;
    this.setState({
      active: newActive < 0 ? this.state.items.length - 1 : newActive,
      direction: 'left',
    });
  }

  moveRight() {
    const newActive = this.state.active;
    this.setState({
      active: (newActive + 1) % this.state.items.length,
      direction: 'right',
    });
  }

  handleKeydown(e) {
    switch (e.keyCode) {
      case 39: // right
        e.preventDefault();
        this.moveRight(e);
        break;
      case 37: // left
        e.preventDefault();
        this.moveLeft(e);
        break;
      default:
    }
  }

  render() {
    return (
      <div>
        <div id="carousel" className="carousel">
          <div className="carousel__header">Choose player</div>
          <div className="carousel__wrap">
            <button className="aria-button carousel__button" onClick={this.moveLeft} aria-label="previous"><span className="arrow arrow-left" /></button>
            <CSSTransitionGroup
              transitionName={this.state.direction}
              transitionEnterTimeout={300}
              transitionLeaveTimeout={300}
              className="carousel__card-wrap"
            >
              {this.generateItems()}
            </CSSTransitionGroup>
            <button className="aria-button carousel__button" onClick={this.moveRight} aria-label="next"><span className="arrow arrow-right" /></button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  appState: state.appState,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...Actions }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeroPicker);
