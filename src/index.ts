// Flash Card app
import Pack from './models/pack';
import getPacks from './utils/get-packs';

const packs: Pack[] = getPacks();

console.log(`Packs: ${JSON.stringify(packs, null, ' ')}`);
