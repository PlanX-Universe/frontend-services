/**
 * inspired by https://stackoverflow.com/a/51806590/5842853
 */
export class DynamicFileDownloader {
  public static download(fileName: string, text: string) {
    DynamicFileDownloader.byHtmlTag({
      fileName,
      text
    });
  }

  private static byHtmlTag(arg: {
    fileName: string,
    text: string
  }) {
    const element: HTMLElement = document.createElement('a');
    const fileType = 'text/plain';
    element.setAttribute('href', `data:${fileType};charset=utf-8,${encodeURIComponent(arg.text)}`);
    element.setAttribute('download', arg.fileName);
    const event = new MouseEvent('click');
    element.dispatchEvent(event);
  }
}
