import { getFormattedDate } from "./functions.js"

export const logger = (configString) => {
  // Split configString into an array of options
  const configOptions = configString.split(" ");

  return (req, res, next) => {
    let logString = ` `;

    // Check each configuration option and append to logString if present
    for (const option of configOptions) {
      switch (option) {
        case ":method":
          logString += ` ${req.method}`;
          break;
        case ":url":
          logString += ` ${req.url}`;
          break;
        case ":date":
          logString += ` ${getFormattedDate()}`;
          break;
        default:
          // Ignore unknown options
          break;
      }
    }

    console.log(logString);

    next();
  };
};
