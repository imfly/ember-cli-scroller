import Ember from 'ember';

export default Ember.Mixin.create({
  bindScrolling: function() {
    var onScroll, _this = this;

    onScroll = function() {
      return _this.scrolled();
    };

    this.$(document).bind('touchmove', onScroll);
    this.$(window).bind('scroll', onScroll);
  },

  unbindScrolling: function() {
    this.$(window).unbind('scroll');
    this.$(document).unbind('touchmove');
  },

  scrolled: function() {
    console.log('Please add your scrolled method.');
  }
});
