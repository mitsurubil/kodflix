import Frozen from './images/frozen-pic.jpg';
import TheWizardofOz from './images/wizard-of-oz-pic.jpg';
import PsILoveYou from './images/ps-i-love-you-pic.jpg';
import MortalKombat from './images/mortal-kombat-pic.jpg';
import GameofThrones from './images/game-of-thrones-pic.jpg';
import TheBoys from './images/the-boys-pic.jpg';

function getShowsAndMovies() {
    return [
        { id: 'frozen', name: 'Frozen', img: Frozen },
        { id: 'the-wizard-of-oz', name: 'The Wizard of Oz', img: TheWizardofOz },
        { id: 'ps-i-love-you', name: 'P.s. I Love You', img: PsILoveYou },
        { id: 'mortal-kombat', name: 'Mortal Kombat', img: MortalKombat },
        { id: 'game-of-throne', name: 'Game of Thrones', img: GameofThrones },
        { id: 'the-boys', name: 'The Boys', img: TheBoys }
    ];
}

export default getShowsAndMovies;