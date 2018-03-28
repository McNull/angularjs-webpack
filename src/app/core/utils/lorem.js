import angular from 'angular';

var _words = ["a", "ac", "accumsan", "adipiscing", "aenean", "aliqua", "aliquam", "aliquet", "amet", "ante",
  "arcu", "at", "auctor", "augue", "bibendum", "blandit", "commodo", "condimentum", "congue", "consectetur",
  "consequat", "convallis", "cras", "cum", "curabitur", "cursus", "dapibus", "diam", "dictum", "dictumst",
  "dignissim", "dis", "dolor", "dolore", "do", "donec", "dui", "duis", "egestas", "eget", "eiusmod", "eleifend",
  "elementum", "elit", "enim", "erat", "eros", "est", "et", "etiam", "eu", "euismod", "facilisi", "facilisis",
  "fames", "faucibus", "felis", "fermentum", "feugiat", "fringilla", "fusce", "gravida", "habitant", "habitasse",
  "hac", "hendrerit", "iaculis", "id", "imperdiet", "in", "incididunt", "integer", "interdum", "ipsum", "justo",
  "labore", "lacinia", "lacus", "laoreet", "lectus", "leo", "libero", "ligula", "lobortis", "lorem", "luctus",
  "maecenas", "magna", "magnis", "malesuada", "massa", "mattis", "mauris", "metus", "mi", "molestie", "mollis",
  "montes", "morbi", "mus", "nam", "nascetur", "natoque", "nec", "neque", "netus", "nibh", "nisi", "nisl", "non",
  "nulla", "nullam", "nunc", "odio", "orci", "ornare", "parturient", "pellentesque", "penatibus", "pharetra",
  "phasellus", "placerat", "platea", "porta", "porttitor", "posuere", "potenti", "praesent", "pretium", "proin",
  "pulvinar", "purus", "quam", "quis", "quisque", "rhoncus", "ridiculus", "risus", "rutrum", "sagittis", "sapien",
  "scelerisque", "sed", "sem", "semper", "senectus", "sit", "sociis", "sodales", "sollicitudin", "suscipit",
  "suspendisse", "tellus", "tempor", "tempus", "tincidunt", "tortor", "tristique", "turpis", "ullamcorper",
  "ultrices", "ultricies", "urna", "ut", "varius", "vehicula", "vel", "velit", "venenatis", "vestibulum", "vitae",
  "vivamus", "viverra", "volutpat", "vulputate"];

class Lorem {
  constructor(options) {
    Object.assign(this, {
      words: _words,
      seed: 1
    }, options || {});
  }

  guid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      var r = this.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  random(options) {
    var x = Math.sin(this.seed++) * 10000;
    x = x - Math.floor(x);

    if (options) {
      if (options.max !== undefined) {
        x = ((options.max - (options.min || 0)) * x) + (options.min || 0);
      }

      if (options.round) {
        x = Math.round(x);
      }
    }

    return x;
  }

  randomInteger(min, max) {
    return this.random({ min: min, max: max, round: true });
  }

  randomItem(array) {
    return array[Math.floor(array.length * this.random())];
  }

  randomDate(start, end) {
    start = start || new Date();
    end = end || new Date(start.getFullYear() + 1, start.getMonth(), start.getDate());
    return new Date(start.getTime() + this.random() * (end.getTime() - start.getTime()));
  }

  randomDateString(start, end) {
    return this.randomDate(start, end).toISOString();
  }

  email() {
    return `${this.createWords(this.randomInteger(1, 4), '.')}@${this.createWords(this.randomInteger(1, 4), '.')}.nl`;
  }

  createWords(count, joinChar) {
    var buffer = [];

    for (var i = 0; i < count; i++) {
      buffer.push(this.randomItem(this.words));
    }

    return buffer.join(joinChar || ' ');
  }

  _capitalize(str) {
    return str[0].toLocaleUpperCase() + str.substr(1);
  }

  _sentence(min, max) {
    min = min !== undefined ? min : 5;
    max = max !== undefined ? max : 25;

    var wordCount = this.randomInteger(min, max);

    var words = this.createWords(wordCount);
    words = this._capitalize(words);

    return words + '.';
  }

  _paragraph() {
    var lineCount = this.random({
      min: 1, max: 10, round: true
    });

    var buffer = [];

    while (lineCount--) {
      buffer.push(this._sentence());
    }
    return buffer.join(' ');
  }

  _markdown_header(level) {
    let wordCount = this.random({ min: 3, max: 6, round: true });
    var words = this.createWords(wordCount);
    words = this._capitalize(words);

    return new Array(level + 2).join('#') + ' ' + words;
  }

  _list() {
    var lineCount = this.randomInteger(3, 10);

    var buffer = [];

    while (lineCount--) {
      buffer.push('* ' + this._sentence(3, 10));
    }

    return buffer.join('\n') + '\n';
  }

  _orderedList() {
    var lineCount = this.randomInteger(3, 10);

    var buffer = [];

    for (var i = 0; i < lineCount; i++) {
      buffer.push((i + 1) + '. ' + this._sentence(3, 10));
    }

    return buffer.join('\n') + '\n';
  }

  _code() {
    var func = this.randomItem(Object.getOwnPropertyNames(this.__proto__));
    return '```\n' + this[func].toString() + '\n```\n\n';
  }

  markdown(options) {

    var buffer = [], count = options.count;

    var exclude = options.markdown.exclude;

    var actions = [];

    function addAction(name, action) {

      if (exclude.indexOf(name) === -1) {
        actions.push(action);
      }
    }

    addAction('paragraph', () => {
      buffer.push(this._paragraph());
    });

    addAction('header', () => {
      var headerLevel = this.randomInteger(0, 4);
      buffer.push(this._markdown_header(headerLevel));
    });

    addAction('list', () => {
      buffer.push(this._list());
    });

    addAction('ordered-list', () => {
      buffer.push(this._orderedList());
    });

    addAction('code', () => {
      buffer.push(this._code());
    });

    if (count) {

      if (exclude.indexOf('header') === -1) {
        buffer.push(this._markdown_header(0));
      }

      while (--count > 1) {
        this.randomItem(actions)();
      }

      if (exclude.indexOf('paragraph') === -1) {
        buffer.push(this._paragraph());
      }
    }

    return buffer.join('\n');
  }

  paragraph(options) {
    var buffer = [];

    for (var i = 0; i < options.count; i++) {
      buffer.push(this._paragraph());
    }

    return buffer.join('\n\n');
  }

  sentence(options) {
    var buffer = [];

    for (var i = 0; i < options.count; i++) {
      buffer.push(this._sentence());
    }

    return buffer.join(' ');
  }

  create(options) {

    options = Object.assign({}, {
      count: 10,
      type: 'words', // words || markdown || paragraph
      markdown: {
        exclude: [] // 'paragraph', 'header', 'list', 'ordered-list', 'code'
      }
    }, options || {});

    switch (options.type) {
      case 'words':
        return this.createWords(options.count);

      case 'markdown':
        return this.markdown(options);

      case 'sentence':
        return this.sentence(options);

      case 'paragraph':
        return this.paragraph(options);

      default:
        throw new Error('Unknown lorem ipsum type "' + options.type + '"');
    }
  }
}

angular.module('app.core.utils.lorem', [])
  .constant('lorem', new Lorem())
  .constant('Lorem', Lorem);

