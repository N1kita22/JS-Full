'use strict';

/**
 * @return {object}
 */
const createLogger = () => {
  const mem = [];
  const obj = {
    warn(text) {
      const warnObj = {
        message: text,
        type: 'warn',
        dateTime: new Date(),
      };
      mem.unshift(warnObj);
    },
    log(text) {
      const logObj = {
        message: text,
        type: 'log',
        dateTime: new Date(),
      };
      mem.unshift(logObj);
    },
    error(text) {
      const errorObj = {
        message: text,
        type: 'error',
        dateTime: new Date(),
      };
      mem.unshift(errorObj);
    },
    getRecords(text) {
      switch (text) {
        case 'warn':
          return mem.filter(el => el.type == 'warn');
        case 'log':
          return mem.filter(el => el.type == 'log');
        case 'error':
          return mem.filter(el => el.type == 'error');
        case undefined:
          return mem;
      }
    },
  };

  console.log(mem);
  return obj;
};

// examples
const logger1 = createLogger();
logger1.log('User logged in');
logger1.warn('User is tring to ented restricted page');
logger1.log('User logged out');
logger1.error('Unexpected error on the site');
console.log(logger1);

console.log(logger1.getRecords()); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }, { message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
logger1.getRecords('log'); // ===> [{ message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
logger1.getRecords('error'); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }]
console.log(logger1.getRecords('warn')); // ===> [{ message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }]

// const logger2 = createLogger();
// logger2.warn('Opps, something is happenning');
// logger2.getRecords('error'); // ===> []
// logger2.getRecords('warn'); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]
// logger2.getRecords(); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]

// const logger3 = createLogger();
// logger3.getRecords('error'); // ===> []
// logger3.getRecords(); // ===> []
