# Ember-cli-scroller

An Ember addon to add `scroll` event.

这是一个插件`addon`，为ember的组件添加`scroll`事件。Ember的团队认为，`scroll`事件不具有普遍性，所以没有提供该事件的处理方法。

Demo: [ember-cli-animated-header](https://github.com/imfly/ember-cli-animated-header)

## Installation

```sh
$ ember install ember-cli-scroller --save
```

## Usage 使用

在开发的组件里，这么使用:

```
import Ember from 'ember';
import Scroller from 'ember-cli-scroller';

export default Ember.Component.extend(Scroller, {
  didInsertElement: function() {
    this.bindScrolling();
  },

  willRemoveElement: function() {
    this.unbindScrolling();
  },

  // 用这个方法实现滚动时的逻辑
  scrolled: function () {
    // your code.
  }
});
```
具体请看上面的demo

## Contributing 贡献

Pull requests welcome, but they must be fully tested (and pass all existing tests) to be considered. Discussion issues also welcome.

* `git clone` this repository
* `npm install`
* `bower install`

## Running Tests 测试

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).

## License

[MIT LICENCE 2016 imfly](./LICENCE)
