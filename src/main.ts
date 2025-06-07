import { bootstrapApplication } from '@angular/platform-browser';
import { Routes } from '@angular/router';
import { fetchProxy } from '@mahindar5/common-lib';
import { configureApplication } from '@mahindar5/ng-common-mat-lib';
import { AppComponent } from '@mahindar5/ng-common-mat-lib/components/app';
import { BUILD_INFO } from './build-info';

fetchProxy();
// Importing AppComponent
export const routes: Routes = [{
	path: '', loadComponent: () => import('@mahindar5/ng-common-mat-lib/components/prompt-batch-runner').then(m => m.PromptBatchRunnerComponent),
}]
bootstrapApplication(AppComponent, await configureApplication(routes, {
	BUILD_INFO: { myAppBUILD_INFO: BUILD_INFO },
	excludeAIService: true,
})).catch((err) => console.error(err));

// Direct import of PromptBatchRunnerComponent and add class="azure-dark-theme" to index.html
// bootstrapApplication(PromptBatchRunnerComponent, await configureApplication([], {
// 	BUILD_INFO: { myAppBUILD_INFO: BUILD_INFO },
// 	excludeAIService: true,
// 	hideMenuIcon: true,
// })).catch((err) => console.error(err));
