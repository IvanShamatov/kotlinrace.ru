import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('register');
  this.route('history');
  this.route('rules');
  this.route('authors');
  this.route('reports');
  this.route('results');
  this.route('gallery');
});

export default Router;
