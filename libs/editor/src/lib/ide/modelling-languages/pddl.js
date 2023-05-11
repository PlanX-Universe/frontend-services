/**
 * @author WEB PLANNER
 */
// @inproceedings{magnaguagno2017web,
//   title={WEB PLANNER: A Tool to Develop Classical Planning Domains and Visualize Heuristic State-Space Search},
//   author={Magnaguagno, Maur{\'i}cio C and Pereira, Ramon Fraga and M{\'o}re, Martin D and Meneguzzi, Felipe},
//   booktitle={Proceedings of the Workshop on User Interfaces and Scheduling and Planning, UISP},
//     pages={32--38},
//     year={2017}
// }

ace.define('ace/mode/pddl_highlight_rules', ['require', 'exports', 'module', 'ace/lib/oop', 'ace/mode/text_highlight_rules'], function(require, exports, module) {
  'use strict';

  const oop = require('../lib/oop');
  const textHighlightRules = require('./text_highlight_rules').TextHighlightRules;
  const pddlHighlightRules = function() {
    this.$rules = {
      start: [{ include: '#problem' }, { include: '#domain' }, { include: '#comment' }],
      '#action': [{
        token: ['meta.type.pddl', 'storage.type.pddl'],
        regex: /(\(\s*)(:action)\b/,
        caseInsensitive: !0,
        push: [{
          token: 'meta.type.pddl',
          regex: /\)/,
          next: 'pop'
        }, { include: '#connected-predicate' }, { include: '#applied-predicate' }, { include: '#action-name' }, { include: '#comment' }, { include: '#typed-variable-list' }, { include: '#variable' }, { include: '#action-keyword' }, { include: '#built-in-var' }, { include: '#any-sexpr' }, { defaultToken: 'meta.type.pddl' }],
        comment: 'Action'
      }],
      '#action-keyword': [{
        token: 'keyword.operator.pddl',
        regex: /:(?:parameters|vars|precondition|effect)(?!:|\?)\b/,
        caseInsensitive: !0
      }],
      '#action-name': [{ token: 'string.unquoted.action.pddl', regex: /(?:^|\s+)[a-zA-Z](?:\w|-|_)*(?!:|\?)\b/ }],
      '#any-sexpr': [{
        token: 'text',
        regex: /\(/,
        push: [{
          token: 'text',
          regex: /\)/,
          next: 'pop'
        }, { include: '#comment' }, { include: '#any-sexpr-other' }, { include: '#pddl-expr' }, {
          token: 'text',
          regex: /(?:\s)*/
        }]
      }],
      '#any-sexpr-other': [{
        token: 'text',
        regex: /\(/,
        push: [{
          token: 'text',
          regex: /\)/,
          next: 'pop'
        }, { include: '#comment' }, { include: '#any-sexpr' }, { include: '#pddl-expr' }, {
          token: 'text',
          regex: /(?:\s)*/
        }]
      }],
      '#applied-predicate': [{
        token: ['text', 'storage.type.pddl'],
        regex: /(\(\s*)(=|(?:\w|-)+)/,
        push: [{
          token: 'text',
          regex: /\)/,
          next: 'pop'
        }, { include: '#comment' }, { include: '#variable' }, { include: '#pddl-expr' }, { include: '#applied-predicate-other' }]
      }],
      '#applied-predicate-other': [{
        token: ['text', 'storage.type.pddl'],
        regex: /(\(\s*)((?:\w|-)+)/,
        push: [{
          token: 'text',
          regex: /\)/,
          next: 'pop'
        }, { include: '#variable' }, { include: '#pddl-expr' }, { include: '#applied-predicate' }, { include: '#comment' }]
      }],
      '#built-in-var': [{ token: 'variable.language.pddl', regex: /\?duration/ }],
      '#comment': [{ token: 'comment.line.semicolon.pddl', regex: /;.*/, comment: 'Comments beginning with \';\'' }],
      '#connected-predicate': [{
        token: ['meta.type.pddl', 'string.unquoted.pddl', 'meta.type.pddl'],
        regex: /(\()(and|or|eq|neq|not|\>\=|\<\=|\<|\>|assign|increase|decrease|scale-up|scale-down|forall|exists|imply|when|\+|-|\*|\/)(\s*)/,
        push: [{
          token: 'meta.type.pddl',
          regex: /\)/,
          next: 'pop'
        }, { include: '#comment' }, { include: '#times' }, { include: '#typed-variable-list' }, { include: '#connected-predicate-other' }, { include: '#applied-predicate' }, { include: '#variable' }, { include: '#number' }, { include: '#pddl-expr' }, { include: '#any-sexpr' }, { defaultToken: 'meta.type.pddl' }],
        comment: 'Predicates that are connected via and, or, etc.'
      }],
      '#connected-predicate-other': [{
        token: ['text', 'string.unquoted.pddl', 'text'],
        regex: /(\()(and|or|eq|neq|not|\>\=|\<\=|\<|\>|assign|increase|decrease|scale-up|scale-down|forall|exists|imply|when|\+|-|\*|\/)(\s*)/,
        push: [{
          token: 'text',
          regex: /\)/,
          next: 'pop'
        }, { include: '#comment' }, { include: '#times' }, { include: '#typed-variable-list' }, { include: '#variable' }, { include: '#connected-predicate' }, { include: '#applied-predicate' }, { include: '#number' }, { include: '#pddl-expr' }, { include: '#any-sexpr' }],
        comment: 'Predicates that are connected via and, or, etc.'
      }],
      '#constants': [{
        token: ['meta.type.pddl', 'storage.type.pddl'],
        regex: /(\(\s*)(:constants)\b/,
        caseInsensitive: !0,
        push: [{
          token: 'meta.type.pddl',
          regex: /\)/,
          next: 'pop'
        }, { include: '#comment' }, {
          token: ['entity.name.function.pddl', 'entity.name.tag.pddl'],
          regex: /(-)(?:^|\s+)([a-zA-Z](?:\w|-|_)*)/
        }, { include: '#either' }, { include: '#pddl-expr' }, { defaultToken: 'meta.type.pddl' }],
        comment: 'Constants'
      }],
      '#derived': [{
        token: ['meta.type.pddl', 'storage.type.pddl'],
        regex: /(\(\s*)(:derived)\b/,
        caseInsensitive: !0,
        push: [{
          token: 'meta.type.pddl',
          regex: /\)/,
          next: 'pop'
        }, { include: '#comment' }, { include: '#connected-predicate' }, { include: '#applied-predicate' }, { include: '#predicate' }, { include: '#variable-list' }, { include: '#pddl-expr' }, { include: '#any-sexpr' }, { defaultToken: 'meta.type.pddl' }],
        comment: 'Derived Predicate'
      }],
      '#domain': [{
        token: ['meta.function.pddl', 'storage.type.pddl'],
        regex: /(\(\s*)(define)\b/,
        caseInsensitive: !0,
        push: [{
          token: 'meta.function.pddl',
          regex: /\)/,
          next: 'pop'
        }, { include: '#comment' }, { include: '#domain-name-in-define' }, { include: '#requirement' }, { include: '#types' }, { include: '#constants' }, { include: '#predicates' }, { include: '#derived' }, { include: '#new-functions' }, { include: '#action' }, { include: '#durative-action' }, { include: '#any-sexpr' }, { defaultToken: 'meta.function.pddl' }],
        comment: 'domain definition '
      }],
      '#domain-name-in-define': [{
        token: ['meta.type.pddl', 'storage.type.pddl'],
        regex: /(\(\s*)(domain)\b/,
        caseInsensitive: !0,
        push: [{
          token: 'meta.type.pddl',
          regex: /\)/,
          next: 'pop'
        }, { include: '#comment' }, {
          token: 'invalid.illegal.pddl',
          regex: /(?:\s+(?:\w|-)+){2,}/
        }, { include: '#pddl-expr' }, { defaultToken: 'meta.type.pddl' }],
        comment: 'Domain name in problem file'
      }],
      '#domain-name-in-problem': [{
        token: ['meta.type.pddl', 'storage.type.pddl'],
        regex: /(\(\s*)(:domain)\b/,
        caseInsensitive: !0,
        push: [{
          token: 'meta.type.pddl',
          regex: /\)/,
          next: 'pop'
        }, { include: '#comment' }, {
          token: 'invalid.illegal.pddl',
          regex: /(?:\s+(?:\w|-)+){2,}/
        }, { include: '#pddl-expr' }, { defaultToken: 'meta.type.pddl' }],
        comment: 'Domain name in problem file'
      }],
      '#durative-action': [{
        token: ['meta.type.pddl', 'storage.type.pddl'],
        regex: /(\(\s*)(:durative-action)\b/,
        caseInsensitive: !0,
        push: [{
          token: 'meta.type.pddl',
          regex: /\)/,
          next: 'pop'
        }, { include: '#connected-predicate' }, { include: '#applied-predicate' }, { include: '#typed-variable-list' }, { include: '#variable' }, { include: '#pddl-expr' }, { include: '#comment' }, { include: '#durative-action-keyword' }, { include: '#built-in-var' }, { include: '#any-sexpr' }, { defaultToken: 'meta.type.pddl' }],
        comment: 'Durative Action'
      }],
      '#durative-action-keyword': [{
        token: 'keyword.operator.pddl',
        regex: /:(?:parameters|vars|duration|condition|effect)(?!:|\?)\b/,
        caseInsensitive: !0
      }],
      '#either': [{
        token: ['constant.character.pddl', 'text', 'storage.type.pddl'],
        regex: /(-)(\s+\()(either)/,
        push: [{ token: 'text', regex: /\)/, next: 'pop' }, { include: '#pddl-expr' }, { include: '#comment' }]
      }],
      '#error': [{ token: ['text', 'invalid.illegal.pddl', 'text'], regex: /(\s*)((?:\w+|\?|_|-|\.))(\s*)/ }],
      '#function': [{
        token: ['text', 'storage.type.pddl'],
        regex: /(\(\s*)((?:\w|-)+)/,
        push: [{
          token: ['text', 'storage.type.pddl'],
          regex: /(\)\s+-\s+)((?:\w|-)+)/,
          next: 'pop'
        }, { include: '#comment' }, { include: '#variable' }, {
          token: ['meta.name.function.pddl', 'entity.name.function.pddl'],
          regex: /(-\s+)((?:\w|-)+)/
        }]
      }],
      '#function-keyword': [{
        token: 'support.function.pddl',
        regex: /assign|scale-up|scale-down|increase|decrease/,
        comment: 'Function keywords that can be used in the effect of an action'
      }],
      '#function-with-either': [{
        token: ['text', 'storage.type.pddl'],
        regex: /(\()(\w+)/,
        push: [{
          token: ['text', 'storage.type.pddl', 'text'],
          regex: /(\)\s+-\s+)((?:\w|-)+)|(\))/,
          next: 'pop'
        }, { include: '#comment' }, { include: '#variable' }, {
          token: ['meta.name.function.pddl', 'entity.name.function.pddl'],
          regex: /(-\s+)((?:\w|-)+)/
        }]
      }],
      '#functions': [{
        token: ['meta.type.pddl', 'storage.type.pddl'],
        regex: /(\(\s*)(:functions)\b/,
        caseInsensitive: !0,
        push: [{
          token: 'meta.type.pddl',
          regex: /\)/,
          next: 'pop'
        }, { include: '#comment' }, { include: '#function' }, {
          token: ['text', 'entity.name.function.pddl'],
          regex: /(\()(either)/,
          push: [{ token: 'text', regex: /\)/, next: 'pop' }, { include: '#pddl-expr' }]
        }, { defaultToken: 'meta.type.pddl' }],
        comment: 'Functions'
      }],
      '#goal': [{
        token: ['meta.type.pddl', 'storage.type.pddl'],
        regex: /(\(\s*)(:goal)\b/,
        caseInsensitive: !0,
        push: [{
          token: 'meta.type.pddl',
          regex: /\)/,
          next: 'pop'
        }, { include: '#comment' }, { include: '#connected-predicate' }, { include: '#applied-predicate' }, { include: '#comment' }, { include: '#any-sexpr' }, { defaultToken: 'meta.type.pddl' }],
        comment: 'Goal'
      }],
      '#init-predicate': [{
        token: ['text', 'storage.type.pddl'],
        regex: /(\(\s*)((?:\w|-)+)/,
        push: [{
          token: 'text',
          regex: /\)/,
          next: 'pop'
        }, { include: '#comment' }, { include: '#pddl-expr' }, { include: '#number' }, { include: '#init-predicate-other' }]
      }],
      '#init-predicate-other': [{
        token: ['text', 'storage.type.pddl'],
        regex: /(\(\s*)((?:\w|-)+)/,
        push: [{
          token: 'text',
          regex: /\)/,
          next: 'pop'
        }, { include: '#pddl-expr' }, { include: '#number' }, { include: '#init-predicate' }, { include: '#comment' }]
      }],
      '#inits': [{
        token: ['meta.type.pddl', 'storage.type.pddl'],
        regex: /(\(\s*)(:init)\b/,
        caseInsensitive: !0,
        push: [{
          token: 'meta.type.pddl',
          regex: /\)/,
          next: 'pop'
        }, { include: '#comment' }, { include: '#init-predicate' }, { include: '#connected-predicate' }, { include: '#any-sexpr' }, { defaultToken: 'meta.type.pddl' }],
        comment: 'Initalized predicates'
      }],
      '#metric': [{
        token: ['meta.type.pddl', 'storage.type.pddl'],
        regex: /(\(\s*)(:metric)\b/,
        caseInsensitive: !0,
        push: [{
          token: 'meta.type.pddl',
          regex: /\)/,
          next: 'pop'
        }, { include: '#optimization' }, { include: '#connected-predicate' }, { include: '#applied-predicate' }, { include: '#comment' }, { include: '#number' }, { include: '#any-sexpr' }, { defaultToken: 'meta.type.pddl' }],
        comment: 'Metric'
      }],
      '#new-functions': [{
        token: ['meta.type.pddl', 'storage.type.pddl'],
        regex: /(\(\s*)(:functions)\b/,
        caseInsensitive: !0,
        push: [{
          token: 'meta.type.pddl',
          regex: /\)/,
          next: 'pop'
        }, { include: '#comment' }, { include: '#either' }, { include: '#predicate' }, { include: '#pddl-expr' }, { defaultToken: 'meta.type.pddl' }],
        comment: 'Functions'
      }],
      '#number': [{ token: 'constant.numeric.pddl', regex: /\b\d*\.?\d*\b/, comment: 'Numeric values' }],
      '#objects': [{
        token: ['meta.type.pddl', 'storage.type.pddl'],
        regex: /(\(\s*)(:objects)\b/,
        caseInsensitive: !0,
        push: [{
          token: 'meta.type.pddl',
          regex: /\)/,
          next: 'pop'
        }, { include: '#comment' }, {
          token: 'entity.name.tag.pddl',
          regex: /(-)(?:^|\s+)([a-zA-Z](?:\w|-|_)*)/
        }, { include: '#either' }, { include: '#pddl-expr' }, { defaultToken: 'meta.type.pddl' }],
        comment: 'Objects'
      }],
      '#optimization': [{ token: 'keyword.other.pddl', regex: /minimize|maximize/ }],
      '#pddl-expr': [{ token: 'string.unquoted.pddl', regex: /(?:^|\s+)[a-zA-Z](?:\w|-|_)*(?!:|\?)\b/ }],
      '#precondition': [{
        token: 'entity.name.function.pddl',
        regex: /:precondition\s*/,
        push: [{
          token: 'entity.name.function.pddl',
          regex: /\b/,
          next: 'pop'
        }, { defaultToken: 'entity.name.function.pddl' }]
      }],
      '#predicate': [{
        token: ['text', 'storage.type.pddl'],
        regex: /(\(\s*)((?:\w|-)+)/,
        push: [{
          token: 'text',
          regex: /\)/,
          next: 'pop'
        }, { include: '#comment' }, { include: '#variable' }, { include: '#either' }, {
          token: 'constant.character.pddl',
          regex: /(-)(?:^|\s+)([a-zA-Z](?:\w|-|_)*)/
        }]
      }],
      '#predicates': [{
        token: ['meta.type.pddl', 'storage.type.pddl'],
        regex: /(\(\s*)(:predicates)\b/,
        caseInsensitive: !0,
        push: [{
          token: 'meta.type.pddl',
          regex: /\)/,
          next: 'pop'
        }, { include: '#comment' }, { include: '#predicate' }, { include: '#any-sexpr' }, { defaultToken: 'meta.type.pddl' }],
        comment: 'Predicates'
      }],
      '#problem': [{
        token: ['meta.function.pddl', 'storage.type.function-type.pddl'],
        regex: /(\(\s*)(define)\b(?!\s+\(domain)/,
        caseInsensitive: !0,
        push: [{
          token: 'meta.function.pddl',
          regex: /\)/,
          next: 'pop'
        }, { include: '#comment' }, { include: '#problem-name-in-define' }, { include: '#domain-name-in-problem' }, { include: '#requirement' }, { include: '#inits' }, { include: '#objects' }, { include: '#goal' }, { include: '#metric' }, { defaultToken: 'meta.function.pddl' }],
        comment: 'problem definition'
      }],
      '#problem-name-in-define': [{
        token: ['meta.type.pddl', 'storage.type.pddl'],
        regex: /(\(\s*)(problem)\b/,
        caseInsensitive: !0,
        push: [{
          token: 'meta.type.pddl',
          regex: /\)/,
          next: 'pop'
        }, { include: '#comment' }, {
          token: 'invalid.illegal.pddl',
          regex: /(?:\s+(?:\w|-)+){2,}/
        }, { include: '#pddl-expr' }, { defaultToken: 'meta.type.pddl' }],
        comment: 'Domain name in problem file'
      }],
      '#requirement': [{
        token: ['meta.type.requirement.pddl', 'storage.type.pddl'],
        regex: /(\(\s*)(:requirements)\b/,
        caseInsensitive: !0,
        push: [{
          token: 'meta.type.requirement.pddl',
          regex: /\)/,
          next: 'pop'
        }, { include: '#comment' }, {
          token: 'keyword.other.pddl',
          regex: /:(?:strips|typing|negative-preconditions|disjunctive-preconditions|equality|existential-preconditions|universal-preconditions|quantified-preconditions|conditional-effects|fluents|numeric-fluents|object-fluents|adl|durative-actions|duration-inequalities|continuous-effects|derived-predicates|timed-initial-literals|preferences|constraints|action-costs)\b/,
          caseInsensitive: !0
        }, { defaultToken: 'meta.type.requirement.pddl' }],
        comment: 'Requirement'
      }],
      '#times': [{
        token: ['text', 'entity.name.function.pddl', 'text'],
        regex: /(\()(forall|at\s+(?:start|end)|over(?:\s+all)?)(\s*)/,
        push: [{
          token: 'text',
          regex: /\)/,
          next: 'pop'
        }, { include: '#comment' }, { include: '#connected-predicate' }, { include: '#applied-predicate' }, { include: '#pddl-expr' }, { include: '#any-sexpr' }]
      }],
      '#typed-variable-list': [{
        token: ['text', 'keyword.other.pddl'],
        regex: /(\()(\?(?:\w|-|_)+)/,
        push: [{
          token: 'text',
          regex: /\)/,
          next: 'pop'
        }, { include: '#comment' }, { include: '#variable' }, {
          token: 'constant.character.pddl',
          regex: /(-)(?:^|\s+)([a-zA-Z](?:\w|-|_)*)(?!:|\?)\b/
        }]
      }],
      '#types': [{
        token: ['meta.type.pddl', 'storage.type.pddl'],
        regex: /(\(\s*)(:types)\b/,
        caseInsensitive: !0,
        push: [{
          token: 'meta.type.pddl',
          regex: /\)/,
          next: 'pop'
        }, { include: '#comment' }, {
          token: 'constant.character.pddl',
          regex: /(-)(?:^|\s+)([a-zA-Z](?:\w|-|_)*)/
        }, { include: '#either' }, { include: '#pddl-expr' }, { include: '#any-sexpr' }, { defaultToken: 'meta.type.pddl' }],
        comment: 'Types'
      }],
      '#variable': [{ token: 'keyword.other.pddl', regex: /(?:^|\s+)\?[a-zA-Z](?:\w|-|_)*/ }],
      '#variable-list': [{
        token: 'text',
        regex: /\(/,
        push: [{ token: 'text', regex: /\)/, next: 'pop' }, { include: '#comment' }, { include: '#variable' }]
      }]
    };
    this.normalizeRules();
  };
  pddlHighlightRules.metaData = {
    fileTypes: ['pddl'],
    name: 'PDDL',
    scopeName: 'source.pddl'
  };
  oop.inherits(pddlHighlightRules, textHighlightRules);
  const s = function() {
    this.$rules = {
      start: [
        { token: 'variable.other', regex: '\\?([A-Za-z0-9]|-|_)+' }, {
          token: 'constant.numeric',
          regex: '\\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b'
        }, {
          token: 'keyword.other',
          regex: ':(strips|typing|negative-preconditions|disjunctive-preconditions|equality|existential-preconditions|universal-preconditions|quantified-preconditions|conditional-effects|fluents|numeric-fluents|object-fluents|adl|durative-actions|duration-inequalities|continuous-effects|derived-predicates|timed-initial-literals|preferences|constraints|action-costs)'
        }, {
          caseInsensitive: !0,
          token: 'storage.type',
          regex: ':(requirements|types|constants|predicates|functions|action|init|goal|objects|domain)'
        }, {
          token: 'support.function',
          regex: '(assign|scale-up|scale-down|increase|decrease)'
        }, { token: 'constant.language', regex: '\\b(start|end|all|define)\\b' }, {
          caseInsensitive: !0,
          token: 'keyword.operator',
          regex: '\\b(?:eq|neq|when|and|or)\\b'
        }, {
          caseInsensitive: !0,
          token: 'keyword.operator',
          regex: ':(parameters|duration|condition|effect|precondition)'
        }, { token: 'comment', regex: ';.*$' }
      ]
    };
    this.normalizeRules();
  };
  s.metaData = {
    fileTypes: ['pddl'],
    name: 'PDDL',
    scopeName: 'source.pddl'
  };
  oop.inherits(s, textHighlightRules);
  exports.PDDLHighlightRules = pddlHighlightRules;
});

ace.define('ace/mode/matching_brace_outdent', ['require', 'exports', 'module', 'ace/range'], function(e, t, n) {
  'use strict';
  var i = e('../range').Range, r = function() {
  };
  (function() {
    this.checkOutdent = function(e, t) {
      return !!/^\s+$/.test(e) && /^\s*\}/.test(t);
    }, this.autoOutdent = function(e, t) {
      var n = e.getLine(t), r = n.match(/^(\s*\})/);
      if (!r) return 0;
      var o = r[1].length, s = e.findMatchingBracket({ row: t, column: o });
      if (!s || s.row == t) return 0;
      var a = this.$getIndent(e.getLine(s.row));
      e.replace(new i(t, 0, t, o - 1), a);
    }, this.$getIndent = function(e) {
      return e.match(/^\s*/)[0];
    };
  }).call(r.prototype), t.MatchingBraceOutdent = r;
});

ace.define('ace/mode/behaviour/cstyle', ['require', 'exports', 'module', 'ace/lib/oop', 'ace/mode/behaviour', 'ace/token_iterator', 'ace/lib/lang'], function(require, exports, n) {
  'use strict';
  var i, r = require('../../lib/oop');
  var o = require('../behaviour').Behaviour;
  var s = require('../../token_iterator').TokenIterator;
  var a = require('../../lib/lang');
  var l = ['text', 'paren.rparen', 'punctuation.operator'];
  var c = ['text', 'paren.rparen', 'punctuation.operator', 'comment'];
  var u = {};
  var h = function(e) {
    var t = -1;
    if (e.multiSelect && (t = e.selection.index, u.rangeCount != e.multiSelect.rangeCount && (u = { rangeCount: e.multiSelect.rangeCount })), u[t]) return i = u[t];
    i = u[t] = {
      autoInsertedBrackets: 0,
      autoInsertedRow: -1,
      autoInsertedLineEnd: '',
      maybeInsertedBrackets: 0,
      maybeInsertedRow: -1,
      maybeInsertedLineStart: '',
      maybeInsertedLineEnd: ''
    };
  };
  var d = function(e, t, n, i) {
    var r = e.end.row - e.start.row;
    return { text: n + t + i, selection: [0, e.start.column + 1, r, e.end.column + (r ? 0 : 1)] };
  };
  var f = function() {
    this.add('braces', 'insertion', function(e, t, n, r, o) {
      var s = n.getCursorPosition(), l = r.doc.getLine(s.row);
      if ('{' == o) {
        h(n);
        var c = n.getSelectionRange(), u = r.doc.getTextRange(c);
        if ('' !== u && '{' !== u && n.getWrapBehavioursEnabled()) return d(c, u, '{', '}');
        if (f.isSaneInsertion(n, r)) return /[\]\}\)]/.test(l[s.column]) || n.inMultiSelectMode ? (f.recordAutoInsert(n, r, '}'), {
          text: '{}',
          selection: [1, 1]
        }) : (f.recordMaybeInsert(n, r, '{'), { text: '{', selection: [1, 1] });
      } else if ('}' == o) {
        h(n);
        var g = l.substring(s.column, s.column + 1);
        if ('}' == g) {
          var p = r.$findOpeningBracket('}', { column: s.column + 1, row: s.row });
          if (null !== p && f.isAutoInsertedClosing(s, l, o)) return f.popAutoInsertedClosing(), {
            text: '',
            selection: [1, 1]
          };
        }
      } else {
        if ('\n' == o || '\r\n' == o) {
          h(n);
          var m = '';
          f.isMaybeInsertedClosing(s, l) && (m = a.stringRepeat('}', i.maybeInsertedBrackets), f.clearMaybeInsertedClosing());
          var g = l.substring(s.column, s.column + 1);
          if ('}' === g) {
            var v = r.findMatchingBracket({ row: s.row, column: s.column + 1 }, '}');
            if (!v) return null;
            var A = this.$getIndent(r.getLine(v.row));
          } else {
            if (!m) return void f.clearMaybeInsertedClosing();
            var A = this.$getIndent(l);
          }
          var w = A + r.getTabString();
          return { text: '\n' + w + '\n' + A + m, selection: [1, w.length, 1, w.length] };
        }
        f.clearMaybeInsertedClosing();
      }
    }), this.add('braces', 'deletion', function(e, t, n, r, o) {
      var s = r.doc.getTextRange(o);
      if (!o.isMultiLine() && '{' == s) {
        h(n);
        if ('}' == r.doc.getLine(o.start.row).substring(o.end.column, o.end.column + 1)) return o.end.column++, o;
        i.maybeInsertedBrackets--;
      }
    }), this.add('parens', 'insertion', function(e, t, n, i, r) {
      if ('(' == r) {
        h(n);
        var o = n.getSelectionRange(), s = i.doc.getTextRange(o);
        if ('' !== s && n.getWrapBehavioursEnabled()) return d(o, s, '(', ')');
        if (f.isSaneInsertion(n, i)) return f.recordAutoInsert(n, i, ')'), { text: '()', selection: [1, 1] };
      } else if (')' == r) {
        h(n);
        var a = n.getCursorPosition(), l = i.doc.getLine(a.row), c = l.substring(a.column, a.column + 1);
        if (')' == c) {
          var u = i.$findOpeningBracket(')', { column: a.column + 1, row: a.row });
          if (null !== u && f.isAutoInsertedClosing(a, l, r)) return f.popAutoInsertedClosing(), {
            text: '',
            selection: [1, 1]
          };
        }
      }
    }), this.add('parens', 'deletion', function(e, t, n, i, r) {
      var o = i.doc.getTextRange(r);
      if (!r.isMultiLine() && '(' == o) {
        h(n);
        if (')' == i.doc.getLine(r.start.row).substring(r.start.column + 1, r.start.column + 2)) return r.end.column++, r;
      }
    }), this.add('brackets', 'insertion', function(e, t, n, i, r) {
      if ('[' == r) {
        h(n);
        var o = n.getSelectionRange(), s = i.doc.getTextRange(o);
        if ('' !== s && n.getWrapBehavioursEnabled()) return d(o, s, '[', ']');
        if (f.isSaneInsertion(n, i)) return f.recordAutoInsert(n, i, ']'), { text: '[]', selection: [1, 1] };
      } else if (']' == r) {
        h(n);
        var a = n.getCursorPosition(), l = i.doc.getLine(a.row), c = l.substring(a.column, a.column + 1);
        if (']' == c) {
          var u = i.$findOpeningBracket(']', { column: a.column + 1, row: a.row });
          if (null !== u && f.isAutoInsertedClosing(a, l, r)) return f.popAutoInsertedClosing(), {
            text: '',
            selection: [1, 1]
          };
        }
      }
    }), this.add('brackets', 'deletion', function(e, t, n, i, r) {
      var o = i.doc.getTextRange(r);
      if (!r.isMultiLine() && '[' == o) {
        h(n);
        if (']' == i.doc.getLine(r.start.row).substring(r.start.column + 1, r.start.column + 2)) return r.end.column++, r;
      }
    }), this.add('string_dquotes', 'insertion', function(e, t, n, i, r) {
      if ('"' == r || '\'' == r) {
        h(n);
        var o = r, s = n.getSelectionRange(), a = i.doc.getTextRange(s);
        if ('' !== a && '\'' !== a && '"' != a && n.getWrapBehavioursEnabled()) return d(s, a, o, o);
        if (!a) {
          var l = n.getCursorPosition(), c = i.doc.getLine(l.row), u = c.substring(l.column - 1, l.column),
            f = c.substring(l.column, l.column + 1), g = i.getTokenAt(l.row, l.column),
            p = i.getTokenAt(l.row, l.column + 1);
          if ('\\' == u && g && /escape/.test(g.type)) return null;
          var m, v = g && /string|escape/.test(g.type), A = !p || /string|escape/.test(p.type);
          if (f == o) m = v !== A; else {
            if (v && !A) return null;
            if (v && A) return null;
            var w = i.$mode.tokenRe;
            w.lastIndex = 0;
            var C = w.test(u);
            w.lastIndex = 0;
            var y = w.test(u);
            if (C || y) return null;
            if (f && !/[\s;,.})\]\\]/.test(f)) return null;
            m = !0;
          }
          return { text: m ? o + o : '', selection: [1, 1] };
        }
      }
    }), this.add('string_dquotes', 'deletion', function(e, t, n, i, r) {
      var o = i.doc.getTextRange(r);
      if (!r.isMultiLine() && ('"' == o || '\'' == o)) {
        h(n);
        if (i.doc.getLine(r.start.row).substring(r.start.column + 1, r.start.column + 2) == o) return r.end.column++, r;
      }
    });
  };
  f.isSaneInsertion = function(e, t) {
    var n = e.getCursorPosition(), i = new s(t, n.row, n.column);
    if (!this.$matchTokenType(i.getCurrentToken() || 'text', l)) {
      var r = new s(t, n.row, n.column + 1);
      if (!this.$matchTokenType(r.getCurrentToken() || 'text', l)) return !1;
    }
    return i.stepForward(), i.getCurrentTokenRow() !== n.row || this.$matchTokenType(i.getCurrentToken() || 'text', c);
  };
  f.$matchTokenType = function(e, t) {
    return t.indexOf(e.type || e) > -1;
  };
  f.recordAutoInsert = function(e, t, n) {
    var r = e.getCursorPosition(), o = t.doc.getLine(r.row);
    this.isAutoInsertedClosing(r, o, i.autoInsertedLineEnd[0]) || (i.autoInsertedBrackets = 0), i.autoInsertedRow = r.row, i.autoInsertedLineEnd = n + o.substr(r.column), i.autoInsertedBrackets++;
  };
  f.recordMaybeInsert = function(e, t, n) {
    var r = e.getCursorPosition(), o = t.doc.getLine(r.row);
    this.isMaybeInsertedClosing(r, o) || (i.maybeInsertedBrackets = 0), i.maybeInsertedRow = r.row, i.maybeInsertedLineStart = o.substr(0, r.column) + n, i.maybeInsertedLineEnd = o.substr(r.column), i.maybeInsertedBrackets++;
  };
  f.isAutoInsertedClosing = function(e, t, n) {
    return i.autoInsertedBrackets > 0 && e.row === i.autoInsertedRow && n === i.autoInsertedLineEnd[0] && t.substr(e.column) === i.autoInsertedLineEnd;
  };
  f.isMaybeInsertedClosing = function(e, t) {
    return i.maybeInsertedBrackets > 0 && e.row === i.maybeInsertedRow && t.substr(e.column) === i.maybeInsertedLineEnd && t.substr(0, e.column) == i.maybeInsertedLineStart;
  };
  f.popAutoInsertedClosing = function() {
    i.autoInsertedLineEnd = i.autoInsertedLineEnd.substr(1), i.autoInsertedBrackets--;
  };
  f.clearMaybeInsertedClosing = function() {
    i && (i.maybeInsertedBrackets = 0, i.maybeInsertedRow = -1);
  };
  r.inherits(f, o);
  exports.CstyleBehaviour = f;
});

ace.define('ace/mode/folding/pddlstyle', ['require', 'exports', 'module', 'ace/lib/oop', 'ace/range', 'ace/mode/folding/fold_mode'], function(e, t, n) {
  'use strict';
  var i = e('../../lib/oop'), r = e('../../range').Range, o = e('./fold_mode').FoldMode,
    s = t.FoldMode = function(e) {
      e && (this.foldingStartMarker = new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/, '|' + e.start)), this.foldingStopMarker = new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/, '|' + e.end)));
    };
  i.inherits(s, o), function() {
    this.foldingStartMarker = /(\()[^\)]*$/, this.foldingStopMarker = /^[^\(]*(\))/, this.getFoldWidgetRange = function(e, t, n, i) {
      var r = e.getLine(n), o = r.match(this.foldingStartMarker);
      if (o) {
        var s = o.index;
        if (o[1]) return this.openingBracketBlock(e, o[1], n, s);
        var a = e.getCommentFoldRange(n, s + o[0].length, 1);
        return a && !a.isMultiLine() && (i ? a = this.getSectionRange(e, n) : 'all' != t && (a = null)), a;
      }
      if ('markbegin' !== t) return o = r.match(this.foldingStopMarker), o ? (s = o.index + o[0].length, o[1] ? this.closingBracketBlock(e, o[1], n, s) : e.getCommentFoldRange(n, s, -1)) : void 0;
    }, this.getSectionRange = function(e, t) {
      var n = e.getLine(t), i = n.search(/\S/), o = t, s = n.length;
      t += 1;
      for (var a = t, l = e.getLength(); ++t < l;) {
        n = e.getLine(t);
        var c = n.search(/\S/);
        if (-1 !== c) {
          if (i > c) break;
          var u = this.getFoldWidgetRange(e, 'all', t);
          if (u) {
            if (u.start.row <= o) break;
            if (u.isMultiLine()) t = u.end.row; else if (i == c) break;
          }
          a = t;
        }
      }
      return new r(o, s, a, e.getLine(a).length);
    };
  }.call(s.prototype);
});

ace.define('ace/mode/pddl', ['require', 'exports', 'module', 'ace/lib/oop', 'ace/mode/text', 'ace/mode/pddl_highlight_rules', 'ace/mode/folding/cstyle'], function(require, exports, module) {
  'use strict';
  const oop = require('../lib/oop');
  const TextMode = require('./text').Mode;
  const o = require('./pddl_highlight_rules').PDDLHighlightRules;
  const s = require('./matching_brace_outdent').MatchingBraceOutdent;
  const a = require('./behaviour/cstyle').CstyleBehaviour;
  const l = require('./folding/pddlstyle').FoldMode;
  const Mode = function() {
    this.HighlightRules = o;
    this.$outdent = new s;
    this.$behaviour = new a;
    this.foldingRules = new l;
  };
  oop.inherits(Mode, TextMode);
  (function() {
    this.$id = 'ace/mode/pddl';
  }.call(Mode.prototype));
  exports.Mode = Mode;
});


(function() {
  ace.require(['ace/mode/pddl'], function(m) {
    if (typeof module == 'object' && typeof exports == 'object' && module) {
      module.exports = m;
    }
  });
})();
