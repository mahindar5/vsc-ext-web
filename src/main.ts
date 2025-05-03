import { bootstrapApplication } from '@angular/platform-browser';
import { Routes } from '@angular/router';
import { BUILD_INFO as commonLibBUILD_INFO, fetchProxy } from '@mahindar5/common-lib';
import { configureApplication, BUILD_INFO as matBUILD_INFO } from '@mahindar5/ng-common-mat-lib';
import { AppComponent, } from '@mahindar5/ng-common-mat-lib/components/app';
import { BUILD_INFO as myAppBUILD_INFO } from './build-info';


export const routes: Routes = [
	{
		path: '', loadComponent: () => import('@mahindar5/ng-common-mat-lib/components/prompt-batch-runner').then(m => m.PromptBatchRunnerComponent),
	},]
fetchProxy();
bootstrapApplication(AppComponent, await configureApplication(routes, {
	BUILD_INFO: { myAppBUILD_INFO, matBUILD_INFO, commonLibBUILD_INFO },
	excludeAIService: true,
	hideMenuIcon: true,
}))
	.catch((err) => console.error(err));
