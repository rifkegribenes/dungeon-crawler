import update from 'immutability-helper';
import teamHeroes from '../../utils/teamHeroes';

import { SET_LEVEL, SET_HERO, UPDATE_HERO, UPDATE_TRUMP, CLOSE_MODAL, OPEN_MODAL, RESTART, START, USER_INPUT, SET_CURRENT_ENTITY, UPDATE_ENTITIES, UPDATE_ENTITY, UPDATE_COMBAT, UPDATE_MESSAGES, UPDATE_DIMENSIONS, HANDLE_STAIRCASE, UPDATE_GRID, SHOW_MSG, HIDE_MSG, TOGGLE_SOUND, TOGGLE_TORCH, SET_LOADED, PLAY, PAUSE, SET_PREV_VP, SET_CANDLE, SET_KEY, SET_DIFFICULTY } from '../actions';

const INITIAL_STATE = {
  entities: [[]],
  gameLevel: 1,
  heroPosition: [],
  trumpPosition: [],
  finalMonsterRoom: null,
  doors: [],
  hero: {
    hp: 100,
    xp: 0,
    attack: 10,
    name: '',
    cardUrl: '',
    iconUrl: '',
    aliases: '',
    powers: '',
    team: [],
    level: 1,
    room: 0,
  },
  messages: ['Welcome to the dungeon! Try eating some food and gathering your team members before attacking any monsters.'],
  modalOpen: true,
  modalTitle: '',
  modalList: teamHeroes,
  bigMsg: {
    show: false,
    title: '',
    imgUrl: '',
    imgAlt: '',
    body1: '',
    body2: '',
    news: '',
    action: '',
    actionText: '',
  },
  currentEntity: {
    type: 'floor',
  },
  clipSize: 640,
  cellSize: 32,
  gridFilled: false,
  sound: true,
  torch: true,
  loaded: false,
  running: false,
  combatName: '',
  combatInit: '',
  prevVP: null,
  candle: false,
  key: false,
  levelComplete: false,
  difficulty: 0,
  modalType: null,
};

function appState(state = INITIAL_STATE, action) {
  let x;
  let y;
  if (action.type === 'UPDATE_ENTITY') {
    [x, y] = action.payload.coords;
  }
  switch (action.type) {

    case SET_LEVEL:
      return update(
        state,
        {
          gameLevel: { $set: action.payload },
        },
      );

    case SET_DIFFICULTY:
      return update(
        state,
        {
          difficulty: { $set: action.payload },
        },
      );

    case OPEN_MODAL:
      return update(
        state,
        {
          modalType: { $set: action.payload },
        },
      );

    case CLOSE_MODAL:
      return update(
        state,
        {
          modalType: { $set: null },
        },
      );

    case SET_LOADED:
      return update(
        state,
        {
          loaded: { $set: true },
        },
      );

    case PLAY:
      return update(
        state,
        {
          running: { $set: true },
        },
      );

    case PAUSE:
      return update(
        state,
        {
          running: { $set: false },
        },
      );

    case TOGGLE_TORCH:
      return update(
        state,
        {
          torch: { $set: !action.payload },
        },
      );

    case SET_CANDLE:
      return update(
        state,
        {
          candle: { $set: true },
        },
      );

    case SET_KEY:
      return update(
        state,
        {
          key: { $set: true },
        },
      );

    case TOGGLE_SOUND:
      return update(
        state,
        {
          sound: { $set: !action.payload },
        },
      );

    case SET_HERO:
      return update(
        state,
        {
          hero: {
            name: { $set: action.payload.name },
            cardUrl: { $set: action.payload.cardUrl },
            iconUrl: { $set: action.payload.iconUrl },
            aliases: { $set: action.payload.aliases },
            powers: { $set: action.payload.powers },
            hp: { $set: 100 },
            xp: { $set: 0 },
            attack: { $set: 10 },
            team: { $set: [] },
            level: { $set: 1 },
            room: { $set: 0 },
          },
        },
      );

    case UPDATE_HERO:
      return update(
        state,
        {
          hero: {
            hp: { $set: action.payload.hp },
            xp: { $set: action.payload.xp },
            attack: { $set: action.payload.attack },
            team: { $set: action.payload.team },
            level: { $set: action.payload.level },
            room: { $set: action.payload.room },
          },
        },
      );

    case UPDATE_TRUMP:
      return update(
        state,
        {
          trumpPosition: { $set: action.payload.trumpPosition },
          entities: { $set: action.payload.entities },
        },
      );

    case SHOW_MSG:
      return update(
        state,
        {
          bigMsg: {
            show: { $set: true },
            title: { $set: action.payload.title },
            imgUrl: { $set: action.payload.imgUrl },
            imgAlt: { $set: action.payload.imgAlt },
            body1: { $set: action.payload.body1 },
            body2: { $set: action.payload.body2 },
            news: { $set: action.payload.news },
            action: { $set: action.payload.action },
            actionText: { $set: action.payload.actionText },
          },
        },
      );

    case HIDE_MSG:
      return update(
        state,
        {
          bigMsg: {
            show: { $set: false },
            title: { $set: '' },
            imgUrl: { $set: '' },
            imgAlt: { $set: '' },
            body1: { $set: '' },
            body2: { $set: '' },
            news: { $set: '' },
            action: { $set: '' },
            actionText: { $set: '' },
          },
        },
      );

    case START:
      return update(
        state,
        {
          entities: { $set: action.payload.entities },
          heroPosition: { $set: action.payload.heroPosition },
          gridFilled: { $set: true },
          trumpPosition: { $set: action.payload.trumpPosition },
          doors: { $set: action.payload.doors },
        },
      );

    case USER_INPUT:
      return update(
        state,
        {
          entities: { $set: action.payload.entities },
          heroPosition: { $set: action.payload.heroPosition },
        },
      );

    case SET_PREV_VP:
      return update(
        state,
        {
          prevVP: { $set: action.payload.prevVP },
        },
      );

    case UPDATE_GRID:
      return update(
        state,
        {
          entities: { $set: action.payload.entities },
          heroPosition: { $set: action.payload.heroPosition },
        },
      );

    case UPDATE_ENTITIES:
      return update(
        state,
        {
          entities: { $set: action.payload.entities },
        },
      );

    case UPDATE_ENTITY:
      return update(
        state,
        {
          entities: { [y]: { [x]: { $merge: {
            name: action.payload.entity.name,
            bio: action.payload.entity.bio,
            iconUrl: action.payload.entity.iconUrl,
            cardUrl: action.payload.entity.cardUrl,
            type: action.payload.entity.type,
            damage: action.payload.entity.damage,
            level: action.payload.entity.level,
            health: action.payload.entity.health,
          } } } },
        },
      );

    case SET_CURRENT_ENTITY:
      return update(
        state,
        {
          currentEntity: { $set: action.payload },
        },
      );

    case UPDATE_MESSAGES:
      return update(
        state,
        {
          messages: { $set: action.payload },
        },
      );

    case UPDATE_COMBAT:
      return update(
        state,
        {
          combatName: { $set: action.payload.name },
          combatInit: { $set: action.payload.init },
        },
      );

    case UPDATE_DIMENSIONS:
      return update(
        state,
        {
          clipSize: { $set: action.payload.clipSize },
          cellSize: { $set: action.payload.cellSize },
        },
      );

    case HANDLE_STAIRCASE:
      return update(
        state,
        {
          currentEntity: { $set: action.payload.currentEntity },
          heroPosition: { $set: action.payload.heroPosition },
          trumpPosition: { $set: action.payload.trumpPosition },
          entities: { $set: action.payload.entities },
          gameLevel: { $set: action.payload.gameLevel },
          doors: { $set: action.payload.doors },
          finalMonsterRoom: { $set: action.payload.finalMonsterRoom || null },
        },
        );

    case RESTART:
      return INITIAL_STATE;

    default:
      return state;
  }
}

export default appState;
