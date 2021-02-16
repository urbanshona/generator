//import {logger} from '@generator-shared/logger';
import yargs from 'yargs';
import {AppFileDecoratorRemover} from '@generator-core/file-generator/app-file-decorator-remover';

const options = yargs.options({
    s: {
        alias: 'source',
        demandOption: true,
        default: `${process.cwd()}/server/core/database/entities`,
        describe: 'The path to the folder containing the TypeORM Entities that need to be stripped of decorators',
        type: 'string'
    },
    o: {
        alias: 'output',
        demandOption: true,
        default: `${process.cwd()}/src/app/core/database/entities`,
        describe: 'The output path to place TypeORM entities that have been stripped of decorators',
        type: 'string'
    },
    q: {
        alias: 'quote',
        demandOption: true,
        default: true,
        describe: 'Whether to quote imports using single quotes or double quotes. Where true -> use single qoutes',
        type: 'boolean'
    },

}).argv;


// logger.log(JSON.stringify(options, null, 2));


const sourceDirOfEntities = `${options.source}`;
const outPutOfEntities = `${options.output}`;


// logger.log(`Generator source Dir of entities : ${sourceDirOfEntities}`);
// logger.log(`Generator output Dir of entities : ${outPutOfEntities}`);

// logger.log(`Generator called with options : ${fxnPrettyJSON(options)}`);


const decOptions = {
    isToSingleQuoteImports: options.quote as boolean
};

AppFileDecoratorRemover.removeDecorators(sourceDirOfEntities, outPutOfEntities, decOptions);
