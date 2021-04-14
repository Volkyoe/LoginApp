import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';

// dotenvExpand allows .env to use variables
dotenvExpand(dotenv.config({ silent: true }));

export default dotenv;
