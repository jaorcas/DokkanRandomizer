import { CategoriasItem } from "./src/app/Interfaces/categories.interface";

const Constants = {
  LRJSONPath: 'assets/JSONs/LRs.json',
  URJSONPath: 'assets/JSONs/URs.json',
  urlImagenes: 'https://dbz-dokkanbattle.com/',

  allCategories: [
    { id: 59, name: "Power Absortions" } as CategoriasItem,
    { id: 34, name: "DB Saga" } as CategoriasItem,
    { id: 63, name: "Connected Hopes" } as CategoriasItem,
    { id: 92, name: "Super Bosses" } as CategoriasItem,
    { id: 73, name: "GT Bosses" } as CategoriasItem,
    { id: 16, name: "Movie Bosses" } as CategoriasItem,
    { id: 82, name: "Worldwide Chaos" } as CategoriasItem,
    { id: 25, name: "Dragon Ball Seekers" } as CategoriasItem,
    { id: 83, name: "Battle of Fate" } as CategoriasItem,
    { id: 80, name: "Rapid Growth" } as CategoriasItem,
    { id: 89, name: "Earthbred Fighters" } as CategoriasItem,
    { id: 44, name: "Otherworld Warriors" } as CategoriasItem,
    { id: 64, name: "Corroded Body and Mind" } as CategoriasItem,
    { id: 54, name: "Rapid Growth" } as CategoriasItem,
    { id: 61, name: "Crossover" } as CategoriasItem,
    { id: 21, name: "Androids" } as CategoriasItem,
    { id: 38, name: "Androids/Cell Saga" } as CategoriasItem,
    { id: 46, name: "Final Trump Card" } as CategoriasItem,
    { id: 69, name: "Planetary Destruction" } as CategoriasItem,
    { id: 50, name: "Inhuman Deeds" } as CategoriasItem,
    { id: 37, name: "Worthy Rivals" } as CategoriasItem,
    { id: 8, name: "Realm of Gods" } as CategoriasItem,
    // { id: 42, name: "Dragon Ball Heroes" } as CategoriasItem,
    { id: 2, name: "Shadow Dragon Saga" } as CategoriasItem,
    { id: 33, name: "Youth" } as CategoriasItem,
    { id: 78, name: "Sworn Enemies" } as CategoriasItem,
    { id: 47, name: "Exploding Rage" } as CategoriasItem,
    { id: 30, name: "Goku's Family" } as CategoriasItem,
    { id: 31, name: "Vegeta's Family" } as CategoriasItem,
    { id: 4, name: "Peppy Gals" } as CategoriasItem,
    { id: 28, name: "Joined Forces" } as CategoriasItem,
    { id: 13, name: "Giant Form" } as CategoriasItem,
    { id: 1, name: "Fusion" } as CategoriasItem,
    { id: 85, name: "Fused Fighters" } as CategoriasItem,
    { id: 11, name: "Low-Class Warrior" } as CategoriasItem,
    { id: 68, name: "Gifted Warriors" } as CategoriasItem,
    { id: 62, name: "Space Traveling Warriors" } as CategoriasItem,
    { id: 88, name: "Super Heroes" } as CategoriasItem,
    { id: 72, name: "GT Heroes" } as CategoriasItem,
    { id: 70, name: "Defenders of Justice" } as CategoriasItem,
    { id: 29, name: "Movie Heroes" } as CategoriasItem,
    { id: 39, name: "Kamehameha" } as CategoriasItem,
    { id: 90, name: "Power of Wishes" } as CategoriasItem,
    { id: 35, name: "Sibling's Bond" } as CategoriasItem,
    { id: 40, name: "Bond of Master and Disciple" } as CategoriasItem,
    { id: 87, name: "Bond of parent and child" } as CategoriasItem,
    { id: 79, name: "Bond of Friendship" } as CategoriasItem,
    { id: 24, name: "Wicked Bloodline" } as CategoriasItem,
    { id: 55, name: "All out struggle" } as CategoriasItem,
    { id: 71, name: "Storied Figures" } as CategoriasItem,
    { id: 18, name: "Namekians" } as CategoriasItem,
    { id: 43, name: "Target Goku" } as CategoriasItem,
    { id: 91, name: "Tournament Participants" } as CategoriasItem,
    { id: 52, name: "Special Pose" } as CategoriasItem,
    { id: 10, name: "Potara" } as CategoriasItem,
    { id: 53, name: "Majin Power" } as CategoriasItem,
    { id: 58, name: "Battle of Wits" } as CategoriasItem,
    { id: 84, name: "Power Beyond Super Saiyan" } as CategoriasItem,
    { id: 60, name: "Giant Ape Power" } as CategoriasItem,
    { id: 20, name: "Full Power" } as CategoriasItem,
    { id: 67, name: "Powerfull Combat" } as CategoriasItem,
    { id: 74, name: "Heavenly Events" } as CategoriasItem,
    { id: 22, name: "Representatives of Universe 7" } as CategoriasItem,
    { id: 7, name: "Resurrected Warriors" } as CategoriasItem,
    { id: 9, name: "Majin Buu Saga" } as CategoriasItem,
    { id: 14, name: "Namek Saga" } as CategoriasItem,
    { id: 86, name: "Saiyan Saga" } as CategoriasItem,
    { id: 19, name: "Future Saga" } as CategoriasItem,
    { id: 5, name: "Hybrid Saiyans" } as CategoriasItem,
    { id: 17, name: "Pure Saiyans" } as CategoriasItem,
    { id: 57, name: "Saviors" } as CategoriasItem,
    { id: 36, name: "Super Saiyan" } as CategoriasItem,
    { id: 45, name: "Super Saiyan 2" } as CategoriasItem,
    { id: 12, name: "Super Saiyan 3" } as CategoriasItem,
    { id: 6, name: "Universal Survival Saga" } as CategoriasItem,
    { id: 75, name: "Time Limit" } as CategoriasItem,
    { id: 3, name: "World Tournament" } as CategoriasItem,
    { id: 51, name: "Earthlings" } as CategoriasItem,
    { id: 41, name: "Terrifying Conquerors" } as CategoriasItem,
    { id: 23, name: "Transformation Boost" } as CategoriasItem,
    { id: 56, name: "Universe 11" } as CategoriasItem,
    { id: 27, name: "Universe 6" } as CategoriasItem,
    { id: 48, name: "Revenge" } as CategoriasItem,
    { id: 32, name: "Artificial Life Forms" } as CategoriasItem,
    { id: 81, name: "Entrusted Will" } as CategoriasItem,
    { id: 26, name: "Time Travelers" } as CategoriasItem,
    { id: 65, name: "Turtle School" } as CategoriasItem,
    { id: 49, name: "Team Bardock" } as CategoriasItem,
    { id: 66, name: "Miraculous Awakening" } as CategoriasItem,
    { id: 76, name: "Mastered Evolution" } as CategoriasItem,
    { id: 77, name: "Legendary Existence" } as CategoriasItem,
    { id: 15, name: "Ginyu Forces" } as CategoriasItem,
    { id: 94, name: "Uncontrollable Power" } as CategoriasItem,
    // { id: 999, name: "Gohan Beast =)" } as CategoriasItem

  ] as CategoriasItem[],

  allEvents: [
   "Memorable Battles - Gogeta",
   "Memorable Battles - Broly/Cheelai/Lemo",
   "Red Zone Movie 2 - Golden Frieza",
   "Blue Zone - Super Saiyan Vegeta God SS",
   "Blue Zone - Trunks",
   "Legendary Event - Frieza",
   "Red Zone Movie 1 - Broly",
   "Red Zone Majin Buu Saga - Majin Buu (absortion)",
   "Red Zone Majin Buu Saga - Buu (super)",
   "Fearsome Activation - Cell Max 1",
   "Fearsome Activation - Cell Max 2",
   "Red Zone GT Edition - Syn Shenron",
   "Shadow Dragons - Omega",
  ]

};

export default Constants;
