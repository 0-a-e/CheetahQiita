import { NgModule } from '@angular/core';
import { MdToHtmlPipe } from './md-to-html/md-to-html';
@NgModule({
	declarations: [MdToHtmlPipe],
	imports: [],
	exports: [MdToHtmlPipe]
})
export class PipesModule {}
