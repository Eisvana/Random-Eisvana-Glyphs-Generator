import '@picocss/pico';
import './styles.css';
// the order of the CSS imports is IMPORTANT, DO NOT change it!!!
import { getRandomGlyphs } from './logic/glyphs';
import { switchTheme } from './logic/theme';

interface Elements {
  themeSwitch?: HTMLButtonElement;
  die?: HTMLButtonElement;
  glyphOutput?: HTMLOutputElement;
}

const ids: { [key: string]: string } = {
  themeSwitch: 'themeSwitch',
  die: 'die',
  glyphOutput: 'glyphOutput',
};

const elements: Elements = {};

for (const id in ids) {
  //@ts-ignore the keys are of type any, because for some reason TS can't handle it...
  elements[id] = document.getElementById(id);
}

// add handlers
elements.die!.onclick = () => showRandomGlyphs();
elements.themeSwitch!.onclick = () => switchTheme();

// this is the main function that gets called when you press the button
function showRandomGlyphs(): void {
  const glyphs = getRandomGlyphs();
  displayGlyphs(glyphs);
}

function displayGlyphs(glyphs: string): void {
  const output = elements.glyphOutput;
  output!.innerText = glyphs;
}
