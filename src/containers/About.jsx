import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as Actions from '../store/actions';
import teamHeroes from '../utils/teamHeroes';
import SetDifficulty from './SetDifficulty';

const heroCredits = teamHeroes.map(hero => (
  <div className="splash__item">
    <div className="splash__avatar-wrap">
      <img src={hero.cardUrl} alt={hero.name} className="card-pic card-pic--round" />
    </div>
    <div className="splash__text-wrap">
      <span className="splash__bold">{hero.name}</span><br />
          Character created by: {hero.createdBy || ''}<br />
          Image source:&nbsp;
          <a
            className="splash__link"
            href={hero.srcUrl}
            rel="noopener noreferrer"
            target="_blank"
          >{hero.srcName}</a><br />
          Artwork by: {hero.artBy || 'Unknown'}
    </div>
  </div>
  ));

const otherCredits = (
  <div>
    <div className="splash__item">
      <div className="splash__avatar-wrap">
        <img src="https://raw.githubusercontent.com/rifkegribenes/dungeon-crawler/master/src/img/bush_200.png" alt="George W. Bush" className="card-pic" />
      </div>
      <div className="splash__text-wrap">
        <span className="splash__bold">George W. Bush</span><br />
          Modified from&nbsp;
          <a
            className="splash__link"
            href="https://www.artfire.com/ext/shop/product_view/DressXpress/12389222/george_w_bush_face_with_horns_die-cut_decal_car_window_wall_bumper_phone_laptop/commercial/home_and_garden/home_decor"
            rel="noopener noreferrer"
            target="_blank"
          >this image</a>&nbsp;(artist unknown)<br />
          All other monster images by <a className="splash__link" href="https://github.com/rifkegribenes" target="blank" rel="noopener noreferrer">@rifkegribenes</a>
      </div>
    </div>
    <div className="splash__item splash__item--food">
      <div className="splash__avatar-wrap splash__avatar-wrap--multi">
        <img src="https://raw.githubusercontent.com/rifkegribenes/dungeon-crawler/master/src/img/raspberry_200.png" alt="raspberry" className="card-pic" />
        <img src="https://raw.githubusercontent.com/rifkegribenes/dungeon-crawler/master/src/img/pear_200.png" alt="pear" className="card-pic" />
        <img src="https://raw.githubusercontent.com/rifkegribenes/dungeon-crawler/master/src/img/plum_200.png" alt="plum" className="card-pic" />
        <img src="https://raw.githubusercontent.com/rifkegribenes/dungeon-crawler/master/src/img/kiwi_200.png" alt="kiwi" className="card-pic" />
      </div>
      <div className="splash__text-wrap splash__text-wrap--right">
        <a
          className="splash__link"
          href="http://all-free-download.com/free-vector/download/glossy-fruits-icon-set_310473.html"
          rel="noopener noreferrer"
          target="_blank"
        >Source</a>
      </div>
    </div>
    <div className="splash__item splash__item--food">
      <div className="splash__avatar-wrap splash__avatar-wrap--multi">
        <img src="https://raw.githubusercontent.com/rifkegribenes/dungeon-crawler/master/src/img/cherries_200.png" alt="cherries" className="card-pic" />
        <img src="https://raw.githubusercontent.com/rifkegribenes/dungeon-crawler/master/src/img/apple_200.png" alt="apple" className="card-pic" />
      </div>
      <div className="splash__text-wrap splash__text-wrap--right">
        <a
          className="splash__link"
          href="http://all-free-download.com/free-vector/download/fresh-fruit-and-ice-cream-vector-set_573611.html"
          rel="noopener noreferrer"
          target="_blank"
        >Source</a>
      </div>
    </div>
    <div className="splash__item splash__item--food">
      <div className="splash__avatar-wrap splash__avatar-wrap--multi">
        <img src="https://raw.githubusercontent.com/rifkegribenes/dungeon-crawler/master/src/img/popsicle_200.png" alt="popsicle" className="card-pic" />
      </div>
      <div className="splash__text-wrap splash__text-wrap--right">
        <a
          className="splash__link"
          href="http://all-free-download.com/free-vector/download/fresh-fruit-and-ice-cream-vector-set_573615.html"
          rel="noopener noreferrer"
          target="_blank"
        >Source</a>
      </div>
    </div>
    <div className="splash__item splash__item--food">
      <div className="splash__avatar-wrap splash__avatar-wrap--multi">
        <img src="https://raw.githubusercontent.com/rifkegribenes/dungeon-crawler/master/src/img/cupcake_200.png" alt="cupcake" className="card-pic" />
      </div>
      <div className="splash__text-wrap splash__text-wrap--right">
        <a
          className="splash__link"
          href="http://all-free-download.com/free-vector/download/fresh-fruit-and-ice-cream-vector-set_573613.html"
          rel="noopener noreferrer"
          target="_blank"
        >Source</a>
      </div>
    </div>
    <div className="splash__item splash__item--food">
      <div className="splash__avatar-wrap splash__avatar-wrap--multi">
        <img src="https://raw.githubusercontent.com/rifkegribenes/dungeon-crawler/master/src/img/hamburger_200.png" alt="hamburger" className="card-pic" />
        <img src="https://raw.githubusercontent.com/rifkegribenes/dungeon-crawler/master/src/img/ice-cream_200.png" alt="ice cream" className="card-pic" />
        <img src="https://raw.githubusercontent.com/rifkegribenes/dungeon-crawler/master/src/img/donut_200.png" alt="donut" className="card-pic" />
        <img src="https://raw.githubusercontent.com/rifkegribenes/dungeon-crawler/master/src/img/fries_200.png" alt="fries" className="card-pic" />
      </div>
      <div className="splash__text-wrap splash__text-wrap--right">
        <a
          className="splash__link"
          href="http://freedesignfile.com/117940-fast-food-and-chocolate-with-ice-cream-icons-vector/"
          rel="noopener noreferrer"
          target="_blank"
        >Source</a>
      </div>
    </div>
  </div>
  );


const About = props => (
  <div>
    {props.appState.modalType === 'difficulty' &&
      <SetDifficulty
        playSound={props.playSound}
        history={props.history}
      />
    }
    <div className="splash">
      <div className="splash__container">
        <div className="splash__header">
          <h2 className="splash__title">Credits</h2>
        </div>
        <div className="splash__instructions">
          <p className="splash__center">Game design, code, and all artwork not credited below by <a className="splash__link" href="https://github.com/rifkegribenes" target="blank" rel="noopener noreferrer">@rifkegribenes</a>.<br />Thanks to Max and Leo T for beta testing and to Jay Schwane for the name.</p>
          <p className="splash__center">If you find a bug or have a feature request, please submit that <a className="splash__link" href="https://github.com/rifkegribenes/dungeon-crawler/issues" target="blank" rel="noopener noreferrer">here.</a></p>
          <h3 className="splash__subhead">Artwork</h3>
          <h4 className="splash__bold">Heroes</h4>
          <div className="splash__list">
            {heroCredits}
          </div>
          <h4 className="splash__bold">Other artwork</h4>
          <div className="splash__list">
            {otherCredits}
          </div>
          <div className="splash__btn-wrap">
            <button
              className="big-msg__btn"
              onClick={() => {
                props.playSound('movement');
                props.history.push('/');
              }}
            ><span className="rainbow">How to play</span></button>
            <button
              className="big-msg__btn"
              onClick={() => {
                props.playSound('movement');
                props.actions.openModal('difficulty');
              }}
            ><span className="rainbow">Start Game</span></button>
          </div>
        </div>
      </div>
    </div>
  </div>
    );

const mapStateToProps = state => ({
  appState: state.appState,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...Actions }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(About);
