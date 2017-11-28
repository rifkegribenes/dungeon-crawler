import * as utils from '../utils';
import foodTypes from './foodTypes';
import teamHeroes from './teamHeroes';
import monsterTypes from './monsterTypes';

const fillGrid = (gameMap, level, hero) => {
  const tempHero = { ...hero };

  const monsters = [];
  const qM = monsterTypes
.filter(monster => monster.level === level);
  for (let i = 0; i < 4; i++) {
    const monster = Object.assign({}, qM[i]);
    monster.type = 'monster';
    monster.prevChange = [0, 0];
    monster.health = Math.floor(((level * 0.75) ** 2) * 90)
    + utils.randomInt(10 * level, 20 * level);
    monsters.push(monster);
  }

  const staircases = [];
  if (level < 3) {
    staircases.push({
      type: 'staircase',
      cardUrl: 'https://raw.githubusercontent.com/rifkegribenes/dungeon-crawler/master/src/img/staircase_200.png',
    });
  }

  const foods = [];
  const qF = foodTypes
 .filter(food => food.level === level);
  for (let i = 0; i < qF.length; i++) {
    const food = Object.assign({}, qF[i]);
    food.type = 'food';
    foods.push(food);
  }
  if (level === 3) {
    console.log(foods);
  }

  const teamHeroArray = [];
  const qH = teamHeroes
.filter(teamHero =>
  teamHero.level === level
  && (teamHero.name !== tempHero.name),
);
  for (let i = 0; i < 4; i++) {
    const teamHero = Object.assign({}, qH[i]);
    teamHero.type = 'teamHero';
    teamHeroArray.push(teamHero);
  }

// hard code hero in center of viewport
  const heroPosition = [utils.gridWidth / 2, utils.gridHeight / 2];
  const [hX, hY] = heroPosition;
  const newMap = gameMap.map(row => row.map((cell) => {
    const newCell = Object.assign({}, cell);
    return newCell;
  }));
  const newHero = hero;
  newHero.type = 'hero';
  newHero.room = 0;
  newMap[hY][hX] = newHero;

// hard code trump in upper left four floor tiles on level 3
// TODO: make this randomly choose one of the four corner rooms

  let trumpPosition = [];
  if (level === 3) {
    const finalMonster = {
      // health: 30,
      // level: 1,
      // damage: 10,
      health: 500,
      level: 5,
      damage: 60,
      type: 'finalMonster',
      name: 'Donald Trump',
      bio: '',
      youDiedMsg: '',
      iconUrl: 'https://raw.githubusercontent.com/rifkegribenes/dungeon-crawler/master/src/img/donald-trump_64.gif',
      cardUrl: 'https://raw.githubusercontent.com/rifkegribenes/dungeon-crawler/master/src/img/donald-trump_200.gif',
      opacity: 1,
    };

    // generate random corner for trump
    const corner = utils.randomInt(0, 4);
    let anchorCell = [];
    let finalMonsterRoom = null;

    // Save an array of the coordinates of the four blocks
    // that the final monster will fill
    switch (corner) {
      case 0: // top left
        for (let i = 0; i < newMap.length; i++) { // top
          for (let j = 0; j < newMap[i].length; j++) { // left
            if (newMap[i][j].type === 'floor') {
              anchorCell = [j, i]; // x,y
              finalMonsterRoom = newMap[i][j].room;
              break;
            }
          } if (anchorCell.length > 0) {
            trumpPosition = [
              [anchorCell[1], anchorCell[0]], // y,x TOP LEFT, anchor
              [anchorCell[1] + 1, anchorCell[0]],
              [anchorCell[1] + 1, anchorCell[0] + 1],
              [anchorCell[1], anchorCell[0] + 1],
            ];
            break;
          }
        }
        break;
      case 1: // bottom left
        for (let i = newMap.length - 1; i > 0; i--) { // bottom
          for (let j = 0; j < newMap[i].length; j++) { // left
            if (newMap[i][j].type === 'floor') {
              anchorCell = [j, i]; // x,y
              finalMonsterRoom = newMap[i][j].room;
              break;
            }
          } if (anchorCell.length > 0) {
            trumpPosition = [
              [anchorCell[1] - 1, anchorCell[0]], // TOP LEFT
              [anchorCell[1] - 1, anchorCell[0] + 1],
              [anchorCell[1], anchorCell[0] + 1],
              [anchorCell[1], anchorCell[0]], // y,x anchor, bottom left
            ];
            break;
          }
        }
        break;
      case 2: // top right
        for (let i = 0; i < newMap.length; i++) { // top
          for (let j = newMap[i].length - 1; j > 0; j--) { // right
            if (newMap[i][j].type === 'floor') {
              anchorCell = [j, i]; // x,y
              finalMonsterRoom = newMap[i][j].room;
              break;
            }
          } if (anchorCell.length > 0) {
            trumpPosition = [
              [anchorCell[1], anchorCell[0] - 1], // TOP LEFT
              [anchorCell[1] + 1, anchorCell[0]],
              [anchorCell[1] + 1, anchorCell[0] - 1],
              [anchorCell[1], anchorCell[0]], // y,x anchor, top right
            ];
            break;
          }
        }
        break;
      case 3: // bottom right
        for (let i = newMap.length - 1; i > 0; i--) { // bottom
          for (let j = newMap[i].length - 1; j > 0; j--) { // right
            if (newMap[i][j].type === 'floor') {
              anchorCell = [j, i]; // x,y
              finalMonsterRoom = newMap[i][j].room;
              break;
            }
          } if (anchorCell.length > 0) {
            trumpPosition = [
              [anchorCell[1] - 1, anchorCell[0] - 1], // TOP LEFT
              [anchorCell[1] - 1, anchorCell[0]],
              [anchorCell[1], anchorCell[0] - 1],
              [anchorCell[1], anchorCell[0]], // y,x anchor, bottom right
            ];
            break;
          }
        }
        break;
      default:
        break;
    }

      // assign room ID to trump
    finalMonster.room = finalMonsterRoom;

      // Fill four-tile block in corner position with fM object,
      // but only draw it in top left corner of block
    newMap[trumpPosition[0][0]][trumpPosition[0][1]] = finalMonster;

      // fill the other three tiles in the block with the smame object
      // but don't draw it to the canvas
    const fmInv = { ...finalMonster };

    fmInv.opacity = 0;
    newMap[trumpPosition[1][0]][trumpPosition[1][1]] = fmInv;
    newMap[trumpPosition[2][0]][trumpPosition[2][1]] = fmInv;
    newMap[trumpPosition[3][0]][trumpPosition[3][1]] = fmInv;
  }

  // randomly place other entities on floor cells throughout grid,
  // avoiding floor cells with doors as immediate neighbors because
  // monsters can't move through food or teamHeroes
  [foods, monsters, teamHeroArray, staircases].forEach((entities) => {
    while (entities.length) {
      const x = Math.floor(Math.random() * utils.gridWidth);
      const y = Math.floor(Math.random() * utils.gridHeight);
      if (newMap[y][x].type === 'floor') {
        const neighborCells = utils.getNeighbors([x, y]);
        const neighborDoors = neighborCells.filter(cell => newMap[cell[1]][cell[0]].type === 'door');
        if (!neighborDoors.length) {
          // assign a room ID to each entity placed in the grod
          const room = newMap[y][x].room;
          newMap[y][x] = entities.pop();
          newMap[y][x].room = room;
        }
      }
    }
  });

  // generate an array of doors for monsterAI
  // each door is an object with two keys:
  // 1) an array of xy coords, and 2) an array of IDs of adjoining rooms
  const doors = [];
  newMap.map((r, rIdx) => r.map((c, cIdx) => {
    if (c.type === 'door') {
      const neighborCells = utils.getNeighbors([cIdx, rIdx]).filter(cell => newMap[cell[1]][cell[0]].type === 'floor');
      if (neighborCells.length > 1) {
        doors.push({
          coords: [cIdx, rIdx],
          rooms: [
            newMap[neighborCells[0][1]][neighborCells[0][0]].room,
            newMap[neighborCells[1][1]][neighborCells[1][0]].room,
          ],
        });
      }
    }
    return null;
  }));
  // console.log(`doors array for level ${level}:`);
  // console.log(doors);
  return { newMap, heroPosition, trumpPosition, doors };
};

export default fillGrid;
