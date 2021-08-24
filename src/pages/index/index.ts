import './index.scss';
import CheckArticle from './CheckArticle';
import {
  dataType, RChart,
} from './RChart';

// 添加事件
$(($) => {
  const inpContent = $('#inp-content');
  const CA = new CheckArticle('');
  const RC = new RChart(document.getElementById('resultChart')!);
  inpContent.on('keyup', () => {
    // 获取页面内容
    const content:string = inpContent.html();
    CA.changeContent(content);

    const data: dataType[] = [
      { value: CA.matchShortCode(), name: '代码长度' },
      { value: CA.matchLongCode(), name: '代码块长度' },
      { value: CA.articleCount - CA.matchLongCode() - CA.matchShortCode(), name: '文本' }];
    if (content) {
      RC.renderChart(data);
      // 添加result
      $('#resultBox').removeClass('w-0').addClass('w-2/6');
      $('#resultChart').removeClass('hidden');
      $('#inp-content').addClass('h-96');
    } else {
      $('#inp-content').removeClass('h-96');
      $('#resultChart').addClass('hidden');
      $('#resultBox').removeClass('w-2/6').addClass('w-0');
    }
  });
});
