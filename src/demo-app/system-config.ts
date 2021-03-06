/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Type declaration for ambient System. */
declare const System: any;

// Configure the base path and map the different node packages.
System.config({
  paths: {
    'node:*': 'node_modules/*'
  },
  map: {
    'rxjs': 'node:rxjs',
    'main': 'main.js',
    'tslib': 'node:tslib/tslib.js',
    'moment': 'node:moment/min/moment-with-locales.min.js',
    'date-fns': 'node:date-fns/index.js',
    'zh_cn': 'node:date-fns/locale/zh_cn',

    'ng2-file-upload': 'node:ng2-file-upload/bundles/ng2-file-upload.umd.js',

    // Angular specific mappings.
    '@angular/core': 'node:@angular/core/bundles/core.umd.js',
    '@angular/common': 'node:@angular/common/bundles/common.umd.js',
    '@angular/common/http': 'node:@angular/common/bundles/common-http.umd.js',
    '@angular/compiler': 'node:@angular/compiler/bundles/compiler.umd.js',
    '@angular/forms': 'node:@angular/forms/bundles/forms.umd.js',
    '@angular/animations': 'node:@angular/animations/bundles/animations.umd.js',
    '@angular/router': 'node:@angular/router/bundles/router.umd.js',
    '@angular/animations/browser': 'node:@angular/animations/bundles/animations-browser.umd.js',
    '@angular/platform-browser/animations':
      'node:@angular/platform-browser/bundles/platform-browser-animations.umd',
    '@angular/platform-browser':
      'node:@angular/platform-browser/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic':
      'node:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',

    // Component mappings
    'get-ui-ng/utils/portal': 'dist/packages/utils/portal/index.js',
    'get-ui-ng/utils': 'dist/packages/utils/public-api.js',

    'get-ui-ng/base/tabs': 'dist/packages/base/tabs/index.js',
    'get-ui-ng/base/button': 'dist/packages/base/button/index.js',
    'get-ui-ng/base/checkbox': 'dist/packages/base/checkbox/index.js',
    'get-ui-ng/base/radio': 'dist/packages/base/radio/index.js',
    'get-ui-ng/base/select': 'dist/packages/base/select/index.js',
    'get-ui-ng/base/menu': 'dist/packages/base/menu/index.js',
    'get-ui-ng/base/modal': 'dist/packages/base/modal/index.js',
    'get-ui-ng/base/stepper': 'dist/packages/base/stepper/index.js',
    'get-ui-ng/base/datepicker': 'dist/packages/base/datepicker/index.js',
    'get-ui-ng/base/pagination': 'dist/packages/base/pagination/index.js',
    'get-ui-ng/base/slider': 'dist/packages/base/slider/index.js',
    'get-ui-ng/base/table': 'dist/packages/base/table/index.js',
    'get-ui-ng/base/fileupload': 'dist/packages/base/fileupload/index.js',
    'get-ui-ng/base/popover': 'dist/packages/base/popover/index.js',
    'get-ui-ng/base': 'dist/packages/base/public-api.js'
  },
  packages: {
    // Thirdparty barrels.
    'rxjs': {main: 'index'},

    // Set the default extension for the root package, because otherwise the demo-app can't
    // be built within the production mode. Due to missing file extensions.
    '.': {
      defaultExtension: 'js'
    }
  }
});
