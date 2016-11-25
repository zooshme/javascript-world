import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('tools', function() {
    this.route('show', {path: '/:id'});
  });
  this.route('courses');
  this.route('news');
});

export default Router;
