import { Pipe, PipeTransform } from '@angular/core';
import * as marked from 'marked';
/**
 * Generated class for the MdToHtmlPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'mdToHtml',
})
export class MdToHtmlPipe implements PipeTransform {
  mdToHtml(md: string): any {
    return marked(md);
  }
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: any): any {
    // pipeに流れてきた文字列をmarkedに渡す
    return this.mdToHtml(value);
  }
}
