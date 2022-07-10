import func from './createMessager.js';

const messager1 = func();
messager1.sendMessage('Anna');

const messanger2 = func();
messanger2.setMessage('You are learning JS and you do it well');
messanger2.sendMessage('Michael');
const messanger3 = func();
messanger3.setSender('Anna');
messanger3.sendMessage();
