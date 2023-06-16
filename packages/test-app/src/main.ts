import * as RM from '@jupyterlab/rendermime';

const rendermime = new RM.RenderMimeRegistry({
  initialFactories: RM.standardRendererFactories,
});

console.log('Hello World');
console.log(rendermime);
