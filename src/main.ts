import { bootstrapApplication } from '@angular/platform-browser';
import { fetchProxy } from '@mahindar5/common-lib';
import { configureApplication } from '@mahindar5/ng-common-mat-lib';
import { PromptBatchRunnerComponent } from '@mahindar5/ng-common-mat-lib/components/prompt-batch-runner';
import { BUILD_INFO } from './build-info';


// export const routes: Routes = [{
// 	path: '', loadComponent: () => import('@mahindar5/ng-common-mat-lib/components/prompt-batch-runner').then(m => m.PromptBatchRunnerComponent),
// }]
fetchProxy();
bootstrapApplication(PromptBatchRunnerComponent, await configureApplication([], {
	BUILD_INFO: { myAppBUILD_INFO: BUILD_INFO },
	excludeAIService: true,
	hideMenuIcon: true,
})).catch((err) => console.error(err));
