import Frozen from './images/frozen-pic.jpg';
import TheWizardofOz from './images/wizard-of-oz-pic.jpg';
import PsILoveYou from './images/ps-i-love-you-pic.jpg';
import MortalKombat from './images/mortal-kombat-pic.jpg';
import GameofThrones from './images/game-of-thrones-pic.jpg';
import TheBoys from './images/the-boys-pic.jpg';

function getShowsAndMovies() {
    return [
        { id: 'frozen', name: 'Frozen', img: Frozen, synopsis: 'When their kingdom becomes trapped in perpetual winter, fearless Anna (Kristen Bell) joins forces with mountaineer Kristoff (Jonathan Groff) and his reindeer sidekick to find Anna\'s sister, Snow Queen Elsa (Idina Menzel), and break her icy spell. Although their epic journey leads them to encounters with mystical trolls, a comedic snowman (Josh Gad), harsh conditions, and magic at every turn, Anna and Kristoff bravely push onward in a race to save their kingdom from winter\'s cold grip.' },
        { id: 'the-wizard-of-oz', name: 'The Wizard of Oz', img: TheWizardofOz, synopsis: 'When a tornado rips through Kansas, Dorothy (Judy Garland) and her dog, Toto, are whisked away in their house to the magical land of Oz. They follow the Yellow Brick Road toward the Emerald City to meet the Wizard, and en route they meet a Scarecrow (Ray Bolger) that needs a brain, a Tin Man (Jack Haley) missing a heart, and a Cowardly Lion (Bert Lahr) who wants courage. The wizard asks the group to bring him the broom of the Wicked Witch of the West (Margaret Hamilton) to earn his help.' },
        { id: 'ps-i-love-you', name: 'P.s. I Love You', img: PsILoveYou, synopsis: 'When Gerry (Gerard Butler), the husband of Holly Kennedy (Hilary Swank), dies from an illness, she loses the love of her life. Knowing how hard Holly will take his death, Gerry plans ahead. Beginning on her 30th birthday, she receives the first in a series of letters written by him, designed to ease her grief and encourage her to move forward to a new life.' },
        { id: 'mortal-kombat', name: 'Mortal Kombat', img: MortalKombat, synopsis: 'Based on the popular fighting video game. Mortal Kombat is a tournament where fighters duel to a death match. A sorcerer from another world named Shang Tsung invites some of the world\'s best fighters to compete in the tournament, along with them comes characters such as Liu Kang, Johnny Cage and Sonya Blade.' },
        { id: 'game-of-throne', name: 'Game of Thrones', img: GameofThrones, synopsis: 'Game of Thrones is roughly based on the storylines of A Song of Ice and Fire, set in the fictional Seven Kingdoms of Westeros and the continent of Essos. The series chronicles the violent dynastic struggles among the realm\'s noble families for the Iron Throne, while other families fight for independence from it.' },
        { id: 'the-boys', name: 'The Boys', img: TheBoys, synopsis: 'A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers. The Boys is set in a universe where superpowered people are recognized as heroes by the general public and owned by powerful corporation Vought International, which ensures that they are aggressively marketed and monetized.' }
    ];
}

export default getShowsAndMovies;