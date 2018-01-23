import { createPackageBuildTasks } from 'build-tools';
import {
  examplesPackage,
  componentPackage,
} from './packages';

createPackageBuildTasks(componentPackage);
createPackageBuildTasks(examplesPackage);

import './tasks/aot';
import './tasks/changelog';
import './tasks/ci';
import './tasks/clean';
import './tasks/default';
import './tasks/development';
import './tasks/docs';
import './tasks/docapp';
import './tasks/e2e';
import './tasks/examples';
import './tasks/lint';
import './tasks/component-release';
import './tasks/publish';
import './tasks/unit-test';
import './tasks/universal';
import './tasks/validate-release';
import './tasks/doc-bundles';
