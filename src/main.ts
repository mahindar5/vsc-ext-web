import { bootstrapApplication } from '@angular/platform-browser';
import { Routes } from '@angular/router';
import { BUILD_INFO as commonLibBUILD_INFO, fetchProxy } from '@mahindar5/common-lib';
import { configureApplication, BUILD_INFO as matBUILD_INFO } from '@mahindar5/ng-common-mat-lib';
import { AppComponent, } from '@mahindar5/ng-common-mat-lib/components/app';
import { BUILD_INFO as myAppBUILD_INFO } from './build-info';


export const routes: Routes = [
	{ path: '', redirectTo: 'vsc', pathMatch: 'full' },
	{
		path: 'vsc',
		loadComponent: () => import('@mahindar5/ng-common-mat-lib/components/json-uploader').then(m => m.JsonUploaderComponent),
	},]
fetchProxy();
bootstrapApplication(AppComponent, configureApplication(routes, { BUILD_INFO: { myAppBUILD_INFO, matBUILD_INFO, commonLibBUILD_INFO } }))
	.catch((err) => console.error(err));
