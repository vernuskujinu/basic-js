import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  isDirect = true;
  AL = 26;
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }
  encrypt(message, key) {
    if (!message || !key)
      throw new Error(`Incorrect arguments!`);
    message = message.toUpperCase();
    key = key.toUpperCase();
    let keyString = "";
    for (let i = 0; i < message.length; i++)
      keyString += key[i % key.length];
    let res = "";
    for (let i = 0, count = 0; i < message.length; i++) {
      const elCode = message[i].charCodeAt(0);
      if (elCode < 65 || elCode > 90) {
        res += message[i];
        continue;
      }
      const keyCode = keyString[count].charCodeAt(0);
      count++;
      res += String.fromCharCode(((keyCode + elCode) % this.AL) + 65)
    }
    return this.isDirect ? res : res.split("").reverse().join("");
  }
  decrypt(message, key) {
    if (!message || !key)
      throw new Error(`Incorrect arguments!`);
    key = key.toUpperCase();
    let keyString = "";
    for (let i = 0; i < message.length; i++)
      keyString += key[i % key.length];
    let res = "";
    for (let i = 0, count = 0; i < message.length; i++) {
      const elCode = message[i].charCodeAt(0);
      if (elCode < 65 || elCode > 90) {
        res += message[i];
        continue;
      }
      const keyCode = keyString[count].charCodeAt(0);
      count++;
      res += String.fromCharCode(((elCode + this.AL - keyCode) % this.AL) + 65)
    }
    return this.isDirect ? res : res.split("").reverse().join("");
  }
}
