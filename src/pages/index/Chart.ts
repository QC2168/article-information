import * as echarts from 'echarts/core';
import {
  TooltipComponent,
  LegendComponent,
} from 'echarts/components';
import {
  PieChart, PieSeriesOption,
} from 'echarts/charts';
import {
  CanvasRenderer,
} from 'echarts/renderers';

export type dataType = {
  value: number, name: string
}
type ECOption = echarts.ComposeOption<PieSeriesOption>;
echarts.use(
  [TooltipComponent, LegendComponent, PieChart, CanvasRenderer],
);
export class RChart {
  private chartInstance : echarts.ECharts;

  constructor(dom:HTMLElement) {
    this.chartInstance = echarts.init(dom);
  }

  public renderChart=(data:dataType[]):void => {
    const option: ECOption = {
      tooltip: {
        trigger: 'item',
      },
      legend: {
        top: '5%',
        left: 'center',
      },
      series: [
        {
          name: '占比',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 12,
            borderColor: '#fff',
            borderWidth: 2,
          },
          label: {
            show: false,
            position: 'center',
            formatter: '{d}%',
          },
          emphasis: {
            scale: true,
            scaleSize: 5,
            label: {
              show: true,
              fontSize: '18',
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: false,
          },
          data,
        },
      ],
    };
    this.chartInstance.setOption(option);
  }
}
