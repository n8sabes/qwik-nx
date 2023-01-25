import { Tree } from '@nrwl/devkit';
import { QwikWorkspacePresetGeneratorSchema } from './schema';
import applicationGenerator from '../application/generator';

export default async function (
  tree: Tree,
  options: QwikWorkspacePresetGeneratorSchema
) {
  options.directory = '';
  options.name = options.qwikAppName ?? options.name;
  options.style = options.qwikAppStyle ?? options.style;
  options.e2eTestRunner = 'none'; // temporary disabling e2e here, because it throws an error within "create-nx-workspace"
  return applicationGenerator(tree, options);
}
