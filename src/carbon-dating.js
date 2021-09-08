import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (sampleActivity==undefined || typeof sampleActivity!="string" || isNaN(sampleActivity) || Number(sampleActivity)>15 || Number(sampleActivity)<=0) {
    return false;
  }
  else {let k=0.693/HALF_LIFE_PERIOD;
    let t=Math.ceil((Math.log(sampleActivity/MODERN_ACTIVITY))/(-1*k));
    return t;
  }
  
};
