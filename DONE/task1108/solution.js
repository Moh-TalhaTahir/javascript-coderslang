import { funkylog } from './functions.js';

const message = `
Hello, world 👋!

Let's make our Console Output Fun and Interactive in JavaScript and Node.js 🚀
`;

const log = funkylog({ delay: 100, randomized: true });

log(message);