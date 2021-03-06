// Hero start: 10

// America Chavez 1 5
// Wonder Woman 1 5
// Crimson Avenger 1 5
// Devi 1 5
// Sabra 1 5
// TOTAL: (4 from level 1 + hero L1) 30

// Dust 2 10
// La Borinqueña 2 10
// Ms Marvel 2 10
// Silk 2 10
// Misty Knight 2 10
// TOTAL: 70 * 1.5 = 135

// Grace Choi 3 10
// Storm 3 10
// The Wasp 3 10
// Shakti 3 20
// Amihan 3 20
// TOTAL: 166 * 2 = 332


const teamHeroes = [
  {
    name: 'America Chavez',
    powers: 'Superhuman strength, speed, and durabilty; Flight; Inter-reality transportation',
    aliases: 'Ms. America, MAC',
    iconUrl: 'https://raw.githubusercontent.com/rifkegribenes/dungeon-crawler/master/src/img/america-chavez_32_c.png',
    cardUrl: 'https://raw.githubusercontent.com/rifkegribenes/dungeon-crawler/master/src/img/america-chavez_200.png',
    damage: 5,
    level: 1,
    createdBy: 'Joe Casey, Nick Dragotta',
    srcName: 'Marvel NOW! Point One #1',
    srcUrl: 'http://marvel.wikia.com/wiki/Marvel_NOW!_Point_One_Vol_1_1',
    artBy: 'Jamie McKelvie, Mike Norton, Matthew Wilson',
  },
  {
    name: 'Wonder Woman',
    powers: 'Superhuman strength, speed, durability, and longevity; Flight; Lasso of Truth',
    aliases: 'Princess Diana of Themyscira',
    iconUrl: 'https://raw.githubusercontent.com/rifkegribenes/dungeon-crawler/master/src/img/wonder-woman_32_c.png',
    cardUrl: 'https://raw.githubusercontent.com/rifkegribenes/dungeon-crawler/master/src/img/wonder-woman_200.png',
    damage: 5,
    level: 1,
    createdBy: 'William Moulton Marston, Harry G. Peter',
    srcName: 'Wonder Woman v.2 63',
    srcUrl: 'http://dc.wikia.com/wiki/Wonder_Woman_(Diana_Prince)?file=Wonder_Woman_v.2_63.jpg',
    artBy: 'Brian Bolland',
  },
  {
    name: 'Crimson Avenger',
    powers: 'Teleportation, Intangibility',
    aliases: 'Jill Carlyle',
    iconUrl: 'https://raw.githubusercontent.com/rifkegribenes/dungeon-crawler/master/src/img/crimson-avenger_32_c.png',
    cardUrl: 'https://raw.githubusercontent.com/rifkegribenes/dungeon-crawler/master/src/img/crimson-avenger_200.png',
    damage: 5,
    level: 1,
    createdBy: 'Geoff Johns, Scott Kolins',
    srcName: 'JSA #52',
    srcUrl: 'https://en.wikipedia.org/wiki/Crimson_Avenger#/media/File:CrimsonAvengerIII.jpg',
    artBy: 'Carlos Pacheco',
  },
  {
    name: 'Devi',
    powers: 'Warrior-goddess, protector of mankind, and savior of her city, Sitapur',
    aliases: 'Tara Mehta',
    iconUrl: 'https://raw.githubusercontent.com/rifkegribenes/dungeon-crawler/master/src/img/devi_32_c.png',
    cardUrl: 'https://raw.githubusercontent.com/rifkegribenes/dungeon-crawler/master/src/img/devi_200.png',
    damage: 5,
    level: 1,
    createdBy: 'Shekhar Kapur',
    srcName: 'Devi – The Goddess Of Light | Vol. 3',
    srcUrl: 'https://graphicindia.com/portfolio/devi/',
    artBy: 'Saumin Patel',
  },
  {
    name: 'Nubia',
    powers: 'Superhuman strength, speed, durability, and longevity, Flight, Healing',
    aliases: 'Wonder Woman, Nu\'bia',
    iconUrl: 'https://raw.githubusercontent.com/rifkegribenes/dungeon-crawler/master/src/img/nubia_32_c.png',
    cardUrl: 'https://raw.githubusercontent.com/rifkegribenes/dungeon-crawler/master/src/img/nubia_200.png',
    damage: 5,
    level: 1,
    createdBy: 'Doselle Young, Brian Denham',
    srcName: 'Injustice 2 #29',
    srcUrl: 'https://comicnewbies.files.wordpress.com/2017/10/nubia-as-wonder-woman-injustice-ii-3.jpg',
    artBy: 'Bruno Redondo',
  },
  {
    name: 'Dust',
    powers: 'Able to transform into and control a malleable sand form',
    aliases: 'Sooraya Qadir',
    iconUrl: 'https://raw.githubusercontent.com/rifkegribenes/dungeon-crawler/master/src/img/dust_32_c.png',
    cardUrl: 'https://raw.githubusercontent.com/rifkegribenes/dungeon-crawler/master/src/img/dust_200.png',
    damage: 10,
    level: 2,
    createdBy: 'Grant Morrison, Frank Quitely, Ethan Van Sciver',
    srcName: 'New X-Men: Hellions #2',
    srcUrl: 'https://en.wikipedia.org/wiki/Dust_(comics)#/media/File:DustProfile.jpg',
    artBy: 'Clayton Henry',
  },
  {
    name: 'La Borinquena',
    powers: 'Superhuman strength, Flight, Control over storms',
    aliases: 'Marisol Rios De La Luz',
    iconUrl: 'https://raw.githubusercontent.com/rifkegribenes/dungeon-crawler/master/src/img/la-borinquena_32_c.png',
    cardUrl: 'https://raw.githubusercontent.com/rifkegribenes/dungeon-crawler/master/src/img/la-borinquena_200.png',
    damage: 10,
    level: 2,
    createdBy: 'Edgardo Miranda-Rodriguez',
    srcName: 'La Borinqueña #1',
    srcUrl: 'https://img.washingtonpost.com/news/comic-riffs/wp-content/uploads/sites/15/2016/05/LB_FINAL_CoverArt.jpg',
    artBy: 'Edgardo Miranda-Rodriguez, Elliot Fernandez, Juan Fernandez',
  },
  {
    name: 'Ms. Marvel',
    powers: 'Shapeshifting, Healing',
    aliases: 'Kamala Khan',
    iconUrl: 'https://raw.githubusercontent.com/rifkegribenes/dungeon-crawler/master/src/img/ms-marvel_32_c.png',
    cardUrl: 'https://raw.githubusercontent.com/rifkegribenes/dungeon-crawler/master/src/img/ms-marvel_200.png',
    damage: 10,
    level: 2,
    createdBy: 'Sana Amanat, Stephen Wacker, G. Willow Wilson, Adrian Alphona',
    srcName: 'Ms. Marvel Vol 3 #3',
    srcUrl: 'http://marvel.wikia.com/wiki/Ms._Marvel_Vol_3_3',
    artBy: 'Jamie McKelvie, Matt Wilson',
  },
  {
    name: 'Silk',
    powers: 'Superhuman strength, speed, agility, stamina, reflexes and endurance; Long range precognitive Spider-sense, Eidetic memory',
    aliases: 'Cindy Moon',
    iconUrl: 'https://raw.githubusercontent.com/rifkegribenes/dungeon-crawler/master/src/img/silk_32_c.png',
    cardUrl: 'https://raw.githubusercontent.com/rifkegribenes/dungeon-crawler/master/src/img/silk_200.png',
    damage: 10,
    level: 2,
    createdBy: 'Dan Slott, Humberto Ramos',
    srcName: 'Silk #1 1',
    srcUrl: 'http://marvel.wikia.com/wiki/Silk_Vol_1_1',
    artBy: 'Dave Johnson, Stacey Lee, Ian Herring',
  },
  {
    name: 'Misty Knight',
    powers: 'Highly skilled martial artist, Bionic right arm, Superhuman strength, Magnetism',
    aliases: 'Mercedes Kelly Knight, Maya Corday',
    iconUrl: 'https://raw.githubusercontent.com/rifkegribenes/dungeon-crawler/master/src/img/misty-knight_32_c.png',
    cardUrl: 'https://raw.githubusercontent.com/rifkegribenes/dungeon-crawler/master/src/img/misty-knight_200.png',
    damage: 10,
    level: 2,
    createdBy: 'Tony Isabella, Arvell Jones',
    srcName: 'Daughters of the Dragon #1',
    srcUrl: 'http://marvel.com/comics/issue/3203/daughters_of_the_dragon_2006_1',
    artBy: 'Khari Evans',
  },
  {
    name: 'Grace Choi',
    powers: 'Superhuman strength, durability, and regeneration',
    aliases: 'Grace Choi',
    iconUrl: 'https://raw.githubusercontent.com/rifkegribenes/dungeon-crawler/master/src/img/grace-choi_32_c.png',
    cardUrl: 'https://raw.githubusercontent.com/rifkegribenes/dungeon-crawler/master/src/img/grace-choi_200.png',
    damage: 10,
    level: 3,
    createdBy: 'Judd Winick, Tom Raney',
    srcName: 'Outsiders Vol. 3 #9',
    srcUrl: 'https://comicvine.gamespot.com/images/1300-289036',
    artBy: 'Tom Raney, Scott Hanna, Gina Going',
  },
  {
    name: 'Storm',
    powers: 'Weather manipulation',
    aliases: 'Ororo Munroe',
    iconUrl: 'https://raw.githubusercontent.com/rifkegribenes/dungeon-crawler/master/src/img/storm_32_c.png',
    cardUrl: 'https://raw.githubusercontent.com/rifkegribenes/dungeon-crawler/master/src/img/storm_200.png',
    damage: 10,
    level: 3,
    createdBy: 'Len Wein, Dave Cockrum',
    srcName: 'Storm #11',
    srcUrl: 'http://marvel.com/comics/issue/52719/storm_2014_11',
    artBy: 'Stephanie Hans',
  },

  {
    name: 'Monica Chang',
    powers: 'Agility, Escape Artist, Gadgets, Intellect, Invisibility, Power Suit, Stealth, Unarmed Combat, Weapon Master',
    aliases: 'Black Widow, Monica Fury',
    iconUrl: 'https://raw.githubusercontent.com/rifkegribenes/dungeon-crawler/master/src/img/monica-chang_32_c.png',
    cardUrl: 'https://raw.githubusercontent.com/rifkegribenes/dungeon-crawler/master/src/img/monica-chang_200.png',
    damage: 10,
    level: 3,
    createdBy: 'Mark Millar, Carlos Pacheco',
    srcName: 'Ultimate Comics Ultimates Vol 1 #18',
    srcUrl: 'https://vignette.wikia.nocookie.net/marveldatabase/images/2/2e/Monica_Chang_%28Earth-1610%29_from_Ultimate_Comics_Ultimates_Vol_1_18.JPG/revision/latest?cb=20121114171810',
    artBy: 'Luke Ross, Mike Milla',
  },
  {
    name: 'Monet St. Croix',
    powers: 'Superhuman Physiology, Flight, Telepathy, Telekinesis, Mutant Aura Perception, Gestalt Form',
    aliases: 'M, Penance, White Queen',
    iconUrl: 'https://raw.githubusercontent.com/rifkegribenes/dungeon-crawler/master/src/img/monet-st-croix_32_c.png',
    cardUrl: 'https://raw.githubusercontent.com/rifkegribenes/dungeon-crawler/master/src/img/monet-st-croix_200.png',
    damage: 20,
    level: 3,
    createdBy: 'Scott Lobdell, Chris Bachalo',
    srcName: 'Uncanny X-Men Vol 4 #5',
    srcUrl: 'http://marvel.wikia.com/wiki/File:Monet_St._Croix_(Earth-616)_from_Uncanny_X-Men_Vol_4_5_001.jpg',
    artBy: 'Greg Land, Jay Leisten, Nolan Woodard',
  },
  {
    name: 'White Fox',
    powers: 'Heightened Senses, Claws, Communication with Animals',
    aliases: 'Ami Han, Agent F-One',
    iconUrl: 'https://raw.githubusercontent.com/rifkegribenes/dungeon-crawler/master/src/img/amihan_32_c.png',
    cardUrl: 'https://raw.githubusercontent.com/rifkegribenes/dungeon-crawler/master/src/img/amihan_200.png',
    damage: 20,
    level: 3,
    createdBy: 'Al Ewing, Paco Medina',
    srcName: 'Contest of Champions Vol 1 #1',
    srcUrl: 'http://marvel.wikia.com/wiki/Ami_Han_(Earth-616)?file=Ami_Han_%28Earth-616%29_from_Contest_of_Champions_Vol_1_1_001.jpg',
    artBy: 'Paco Medina, Juan Vlasco, David Curiel',
  },
];

export default teamHeroes;
