import { PluginInitializerContext } from '../../../src/core/server';
import { MyPluginPlugin } from './plugin';

//  This exports static code and TypeScript types,
//  as well as, Kibana Platform `plugin()` initializer.

export function plugin(initializerContext: PluginInitializerContext) {
  return new MyPluginPlugin(initializerContext);
}

export { MyPluginPluginSetup, MyPluginPluginStart } from './types';
