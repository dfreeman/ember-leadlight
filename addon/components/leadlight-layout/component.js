import Ember from 'ember';
import { UP, DOWN, LEFT, RIGHT, CENTER, split, open, close, activate } from 'ember-leadlight';
import paneAtCoordinate from 'ember-leadlight/-private/pane-at-coordinate';

import layout from './template';
import styles from './styles';

const { Component, computed, run } = Ember;
const { htmlSafe } = Ember.String;

export default Component.extend({
  layout,
  styles,

  layoutIdentifier: computed('elementId', function() {
    return `${this.get('elementId')}-layout`;
  }),

  _sourceDragged(eventX, eventY) {
    if (this._lastEventX === eventX && this._lastEventY === eventY) return;

    this._lastEventX = eventX;
    this._lastEventY = eventY;

    // Calculate location of the cursor within the panes area
    const $element = this.$(`[data-panes=${this.get('layoutIdentifier')}]`);
    const { offsetWidth, offsetHeight } = $element[0];
    const { left, top } = $element.offset();
    const { pane, path, rect } = paneAtCoordinate(this.get('panes'), offsetWidth, offsetHeight, eventX - left, eventY - top);

    if (!rect) return;

    const { region, direction } = this._findHoverTargetPosition(rect, left, top, eventX, eventY);
    if (this.get('hoverTarget.pane') !== pane || this.get('hoverTarget.direction') !== direction) {
      this.set('hoverTarget', { pane, path, region, direction });
    }
  },

  _findHoverTargetPosition({ x, y, width, height }, offsetX, offsetY, absoluteX, absoluteY) {
    const relativeX = absoluteX - offsetX - x;
    const relativeY = absoluteY - offsetY - y;

    if (relativeX <= width / 3) {
      return { direction: LEFT, region: { x: x + offsetX, y: y + offsetY, width: width / 2, height } };
    } else if (relativeX >= 2 * width / 3) {
      return { direction: RIGHT, region: { x: x + offsetX + width / 2, y: y + offsetY, width: width / 2, height } };
    } else if (relativeY <= height / 3) {
      return { direction: UP, region: { x: x + offsetX, y: y + offsetY, width, height: height / 2 } };
    } else if (relativeY >= 2 * height / 3) {
      return { direction: DOWN, region: { x: x + offsetX, y: y + offsetY + height / 2, width, height: height / 2 } };
    } else {
      return { direction: CENTER, region: { x: x + offsetX, y: y + offsetY, width, height } };
    }
  },

  shadowStyle: computed('hoverTarget.region', function() {
    if (!this.get('hoverTarget.region')) return;

    const { x, y, width, height } = this.get('hoverTarget.region');
    return htmlSafe(`transform: translate(${x}px, ${y}px) scale(${width}, ${height})`);
  }),

  drop(event) {
    event.preventDefault();

    const hoverTarget = this.get('hoverTarget');
    if (!hoverTarget) return;

    let layout = this.get('panes');

    if (this.get('pending.path')) {
      layout = close(layout, this.get('pending.path'), this.get('pending.doc'));
    }

    if (hoverTarget.direction === CENTER) {
      layout = open(layout, hoverTarget.path, this.get('pending.doc'));
    } else {
      layout = split(layout, hoverTarget.path, hoverTarget.direction, [this.get('pending.doc')]);
    }


    this.set('dragging', false);
    this.set('pendingDocument', null);
    this._updatePanes(layout);
  },

  dragOver({ originalEvent: event }) {
    if (!this.get('dragging')) return;

    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
    event.dataTransfer.allowedEffects = 'move';

    this._lastX = event.clientX;
    this._lastY = event.clientY;

    if (this._scheduled) return;

    this._scheduled = requestAnimationFrame(() => {
      this._sourceDragged(this._lastX, this._lastY);
      this._scheduled = null;
    });
  },

  _updatePanes(panes) {
    // DDAU if an action is defined defined, otherwise handle internally
    const update = this.get('update');
    if (update) {
      update(panes);
    } else {
      this.set('panes', panes);
    }
  },

  willDestroy() {
    this._super();
    cancelAnimationFrame(this._scheduled);
  },

  _findFirstPath() {
    const path = [];
    let container = this.get('panes');
    while (container.children) {
      path.push(0);
      container = container.children[0];
    }
    return path;
  },

  actions: {
    close(path, doc) {
      this._updatePanes(close(this.get('panes'), path, doc));
    },

    activateDocument(path, doc) {
      let targetPath = path;
      if (targetPath) {
        this.set('lastFocusedPath', targetPath);
      } else {
        targetPath = this.get('lastFocusedPath') || this._findFirstPath();
      }

      this._updatePanes(activate(this.get('panes'), targetPath, doc));
    },

    focusPath(path) {
      this.set('lastFocusedPath', path);
    },

    sourceDragStarted(path, doc, x, y) {
      this.set('hoverTarget', { region: { x, y, width: 0, height: 0 } });
      this.set('pending', { path, doc });
      run.next(this, () => this.set('dragging', true));
    },

    sourceDragEnded() {
      run.next(this, () => this.set('dragging', false));
      cancelAnimationFrame(this._scheduled);
    }
  }
});
