export default class CheckArticle {
  private articleContent: string;

  public articleCount: number;

  private readonly shortCodeReg: RegExp;

  private readonly longCodeReg: RegExp;

  private shortCodeLen: number;

  private longCodeLen: number;

  private shortPercent: string;

  private longPercent: string;

  constructor(content:string) {
    this.articleContent = content;
    this.articleCount = content.length;
    // 匹配代码
    this.shortCodeReg = /`(.*?)`/g;
    // 匹配代码块
    this.longCodeReg = /```([\s\S]*?)```/g;

    this.shortCodeLen = this.matchShortCode();
    this.longCodeLen = this.matchLongCode();
    this.shortPercent = this.getCodePercent(this.shortCodeLen);
    this.longPercent = this.getCodePercent(this.longCodeLen);
  }

  matchShortCode() {
    let shortCodeResult: RegExpMatchArray | null = this.articleContent.match(this.shortCodeReg);
    if (shortCodeResult) {
      shortCodeResult = shortCodeResult.filter((item: string) => item !== '``');
      let sum: number = 0;
      shortCodeResult.forEach((item: string) => {
        sum += (item.length - 2);
      });
      return sum;
    }
    return 0;
  }

  matchLongCode() {
    let longCodeResult: RegExpMatchArray | null = this.articleContent.match(this.longCodeReg);
    if (longCodeResult) {
      longCodeResult = longCodeResult.filter((item: string) => item !== '``');
      let sum: number = 0;
      longCodeResult.forEach((item: string) => {
        item.replace(/[\r\n]/g, '');
        sum += (item.length - 6);
      });
      return sum;
    }
    return 0;
  }

  changeContent(content:string) {
    this.articleContent = content;
    this.articleCount = content.length;
  }

  getCodePercent(num:number):string {
    return `${((num / this.articleCount) * 100).toFixed(2)}%`;
  }
}
