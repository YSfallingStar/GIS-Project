// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"lpgZp":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "e30e9b0e09110857";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"3MX33":[function(require,module,exports) {
(function(global, factory) {
    module.exports = factory(require('ol/control/Control'), require('ol/Observable'), require('ol/layer/Group'));
})(this, function(Control, ol_Observable, LayerGroup) {
    'use strict';
    Control = 'default' in Control ? Control['default'] : Control;
    LayerGroup = 'default' in LayerGroup ? LayerGroup['default'] : LayerGroup;
    var classCallCheck = function(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    };
    var createClass = function() {
        function defineProperties(target, props) {
            for(var i = 0; i < props.length; i++){
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();
    var get1 = function get(object, property, receiver) {
        if (object === null) object = Function.prototype;
        var desc = Object.getOwnPropertyDescriptor(object, property);
        if (desc === undefined) {
            var parent = Object.getPrototypeOf(object);
            if (parent === null) return undefined;
            else return get(parent, property, receiver);
        } else if ("value" in desc) return desc.value;
        else {
            var getter = desc.get;
            if (getter === undefined) return undefined;
            return getter.call(receiver);
        }
    };
    var inherits = function(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    };
    var possibleConstructorReturn = function(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    };
    /**
 * @protected
 */ var CSS_PREFIX = 'layer-switcher-';
    /**
 * OpenLayers LayerSwitcher Control, displays a list of layers and groups
 * associated with a map which have a `title` property.
 *
 * To be shown in the LayerSwitcher panel layers must have a `title` property;
 * base map layers should have a `type` property set to `base`. Group layers
 * (`LayerGroup`) can be used to visually group layers together; a group
 * with a `fold` property set to either `'open'` or `'close'` will be displayed
 * with a toggle.
 *
 * See [BaseLayerOptions](#baselayeroptions) for a full list of LayerSwitcher
 * properties for layers (`TileLayer`, `ImageLayer`, `VectorTile` etc.) and
 * [GroupLayerOptions](#grouplayeroptions) for group layer (`LayerGroup`)
 * LayerSwitcher properties.
 *
 * Layer and group properties can either be set by adding extra properties
 * to their options when they are created or via their set method.
 *
 * Specify a `title` for a Layer by adding a `title` property to it's options object:
 * ```javascript
 * var lyr = new ol.layer.Tile({
 *   // Specify a title property which will be displayed by the layer switcher
 *   title: 'OpenStreetMap',
 *   visible: true,
 *   source: new ol.source.OSM()
 * })
 * ```
 *
 * Alternatively the properties can be set via the `set` method after a layer has been created:
 * ```javascript
 * var lyr = new ol.layer.Tile({
 *   visible: true,
 *   source: new ol.source.OSM()
 * })
 * // Specify a title property which will be displayed by the layer switcher
 * lyr.set('title', 'OpenStreetMap');
 * ```
 *
 * To create a LayerSwitcher and add it to a map, create a new instance then pass it to the map's [`addControl` method](https://openlayers.org/en/latest/apidoc/module-ol_PluggableMap-PluggableMap.html#addControl).
 * ```javascript
 * var layerSwitcher = new LayerSwitcher({
 *   reverse: true,
 *   groupSelectStyle: 'group'
 * });
 * map.addControl(layerSwitcher);
 * ```
 *
 * @constructor
 * @extends {ol/control/Control~Control}
 * @param opt_options LayerSwitcher options, see  [LayerSwitcher Options](#options) and [RenderOptions](#renderoptions) which LayerSwitcher `Options` extends for more details.
 */ var LayerSwitcher1 = function(_Control) {
        inherits(LayerSwitcher, _Control);
        function LayerSwitcher(opt_options) {
            classCallCheck(this, LayerSwitcher);
            var options = Object.assign({}, opt_options);
            var element = document.createElement('div');
            var _this = possibleConstructorReturn(this, (LayerSwitcher.__proto__ || Object.getPrototypeOf(LayerSwitcher)).call(this, {
                element: element,
                target: options.target
            }));
            _this.activationMode = options.activationMode || 'mouseover';
            _this.startActive = options.startActive === true;
            // TODO Next: Rename to showButtonContent
            _this.label = options.label !== undefined ? options.label : '';
            // TODO Next: Rename to hideButtonContent
            _this.collapseLabel = options.collapseLabel !== undefined ? options.collapseLabel : '\xBB';
            // TODO Next: Rename to showButtonTitle
            _this.tipLabel = options.tipLabel ? options.tipLabel : 'Legend';
            // TODO Next: Rename to hideButtonTitle
            _this.collapseTipLabel = options.collapseTipLabel ? options.collapseTipLabel : 'Collapse legend';
            _this.groupSelectStyle = LayerSwitcher.getGroupSelectStyle(options.groupSelectStyle);
            _this.reverse = options.reverse !== false;
            _this.mapListeners = [];
            _this.hiddenClassName = 'ol-unselectable ol-control layer-switcher';
            if (LayerSwitcher.isTouchDevice_()) _this.hiddenClassName += ' touch';
            _this.shownClassName = 'shown';
            element.className = _this.hiddenClassName;
            _this.button = document.createElement('button');
            element.appendChild(_this.button);
            _this.panel = document.createElement('div');
            _this.panel.className = 'panel';
            element.appendChild(_this.panel);
            LayerSwitcher.enableTouchScroll_(_this.panel);
            element.classList.add(CSS_PREFIX + 'group-select-style-' + _this.groupSelectStyle);
            element.classList.add(CSS_PREFIX + 'activation-mode-' + _this.activationMode);
            if (_this.activationMode === 'click') {
                // TODO Next: Remove in favour of layer-switcher-activation-mode-click
                element.classList.add('activationModeClick');
                _this.button.onclick = function(e) {
                    var evt = e || window.event;
                    if (_this.element.classList.contains(_this.shownClassName)) _this.hidePanel();
                    else _this.showPanel();
                    evt.preventDefault();
                };
            } else {
                _this.button.onmouseover = function() {
                    _this.showPanel();
                };
                _this.button.onclick = function(e) {
                    var evt = e || window.event;
                    _this.showPanel();
                    evt.preventDefault();
                };
                _this.panel.onmouseout = function(evt) {
                    if (!_this.panel.contains(evt.relatedTarget)) _this.hidePanel();
                };
            }
            _this.updateButton();
            return _this;
        }
        /**
     * Set the map instance the control is associated with.
     * @param map The map instance.
     */ createClass(LayerSwitcher, [
            {
                key: 'setMap',
                value: function setMap(map) {
                    var _this2 = this;
                    // Clean up listeners associated with the previous map
                    for(var i = 0; i < this.mapListeners.length; i++)ol_Observable.unByKey(this.mapListeners[i]);
                    this.mapListeners.length = 0;
                    // Wire up listeners etc. and store reference to new map
                    get1(LayerSwitcher.prototype.__proto__ || Object.getPrototypeOf(LayerSwitcher.prototype), 'setMap', this).call(this, map);
                    if (map) {
                        if (this.startActive) this.showPanel();
                        else this.renderPanel();
                        if (this.activationMode !== 'click') this.mapListeners.push(map.on('pointerdown', function() {
                            _this2.hidePanel();
                        }));
                    }
                }
            },
            {
                key: 'showPanel',
                value: function showPanel() {
                    if (!this.element.classList.contains(this.shownClassName)) {
                        this.element.classList.add(this.shownClassName);
                        this.updateButton();
                        this.renderPanel();
                    }
                }
            },
            {
                key: 'hidePanel',
                value: function hidePanel() {
                    if (this.element.classList.contains(this.shownClassName)) {
                        this.element.classList.remove(this.shownClassName);
                        this.updateButton();
                    }
                }
            },
            {
                key: 'updateButton',
                value: function updateButton() {
                    if (this.element.classList.contains(this.shownClassName)) {
                        this.button.textContent = this.collapseLabel;
                        this.button.setAttribute('title', this.collapseTipLabel);
                        this.button.setAttribute('aria-label', this.collapseTipLabel);
                    } else {
                        this.button.textContent = this.label;
                        this.button.setAttribute('title', this.tipLabel);
                        this.button.setAttribute('aria-label', this.tipLabel);
                    }
                }
            },
            {
                key: 'renderPanel',
                value: function renderPanel() {
                    this.dispatchEvent('render');
                    LayerSwitcher.renderPanel(this.getMap(), this.panel, {
                        groupSelectStyle: this.groupSelectStyle,
                        reverse: this.reverse
                    });
                    this.dispatchEvent('rendercomplete');
                }
            }
        ], [
            {
                key: 'renderPanel',
                value: function renderPanel(map, panel, options) {
                    // Create the event.
                    var render_event = new Event('render');
                    // Dispatch the event.
                    panel.dispatchEvent(render_event);
                    options = options || {};
                    options.groupSelectStyle = LayerSwitcher.getGroupSelectStyle(options.groupSelectStyle);
                    LayerSwitcher.ensureTopVisibleBaseLayerShown(map, options.groupSelectStyle);
                    while(panel.firstChild)panel.removeChild(panel.firstChild);
                    // Reset indeterminate state for all layers and groups before
                    // applying based on groupSelectStyle
                    LayerSwitcher.forEachRecursive(map, function(l, _idx, _a) {
                        l.set('indeterminate', false);
                    });
                    if (options.groupSelectStyle === 'children' || options.groupSelectStyle === 'none') // Set visibile and indeterminate state of groups based on
                    // their children's visibility
                    LayerSwitcher.setGroupVisibility(map);
                    else if (options.groupSelectStyle === 'group') // Set child indetermiate state based on their parent's visibility
                    LayerSwitcher.setChildVisibility(map);
                    var ul = document.createElement('ul');
                    panel.appendChild(ul);
                    // passing two map arguments instead of lyr as we're passing the map as the root of the layers tree
                    LayerSwitcher.renderLayers_(map, map, ul, options, function render(_changedLyr) {
                        LayerSwitcher.renderPanel(map, panel, options);
                    });
                    // Create the event.
                    var rendercomplete_event = new Event('rendercomplete');
                    // Dispatch the event.
                    panel.dispatchEvent(rendercomplete_event);
                }
            },
            {
                key: 'isBaseGroup',
                value: function isBaseGroup(grp) {
                    if (grp instanceof LayerGroup) {
                        var lyrs = grp.getLayers().getArray();
                        return lyrs.length && lyrs[0].get('type') === 'base';
                    } else return false;
                }
            },
            {
                key: 'setGroupVisibility',
                value: function setGroupVisibility(map) {
                    // Get a list of groups, with the deepest first
                    var groups = LayerSwitcher.getGroupsAndLayers(map, function(l) {
                        return l instanceof LayerGroup && !l.get('combine') && !LayerSwitcher.isBaseGroup(l);
                    }).reverse();
                    // console.log(groups.map(g => g.get('title')));
                    groups.forEach(function(grp) {
                        // TODO Can we use getLayersArray, is it public in the esm build?
                        var descendantVisibility = grp.getLayersArray().map(function(l) {
                            var state = l.getVisible();
                            // console.log('>', l.get('title'), state);
                            return state;
                        });
                        // console.log(descendantVisibility);
                        if (descendantVisibility.every(function(v) {
                            return v === true;
                        })) {
                            grp.setVisible(true);
                            grp.set('indeterminate', false);
                        } else if (descendantVisibility.every(function(v) {
                            return v === false;
                        })) {
                            grp.setVisible(false);
                            grp.set('indeterminate', false);
                        } else {
                            grp.setVisible(true);
                            grp.set('indeterminate', true);
                        }
                    });
                }
            },
            {
                key: 'setChildVisibility',
                value: function setChildVisibility(map) {
                    // console.log('setChildVisibility');
                    var groups = LayerSwitcher.getGroupsAndLayers(map, function(l) {
                        return l instanceof LayerGroup && !l.get('combine') && !LayerSwitcher.isBaseGroup(l);
                    });
                    groups.forEach(function(grp) {
                        var group = grp;
                        // console.log(group.get('title'));
                        var groupVisible = group.getVisible();
                        var groupIndeterminate = group.get('indeterminate');
                        group.getLayers().getArray().forEach(function(l) {
                            l.set('indeterminate', false);
                            if ((!groupVisible || groupIndeterminate) && l.getVisible()) l.set('indeterminate', true);
                        });
                    });
                }
            },
            {
                key: 'ensureTopVisibleBaseLayerShown',
                value: function ensureTopVisibleBaseLayerShown(map, groupSelectStyle) {
                    var lastVisibleBaseLyr = void 0;
                    LayerSwitcher.forEachRecursive(map, function(lyr, _idx, _arr) {
                        if (lyr.get('type') === 'base' && lyr.getVisible()) lastVisibleBaseLyr = lyr;
                    });
                    if (lastVisibleBaseLyr) LayerSwitcher.setVisible_(map, lastVisibleBaseLyr, true, groupSelectStyle);
                }
            },
            {
                key: 'getGroupsAndLayers',
                value: function getGroupsAndLayers(grp, filterFn) {
                    var layers = [];
                    filterFn = filterFn || function(_lyr, _idx, _arr) {
                        return true;
                    };
                    LayerSwitcher.forEachRecursive(grp, function(lyr, idx, arr) {
                        if (lyr.get('title')) {
                            if (filterFn(lyr, idx, arr)) layers.push(lyr);
                        }
                    });
                    return layers;
                }
            },
            {
                key: 'setVisible_',
                value: function setVisible_(map, lyr, visible, groupSelectStyle) {
                    // console.log(lyr.get('title'), visible, groupSelectStyle);
                    lyr.setVisible(visible);
                    if (visible && lyr.get('type') === 'base') // Hide all other base layers regardless of grouping
                    LayerSwitcher.forEachRecursive(map, function(l, _idx, _arr) {
                        if (l != lyr && l.get('type') === 'base') l.setVisible(false);
                    });
                    if (lyr instanceof LayerGroup && !lyr.get('combine') && groupSelectStyle === 'children') lyr.getLayers().forEach(function(l) {
                        LayerSwitcher.setVisible_(map, l, lyr.getVisible(), groupSelectStyle);
                    });
                }
            },
            {
                key: 'renderLayer_',
                value: function renderLayer_(map, lyr, idx, options, render) {
                    var li = document.createElement('li');
                    var lyrTitle = lyr.get('title');
                    var checkboxId = LayerSwitcher.uuid();
                    var label = document.createElement('label');
                    if (lyr instanceof LayerGroup && !lyr.get('combine')) {
                        var isBaseGroup = LayerSwitcher.isBaseGroup(lyr);
                        li.classList.add('group');
                        if (isBaseGroup) li.classList.add(CSS_PREFIX + 'base-group');
                        // Group folding
                        if (lyr.get('fold')) {
                            li.classList.add(CSS_PREFIX + 'fold');
                            li.classList.add(CSS_PREFIX + lyr.get('fold'));
                            var btn = document.createElement('button');
                            btn.onclick = function(e) {
                                var evt = e || window.event;
                                LayerSwitcher.toggleFold_(lyr, li);
                                evt.preventDefault();
                            };
                            li.appendChild(btn);
                        }
                        if (!isBaseGroup && options.groupSelectStyle != 'none') {
                            var input = document.createElement('input');
                            input.type = 'checkbox';
                            input.id = checkboxId;
                            input.checked = lyr.getVisible();
                            input.indeterminate = lyr.get('indeterminate');
                            input.onchange = function(e) {
                                var target = e.target;
                                LayerSwitcher.setVisible_(map, lyr, target.checked, options.groupSelectStyle);
                                render(lyr);
                            };
                            li.appendChild(input);
                            label.htmlFor = checkboxId;
                        }
                        label.innerHTML = lyrTitle;
                        li.appendChild(label);
                        var ul = document.createElement('ul');
                        li.appendChild(ul);
                        LayerSwitcher.renderLayers_(map, lyr, ul, options, render);
                    } else {
                        li.className = 'layer';
                        var _input = document.createElement('input');
                        if (lyr.get('type') === 'base') _input.type = 'radio';
                        else _input.type = 'checkbox';
                        _input.id = checkboxId;
                        _input.checked = lyr.get('visible');
                        _input.indeterminate = lyr.get('indeterminate');
                        _input.onchange = function(e) {
                            var target = e.target;
                            LayerSwitcher.setVisible_(map, lyr, target.checked, options.groupSelectStyle);
                            render(lyr);
                        };
                        li.appendChild(_input);
                        label.htmlFor = checkboxId;
                        label.innerHTML = lyrTitle;
                        var rsl = map.getView().getResolution();
                        if (rsl >= lyr.getMaxResolution() || rsl < lyr.getMinResolution()) label.className += ' disabled';
                        else if (lyr.getMinZoom && lyr.getMaxZoom) {
                            var zoom = map.getView().getZoom();
                            if (zoom <= lyr.getMinZoom() || zoom > lyr.getMaxZoom()) label.className += ' disabled';
                        }
                        li.appendChild(label);
                    }
                    return li;
                }
            },
            {
                key: 'renderLayers_',
                value: function renderLayers_(map, lyr, elm, options, render) {
                    var lyrs = lyr.getLayers().getArray().slice();
                    if (options.reverse) lyrs = lyrs.reverse();
                    for(var i = 0, l; i < lyrs.length; i++){
                        l = lyrs[i];
                        if (l.get('title')) elm.appendChild(LayerSwitcher.renderLayer_(map, l, i, options, render));
                    }
                }
            },
            {
                key: 'forEachRecursive',
                value: function forEachRecursive(lyr1, fn) {
                    lyr1.getLayers().forEach(function(lyr, idx, a) {
                        fn(lyr, idx, a);
                        if (lyr instanceof LayerGroup) LayerSwitcher.forEachRecursive(lyr, fn);
                    });
                }
            },
            {
                key: 'uuid',
                value: function uuid() {
                    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                        var r = Math.random() * 16 | 0, v = c == 'x' ? r : r & 3 | 8;
                        return v.toString(16);
                    });
                }
            },
            {
                key: 'enableTouchScroll_',
                value: function enableTouchScroll_(elm) {
                    if (LayerSwitcher.isTouchDevice_()) {
                        var scrollStartPos = 0;
                        elm.addEventListener('touchstart', function(event) {
                            scrollStartPos = this.scrollTop + event.touches[0].pageY;
                        }, false);
                        elm.addEventListener('touchmove', function(event) {
                            this.scrollTop = scrollStartPos - event.touches[0].pageY;
                        }, false);
                    }
                }
            },
            {
                key: 'isTouchDevice_',
                value: function isTouchDevice_() {
                    try {
                        document.createEvent('TouchEvent');
                        return true;
                    } catch (e) {
                        return false;
                    }
                }
            },
            {
                key: 'toggleFold_',
                value: function toggleFold_(lyr, li) {
                    li.classList.remove(CSS_PREFIX + lyr.get('fold'));
                    lyr.set('fold', lyr.get('fold') === 'open' ? 'close' : 'open');
                    li.classList.add(CSS_PREFIX + lyr.get('fold'));
                }
            },
            {
                key: 'getGroupSelectStyle',
                value: function getGroupSelectStyle(groupSelectStyle) {
                    return [
                        'none',
                        'children',
                        'group'
                    ].indexOf(groupSelectStyle) >= 0 ? groupSelectStyle : 'children';
                }
            }
        ]);
        return LayerSwitcher;
    }(Control);
    if (window['ol'] && window['ol']['control']) window['ol']['control']['LayerSwitcher'] = LayerSwitcher1;
    return LayerSwitcher1;
});

},{"ol/control/Control":"a2mnq","ol/Observable":"cQ2uI","ol/layer/Group":"h4ZNC"}],"a2mnq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @module ol/control/Control
 */ var _objectJs = require("../Object.js");
var _objectJsDefault = parcelHelpers.interopDefault(_objectJs);
var _mapEventTypeJs = require("../MapEventType.js");
var _mapEventTypeJsDefault = parcelHelpers.interopDefault(_mapEventTypeJs);
var _functionsJs = require("../functions.js");
var _eventsJs = require("../events.js");
var _domJs = require("../dom.js");
var __extends = undefined && undefined.__extends || function() {
    var extendStatics = function(d1, b1) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d1, b1);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
/**
 * @typedef {Object} Options
 * @property {HTMLElement} [element] The element is the control's
 * container element. This only needs to be specified if you're developing
 * a custom control.
 * @property {function(import("../MapEvent.js").default):void} [render] Function called when
 * the control should be re-rendered. This is called in a `requestAnimationFrame`
 * callback.
 * @property {HTMLElement|string} [target] Specify a target if you want
 * the control to be rendered outside of the map's viewport.
 */ /**
 * @classdesc
 * A control is a visible widget with a DOM element in a fixed position on the
 * screen. They can involve user input (buttons), or be informational only;
 * the position is determined using CSS. By default these are placed in the
 * container with CSS class name `ol-overlaycontainer-stopevent`, but can use
 * any outside DOM element.
 *
 * This is the base class for controls. You can use it for simple custom
 * controls by creating the element with listeners, creating an instance:
 * ```js
 * var myControl = new Control({element: myElement});
 * ```
 * and then adding this to the map.
 *
 * The main advantage of having this as a control rather than a simple separate
 * DOM element is that preventing propagation is handled for you. Controls
 * will also be objects in a {@link module:ol/Collection~Collection}, so you can use their methods.
 *
 * You can also extend this base for your own control class. See
 * examples/custom-controls for an example of how to do this.
 *
 * @api
 */ var Control = /** @class */ function(_super) {
    __extends(Control1, _super);
    /**
     * @param {Options} options Control options.
     */ function Control1(options) {
        var _this = _super.call(this) || this;
        var element = options.element;
        if (element && !options.target && !element.style.pointerEvents) element.style.pointerEvents = 'auto';
        /**
         * @protected
         * @type {HTMLElement}
         */ _this.element = element ? element : null;
        /**
         * @private
         * @type {HTMLElement}
         */ _this.target_ = null;
        /**
         * @private
         * @type {import("../PluggableMap.js").default|null}
         */ _this.map_ = null;
        /**
         * @protected
         * @type {!Array<import("../events.js").EventsKey>}
         */ _this.listenerKeys = [];
        if (options.render) _this.render = options.render;
        if (options.target) _this.setTarget(options.target);
        return _this;
    }
    /**
     * Clean up.
     */ Control1.prototype.disposeInternal = function() {
        _domJs.removeNode(this.element);
        _super.prototype.disposeInternal.call(this);
    };
    /**
     * Get the map associated with this control.
     * @return {import("../PluggableMap.js").default|null} Map.
     * @api
     */ Control1.prototype.getMap = function() {
        return this.map_;
    };
    /**
     * Remove the control from its current map and attach it to the new map.
     * Pass `null` to just remove the control from the current map.
     * Subclasses may set up event handlers to get notified about changes to
     * the map here.
     * @param {import("../PluggableMap.js").default|null} map Map.
     * @api
     */ Control1.prototype.setMap = function(map) {
        if (this.map_) _domJs.removeNode(this.element);
        for(var i = 0, ii = this.listenerKeys.length; i < ii; ++i)_eventsJs.unlistenByKey(this.listenerKeys[i]);
        this.listenerKeys.length = 0;
        this.map_ = map;
        if (map) {
            var target = this.target_ ? this.target_ : map.getOverlayContainerStopEvent();
            target.appendChild(this.element);
            if (this.render !== _functionsJs.VOID) this.listenerKeys.push(_eventsJs.listen(map, _mapEventTypeJsDefault.default.POSTRENDER, this.render, this));
            map.render();
        }
    };
    /**
     * Renders the control.
     * @param {import("../MapEvent.js").default} mapEvent Map event.
     * @api
     */ Control1.prototype.render = function(mapEvent) {};
    /**
     * This function is used to set a target element for the control. It has no
     * effect if it is called after the control has been added to the map (i.e.
     * after `setMap` is called on the control). If no `target` is set in the
     * options passed to the control constructor and if `setTarget` is not called
     * then the control is added to the map's overlay container.
     * @param {HTMLElement|string} target Target.
     * @api
     */ Control1.prototype.setTarget = function(target) {
        this.target_ = typeof target === 'string' ? document.getElementById(target) : target;
    };
    return Control1;
}(_objectJsDefault.default);
exports.default = Control;

},{"../Object.js":"1zG8z","../MapEventType.js":"1cFF9","../functions.js":"iqv8I","../events.js":"dcspA","../dom.js":"84QzQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1zG8z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ObjectEvent", ()=>ObjectEvent
);
/**
 * @module ol/Object
 */ var _eventJs = require("./events/Event.js");
var _eventJsDefault = parcelHelpers.interopDefault(_eventJs);
var _objectEventTypeJs = require("./ObjectEventType.js");
var _objectEventTypeJsDefault = parcelHelpers.interopDefault(_objectEventTypeJs);
var _observableJs = require("./Observable.js");
var _observableJsDefault = parcelHelpers.interopDefault(_observableJs);
var _objJs = require("./obj.js");
var _utilJs = require("./util.js");
var __extends = undefined && undefined.__extends || function() {
    var extendStatics = function(d1, b1) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d1, b1);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
/**
 * @classdesc
 * Events emitted by {@link module:ol/Object~BaseObject} instances are instances of this type.
 */ var ObjectEvent = /** @class */ function(_super) {
    __extends(ObjectEvent1, _super);
    /**
     * @param {string} type The event type.
     * @param {string} key The property name.
     * @param {*} oldValue The old value for `key`.
     */ function ObjectEvent1(type, key, oldValue) {
        var _this = _super.call(this, type) || this;
        /**
         * The name of the property whose value is changing.
         * @type {string}
         * @api
         */ _this.key = key;
        /**
         * The old value. To get the new value use `e.target.get(e.key)` where
         * `e` is the event object.
         * @type {*}
         * @api
         */ _this.oldValue = oldValue;
        return _this;
    }
    return ObjectEvent1;
}(_eventJsDefault.default);
/***
 * @template Return
 * @typedef {import("./Observable").OnSignature<import("./Observable").EventTypes, import("./events/Event.js").default, Return> &
 *    import("./Observable").OnSignature<import("./ObjectEventType").Types, ObjectEvent, Return> &
 *    import("./Observable").CombinedOnSignature<import("./Observable").EventTypes|import("./ObjectEventType").Types, Return>} ObjectOnSignature
 */ /**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * Most non-trivial classes inherit from this.
 *
 * This extends {@link module:ol/Observable~Observable} with observable
 * properties, where each property is observable as well as the object as a
 * whole.
 *
 * Classes that inherit from this have pre-defined properties, to which you can
 * add your owns. The pre-defined properties are listed in this documentation as
 * 'Observable Properties', and have their own accessors; for example,
 * {@link module:ol/Map~Map} has a `target` property, accessed with
 * `getTarget()` and changed with `setTarget()`. Not all properties are however
 * settable. There are also general-purpose accessors `get()` and `set()`. For
 * example, `get('target')` is equivalent to `getTarget()`.
 *
 * The `set` accessors trigger a change event, and you can monitor this by
 * registering a listener. For example, {@link module:ol/View~View} has a
 * `center` property, so `view.on('change:center', function(evt) {...});` would
 * call the function whenever the value of the center property changes. Within
 * the function, `evt.target` would be the view, so `evt.target.getCenter()`
 * would return the new center.
 *
 * You can add your own observable properties with
 * `object.set('prop', 'value')`, and retrieve that with `object.get('prop')`.
 * You can listen for changes on that property value with
 * `object.on('change:prop', listener)`. You can get a list of all
 * properties with {@link module:ol/Object~BaseObject#getProperties}.
 *
 * Note that the observable properties are separate from standard JS properties.
 * You can, for example, give your map object a title with
 * `map.title='New title'` and with `map.set('title', 'Another title')`. The
 * first will be a `hasOwnProperty`; the second will appear in
 * `getProperties()`. Only the second is observable.
 *
 * Properties can be deleted by using the unset method. E.g.
 * object.unset('foo').
 *
 * @fires ObjectEvent
 * @api
 */ var BaseObject = /** @class */ function(_super) {
    __extends(BaseObject1, _super);
    /**
     * @param {Object<string, *>} [opt_values] An object with key-value pairs.
     */ function BaseObject1(opt_values) {
        var _this = _super.call(this) || this;
        /***
         * @type {ObjectOnSignature<import("./events").EventsKey>}
         */ _this.on;
        /***
         * @type {ObjectOnSignature<import("./events").EventsKey>}
         */ _this.once;
        /***
         * @type {ObjectOnSignature<void>}
         */ _this.un;
        // Call {@link module:ol/util.getUid} to ensure that the order of objects' ids is
        // the same as the order in which they were created.  This also helps to
        // ensure that object properties are always added in the same order, which
        // helps many JavaScript engines generate faster code.
        _utilJs.getUid(_this);
        /**
         * @private
         * @type {Object<string, *>}
         */ _this.values_ = null;
        if (opt_values !== undefined) _this.setProperties(opt_values);
        return _this;
    }
    /**
     * Gets a value.
     * @param {string} key Key name.
     * @return {*} Value.
     * @api
     */ BaseObject1.prototype.get = function(key) {
        var value;
        if (this.values_ && this.values_.hasOwnProperty(key)) value = this.values_[key];
        return value;
    };
    /**
     * Get a list of object property names.
     * @return {Array<string>} List of property names.
     * @api
     */ BaseObject1.prototype.getKeys = function() {
        return this.values_ && Object.keys(this.values_) || [];
    };
    /**
     * Get an object of all property names and values.
     * @return {Object<string, *>} Object.
     * @api
     */ BaseObject1.prototype.getProperties = function() {
        return this.values_ && _objJs.assign({}, this.values_) || {};
    };
    /**
     * @return {boolean} The object has properties.
     */ BaseObject1.prototype.hasProperties = function() {
        return !!this.values_;
    };
    /**
     * @param {string} key Key name.
     * @param {*} oldValue Old value.
     */ BaseObject1.prototype.notify = function(key, oldValue) {
        var eventType;
        eventType = "change:".concat(key);
        if (this.hasListener(eventType)) this.dispatchEvent(new ObjectEvent(eventType, key, oldValue));
        eventType = _objectEventTypeJsDefault.default.PROPERTYCHANGE;
        if (this.hasListener(eventType)) this.dispatchEvent(new ObjectEvent(eventType, key, oldValue));
    };
    /**
     * @param {string} key Key name.
     * @param {import("./events.js").Listener} listener Listener.
     */ BaseObject1.prototype.addChangeListener = function(key, listener) {
        this.addEventListener("change:".concat(key), listener);
    };
    /**
     * @param {string} key Key name.
     * @param {import("./events.js").Listener} listener Listener.
     */ BaseObject1.prototype.removeChangeListener = function(key, listener) {
        this.removeEventListener("change:".concat(key), listener);
    };
    /**
     * Sets a value.
     * @param {string} key Key name.
     * @param {*} value Value.
     * @param {boolean} [opt_silent] Update without triggering an event.
     * @api
     */ BaseObject1.prototype.set = function(key, value, opt_silent) {
        var values = this.values_ || (this.values_ = {});
        if (opt_silent) values[key] = value;
        else {
            var oldValue = values[key];
            values[key] = value;
            if (oldValue !== value) this.notify(key, oldValue);
        }
    };
    /**
     * Sets a collection of key-value pairs.  Note that this changes any existing
     * properties and adds new ones (it does not remove any existing properties).
     * @param {Object<string, *>} values Values.
     * @param {boolean} [opt_silent] Update without triggering an event.
     * @api
     */ BaseObject1.prototype.setProperties = function(values, opt_silent) {
        for(var key in values)this.set(key, values[key], opt_silent);
    };
    /**
     * Apply any properties from another object without triggering events.
     * @param {BaseObject} source The source object.
     * @protected
     */ BaseObject1.prototype.applyProperties = function(source) {
        if (!source.values_) return;
        _objJs.assign(this.values_ || (this.values_ = {}), source.values_);
    };
    /**
     * Unsets a property.
     * @param {string} key Key name.
     * @param {boolean} [opt_silent] Unset without triggering an event.
     * @api
     */ BaseObject1.prototype.unset = function(key, opt_silent) {
        if (this.values_ && key in this.values_) {
            var oldValue = this.values_[key];
            delete this.values_[key];
            if (_objJs.isEmpty(this.values_)) this.values_ = null;
            if (!opt_silent) this.notify(key, oldValue);
        }
    };
    return BaseObject1;
}(_observableJsDefault.default);
exports.default = BaseObject;

},{"./events/Event.js":"hwXQP","./ObjectEventType.js":"f2U6i","./Observable.js":"cQ2uI","./obj.js":"3ssAG","./util.js":"pLBjQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hwXQP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @param {Event|import("./Event.js").default} evt Event
 */ parcelHelpers.export(exports, "stopPropagation", ()=>stopPropagation
);
/**
 * @param {Event|import("./Event.js").default} evt Event
 */ parcelHelpers.export(exports, "preventDefault", ()=>preventDefault
);
/**
 * @module ol/events/Event
 */ /**
 * @classdesc
 * Stripped down implementation of the W3C DOM Level 2 Event interface.
 * See https://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-interface.
 *
 * This implementation only provides `type` and `target` properties, and
 * `stopPropagation` and `preventDefault` methods. It is meant as base class
 * for higher level events defined in the library, and works with
 * {@link module:ol/events/Target~Target}.
 */ var BaseEvent = /** @class */ function() {
    /**
     * @param {string} type Type.
     */ function BaseEvent1(type) {
        /**
         * @type {boolean}
         */ this.propagationStopped;
        /**
         * @type {boolean}
         */ this.defaultPrevented;
        /**
         * The event type.
         * @type {string}
         * @api
         */ this.type = type;
        /**
         * The event target.
         * @type {Object}
         * @api
         */ this.target = null;
    }
    /**
     * Prevent default. This means that no emulated `click`, `singleclick` or `doubleclick` events
     * will be fired.
     * @api
     */ BaseEvent1.prototype.preventDefault = function() {
        this.defaultPrevented = true;
    };
    /**
     * Stop event propagation.
     * @api
     */ BaseEvent1.prototype.stopPropagation = function() {
        this.propagationStopped = true;
    };
    return BaseEvent1;
}();
function stopPropagation(evt) {
    evt.stopPropagation();
}
function preventDefault(evt) {
    evt.preventDefault();
}
exports.default = BaseEvent;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"f2U6i":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @module ol/ObjectEventType
 */ /**
 * @enum {string}
 */ exports.default = {
    /**
     * Triggered when a property is changed.
     * @event module:ol/Object.ObjectEvent#propertychange
     * @api
     */ PROPERTYCHANGE: 'propertychange'
}; /**
 * @typedef {'propertychange'} Types
 */ 

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cQ2uI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Removes an event listener using the key returned by `on()` or `once()`.
 * @param {import("./events.js").EventsKey|Array<import("./events.js").EventsKey>} key The key returned by `on()`
 *     or `once()` (or an array of keys).
 * @api
 */ parcelHelpers.export(exports, "unByKey", ()=>unByKey
);
/**
 * @module ol/Observable
 */ var _targetJs = require("./events/Target.js");
var _targetJsDefault = parcelHelpers.interopDefault(_targetJs);
var _eventTypeJs = require("./events/EventType.js");
var _eventTypeJsDefault = parcelHelpers.interopDefault(_eventTypeJs);
var _eventsJs = require("./events.js");
var __extends = undefined && undefined.__extends || function() {
    var extendStatics = function(d1, b1) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d1, b1);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
/***
 * @template {string} Type
 * @template {Event|import("./events/Event.js").default} EventClass
 * @template Return
 * @typedef {(type: Type, listener: (event: EventClass) => ?) => Return} OnSignature
 */ /***
 * @template {string} Type
 * @template Return
 * @typedef {(type: Type[], listener: (event: Event|import("./events/Event").default) => ?) => Return extends void ? void : Return[]} CombinedOnSignature
 */ /**
 * @typedef {'change'|'error'} EventTypes
 */ /***
 * @template Return
 * @typedef {OnSignature<EventTypes, import("./events/Event.js").default, Return> & CombinedOnSignature<EventTypes, Return>} ObservableOnSignature
 */ /**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * An event target providing convenient methods for listener registration
 * and unregistration. A generic `change` event is always available through
 * {@link module:ol/Observable~Observable#changed}.
 *
 * @fires import("./events/Event.js").default
 * @api
 */ var Observable = /** @class */ function(_super) {
    __extends(Observable1, _super);
    function Observable1() {
        var _this = _super.call(this) || this;
        _this.on = _this.onInternal;
        _this.once = _this.onceInternal;
        _this.un = _this.unInternal;
        /**
         * @private
         * @type {number}
         */ _this.revision_ = 0;
        return _this;
    }
    /**
     * Increases the revision counter and dispatches a 'change' event.
     * @api
     */ Observable1.prototype.changed = function() {
        ++this.revision_;
        this.dispatchEvent(_eventTypeJsDefault.default.CHANGE);
    };
    /**
     * Get the version number for this object.  Each time the object is modified,
     * its version number will be incremented.
     * @return {number} Revision.
     * @api
     */ Observable1.prototype.getRevision = function() {
        return this.revision_;
    };
    /**
     * @param {string|Array<string>} type Type.
     * @param {function((Event|import("./events/Event").default)): ?} listener Listener.
     * @return {import("./events.js").EventsKey|Array<import("./events.js").EventsKey>} Event key.
     * @protected
     */ Observable1.prototype.onInternal = function(type, listener) {
        if (Array.isArray(type)) {
            var len = type.length;
            var keys = new Array(len);
            for(var i = 0; i < len; ++i)keys[i] = _eventsJs.listen(this, type[i], listener);
            return keys;
        } else return _eventsJs.listen(this, type, listener);
    };
    /**
     * @param {string|Array<string>} type Type.
     * @param {function((Event|import("./events/Event").default)): ?} listener Listener.
     * @return {import("./events.js").EventsKey|Array<import("./events.js").EventsKey>} Event key.
     * @protected
     */ Observable1.prototype.onceInternal = function(type, listener) {
        var key;
        if (Array.isArray(type)) {
            var len = type.length;
            key = new Array(len);
            for(var i = 0; i < len; ++i)key[i] = _eventsJs.listenOnce(this, type[i], listener);
        } else key = _eventsJs.listenOnce(this, type, listener);
        /** @type {Object} */ listener.ol_key = key;
        return key;
    };
    /**
     * Unlisten for a certain type of event.
     * @param {string|Array<string>} type Type.
     * @param {function((Event|import("./events/Event").default)): ?} listener Listener.
     * @protected
     */ Observable1.prototype.unInternal = function(type, listener) {
        var key = /** @type {Object} */ listener.ol_key;
        if (key) unByKey(key);
        else if (Array.isArray(type)) for(var i = 0, ii = type.length; i < ii; ++i)this.removeEventListener(type[i], listener);
        else this.removeEventListener(type, listener);
    };
    return Observable1;
}(_targetJsDefault.default);
/**
 * Listen for a certain type of event.
 * @function
 * @param {string|Array<string>} type The event type or array of event types.
 * @param {function((Event|import("./events/Event").default)): ?} listener The listener function.
 * @return {import("./events.js").EventsKey|Array<import("./events.js").EventsKey>} Unique key for the listener. If
 *     called with an array of event types as the first argument, the return
 *     will be an array of keys.
 * @api
 */ Observable.prototype.on;
/**
 * Listen once for a certain type of event.
 * @function
 * @param {string|Array<string>} type The event type or array of event types.
 * @param {function((Event|import("./events/Event").default)): ?} listener The listener function.
 * @return {import("./events.js").EventsKey|Array<import("./events.js").EventsKey>} Unique key for the listener. If
 *     called with an array of event types as the first argument, the return
 *     will be an array of keys.
 * @api
 */ Observable.prototype.once;
/**
 * Unlisten for a certain type of event.
 * @function
 * @param {string|Array<string>} type The event type or array of event types.
 * @param {function((Event|import("./events/Event").default)): ?} listener The listener function.
 * @api
 */ Observable.prototype.un;
function unByKey(key) {
    if (Array.isArray(key)) for(var i = 0, ii = key.length; i < ii; ++i)_eventsJs.unlistenByKey(key[i]);
    else _eventsJs.unlistenByKey(key);
}
exports.default = Observable;

},{"./events/Target.js":"7T5Yi","./events/EventType.js":"hrQJ6","./events.js":"dcspA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7T5Yi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @module ol/events/Target
 */ var _disposableJs = require("../Disposable.js");
var _disposableJsDefault = parcelHelpers.interopDefault(_disposableJs);
var _eventJs = require("./Event.js");
var _eventJsDefault = parcelHelpers.interopDefault(_eventJs);
var _functionsJs = require("../functions.js");
var _objJs = require("../obj.js");
var __extends = undefined && undefined.__extends || function() {
    var extendStatics = function(d1, b1) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d1, b1);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
/**
 * @typedef {EventTarget|Target} EventTargetLike
 */ /**
 * @classdesc
 * A simplified implementation of the W3C DOM Level 2 EventTarget interface.
 * See https://www.w3.org/TR/2000/REC-DOM-Level-2-Events-20001113/events.html#Events-EventTarget.
 *
 * There are two important simplifications compared to the specification:
 *
 * 1. The handling of `useCapture` in `addEventListener` and
 *    `removeEventListener`. There is no real capture model.
 * 2. The handling of `stopPropagation` and `preventDefault` on `dispatchEvent`.
 *    There is no event target hierarchy. When a listener calls
 *    `stopPropagation` or `preventDefault` on an event object, it means that no
 *    more listeners after this one will be called. Same as when the listener
 *    returns false.
 */ var Target = /** @class */ function(_super) {
    __extends(Target1, _super);
    /**
     * @param {*} [opt_target] Default event target for dispatched events.
     */ function Target1(opt_target) {
        var _this = _super.call(this) || this;
        /**
         * @private
         * @type {*}
         */ _this.eventTarget_ = opt_target;
        /**
         * @private
         * @type {Object<string, number>}
         */ _this.pendingRemovals_ = null;
        /**
         * @private
         * @type {Object<string, number>}
         */ _this.dispatching_ = null;
        /**
         * @private
         * @type {Object<string, Array<import("../events.js").Listener>>}
         */ _this.listeners_ = null;
        return _this;
    }
    /**
     * @param {string} type Type.
     * @param {import("../events.js").Listener} listener Listener.
     */ Target1.prototype.addEventListener = function(type, listener) {
        if (!type || !listener) return;
        var listeners = this.listeners_ || (this.listeners_ = {});
        var listenersForType = listeners[type] || (listeners[type] = []);
        if (listenersForType.indexOf(listener) === -1) listenersForType.push(listener);
    };
    /**
     * Dispatches an event and calls all listeners listening for events
     * of this type. The event parameter can either be a string or an
     * Object with a `type` property.
     *
     * @param {import("./Event.js").default|string} event Event object.
     * @return {boolean|undefined} `false` if anyone called preventDefault on the
     *     event object or if any of the listeners returned false.
     * @api
     */ Target1.prototype.dispatchEvent = function(event) {
        var isString = typeof event === 'string';
        var type = isString ? event : event.type;
        var listeners = this.listeners_ && this.listeners_[type];
        if (!listeners) return;
        var evt = isString ? new _eventJsDefault.default(event) : event;
        if (!evt.target) evt.target = this.eventTarget_ || this;
        var dispatching = this.dispatching_ || (this.dispatching_ = {});
        var pendingRemovals = this.pendingRemovals_ || (this.pendingRemovals_ = {});
        if (!(type in dispatching)) {
            dispatching[type] = 0;
            pendingRemovals[type] = 0;
        }
        ++dispatching[type];
        var propagate;
        for(var i = 0, ii = listeners.length; i < ii; ++i){
            if ('handleEvent' in listeners[i]) propagate = /** @type {import("../events.js").ListenerObject} */ listeners[i].handleEvent(evt);
            else propagate = /** @type {import("../events.js").ListenerFunction} */ listeners[i].call(this, evt);
            if (propagate === false || evt.propagationStopped) {
                propagate = false;
                break;
            }
        }
        if (--dispatching[type] === 0) {
            var pr = pendingRemovals[type];
            delete pendingRemovals[type];
            while(pr--)this.removeEventListener(type, _functionsJs.VOID);
            delete dispatching[type];
        }
        return propagate;
    };
    /**
     * Clean up.
     */ Target1.prototype.disposeInternal = function() {
        this.listeners_ && _objJs.clear(this.listeners_);
    };
    /**
     * Get the listeners for a specified event type. Listeners are returned in the
     * order that they will be called in.
     *
     * @param {string} type Type.
     * @return {Array<import("../events.js").Listener>|undefined} Listeners.
     */ Target1.prototype.getListeners = function(type) {
        return this.listeners_ && this.listeners_[type] || undefined;
    };
    /**
     * @param {string} [opt_type] Type. If not provided,
     *     `true` will be returned if this event target has any listeners.
     * @return {boolean} Has listeners.
     */ Target1.prototype.hasListener = function(opt_type) {
        if (!this.listeners_) return false;
        return opt_type ? opt_type in this.listeners_ : Object.keys(this.listeners_).length > 0;
    };
    /**
     * @param {string} type Type.
     * @param {import("../events.js").Listener} listener Listener.
     */ Target1.prototype.removeEventListener = function(type, listener) {
        var listeners = this.listeners_ && this.listeners_[type];
        if (listeners) {
            var index = listeners.indexOf(listener);
            if (index !== -1) {
                if (this.pendingRemovals_ && type in this.pendingRemovals_) {
                    // make listener a no-op, and remove later in #dispatchEvent()
                    listeners[index] = _functionsJs.VOID;
                    ++this.pendingRemovals_[type];
                } else {
                    listeners.splice(index, 1);
                    if (listeners.length === 0) delete this.listeners_[type];
                }
            }
        }
    };
    return Target1;
}(_disposableJsDefault.default);
exports.default = Target;

},{"../Disposable.js":"c0oTM","./Event.js":"hwXQP","../functions.js":"iqv8I","../obj.js":"3ssAG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c0oTM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @module ol/Disposable
 */ /**
 * @classdesc
 * Objects that need to clean up after themselves.
 */ var Disposable = /** @class */ function() {
    function Disposable1() {
        /**
         * The object has already been disposed.
         * @type {boolean}
         * @protected
         */ this.disposed = false;
    }
    /**
     * Clean up.
     */ Disposable1.prototype.dispose = function() {
        if (!this.disposed) {
            this.disposed = true;
            this.disposeInternal();
        }
    };
    /**
     * Extension point for disposable objects.
     * @protected
     */ Disposable1.prototype.disposeInternal = function() {};
    return Disposable1;
}();
exports.default = Disposable;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iqv8I":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Always returns true.
 * @return {boolean} true.
 */ parcelHelpers.export(exports, "TRUE", ()=>TRUE
);
/**
 * Always returns false.
 * @return {boolean} false.
 */ parcelHelpers.export(exports, "FALSE", ()=>FALSE
);
/**
 * A reusable function, used e.g. as a default for callbacks.
 *
 * @return {void} Nothing.
 */ parcelHelpers.export(exports, "VOID", ()=>VOID
);
/**
 * Wrap a function in another function that remembers the last return.  If the
 * returned function is called twice in a row with the same arguments and the same
 * this object, it will return the value from the first call in the second call.
 *
 * @param {function(...any): ReturnType} fn The function to memoize.
 * @return {function(...any): ReturnType} The memoized function.
 * @template ReturnType
 */ parcelHelpers.export(exports, "memoizeOne", ()=>memoizeOne
);
/**
 * @template T
 * @param {function(): (T | Promise<T>)} getter A function that returns a value or a promise for a value.
 * @return {Promise<T>} A promise for the value.
 */ parcelHelpers.export(exports, "toPromise", ()=>toPromise
);
/**
 * @module ol/functions
 */ var _arrayJs = require("./array.js");
function TRUE() {
    return true;
}
function FALSE() {
    return false;
}
function VOID() {}
function memoizeOne(fn) {
    var called = false;
    /** @type {ReturnType} */ var lastResult;
    /** @type {Array<any>} */ var lastArgs;
    var lastThis;
    return function() {
        var nextArgs = Array.prototype.slice.call(arguments);
        if (!called || this !== lastThis || !_arrayJs.equals(nextArgs, lastArgs)) {
            called = true;
            lastThis = this;
            lastArgs = nextArgs;
            lastResult = fn.apply(this, arguments);
        }
        return lastResult;
    };
}
function toPromise(getter) {
    function promiseGetter() {
        var value;
        try {
            value = getter();
        } catch (err) {
            return Promise.reject(err);
        }
        if (value instanceof Promise) return value;
        return Promise.resolve(value);
    }
    return promiseGetter();
}

},{"./array.js":"1Fbic","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Fbic":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @module ol/array
 */ /**
 * Performs a binary search on the provided sorted list and returns the index of the item if found. If it can't be found it'll return -1.
 * https://github.com/darkskyapp/binary-search
 *
 * @param {Array<*>} haystack Items to search through.
 * @param {*} needle The item to look for.
 * @param {Function} [opt_comparator] Comparator function.
 * @return {number} The index of the item if found, -1 if not.
 */ parcelHelpers.export(exports, "binarySearch", ()=>binarySearch
);
/**
 * Compare function for array sort that is safe for numbers.
 * @param {*} a The first object to be compared.
 * @param {*} b The second object to be compared.
 * @return {number} A negative number, zero, or a positive number as the first
 *     argument is less than, equal to, or greater than the second.
 */ parcelHelpers.export(exports, "numberSafeCompareFunction", ()=>numberSafeCompareFunction
);
/**
 * Whether the array contains the given object.
 * @param {Array<*>} arr The array to test for the presence of the element.
 * @param {*} obj The object for which to test.
 * @return {boolean} The object is in the array.
 */ parcelHelpers.export(exports, "includes", ()=>includes
);
/**
 * {@link module:ol/tilegrid/TileGrid~TileGrid#getZForResolution} can use a function
 * of this type to determine which nearest resolution to use.
 *
 * This function takes a `{number}` representing a value between two array entries,
 * a `{number}` representing the value of the nearest higher entry and
 * a `{number}` representing the value of the nearest lower entry
 * as arguments and returns a `{number}`. If a negative number or zero is returned
 * the lower value will be used, if a positive number is returned the higher value
 * will be used.
 * @typedef {function(number, number, number): number} NearestDirectionFunction
 * @api
 */ /**
 * @param {Array<number>} arr Array in descending order.
 * @param {number} target Target.
 * @param {number|NearestDirectionFunction} direction
 *    0 means return the nearest,
 *    > 0 means return the largest nearest,
 *    < 0 means return the smallest nearest.
 * @return {number} Index.
 */ parcelHelpers.export(exports, "linearFindNearest", ()=>linearFindNearest
);
/**
 * @param {Array<*>} arr Array.
 * @param {number} begin Begin index.
 * @param {number} end End index.
 */ parcelHelpers.export(exports, "reverseSubArray", ()=>reverseSubArray
);
/**
 * @param {Array<VALUE>} arr The array to modify.
 * @param {!Array<VALUE>|VALUE} data The elements or arrays of elements to add to arr.
 * @template VALUE
 */ parcelHelpers.export(exports, "extend", ()=>extend
);
/**
 * @param {Array<VALUE>} arr The array to modify.
 * @param {VALUE} obj The element to remove.
 * @template VALUE
 * @return {boolean} If the element was removed.
 */ parcelHelpers.export(exports, "remove", ()=>remove
);
/**
 * @param {Array<VALUE>} arr The array to search in.
 * @param {function(VALUE, number, ?) : boolean} func The function to compare.
 * @template VALUE
 * @return {VALUE|null} The element found or null.
 */ parcelHelpers.export(exports, "find", ()=>find
);
/**
 * @param {Array|Uint8ClampedArray} arr1 The first array to compare.
 * @param {Array|Uint8ClampedArray} arr2 The second array to compare.
 * @return {boolean} Whether the two arrays are equal.
 */ parcelHelpers.export(exports, "equals", ()=>equals
);
/**
 * Sort the passed array such that the relative order of equal elements is preserved.
 * See https://en.wikipedia.org/wiki/Sorting_algorithm#Stability for details.
 * @param {Array<*>} arr The array to sort (modifies original).
 * @param {!function(*, *): number} compareFnc Comparison function.
 * @api
 */ parcelHelpers.export(exports, "stableSort", ()=>stableSort
);
/**
 * @param {Array<*>} arr The array to search in.
 * @param {Function} func Comparison function.
 * @return {number} Return index.
 */ parcelHelpers.export(exports, "findIndex", ()=>findIndex
);
/**
 * @param {Array<*>} arr The array to test.
 * @param {Function} [opt_func] Comparison function.
 * @param {boolean} [opt_strict] Strictly sorted (default false).
 * @return {boolean} Return index.
 */ parcelHelpers.export(exports, "isSorted", ()=>isSorted
);
function binarySearch(haystack, needle, opt_comparator) {
    var mid, cmp;
    var comparator = opt_comparator || numberSafeCompareFunction;
    var low = 0;
    var high = haystack.length;
    var found = false;
    while(low < high){
        /* Note that "(low + high) >>> 1" may overflow, and results in a typecast
         * to double (which gives the wrong results). */ mid = low + (high - low >> 1);
        cmp = +comparator(haystack[mid], needle);
        if (cmp < 0) /* Too low. */ low = mid + 1;
        else {
            /* Key found or too high */ high = mid;
            found = !cmp;
        }
    }
    /* Key not found. */ return found ? low : ~low;
}
function numberSafeCompareFunction(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
}
function includes(arr, obj) {
    return arr.indexOf(obj) >= 0;
}
function linearFindNearest(arr, target, direction) {
    var n = arr.length;
    if (arr[0] <= target) return 0;
    else if (target <= arr[n - 1]) return n - 1;
    else {
        var i = void 0;
        if (direction > 0) for(i = 1; i < n; ++i){
            if (arr[i] < target) return i - 1;
        }
        else if (direction < 0) for(i = 1; i < n; ++i){
            if (arr[i] <= target) return i;
        }
        else for(i = 1; i < n; ++i){
            if (arr[i] == target) return i;
            else if (arr[i] < target) {
                if (typeof direction === 'function') {
                    if (direction(target, arr[i - 1], arr[i]) > 0) return i - 1;
                    else return i;
                } else if (arr[i - 1] - target < target - arr[i]) return i - 1;
                else return i;
            }
        }
        return n - 1;
    }
}
function reverseSubArray(arr, begin, end) {
    while(begin < end){
        var tmp = arr[begin];
        arr[begin] = arr[end];
        arr[end] = tmp;
        ++begin;
        --end;
    }
}
function extend(arr, data) {
    var extension = Array.isArray(data) ? data : [
        data
    ];
    var length = extension.length;
    for(var i = 0; i < length; i++)arr[arr.length] = extension[i];
}
function remove(arr, obj) {
    var i = arr.indexOf(obj);
    var found = i > -1;
    if (found) arr.splice(i, 1);
    return found;
}
function find(arr, func) {
    var length = arr.length >>> 0;
    var value;
    for(var i = 0; i < length; i++){
        value = arr[i];
        if (func(value, i, arr)) return value;
    }
    return null;
}
function equals(arr1, arr2) {
    var len1 = arr1.length;
    if (len1 !== arr2.length) return false;
    for(var i = 0; i < len1; i++){
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}
function stableSort(arr, compareFnc) {
    var length = arr.length;
    var tmp = Array(arr.length);
    var i;
    for(i = 0; i < length; i++)tmp[i] = {
        index: i,
        value: arr[i]
    };
    tmp.sort(function(a, b) {
        return compareFnc(a.value, b.value) || a.index - b.index;
    });
    for(i = 0; i < arr.length; i++)arr[i] = tmp[i].value;
}
function findIndex(arr, func) {
    var index;
    var found = !arr.every(function(el, idx) {
        index = idx;
        return !func(el, idx, arr);
    });
    return found ? index : -1;
}
function isSorted(arr, opt_func, opt_strict) {
    var compare = opt_func || numberSafeCompareFunction;
    return arr.every(function(currentVal, index) {
        if (index === 0) return true;
        var res = compare(arr[index - 1], currentVal);
        return !(res > 0 || opt_strict && res === 0);
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3ssAG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "assign", ()=>assign
);
/**
 * Removes all properties from an object.
 * @param {Object} object The object to clear.
 */ parcelHelpers.export(exports, "clear", ()=>clear
);
parcelHelpers.export(exports, "getValues", ()=>getValues
);
/**
 * Determine if an object has any properties.
 * @param {Object} object The object to check.
 * @return {boolean} The object is empty.
 */ parcelHelpers.export(exports, "isEmpty", ()=>isEmpty
);
var assign = typeof Object.assign === 'function' ? Object.assign : function(target, var_sources) {
    if (target === undefined || target === null) throw new TypeError('Cannot convert undefined or null to object');
    var output = Object(target);
    for(var i = 1, ii = arguments.length; i < ii; ++i){
        var source = arguments[i];
        if (source !== undefined && source !== null) {
            for(var key in source)if (source.hasOwnProperty(key)) output[key] = source[key];
        }
    }
    return output;
};
function clear(object) {
    for(var property in object)delete object[property];
}
var getValues = typeof Object.values === 'function' ? Object.values : function(object) {
    var values = [];
    for(var property in object)values.push(object[property]);
    return values;
};
function isEmpty(object) {
    var property;
    for(property in object)return false;
    return !property;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hrQJ6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @module ol/events/EventType
 */ /**
 * @enum {string}
 * @const
 */ exports.default = {
    /**
     * Generic change event. Triggered when the revision counter is increased.
     * @event module:ol/events/Event~BaseEvent#change
     * @api
     */ CHANGE: 'change',
    /**
     * Generic error event. Triggered when an error occurs.
     * @event module:ol/events/Event~BaseEvent#error
     * @api
     */ ERROR: 'error',
    BLUR: 'blur',
    CLEAR: 'clear',
    CONTEXTMENU: 'contextmenu',
    CLICK: 'click',
    DBLCLICK: 'dblclick',
    DRAGENTER: 'dragenter',
    DRAGOVER: 'dragover',
    DROP: 'drop',
    FOCUS: 'focus',
    KEYDOWN: 'keydown',
    KEYPRESS: 'keypress',
    LOAD: 'load',
    RESIZE: 'resize',
    TOUCHMOVE: 'touchmove',
    WHEEL: 'wheel'
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dcspA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Key to use with {@link module:ol/Observable.unByKey}.
 * @typedef {Object} EventsKey
 * @property {ListenerFunction} listener Listener.
 * @property {import("./events/Target.js").EventTargetLike} target Target.
 * @property {string} type Type.
 * @api
 */ /**
 * Listener function. This function is called with an event object as argument.
 * When the function returns `false`, event propagation will stop.
 *
 * @typedef {function((Event|import("./events/Event.js").default)): (void|boolean)} ListenerFunction
 * @api
 */ /**
 * @typedef {Object} ListenerObject
 * @property {ListenerFunction} handleEvent HandleEvent listener function.
 */ /**
 * @typedef {ListenerFunction|ListenerObject} Listener
 */ /**
 * Registers an event listener on an event target. Inspired by
 * https://google.github.io/closure-library/api/source/closure/goog/events/events.js.src.html
 *
 * This function efficiently binds a `listener` to a `this` object, and returns
 * a key for use with {@link module:ol/events.unlistenByKey}.
 *
 * @param {import("./events/Target.js").EventTargetLike} target Event target.
 * @param {string} type Event type.
 * @param {ListenerFunction} listener Listener.
 * @param {Object} [opt_this] Object referenced by the `this` keyword in the
 *     listener. Default is the `target`.
 * @param {boolean} [opt_once] If true, add the listener as one-off listener.
 * @return {EventsKey} Unique key for the listener.
 */ parcelHelpers.export(exports, "listen", ()=>listen
);
/**
 * Registers a one-off event listener on an event target. Inspired by
 * https://google.github.io/closure-library/api/source/closure/goog/events/events.js.src.html
 *
 * This function efficiently binds a `listener` as self-unregistering listener
 * to a `this` object, and returns a key for use with
 * {@link module:ol/events.unlistenByKey} in case the listener needs to be
 * unregistered before it is called.
 *
 * When {@link module:ol/events.listen} is called with the same arguments after this
 * function, the self-unregistering listener will be turned into a permanent
 * listener.
 *
 * @param {import("./events/Target.js").EventTargetLike} target Event target.
 * @param {string} type Event type.
 * @param {ListenerFunction} listener Listener.
 * @param {Object} [opt_this] Object referenced by the `this` keyword in the
 *     listener. Default is the `target`.
 * @return {EventsKey} Key for unlistenByKey.
 */ parcelHelpers.export(exports, "listenOnce", ()=>listenOnce
);
/**
 * Unregisters event listeners on an event target. Inspired by
 * https://google.github.io/closure-library/api/source/closure/goog/events/events.js.src.html
 *
 * The argument passed to this function is the key returned from
 * {@link module:ol/events.listen} or {@link module:ol/events.listenOnce}.
 *
 * @param {EventsKey} key The key.
 */ parcelHelpers.export(exports, "unlistenByKey", ()=>unlistenByKey
);
/**
 * @module ol/events
 */ var _objJs = require("./obj.js");
function listen(target, type, listener, opt_this, opt_once) {
    if (opt_this && opt_this !== target) listener = listener.bind(opt_this);
    if (opt_once) {
        var originalListener_1 = listener;
        listener = function() {
            target.removeEventListener(type, listener);
            originalListener_1.apply(this, arguments);
        };
    }
    var eventsKey = {
        target: target,
        type: type,
        listener: listener
    };
    target.addEventListener(type, listener);
    return eventsKey;
}
function listenOnce(target, type, listener, opt_this) {
    return listen(target, type, listener, opt_this, true);
}
function unlistenByKey(key) {
    if (key && key.target) {
        key.target.removeEventListener(key.type, key.listener);
        _objJs.clear(key);
    }
}

},{"./obj.js":"3ssAG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"pLBjQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @module ol/util
 */ /**
 * @return {?} Any return.
 */ parcelHelpers.export(exports, "abstract", ()=>abstract
);
/**
 * Gets a unique ID for an object. This mutates the object so that further calls
 * with the same object as a parameter returns the same value. Unique IDs are generated
 * as a strictly increasing sequence. Adapted from goog.getUid.
 *
 * @param {Object} obj The object to get the unique ID for.
 * @return {string} The unique ID for the object.
 * @api
 */ parcelHelpers.export(exports, "getUid", ()=>getUid
);
parcelHelpers.export(exports, "VERSION", ()=>VERSION
);
function abstract() {
    return /** @type {?} */ function() {
        throw new Error('Unimplemented abstract method.');
    }();
}
/**
 * Counter for getUid.
 * @type {number}
 * @private
 */ var uidCounter_ = 0;
function getUid(obj) {
    return obj.ol_uid || (obj.ol_uid = String(++uidCounter_));
}
var VERSION = '6.14.1';

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1cFF9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @module ol/MapEventType
 */ /**
 * @enum {string}
 */ exports.default = {
    /**
     * Triggered after a map frame is rendered.
     * @event module:ol/MapEvent~MapEvent#postrender
     * @api
     */ POSTRENDER: 'postrender',
    /**
     * Triggered when the map starts moving.
     * @event module:ol/MapEvent~MapEvent#movestart
     * @api
     */ MOVESTART: 'movestart',
    /**
     * Triggered after the map is moved.
     * @event module:ol/MapEvent~MapEvent#moveend
     * @api
     */ MOVEEND: 'moveend',
    /**
     * Triggered when loading of additional map data (tiles, images, features) starts.
     * @event module:ol/render/Event~RenderEvent#loadstart
     * @api
     */ LOADSTART: 'loadstart',
    /**
     * Triggered when loading of additional map data has completed.
     * @event module:ol/render/Event~RenderEvent#loadend
     * @api
     */ LOADEND: 'loadend'
}; /***
 * @typedef {'postrender'|'movestart'|'moveend'|'loadstart'|'loadend'} Types
 */ 

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"84QzQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @module ol/dom
 */ //FIXME Move this function to the canvas module
/**
 * Create an html canvas element and returns its 2d context.
 * @param {number} [opt_width] Canvas width.
 * @param {number} [opt_height] Canvas height.
 * @param {Array<HTMLCanvasElement>} [opt_canvasPool] Canvas pool to take existing canvas from.
 * @param {CanvasRenderingContext2DSettings} [opt_Context2DSettings] CanvasRenderingContext2DSettings
 * @return {CanvasRenderingContext2D} The context.
 */ parcelHelpers.export(exports, "createCanvasContext2D", ()=>createCanvasContext2D
);
/**
 * Get the current computed width for the given element including margin,
 * padding and border.
 * Equivalent to jQuery's `$(el).outerWidth(true)`.
 * @param {!HTMLElement} element Element.
 * @return {number} The width.
 */ parcelHelpers.export(exports, "outerWidth", ()=>outerWidth
);
/**
 * Get the current computed height for the given element including margin,
 * padding and border.
 * Equivalent to jQuery's `$(el).outerHeight(true)`.
 * @param {!HTMLElement} element Element.
 * @return {number} The height.
 */ parcelHelpers.export(exports, "outerHeight", ()=>outerHeight
);
/**
 * @param {Node} newNode Node to replace old node
 * @param {Node} oldNode The node to be replaced
 */ parcelHelpers.export(exports, "replaceNode", ()=>replaceNode
);
/**
 * @param {Node} node The node to remove.
 * @return {Node|null} The node that was removed or null.
 */ parcelHelpers.export(exports, "removeNode", ()=>removeNode
);
/**
 * @param {Node} node The node to remove the children from.
 */ parcelHelpers.export(exports, "removeChildren", ()=>removeChildren
);
/**
 * Transform the children of a parent node so they match the
 * provided list of children.  This function aims to efficiently
 * remove, add, and reorder child nodes while maintaining a simple
 * implementation (it is not guaranteed to minimize DOM operations).
 * @param {Node} node The parent node whose children need reworking.
 * @param {Array<Node>} children The desired children.
 */ parcelHelpers.export(exports, "replaceChildren", ()=>replaceChildren
);
var _hasJs = require("./has.js");
function createCanvasContext2D(opt_width, opt_height, opt_canvasPool, opt_Context2DSettings) {
    /** @type {HTMLCanvasElement|OffscreenCanvas} */ var canvas;
    if (opt_canvasPool && opt_canvasPool.length) canvas = opt_canvasPool.shift();
    else if (_hasJs.WORKER_OFFSCREEN_CANVAS) canvas = new OffscreenCanvas(opt_width || 300, opt_height || 300);
    else canvas = document.createElement('canvas');
    if (opt_width) canvas.width = opt_width;
    if (opt_height) canvas.height = opt_height;
    //FIXME Allow OffscreenCanvasRenderingContext2D as return type
    return /** @type {CanvasRenderingContext2D} */ canvas.getContext('2d', opt_Context2DSettings);
}
function outerWidth(element) {
    var width = element.offsetWidth;
    var style = getComputedStyle(element);
    width += parseInt(style.marginLeft, 10) + parseInt(style.marginRight, 10);
    return width;
}
function outerHeight(element) {
    var height = element.offsetHeight;
    var style = getComputedStyle(element);
    height += parseInt(style.marginTop, 10) + parseInt(style.marginBottom, 10);
    return height;
}
function replaceNode(newNode, oldNode) {
    var parent = oldNode.parentNode;
    if (parent) parent.replaceChild(newNode, oldNode);
}
function removeNode(node) {
    return node && node.parentNode ? node.parentNode.removeChild(node) : null;
}
function removeChildren(node) {
    while(node.lastChild)node.removeChild(node.lastChild);
}
function replaceChildren(node, children) {
    var oldChildren = node.childNodes;
    for(var i = 0;; ++i){
        var oldChild = oldChildren[i];
        var newChild = children[i];
        // check if our work is done
        if (!oldChild && !newChild) break;
        // check if children match
        if (oldChild === newChild) continue;
        // check if a new child needs to be added
        if (!oldChild) {
            node.appendChild(newChild);
            continue;
        }
        // check if an old child needs to be removed
        if (!newChild) {
            node.removeChild(oldChild);
            --i;
            continue;
        }
        // reorder
        node.insertBefore(newChild, oldChild);
    }
}

},{"./has.js":"6BDNi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6BDNi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FIREFOX", ()=>FIREFOX
);
parcelHelpers.export(exports, "SAFARI", ()=>SAFARI
);
parcelHelpers.export(exports, "SAFARI_BUG_237906", ()=>SAFARI_BUG_237906
);
parcelHelpers.export(exports, "WEBKIT", ()=>WEBKIT
);
parcelHelpers.export(exports, "MAC", ()=>MAC
);
parcelHelpers.export(exports, "DEVICE_PIXEL_RATIO", ()=>DEVICE_PIXEL_RATIO
);
parcelHelpers.export(exports, "WORKER_OFFSCREEN_CANVAS", ()=>WORKER_OFFSCREEN_CANVAS
);
parcelHelpers.export(exports, "IMAGE_DECODE", ()=>IMAGE_DECODE
);
parcelHelpers.export(exports, "PASSIVE_EVENT_LISTENERS", ()=>PASSIVE_EVENT_LISTENERS
);
/**
 * @module ol/has
 */ var ua = typeof navigator !== 'undefined' && typeof navigator.userAgent !== 'undefined' ? navigator.userAgent.toLowerCase() : '';
var FIREFOX = ua.indexOf('firefox') !== -1;
var SAFARI = ua.indexOf('safari') !== -1 && ua.indexOf('chrom') == -1;
var SAFARI_BUG_237906 = SAFARI && !!(ua.indexOf('version/15.4') >= 0 || ua.match(/cpu (os|iphone os) 15_4 like mac os x/));
var WEBKIT = ua.indexOf('webkit') !== -1 && ua.indexOf('edge') == -1;
var MAC = ua.indexOf('macintosh') !== -1;
var DEVICE_PIXEL_RATIO = typeof devicePixelRatio !== 'undefined' ? devicePixelRatio : 1;
var WORKER_OFFSCREEN_CANVAS = typeof WorkerGlobalScope !== 'undefined' && typeof OffscreenCanvas !== 'undefined' && self instanceof WorkerGlobalScope; //eslint-disable-line
var IMAGE_DECODE = typeof Image !== 'undefined' && Image.prototype.decode;
var PASSIVE_EVENT_LISTENERS = function() {
    var passive = false;
    try {
        var options = Object.defineProperty({}, 'passive', {
            get: function() {
                passive = true;
            }
        });
        window.addEventListener('_', null, options);
        window.removeEventListener('_', null, options);
    } catch (error) {
    // passive not supported
    }
    return passive;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h4ZNC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GroupEvent", ()=>GroupEvent
);
/**
 * @module ol/layer/Group
 */ var _baseJs = require("./Base.js");
var _baseJsDefault = parcelHelpers.interopDefault(_baseJs);
var _collectionJs = require("../Collection.js");
var _collectionJsDefault = parcelHelpers.interopDefault(_collectionJs);
var _collectionEventTypeJs = require("../CollectionEventType.js");
var _collectionEventTypeJsDefault = parcelHelpers.interopDefault(_collectionEventTypeJs);
var _eventJs = require("../events/Event.js");
var _eventJsDefault = parcelHelpers.interopDefault(_eventJs);
var _eventTypeJs = require("../events/EventType.js");
var _eventTypeJsDefault = parcelHelpers.interopDefault(_eventTypeJs);
var _objectEventTypeJs = require("../ObjectEventType.js");
var _objectEventTypeJsDefault = parcelHelpers.interopDefault(_objectEventTypeJs);
var _stateJs = require("../source/State.js");
var _stateJsDefault = parcelHelpers.interopDefault(_stateJs);
var _assertsJs = require("../asserts.js");
var _objJs = require("../obj.js");
var _extentJs = require("../extent.js");
var _utilJs = require("../util.js");
var _eventsJs = require("../events.js");
var __extends = undefined && undefined.__extends || function() {
    var extendStatics = function(d1, b1) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d1, b1);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
/**
 * @typedef {'addlayer'|'removelayer'} EventType
 */ /**
 * @classdesc
 * A layer group triggers 'addlayer' and 'removelayer' events when layers are added to or removed from
 * the group or one of its child groups.  When a layer group is added to or removed from another layer group,
 * a single event will be triggered (instead of one per layer in the group added or removed).
 */ var GroupEvent = /** @class */ function(_super) {
    __extends(GroupEvent1, _super);
    /**
     * @param {EventType} type The event type.
     * @param {BaseLayer} layer The layer.
     */ function GroupEvent1(type, layer) {
        var _this = _super.call(this, type) || this;
        /**
         * The added or removed layer.
         * @type {BaseLayer}
         * @api
         */ _this.layer = layer;
        return _this;
    }
    return GroupEvent1;
}(_eventJsDefault.default);
/***
 * @template Return
 * @typedef {import("../Observable").OnSignature<import("../Observable").EventTypes, import("../events/Event.js").default, Return> &
 *   import("../Observable").OnSignature<import("./Base").BaseLayerObjectEventTypes|
 *     'change:layers', import("../Object").ObjectEvent, Return> &
 *   import("../Observable").CombinedOnSignature<import("../Observable").EventTypes|import("./Base").BaseLayerObjectEventTypes|'change:layers', Return>} GroupOnSignature
 */ /**
 * @typedef {Object} Options
 * @property {number} [opacity=1] Opacity (0, 1).
 * @property {boolean} [visible=true] Visibility.
 * @property {import("../extent.js").Extent} [extent] The bounding extent for layer rendering.  The layer will not be
 * rendered outside of this extent.
 * @property {number} [zIndex] The z-index for layer rendering.  At rendering time, the layers
 * will be ordered, first by Z-index and then by position. When `undefined`, a `zIndex` of 0 is assumed
 * for layers that are added to the map's `layers` collection, or `Infinity` when the layer's `setMap()`
 * method was used.
 * @property {number} [minResolution] The minimum resolution (inclusive) at which this layer will be
 * visible.
 * @property {number} [maxResolution] The maximum resolution (exclusive) below which this layer will
 * be visible.
 * @property {number} [minZoom] The minimum view zoom level (exclusive) above which this layer will be
 * visible.
 * @property {number} [maxZoom] The maximum view zoom level (inclusive) at which this layer will
 * be visible.
 * @property {Array<import("./Base.js").default>|import("../Collection.js").default<import("./Base.js").default>} [layers] Child layers.
 * @property {Object<string, *>} [properties] Arbitrary observable properties. Can be accessed with `#get()` and `#set()`.
 */ /**
 * @enum {string}
 * @private
 */ var Property = {
    LAYERS: 'layers'
};
/**
 * @classdesc
 * A {@link module:ol/Collection~Collection} of layers that are handled together.
 *
 * A generic `change` event is triggered when the group/Collection changes.
 *
 * @api
 */ var LayerGroup = /** @class */ function(_super) {
    __extends(LayerGroup1, _super);
    /**
     * @param {Options} [opt_options] Layer options.
     */ function LayerGroup1(opt_options) {
        var _this = this;
        var options = opt_options || {};
        var baseOptions = /** @type {Options} */ _objJs.assign({}, options);
        delete baseOptions.layers;
        var layers = options.layers;
        _this = _super.call(this, baseOptions) || this;
        /***
         * @type {GroupOnSignature<import("../events").EventsKey>}
         */ _this.on;
        /***
         * @type {GroupOnSignature<import("../events").EventsKey>}
         */ _this.once;
        /***
         * @type {GroupOnSignature<void>}
         */ _this.un;
        /**
         * @private
         * @type {Array<import("../events.js").EventsKey>}
         */ _this.layersListenerKeys_ = [];
        /**
         * @private
         * @type {Object<string, Array<import("../events.js").EventsKey>>}
         */ _this.listenerKeys_ = {};
        _this.addChangeListener(Property.LAYERS, _this.handleLayersChanged_);
        if (layers) {
            if (Array.isArray(layers)) layers = new _collectionJsDefault.default(layers.slice(), {
                unique: true
            });
            else _assertsJs.assert(typeof /** @type {?} */ layers.getArray === 'function', 43); // Expected `layers` to be an array or a `Collection`
        } else layers = new _collectionJsDefault.default(undefined, {
            unique: true
        });
        _this.setLayers(layers);
        return _this;
    }
    /**
     * @private
     */ LayerGroup1.prototype.handleLayerChange_ = function() {
        this.changed();
    };
    /**
     * @private
     */ LayerGroup1.prototype.handleLayersChanged_ = function() {
        this.layersListenerKeys_.forEach(_eventsJs.unlistenByKey);
        this.layersListenerKeys_.length = 0;
        var layers = this.getLayers();
        this.layersListenerKeys_.push(_eventsJs.listen(layers, _collectionEventTypeJsDefault.default.ADD, this.handleLayersAdd_, this), _eventsJs.listen(layers, _collectionEventTypeJsDefault.default.REMOVE, this.handleLayersRemove_, this));
        for(var id in this.listenerKeys_)this.listenerKeys_[id].forEach(_eventsJs.unlistenByKey);
        _objJs.clear(this.listenerKeys_);
        var layersArray = layers.getArray();
        for(var i = 0, ii = layersArray.length; i < ii; i++){
            var layer = layersArray[i];
            this.registerLayerListeners_(layer);
            this.dispatchEvent(new GroupEvent('addlayer', layer));
        }
        this.changed();
    };
    /**
     * @param {BaseLayer} layer The layer.
     */ LayerGroup1.prototype.registerLayerListeners_ = function(layer) {
        var listenerKeys = [
            _eventsJs.listen(layer, _objectEventTypeJsDefault.default.PROPERTYCHANGE, this.handleLayerChange_, this),
            _eventsJs.listen(layer, _eventTypeJsDefault.default.CHANGE, this.handleLayerChange_, this), 
        ];
        if (layer instanceof LayerGroup1) listenerKeys.push(_eventsJs.listen(layer, 'addlayer', this.handleLayerGroupAdd_, this), _eventsJs.listen(layer, 'removelayer', this.handleLayerGroupRemove_, this));
        this.listenerKeys_[_utilJs.getUid(layer)] = listenerKeys;
    };
    /**
     * @param {GroupEvent} event The layer group event.
     */ LayerGroup1.prototype.handleLayerGroupAdd_ = function(event) {
        this.dispatchEvent(new GroupEvent('addlayer', event.layer));
    };
    /**
     * @param {GroupEvent} event The layer group event.
     */ LayerGroup1.prototype.handleLayerGroupRemove_ = function(event) {
        this.dispatchEvent(new GroupEvent('removelayer', event.layer));
    };
    /**
     * @param {import("../Collection.js").CollectionEvent} collectionEvent CollectionEvent.
     * @private
     */ LayerGroup1.prototype.handleLayersAdd_ = function(collectionEvent) {
        var layer = collectionEvent.element;
        this.registerLayerListeners_(layer);
        this.dispatchEvent(new GroupEvent('addlayer', layer));
        this.changed();
    };
    /**
     * @param {import("../Collection.js").CollectionEvent} collectionEvent CollectionEvent.
     * @private
     */ LayerGroup1.prototype.handleLayersRemove_ = function(collectionEvent) {
        var layer = collectionEvent.element;
        var key = _utilJs.getUid(layer);
        this.listenerKeys_[key].forEach(_eventsJs.unlistenByKey);
        delete this.listenerKeys_[key];
        this.dispatchEvent(new GroupEvent('removelayer', layer));
        this.changed();
    };
    /**
     * Returns the {@link module:ol/Collection~Collection collection} of {@link module:ol/layer/Layer~Layer layers}
     * in this group.
     * @return {!import("../Collection.js").default<import("./Base.js").default>} Collection of
     *   {@link module:ol/layer/Base~BaseLayer layers} that are part of this group.
     * @observable
     * @api
     */ LayerGroup1.prototype.getLayers = function() {
        return /** @type {!import("../Collection.js").default<import("./Base.js").default>} */ this.get(Property.LAYERS);
    };
    /**
     * Set the {@link module:ol/Collection~Collection collection} of {@link module:ol/layer/Layer~Layer layers}
     * in this group.
     * @param {!import("../Collection.js").default<import("./Base.js").default>} layers Collection of
     *   {@link module:ol/layer/Base~BaseLayer layers} that are part of this group.
     * @observable
     * @api
     */ LayerGroup1.prototype.setLayers = function(layers) {
        var collection = this.getLayers();
        if (collection) {
            var currentLayers = collection.getArray();
            for(var i = 0, ii = currentLayers.length; i < ii; ++i)this.dispatchEvent(new GroupEvent('removelayer', currentLayers[i]));
        }
        this.set(Property.LAYERS, layers);
    };
    /**
     * @param {Array<import("./Layer.js").default>} [opt_array] Array of layers (to be modified in place).
     * @return {Array<import("./Layer.js").default>} Array of layers.
     */ LayerGroup1.prototype.getLayersArray = function(opt_array) {
        var array = opt_array !== undefined ? opt_array : [];
        this.getLayers().forEach(function(layer) {
            layer.getLayersArray(array);
        });
        return array;
    };
    /**
     * Get the layer states list and use this groups z-index as the default
     * for all layers in this and nested groups, if it is unset at this point.
     * If opt_states is not provided and this group's z-index is undefined
     * 0 is used a the default z-index.
     * @param {Array<import("./Layer.js").State>} [opt_states] Optional list
     * of layer states (to be modified in place).
     * @return {Array<import("./Layer.js").State>} List of layer states.
     */ LayerGroup1.prototype.getLayerStatesArray = function(opt_states) {
        var states = opt_states !== undefined ? opt_states : [];
        var pos = states.length;
        this.getLayers().forEach(function(layer) {
            layer.getLayerStatesArray(states);
        });
        var ownLayerState = this.getLayerState();
        var defaultZIndex = ownLayerState.zIndex;
        if (!opt_states && ownLayerState.zIndex === undefined) defaultZIndex = 0;
        for(var i = pos, ii = states.length; i < ii; i++){
            var layerState = states[i];
            layerState.opacity *= ownLayerState.opacity;
            layerState.visible = layerState.visible && ownLayerState.visible;
            layerState.maxResolution = Math.min(layerState.maxResolution, ownLayerState.maxResolution);
            layerState.minResolution = Math.max(layerState.minResolution, ownLayerState.minResolution);
            layerState.minZoom = Math.max(layerState.minZoom, ownLayerState.minZoom);
            layerState.maxZoom = Math.min(layerState.maxZoom, ownLayerState.maxZoom);
            if (ownLayerState.extent !== undefined) {
                if (layerState.extent !== undefined) layerState.extent = _extentJs.getIntersection(layerState.extent, ownLayerState.extent);
                else layerState.extent = ownLayerState.extent;
            }
            if (layerState.zIndex === undefined) layerState.zIndex = defaultZIndex;
        }
        return states;
    };
    /**
     * @return {import("../source/State.js").default} Source state.
     */ LayerGroup1.prototype.getSourceState = function() {
        return _stateJsDefault.default.READY;
    };
    return LayerGroup1;
}(_baseJsDefault.default);
exports.default = LayerGroup;

},{"./Base.js":"ag0tc","../Collection.js":"gReoh","../CollectionEventType.js":"82Ksf","../events/Event.js":"hwXQP","../events/EventType.js":"hrQJ6","../ObjectEventType.js":"f2U6i","../source/State.js":"gW573","../asserts.js":"e4TiF","../obj.js":"3ssAG","../extent.js":"6YrVc","../util.js":"pLBjQ","../events.js":"dcspA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ag0tc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @module ol/layer/Base
 */ var _objectJs = require("../Object.js");
var _objectJsDefault = parcelHelpers.interopDefault(_objectJs);
var _propertyJs = require("./Property.js");
var _propertyJsDefault = parcelHelpers.interopDefault(_propertyJs);
var _utilJs = require("../util.js");
var _assertsJs = require("../asserts.js");
var _objJs = require("../obj.js");
var _mathJs = require("../math.js");
var __extends = undefined && undefined.__extends || function() {
    var extendStatics = function(d1, b1) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d1, b1);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
/**
 * A css color, or a function called with a view resolution returning a css color.
 *
 * @typedef {string|function(number):string} BackgroundColor
 * @api
 */ /**
 * @typedef {import("../ObjectEventType").Types|'change:extent'|'change:maxResolution'|'change:maxZoom'|
 *    'change:minResolution'|'change:minZoom'|'change:opacity'|'change:visible'|'change:zIndex'} BaseLayerObjectEventTypes
 */ /***
 * @template Return
 * @typedef {import("../Observable").OnSignature<import("../Observable").EventTypes, import("../events/Event.js").default, Return> &
 *   import("../Observable").OnSignature<BaseLayerObjectEventTypes, import("../Object").ObjectEvent, Return> &
 *   import("../Observable").CombinedOnSignature<import("../Observable").EventTypes|BaseLayerObjectEventTypes, Return>} BaseLayerOnSignature
 */ /**
 * @typedef {Object} Options
 * @property {string} [className='ol-layer'] A CSS class name to set to the layer element.
 * @property {number} [opacity=1] Opacity (0, 1).
 * @property {boolean} [visible=true] Visibility.
 * @property {import("../extent.js").Extent} [extent] The bounding extent for layer rendering.  The layer will not be
 * rendered outside of this extent.
 * @property {number} [zIndex] The z-index for layer rendering.  At rendering time, the layers
 * will be ordered, first by Z-index and then by position. When `undefined`, a `zIndex` of 0 is assumed
 * for layers that are added to the map's `layers` collection, or `Infinity` when the layer's `setMap()`
 * method was used.
 * @property {number} [minResolution] The minimum resolution (inclusive) at which this layer will be
 * visible.
 * @property {number} [maxResolution] The maximum resolution (exclusive) below which this layer will
 * be visible.
 * @property {number} [minZoom] The minimum view zoom level (exclusive) above which this layer will be
 * visible.
 * @property {number} [maxZoom] The maximum view zoom level (inclusive) at which this layer will
 * be visible.
 * @property {BackgroundColor} [background] Background color for the layer. If not specified, no background
 * will be rendered.
 * @property {Object<string, *>} [properties] Arbitrary observable properties. Can be accessed with `#get()` and `#set()`.
 */ /**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * Note that with {@link module:ol/layer/Base~BaseLayer} and all its subclasses, any property set in
 * the options is set as a {@link module:ol/Object~BaseObject} property on the layer object, so
 * is observable, and has get/set accessors.
 *
 * @api
 */ var BaseLayer = /** @class */ function(_super) {
    __extends(BaseLayer1, _super);
    /**
     * @param {Options} options Layer options.
     */ function BaseLayer1(options) {
        var _this = _super.call(this) || this;
        /***
         * @type {BaseLayerOnSignature<import("../events").EventsKey>}
         */ _this.on;
        /***
         * @type {BaseLayerOnSignature<import("../events").EventsKey>}
         */ _this.once;
        /***
         * @type {BaseLayerOnSignature<void>}
         */ _this.un;
        /**
         * @type {BackgroundColor|false}
         * @private
         */ _this.background_ = options.background;
        /**
         * @type {Object<string, *>}
         */ var properties = _objJs.assign({}, options);
        if (typeof options.properties === 'object') {
            delete properties.properties;
            _objJs.assign(properties, options.properties);
        }
        properties[_propertyJsDefault.default.OPACITY] = options.opacity !== undefined ? options.opacity : 1;
        _assertsJs.assert(typeof properties[_propertyJsDefault.default.OPACITY] === 'number', 64); // Layer opacity must be a number
        properties[_propertyJsDefault.default.VISIBLE] = options.visible !== undefined ? options.visible : true;
        properties[_propertyJsDefault.default.Z_INDEX] = options.zIndex;
        properties[_propertyJsDefault.default.MAX_RESOLUTION] = options.maxResolution !== undefined ? options.maxResolution : Infinity;
        properties[_propertyJsDefault.default.MIN_RESOLUTION] = options.minResolution !== undefined ? options.minResolution : 0;
        properties[_propertyJsDefault.default.MIN_ZOOM] = options.minZoom !== undefined ? options.minZoom : -Infinity;
        properties[_propertyJsDefault.default.MAX_ZOOM] = options.maxZoom !== undefined ? options.maxZoom : Infinity;
        /**
         * @type {string}
         * @private
         */ _this.className_ = properties.className !== undefined ? properties.className : 'ol-layer';
        delete properties.className;
        _this.setProperties(properties);
        /**
         * @type {import("./Layer.js").State}
         * @private
         */ _this.state_ = null;
        return _this;
    }
    /**
     * Get the background for this layer.
     * @return {BackgroundColor|false} Layer background.
     */ BaseLayer1.prototype.getBackground = function() {
        return this.background_;
    };
    /**
     * @return {string} CSS class name.
     */ BaseLayer1.prototype.getClassName = function() {
        return this.className_;
    };
    /**
     * This method is not meant to be called by layers or layer renderers because the state
     * is incorrect if the layer is included in a layer group.
     *
     * @param {boolean} [opt_managed] Layer is managed.
     * @return {import("./Layer.js").State} Layer state.
     */ BaseLayer1.prototype.getLayerState = function(opt_managed) {
        /** @type {import("./Layer.js").State} */ var state = this.state_ || {
            layer: this,
            managed: opt_managed === undefined ? true : opt_managed
        };
        var zIndex = this.getZIndex();
        state.opacity = _mathJs.clamp(Math.round(this.getOpacity() * 100) / 100, 0, 1);
        state.visible = this.getVisible();
        state.extent = this.getExtent();
        state.zIndex = zIndex === undefined && !state.managed ? Infinity : zIndex;
        state.maxResolution = this.getMaxResolution();
        state.minResolution = Math.max(this.getMinResolution(), 0);
        state.minZoom = this.getMinZoom();
        state.maxZoom = this.getMaxZoom();
        this.state_ = state;
        return state;
    };
    /**
     * @abstract
     * @param {Array<import("./Layer.js").default>} [opt_array] Array of layers (to be
     *     modified in place).
     * @return {Array<import("./Layer.js").default>} Array of layers.
     */ BaseLayer1.prototype.getLayersArray = function(opt_array) {
        return _utilJs.abstract();
    };
    /**
     * @abstract
     * @param {Array<import("./Layer.js").State>} [opt_states] Optional list of layer
     *     states (to be modified in place).
     * @return {Array<import("./Layer.js").State>} List of layer states.
     */ BaseLayer1.prototype.getLayerStatesArray = function(opt_states) {
        return _utilJs.abstract();
    };
    /**
     * Return the {@link module:ol/extent~Extent extent} of the layer or `undefined` if it
     * will be visible regardless of extent.
     * @return {import("../extent.js").Extent|undefined} The layer extent.
     * @observable
     * @api
     */ BaseLayer1.prototype.getExtent = function() {
        return /** @type {import("../extent.js").Extent|undefined} */ this.get(_propertyJsDefault.default.EXTENT);
    };
    /**
     * Return the maximum resolution of the layer.
     * @return {number} The maximum resolution of the layer.
     * @observable
     * @api
     */ BaseLayer1.prototype.getMaxResolution = function() {
        return /** @type {number} */ this.get(_propertyJsDefault.default.MAX_RESOLUTION);
    };
    /**
     * Return the minimum resolution of the layer.
     * @return {number} The minimum resolution of the layer.
     * @observable
     * @api
     */ BaseLayer1.prototype.getMinResolution = function() {
        return /** @type {number} */ this.get(_propertyJsDefault.default.MIN_RESOLUTION);
    };
    /**
     * Return the minimum zoom level of the layer.
     * @return {number} The minimum zoom level of the layer.
     * @observable
     * @api
     */ BaseLayer1.prototype.getMinZoom = function() {
        return /** @type {number} */ this.get(_propertyJsDefault.default.MIN_ZOOM);
    };
    /**
     * Return the maximum zoom level of the layer.
     * @return {number} The maximum zoom level of the layer.
     * @observable
     * @api
     */ BaseLayer1.prototype.getMaxZoom = function() {
        return /** @type {number} */ this.get(_propertyJsDefault.default.MAX_ZOOM);
    };
    /**
     * Return the opacity of the layer (between 0 and 1).
     * @return {number} The opacity of the layer.
     * @observable
     * @api
     */ BaseLayer1.prototype.getOpacity = function() {
        return /** @type {number} */ this.get(_propertyJsDefault.default.OPACITY);
    };
    /**
     * @abstract
     * @return {import("../source/State.js").default} Source state.
     */ BaseLayer1.prototype.getSourceState = function() {
        return _utilJs.abstract();
    };
    /**
     * Return the visibility of the layer (`true` or `false`).
     * @return {boolean} The visibility of the layer.
     * @observable
     * @api
     */ BaseLayer1.prototype.getVisible = function() {
        return /** @type {boolean} */ this.get(_propertyJsDefault.default.VISIBLE);
    };
    /**
     * Return the Z-index of the layer, which is used to order layers before
     * rendering. The default Z-index is 0.
     * @return {number} The Z-index of the layer.
     * @observable
     * @api
     */ BaseLayer1.prototype.getZIndex = function() {
        return /** @type {number} */ this.get(_propertyJsDefault.default.Z_INDEX);
    };
    /**
     * Sets the background color.
     * @param {BackgroundColor} [opt_background] Background color.
     */ BaseLayer1.prototype.setBackground = function(opt_background) {
        this.background_ = opt_background;
        this.changed();
    };
    /**
     * Set the extent at which the layer is visible.  If `undefined`, the layer
     * will be visible at all extents.
     * @param {import("../extent.js").Extent|undefined} extent The extent of the layer.
     * @observable
     * @api
     */ BaseLayer1.prototype.setExtent = function(extent) {
        this.set(_propertyJsDefault.default.EXTENT, extent);
    };
    /**
     * Set the maximum resolution at which the layer is visible.
     * @param {number} maxResolution The maximum resolution of the layer.
     * @observable
     * @api
     */ BaseLayer1.prototype.setMaxResolution = function(maxResolution) {
        this.set(_propertyJsDefault.default.MAX_RESOLUTION, maxResolution);
    };
    /**
     * Set the minimum resolution at which the layer is visible.
     * @param {number} minResolution The minimum resolution of the layer.
     * @observable
     * @api
     */ BaseLayer1.prototype.setMinResolution = function(minResolution) {
        this.set(_propertyJsDefault.default.MIN_RESOLUTION, minResolution);
    };
    /**
     * Set the maximum zoom (exclusive) at which the layer is visible.
     * Note that the zoom levels for layer visibility are based on the
     * view zoom level, which may be different from a tile source zoom level.
     * @param {number} maxZoom The maximum zoom of the layer.
     * @observable
     * @api
     */ BaseLayer1.prototype.setMaxZoom = function(maxZoom) {
        this.set(_propertyJsDefault.default.MAX_ZOOM, maxZoom);
    };
    /**
     * Set the minimum zoom (inclusive) at which the layer is visible.
     * Note that the zoom levels for layer visibility are based on the
     * view zoom level, which may be different from a tile source zoom level.
     * @param {number} minZoom The minimum zoom of the layer.
     * @observable
     * @api
     */ BaseLayer1.prototype.setMinZoom = function(minZoom) {
        this.set(_propertyJsDefault.default.MIN_ZOOM, minZoom);
    };
    /**
     * Set the opacity of the layer, allowed values range from 0 to 1.
     * @param {number} opacity The opacity of the layer.
     * @observable
     * @api
     */ BaseLayer1.prototype.setOpacity = function(opacity) {
        _assertsJs.assert(typeof opacity === 'number', 64); // Layer opacity must be a number
        this.set(_propertyJsDefault.default.OPACITY, opacity);
    };
    /**
     * Set the visibility of the layer (`true` or `false`).
     * @param {boolean} visible The visibility of the layer.
     * @observable
     * @api
     */ BaseLayer1.prototype.setVisible = function(visible) {
        this.set(_propertyJsDefault.default.VISIBLE, visible);
    };
    /**
     * Set Z-index of the layer, which is used to order layers before rendering.
     * The default Z-index is 0.
     * @param {number} zindex The z-index of the layer.
     * @observable
     * @api
     */ BaseLayer1.prototype.setZIndex = function(zindex) {
        this.set(_propertyJsDefault.default.Z_INDEX, zindex);
    };
    /**
     * Clean up.
     */ BaseLayer1.prototype.disposeInternal = function() {
        if (this.state_) {
            this.state_.layer = null;
            this.state_ = null;
        }
        _super.prototype.disposeInternal.call(this);
    };
    return BaseLayer1;
}(_objectJsDefault.default);
exports.default = BaseLayer;

},{"../Object.js":"1zG8z","./Property.js":"kCuCK","../util.js":"pLBjQ","../asserts.js":"e4TiF","../obj.js":"3ssAG","../math.js":"5jEFr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kCuCK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @module ol/layer/Property
 */ /**
 * @enum {string}
 */ exports.default = {
    OPACITY: 'opacity',
    VISIBLE: 'visible',
    EXTENT: 'extent',
    Z_INDEX: 'zIndex',
    MAX_RESOLUTION: 'maxResolution',
    MIN_RESOLUTION: 'minResolution',
    MAX_ZOOM: 'maxZoom',
    MIN_ZOOM: 'minZoom',
    SOURCE: 'source',
    MAP: 'map'
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e4TiF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @param {*} assertion Assertion we expected to be truthy.
 * @param {number} errorCode Error code.
 */ parcelHelpers.export(exports, "assert", ()=>assert
);
/**
 * @module ol/asserts
 */ var _assertionErrorJs = require("./AssertionError.js");
var _assertionErrorJsDefault = parcelHelpers.interopDefault(_assertionErrorJs);
function assert(assertion, errorCode) {
    if (!assertion) throw new _assertionErrorJsDefault.default(errorCode);
}

},{"./AssertionError.js":"1MBbN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1MBbN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @module ol/AssertionError
 */ var _utilJs = require("./util.js");
var __extends = undefined && undefined.__extends || function() {
    var extendStatics = function(d1, b1) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d1, b1);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
/**
 * Error object thrown when an assertion failed. This is an ECMA-262 Error,
 * extended with a `code` property.
 * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error.
 */ var AssertionError = /** @class */ function(_super) {
    __extends(AssertionError1, _super);
    /**
     * @param {number} code Error code.
     */ function AssertionError1(code) {
        var _this = this;
        var path = _utilJs.VERSION === 'latest' ? _utilJs.VERSION : 'v' + _utilJs.VERSION.split('-')[0];
        var message = 'Assertion failed. See https://openlayers.org/en/' + path + '/doc/errors/#' + code + ' for details.';
        _this = _super.call(this, message) || this;
        /**
         * Error code. The meaning of the code can be found on
         * https://openlayers.org/en/latest/doc/errors/ (replace `latest` with
         * the version found in the OpenLayers script's header comment if a version
         * other than the latest is used).
         * @type {number}
         * @api
         */ _this.code = code;
        /**
         * @type {string}
         */ _this.name = 'AssertionError';
        // Re-assign message, see https://github.com/Rich-Harris/buble/issues/40
        _this.message = message;
        return _this;
    }
    return AssertionError1;
}(Error);
exports.default = AssertionError;

},{"./util.js":"pLBjQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5jEFr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @module ol/math
 */ /**
 * Takes a number and clamps it to within the provided bounds.
 * @param {number} value The input number.
 * @param {number} min The minimum value to return.
 * @param {number} max The maximum value to return.
 * @return {number} The input number if it is within bounds, or the nearest
 *     number within the bounds.
 */ parcelHelpers.export(exports, "clamp", ()=>clamp
);
parcelHelpers.export(exports, "cosh", ()=>cosh
);
parcelHelpers.export(exports, "log2", ()=>log2
);
/**
 * Returns the square of the closest distance between the point (x, y) and the
 * line segment (x1, y1) to (x2, y2).
 * @param {number} x X.
 * @param {number} y Y.
 * @param {number} x1 X1.
 * @param {number} y1 Y1.
 * @param {number} x2 X2.
 * @param {number} y2 Y2.
 * @return {number} Squared distance.
 */ parcelHelpers.export(exports, "squaredSegmentDistance", ()=>squaredSegmentDistance
);
/**
 * Returns the square of the distance between the points (x1, y1) and (x2, y2).
 * @param {number} x1 X1.
 * @param {number} y1 Y1.
 * @param {number} x2 X2.
 * @param {number} y2 Y2.
 * @return {number} Squared distance.
 */ parcelHelpers.export(exports, "squaredDistance", ()=>squaredDistance
);
/**
 * Solves system of linear equations using Gaussian elimination method.
 *
 * @param {Array<Array<number>>} mat Augmented matrix (n x n + 1 column)
 *                                     in row-major order.
 * @return {Array<number>} The resulting vector.
 */ parcelHelpers.export(exports, "solveLinearSystem", ()=>solveLinearSystem
);
/**
 * Converts radians to to degrees.
 *
 * @param {number} angleInRadians Angle in radians.
 * @return {number} Angle in degrees.
 */ parcelHelpers.export(exports, "toDegrees", ()=>toDegrees
);
/**
 * Converts degrees to radians.
 *
 * @param {number} angleInDegrees Angle in degrees.
 * @return {number} Angle in radians.
 */ parcelHelpers.export(exports, "toRadians", ()=>toRadians
);
/**
 * Returns the modulo of a / b, depending on the sign of b.
 *
 * @param {number} a Dividend.
 * @param {number} b Divisor.
 * @return {number} Modulo.
 */ parcelHelpers.export(exports, "modulo", ()=>modulo
);
/**
 * Calculates the linearly interpolated value of x between a and b.
 *
 * @param {number} a Number
 * @param {number} b Number
 * @param {number} x Value to be interpolated.
 * @return {number} Interpolated value.
 */ parcelHelpers.export(exports, "lerp", ()=>lerp
);
/**
 * Returns a number with a limited number of decimal digits.
 * @param {number} n The input number.
 * @param {number} decimals The maximum number of decimal digits.
 * @return {number} The input number with a limited number of decimal digits.
 */ parcelHelpers.export(exports, "toFixed", ()=>toFixed
);
/**
 * Rounds a number to the nearest integer value considering only the given number
 * of decimal digits (with rounding on the final digit).
 * @param {number} n The input number.
 * @param {number} decimals The maximum number of decimal digits.
 * @return {number} The nearest integer.
 */ parcelHelpers.export(exports, "round", ()=>round
);
/**
 * Rounds a number to the next smaller integer considering only the given number
 * of decimal digits (with rounding on the final digit).
 * @param {number} n The input number.
 * @param {number} decimals The maximum number of decimal digits.
 * @return {number} The next smaller integer.
 */ parcelHelpers.export(exports, "floor", ()=>floor
);
/**
 * Rounds a number to the next bigger integer considering only the given number
 * of decimal digits (with rounding on the final digit).
 * @param {number} n The input number.
 * @param {number} decimals The maximum number of decimal digits.
 * @return {number} The next bigger integer.
 */ parcelHelpers.export(exports, "ceil", ()=>ceil
);
function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}
var cosh = function() {
    // Wrapped in a iife, to save the overhead of checking for the native
    // implementation on every invocation.
    var cosh1;
    if ('cosh' in Math) // The environment supports the native Math.cosh function, use it…
    cosh1 = Math.cosh;
    else // … else, use the reference implementation of MDN:
    cosh1 = function(x) {
        var y = /** @type {Math} */ Math.exp(x);
        return (y + 1 / y) / 2;
    };
    return cosh1;
}();
var log2 = function() {
    // Wrapped in a iife, to save the overhead of checking for the native
    // implementation on every invocation.
    var log21;
    if ('log2' in Math) // The environment supports the native Math.log2 function, use it…
    log21 = Math.log2;
    else // … else, use the reference implementation of MDN:
    log21 = function(x) {
        return Math.log(x) * Math.LOG2E;
    };
    return log21;
}();
function squaredSegmentDistance(x, y, x1, y1, x2, y2) {
    var dx = x2 - x1;
    var dy = y2 - y1;
    if (dx !== 0 || dy !== 0) {
        var t = ((x - x1) * dx + (y - y1) * dy) / (dx * dx + dy * dy);
        if (t > 1) {
            x1 = x2;
            y1 = y2;
        } else if (t > 0) {
            x1 += dx * t;
            y1 += dy * t;
        }
    }
    return squaredDistance(x, y, x1, y1);
}
function squaredDistance(x1, y1, x2, y2) {
    var dx = x2 - x1;
    var dy = y2 - y1;
    return dx * dx + dy * dy;
}
function solveLinearSystem(mat) {
    var n = mat.length;
    for(var i = 0; i < n; i++){
        // Find max in the i-th column (ignoring i - 1 first rows)
        var maxRow = i;
        var maxEl = Math.abs(mat[i][i]);
        for(var r = i + 1; r < n; r++){
            var absValue = Math.abs(mat[r][i]);
            if (absValue > maxEl) {
                maxEl = absValue;
                maxRow = r;
            }
        }
        if (maxEl === 0) return null; // matrix is singular
        // Swap max row with i-th (current) row
        var tmp = mat[maxRow];
        mat[maxRow] = mat[i];
        mat[i] = tmp;
        // Subtract the i-th row to make all the remaining rows 0 in the i-th column
        for(var j = i + 1; j < n; j++){
            var coef = -mat[j][i] / mat[i][i];
            for(var k = i; k < n + 1; k++)if (i == k) mat[j][k] = 0;
            else mat[j][k] += coef * mat[i][k];
        }
    }
    // Solve Ax=b for upper triangular matrix A (mat)
    var x = new Array(n);
    for(var l = n - 1; l >= 0; l--){
        x[l] = mat[l][n] / mat[l][l];
        for(var m = l - 1; m >= 0; m--)mat[m][n] -= mat[m][l] * x[l];
    }
    return x;
}
function toDegrees(angleInRadians) {
    return angleInRadians * 180 / Math.PI;
}
function toRadians(angleInDegrees) {
    return angleInDegrees * Math.PI / 180;
}
function modulo(a, b) {
    var r = a % b;
    return r * b < 0 ? r + b : r;
}
function lerp(a, b, x) {
    return a + x * (b - a);
}
function toFixed(n, decimals) {
    var factor = Math.pow(10, decimals);
    return Math.round(n * factor) / factor;
}
function round(n, decimals) {
    return Math.round(toFixed(n, decimals));
}
function floor(n, decimals) {
    return Math.floor(toFixed(n, decimals));
}
function ceil(n, decimals) {
    return Math.ceil(toFixed(n, decimals));
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gReoh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CollectionEvent", ()=>CollectionEvent
);
/**
 * @module ol/Collection
 */ var _assertionErrorJs = require("./AssertionError.js");
var _assertionErrorJsDefault = parcelHelpers.interopDefault(_assertionErrorJs);
var _objectJs = require("./Object.js");
var _objectJsDefault = parcelHelpers.interopDefault(_objectJs);
var _collectionEventTypeJs = require("./CollectionEventType.js");
var _collectionEventTypeJsDefault = parcelHelpers.interopDefault(_collectionEventTypeJs);
var _eventJs = require("./events/Event.js");
var _eventJsDefault = parcelHelpers.interopDefault(_eventJs);
var __extends = undefined && undefined.__extends || function() {
    var extendStatics = function(d1, b1) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d1, b1);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
/**
 * @enum {string}
 * @private
 */ var Property = {
    LENGTH: 'length'
};
/**
 * @classdesc
 * Events emitted by {@link module:ol/Collection~Collection} instances are instances of this
 * type.
 */ var CollectionEvent = /** @class */ function(_super) {
    __extends(CollectionEvent1, _super);
    /**
     * @param {import("./CollectionEventType.js").default} type Type.
     * @param {*} [opt_element] Element.
     * @param {number} [opt_index] The index of the added or removed element.
     */ function CollectionEvent1(type, opt_element, opt_index) {
        var _this = _super.call(this, type) || this;
        /**
         * The element that is added to or removed from the collection.
         * @type {*}
         * @api
         */ _this.element = opt_element;
        /**
         * The index of the added or removed element.
         * @type {number}
         * @api
         */ _this.index = opt_index;
        return _this;
    }
    return CollectionEvent1;
}(_eventJsDefault.default);
/***
 * @template Return
 * @typedef {import("./Observable").OnSignature<import("./Observable").EventTypes, import("./events/Event.js").default, Return> &
 *   import("./Observable").OnSignature<import("./ObjectEventType").Types|'change:length', import("./Object").ObjectEvent, Return> &
 *   import("./Observable").OnSignature<'add'|'remove', CollectionEvent, Return> &
 *   import("./Observable").CombinedOnSignature<import("./Observable").EventTypes|import("./ObjectEventType").Types|
 *     'change:length'|'add'|'remove',Return>} CollectionOnSignature
 */ /**
 * @typedef {Object} Options
 * @property {boolean} [unique=false] Disallow the same item from being added to
 * the collection twice.
 */ /**
 * @classdesc
 * An expanded version of standard JS Array, adding convenience methods for
 * manipulation. Add and remove changes to the Collection trigger a Collection
 * event. Note that this does not cover changes to the objects _within_ the
 * Collection; they trigger events on the appropriate object, not on the
 * Collection as a whole.
 *
 * @fires CollectionEvent
 *
 * @template T
 * @api
 */ var Collection = /** @class */ function(_super) {
    __extends(Collection1, _super);
    /**
     * @param {Array<T>} [opt_array] Array.
     * @param {Options} [opt_options] Collection options.
     */ function Collection1(opt_array, opt_options) {
        var _this = _super.call(this) || this;
        /***
         * @type {CollectionOnSignature<import("./events").EventsKey>}
         */ _this.on;
        /***
         * @type {CollectionOnSignature<import("./events").EventsKey>}
         */ _this.once;
        /***
         * @type {CollectionOnSignature<void>}
         */ _this.un;
        var options = opt_options || {};
        /**
         * @private
         * @type {boolean}
         */ _this.unique_ = !!options.unique;
        /**
         * @private
         * @type {!Array<T>}
         */ _this.array_ = opt_array ? opt_array : [];
        if (_this.unique_) for(var i = 0, ii = _this.array_.length; i < ii; ++i)_this.assertUnique_(_this.array_[i], i);
        _this.updateLength_();
        return _this;
    }
    /**
     * Remove all elements from the collection.
     * @api
     */ Collection1.prototype.clear = function() {
        while(this.getLength() > 0)this.pop();
    };
    /**
     * Add elements to the collection.  This pushes each item in the provided array
     * to the end of the collection.
     * @param {!Array<T>} arr Array.
     * @return {Collection<T>} This collection.
     * @api
     */ Collection1.prototype.extend = function(arr) {
        for(var i = 0, ii = arr.length; i < ii; ++i)this.push(arr[i]);
        return this;
    };
    /**
     * Iterate over each element, calling the provided callback.
     * @param {function(T, number, Array<T>): *} f The function to call
     *     for every element. This function takes 3 arguments (the element, the
     *     index and the array). The return value is ignored.
     * @api
     */ Collection1.prototype.forEach = function(f) {
        var array = this.array_;
        for(var i = 0, ii = array.length; i < ii; ++i)f(array[i], i, array);
    };
    /**
     * Get a reference to the underlying Array object. Warning: if the array
     * is mutated, no events will be dispatched by the collection, and the
     * collection's "length" property won't be in sync with the actual length
     * of the array.
     * @return {!Array<T>} Array.
     * @api
     */ Collection1.prototype.getArray = function() {
        return this.array_;
    };
    /**
     * Get the element at the provided index.
     * @param {number} index Index.
     * @return {T} Element.
     * @api
     */ Collection1.prototype.item = function(index) {
        return this.array_[index];
    };
    /**
     * Get the length of this collection.
     * @return {number} The length of the array.
     * @observable
     * @api
     */ Collection1.prototype.getLength = function() {
        return this.get(Property.LENGTH);
    };
    /**
     * Insert an element at the provided index.
     * @param {number} index Index.
     * @param {T} elem Element.
     * @api
     */ Collection1.prototype.insertAt = function(index, elem) {
        if (this.unique_) this.assertUnique_(elem);
        this.array_.splice(index, 0, elem);
        this.updateLength_();
        this.dispatchEvent(new CollectionEvent(_collectionEventTypeJsDefault.default.ADD, elem, index));
    };
    /**
     * Remove the last element of the collection and return it.
     * Return `undefined` if the collection is empty.
     * @return {T|undefined} Element.
     * @api
     */ Collection1.prototype.pop = function() {
        return this.removeAt(this.getLength() - 1);
    };
    /**
     * Insert the provided element at the end of the collection.
     * @param {T} elem Element.
     * @return {number} New length of the collection.
     * @api
     */ Collection1.prototype.push = function(elem) {
        if (this.unique_) this.assertUnique_(elem);
        var n = this.getLength();
        this.insertAt(n, elem);
        return this.getLength();
    };
    /**
     * Remove the first occurrence of an element from the collection.
     * @param {T} elem Element.
     * @return {T|undefined} The removed element or undefined if none found.
     * @api
     */ Collection1.prototype.remove = function(elem) {
        var arr = this.array_;
        for(var i = 0, ii = arr.length; i < ii; ++i){
            if (arr[i] === elem) return this.removeAt(i);
        }
        return undefined;
    };
    /**
     * Remove the element at the provided index and return it.
     * Return `undefined` if the collection does not contain this index.
     * @param {number} index Index.
     * @return {T|undefined} Value.
     * @api
     */ Collection1.prototype.removeAt = function(index) {
        var prev = this.array_[index];
        this.array_.splice(index, 1);
        this.updateLength_();
        this.dispatchEvent(new CollectionEvent(_collectionEventTypeJsDefault.default.REMOVE, prev, index));
        return prev;
    };
    /**
     * Set the element at the provided index.
     * @param {number} index Index.
     * @param {T} elem Element.
     * @api
     */ Collection1.prototype.setAt = function(index, elem) {
        var n = this.getLength();
        if (index < n) {
            if (this.unique_) this.assertUnique_(elem, index);
            var prev = this.array_[index];
            this.array_[index] = elem;
            this.dispatchEvent(new CollectionEvent(_collectionEventTypeJsDefault.default.REMOVE, prev, index));
            this.dispatchEvent(new CollectionEvent(_collectionEventTypeJsDefault.default.ADD, elem, index));
        } else {
            for(var j = n; j < index; ++j)this.insertAt(j, undefined);
            this.insertAt(index, elem);
        }
    };
    /**
     * @private
     */ Collection1.prototype.updateLength_ = function() {
        this.set(Property.LENGTH, this.array_.length);
    };
    /**
     * @private
     * @param {T} elem Element.
     * @param {number} [opt_except] Optional index to ignore.
     */ Collection1.prototype.assertUnique_ = function(elem, opt_except) {
        for(var i = 0, ii = this.array_.length; i < ii; ++i){
            if (this.array_[i] === elem && i !== opt_except) throw new _assertionErrorJsDefault.default(58);
        }
    };
    return Collection1;
}(_objectJsDefault.default);
exports.default = Collection;

},{"./AssertionError.js":"1MBbN","./Object.js":"1zG8z","./CollectionEventType.js":"82Ksf","./events/Event.js":"hwXQP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"82Ksf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @module ol/CollectionEventType
 */ /**
 * @enum {string}
 */ exports.default = {
    /**
     * Triggered when an item is added to the collection.
     * @event module:ol/Collection.CollectionEvent#add
     * @api
     */ ADD: 'add',
    /**
     * Triggered when an item is removed from the collection.
     * @event module:ol/Collection.CollectionEvent#remove
     * @api
     */ REMOVE: 'remove'
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gW573":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @module ol/source/State
 */ /**
 * @enum {string}
 * State of the source, one of 'undefined', 'loading', 'ready' or 'error'.
 */ exports.default = {
    UNDEFINED: 'undefined',
    LOADING: 'loading',
    READY: 'ready',
    ERROR: 'error'
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6YrVc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * An array of numbers representing an extent: `[minx, miny, maxx, maxy]`.
 * @typedef {Array<number>} Extent
 * @api
 */ /**
 * Build an extent that includes all given coordinates.
 *
 * @param {Array<import("./coordinate.js").Coordinate>} coordinates Coordinates.
 * @return {Extent} Bounding extent.
 * @api
 */ parcelHelpers.export(exports, "boundingExtent", ()=>boundingExtent
);
/**
 * Return extent increased by the provided value.
 * @param {Extent} extent Extent.
 * @param {number} value The amount by which the extent should be buffered.
 * @param {Extent} [opt_extent] Extent.
 * @return {Extent} Extent.
 * @api
 */ parcelHelpers.export(exports, "buffer", ()=>buffer
);
/**
 * Creates a clone of an extent.
 *
 * @param {Extent} extent Extent to clone.
 * @param {Extent} [opt_extent] Extent.
 * @return {Extent} The clone.
 */ parcelHelpers.export(exports, "clone", ()=>clone
);
/**
 * @param {Extent} extent Extent.
 * @param {number} x X.
 * @param {number} y Y.
 * @return {number} Closest squared distance.
 */ parcelHelpers.export(exports, "closestSquaredDistanceXY", ()=>closestSquaredDistanceXY
);
/**
 * Check if the passed coordinate is contained or on the edge of the extent.
 *
 * @param {Extent} extent Extent.
 * @param {import("./coordinate.js").Coordinate} coordinate Coordinate.
 * @return {boolean} The coordinate is contained in the extent.
 * @api
 */ parcelHelpers.export(exports, "containsCoordinate", ()=>containsCoordinate
);
/**
 * Check if one extent contains another.
 *
 * An extent is deemed contained if it lies completely within the other extent,
 * including if they share one or more edges.
 *
 * @param {Extent} extent1 Extent 1.
 * @param {Extent} extent2 Extent 2.
 * @return {boolean} The second extent is contained by or on the edge of the
 *     first.
 * @api
 */ parcelHelpers.export(exports, "containsExtent", ()=>containsExtent
);
/**
 * Check if the passed coordinate is contained or on the edge of the extent.
 *
 * @param {Extent} extent Extent.
 * @param {number} x X coordinate.
 * @param {number} y Y coordinate.
 * @return {boolean} The x, y values are contained in the extent.
 * @api
 */ parcelHelpers.export(exports, "containsXY", ()=>containsXY
);
/**
 * Get the relationship between a coordinate and extent.
 * @param {Extent} extent The extent.
 * @param {import("./coordinate.js").Coordinate} coordinate The coordinate.
 * @return {import("./extent/Relationship.js").default} The relationship (bitwise compare with
 *     import("./extent/Relationship.js").Relationship).
 */ parcelHelpers.export(exports, "coordinateRelationship", ()=>coordinateRelationship
);
/**
 * Create an empty extent.
 * @return {Extent} Empty extent.
 * @api
 */ parcelHelpers.export(exports, "createEmpty", ()=>createEmpty
);
/**
 * Create a new extent or update the provided extent.
 * @param {number} minX Minimum X.
 * @param {number} minY Minimum Y.
 * @param {number} maxX Maximum X.
 * @param {number} maxY Maximum Y.
 * @param {Extent} [opt_extent] Destination extent.
 * @return {Extent} Extent.
 */ parcelHelpers.export(exports, "createOrUpdate", ()=>createOrUpdate
);
/**
 * Create a new empty extent or make the provided one empty.
 * @param {Extent} [opt_extent] Extent.
 * @return {Extent} Extent.
 */ parcelHelpers.export(exports, "createOrUpdateEmpty", ()=>createOrUpdateEmpty
);
/**
 * @param {import("./coordinate.js").Coordinate} coordinate Coordinate.
 * @param {Extent} [opt_extent] Extent.
 * @return {Extent} Extent.
 */ parcelHelpers.export(exports, "createOrUpdateFromCoordinate", ()=>createOrUpdateFromCoordinate
);
/**
 * @param {Array<import("./coordinate.js").Coordinate>} coordinates Coordinates.
 * @param {Extent} [opt_extent] Extent.
 * @return {Extent} Extent.
 */ parcelHelpers.export(exports, "createOrUpdateFromCoordinates", ()=>createOrUpdateFromCoordinates
);
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {Extent} [opt_extent] Extent.
 * @return {Extent} Extent.
 */ parcelHelpers.export(exports, "createOrUpdateFromFlatCoordinates", ()=>createOrUpdateFromFlatCoordinates
);
/**
 * @param {Array<Array<import("./coordinate.js").Coordinate>>} rings Rings.
 * @param {Extent} [opt_extent] Extent.
 * @return {Extent} Extent.
 */ parcelHelpers.export(exports, "createOrUpdateFromRings", ()=>createOrUpdateFromRings
);
/**
 * Determine if two extents are equivalent.
 * @param {Extent} extent1 Extent 1.
 * @param {Extent} extent2 Extent 2.
 * @return {boolean} The two extents are equivalent.
 * @api
 */ parcelHelpers.export(exports, "equals", ()=>equals
);
/**
 * Determine if two extents are approximately equivalent.
 * @param {Extent} extent1 Extent 1.
 * @param {Extent} extent2 Extent 2.
 * @param {number} tolerance Tolerance in extent coordinate units.
 * @return {boolean} The two extents differ by less than the tolerance.
 */ parcelHelpers.export(exports, "approximatelyEquals", ()=>approximatelyEquals
);
/**
 * Modify an extent to include another extent.
 * @param {Extent} extent1 The extent to be modified.
 * @param {Extent} extent2 The extent that will be included in the first.
 * @return {Extent} A reference to the first (extended) extent.
 * @api
 */ parcelHelpers.export(exports, "extend", ()=>extend
);
/**
 * @param {Extent} extent Extent.
 * @param {import("./coordinate.js").Coordinate} coordinate Coordinate.
 */ parcelHelpers.export(exports, "extendCoordinate", ()=>extendCoordinate
);
/**
 * @param {Extent} extent Extent.
 * @param {Array<import("./coordinate.js").Coordinate>} coordinates Coordinates.
 * @return {Extent} Extent.
 */ parcelHelpers.export(exports, "extendCoordinates", ()=>extendCoordinates
);
/**
 * @param {Extent} extent Extent.
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @return {Extent} Extent.
 */ parcelHelpers.export(exports, "extendFlatCoordinates", ()=>extendFlatCoordinates
);
/**
 * @param {Extent} extent Extent.
 * @param {Array<Array<import("./coordinate.js").Coordinate>>} rings Rings.
 * @return {Extent} Extent.
 */ parcelHelpers.export(exports, "extendRings", ()=>extendRings
);
/**
 * @param {Extent} extent Extent.
 * @param {number} x X.
 * @param {number} y Y.
 */ parcelHelpers.export(exports, "extendXY", ()=>extendXY
);
/**
 * This function calls `callback` for each corner of the extent. If the
 * callback returns a truthy value the function returns that value
 * immediately. Otherwise the function returns `false`.
 * @param {Extent} extent Extent.
 * @param {function(import("./coordinate.js").Coordinate): S} callback Callback.
 * @return {S|boolean} Value.
 * @template S
 */ parcelHelpers.export(exports, "forEachCorner", ()=>forEachCorner
);
/**
 * Get the size of an extent.
 * @param {Extent} extent Extent.
 * @return {number} Area.
 * @api
 */ parcelHelpers.export(exports, "getArea", ()=>getArea
);
/**
 * Get the bottom left coordinate of an extent.
 * @param {Extent} extent Extent.
 * @return {import("./coordinate.js").Coordinate} Bottom left coordinate.
 * @api
 */ parcelHelpers.export(exports, "getBottomLeft", ()=>getBottomLeft
);
/**
 * Get the bottom right coordinate of an extent.
 * @param {Extent} extent Extent.
 * @return {import("./coordinate.js").Coordinate} Bottom right coordinate.
 * @api
 */ parcelHelpers.export(exports, "getBottomRight", ()=>getBottomRight
);
/**
 * Get the center coordinate of an extent.
 * @param {Extent} extent Extent.
 * @return {import("./coordinate.js").Coordinate} Center.
 * @api
 */ parcelHelpers.export(exports, "getCenter", ()=>getCenter
);
/**
 * Get a corner coordinate of an extent.
 * @param {Extent} extent Extent.
 * @param {import("./extent/Corner.js").default} corner Corner.
 * @return {import("./coordinate.js").Coordinate} Corner coordinate.
 */ parcelHelpers.export(exports, "getCorner", ()=>getCorner
);
/**
 * @param {Extent} extent1 Extent 1.
 * @param {Extent} extent2 Extent 2.
 * @return {number} Enlarged area.
 */ parcelHelpers.export(exports, "getEnlargedArea", ()=>getEnlargedArea
);
/**
 * @param {import("./coordinate.js").Coordinate} center Center.
 * @param {number} resolution Resolution.
 * @param {number} rotation Rotation.
 * @param {import("./size.js").Size} size Size.
 * @param {Extent} [opt_extent] Destination extent.
 * @return {Extent} Extent.
 */ parcelHelpers.export(exports, "getForViewAndSize", ()=>getForViewAndSize
);
/**
 * Get the height of an extent.
 * @param {Extent} extent Extent.
 * @return {number} Height.
 * @api
 */ parcelHelpers.export(exports, "getHeight", ()=>getHeight
);
/**
 * @param {Extent} extent1 Extent 1.
 * @param {Extent} extent2 Extent 2.
 * @return {number} Intersection area.
 */ parcelHelpers.export(exports, "getIntersectionArea", ()=>getIntersectionArea
);
/**
 * Get the intersection of two extents.
 * @param {Extent} extent1 Extent 1.
 * @param {Extent} extent2 Extent 2.
 * @param {Extent} [opt_extent] Optional extent to populate with intersection.
 * @return {Extent} Intersecting extent.
 * @api
 */ parcelHelpers.export(exports, "getIntersection", ()=>getIntersection
);
/**
 * @param {Extent} extent Extent.
 * @return {number} Margin.
 */ parcelHelpers.export(exports, "getMargin", ()=>getMargin
);
/**
 * Get the size (width, height) of an extent.
 * @param {Extent} extent The extent.
 * @return {import("./size.js").Size} The extent size.
 * @api
 */ parcelHelpers.export(exports, "getSize", ()=>getSize
);
/**
 * Get the top left coordinate of an extent.
 * @param {Extent} extent Extent.
 * @return {import("./coordinate.js").Coordinate} Top left coordinate.
 * @api
 */ parcelHelpers.export(exports, "getTopLeft", ()=>getTopLeft
);
/**
 * Get the top right coordinate of an extent.
 * @param {Extent} extent Extent.
 * @return {import("./coordinate.js").Coordinate} Top right coordinate.
 * @api
 */ parcelHelpers.export(exports, "getTopRight", ()=>getTopRight
);
/**
 * Get the width of an extent.
 * @param {Extent} extent Extent.
 * @return {number} Width.
 * @api
 */ parcelHelpers.export(exports, "getWidth", ()=>getWidth
);
/**
 * Determine if one extent intersects another.
 * @param {Extent} extent1 Extent 1.
 * @param {Extent} extent2 Extent.
 * @return {boolean} The two extents intersect.
 * @api
 */ parcelHelpers.export(exports, "intersects", ()=>intersects
);
/**
 * Determine if an extent is empty.
 * @param {Extent} extent Extent.
 * @return {boolean} Is empty.
 * @api
 */ parcelHelpers.export(exports, "isEmpty", ()=>isEmpty
);
/**
 * @param {Extent} extent Extent.
 * @param {Extent} [opt_extent] Extent.
 * @return {Extent} Extent.
 */ parcelHelpers.export(exports, "returnOrUpdate", ()=>returnOrUpdate
);
/**
 * @param {Extent} extent Extent.
 * @param {number} value Value.
 */ parcelHelpers.export(exports, "scaleFromCenter", ()=>scaleFromCenter
);
/**
 * Determine if the segment between two coordinates intersects (crosses,
 * touches, or is contained by) the provided extent.
 * @param {Extent} extent The extent.
 * @param {import("./coordinate.js").Coordinate} start Segment start coordinate.
 * @param {import("./coordinate.js").Coordinate} end Segment end coordinate.
 * @return {boolean} The segment intersects the extent.
 */ parcelHelpers.export(exports, "intersectsSegment", ()=>intersectsSegment
);
/**
 * Apply a transform function to the extent.
 * @param {Extent} extent Extent.
 * @param {import("./proj.js").TransformFunction} transformFn Transform function.
 * Called with `[minX, minY, maxX, maxY]` extent coordinates.
 * @param {Extent} [opt_extent] Destination extent.
 * @param {number} [opt_stops] Number of stops per side used for the transform.
 * By default only the corners are used.
 * @return {Extent} Extent.
 * @api
 */ parcelHelpers.export(exports, "applyTransform", ()=>applyTransform
);
/**
 * Modifies the provided extent in-place to be within the real world
 * extent.
 *
 * @param {Extent} extent Extent.
 * @param {import("./proj/Projection.js").default} projection Projection
 * @return {Extent} The extent within the real world extent.
 */ parcelHelpers.export(exports, "wrapX", ()=>wrapX
);
/**
 * @module ol/extent
 */ var _cornerJs = require("./extent/Corner.js");
var _cornerJsDefault = parcelHelpers.interopDefault(_cornerJs);
var _relationshipJs = require("./extent/Relationship.js");
var _relationshipJsDefault = parcelHelpers.interopDefault(_relationshipJs);
var _assertsJs = require("./asserts.js");
function boundingExtent(coordinates) {
    var extent = createEmpty();
    for(var i = 0, ii = coordinates.length; i < ii; ++i)extendCoordinate(extent, coordinates[i]);
    return extent;
}
/**
 * @param {Array<number>} xs Xs.
 * @param {Array<number>} ys Ys.
 * @param {Extent} [opt_extent] Destination extent.
 * @private
 * @return {Extent} Extent.
 */ function _boundingExtentXYs(xs, ys, opt_extent) {
    var minX = Math.min.apply(null, xs);
    var minY = Math.min.apply(null, ys);
    var maxX = Math.max.apply(null, xs);
    var maxY = Math.max.apply(null, ys);
    return createOrUpdate(minX, minY, maxX, maxY, opt_extent);
}
function buffer(extent, value, opt_extent) {
    if (opt_extent) {
        opt_extent[0] = extent[0] - value;
        opt_extent[1] = extent[1] - value;
        opt_extent[2] = extent[2] + value;
        opt_extent[3] = extent[3] + value;
        return opt_extent;
    } else return [
        extent[0] - value,
        extent[1] - value,
        extent[2] + value,
        extent[3] + value, 
    ];
}
function clone(extent, opt_extent) {
    if (opt_extent) {
        opt_extent[0] = extent[0];
        opt_extent[1] = extent[1];
        opt_extent[2] = extent[2];
        opt_extent[3] = extent[3];
        return opt_extent;
    } else return extent.slice();
}
function closestSquaredDistanceXY(extent, x, y) {
    var dx, dy;
    if (x < extent[0]) dx = extent[0] - x;
    else if (extent[2] < x) dx = x - extent[2];
    else dx = 0;
    if (y < extent[1]) dy = extent[1] - y;
    else if (extent[3] < y) dy = y - extent[3];
    else dy = 0;
    return dx * dx + dy * dy;
}
function containsCoordinate(extent, coordinate) {
    return containsXY(extent, coordinate[0], coordinate[1]);
}
function containsExtent(extent1, extent2) {
    return extent1[0] <= extent2[0] && extent2[2] <= extent1[2] && extent1[1] <= extent2[1] && extent2[3] <= extent1[3];
}
function containsXY(extent, x, y) {
    return extent[0] <= x && x <= extent[2] && extent[1] <= y && y <= extent[3];
}
function coordinateRelationship(extent, coordinate) {
    var minX = extent[0];
    var minY = extent[1];
    var maxX = extent[2];
    var maxY = extent[3];
    var x = coordinate[0];
    var y = coordinate[1];
    var relationship = _relationshipJsDefault.default.UNKNOWN;
    if (x < minX) relationship = relationship | _relationshipJsDefault.default.LEFT;
    else if (x > maxX) relationship = relationship | _relationshipJsDefault.default.RIGHT;
    if (y < minY) relationship = relationship | _relationshipJsDefault.default.BELOW;
    else if (y > maxY) relationship = relationship | _relationshipJsDefault.default.ABOVE;
    if (relationship === _relationshipJsDefault.default.UNKNOWN) relationship = _relationshipJsDefault.default.INTERSECTING;
    return relationship;
}
function createEmpty() {
    return [
        Infinity,
        Infinity,
        -Infinity,
        -Infinity
    ];
}
function createOrUpdate(minX, minY, maxX, maxY, opt_extent) {
    if (opt_extent) {
        opt_extent[0] = minX;
        opt_extent[1] = minY;
        opt_extent[2] = maxX;
        opt_extent[3] = maxY;
        return opt_extent;
    } else return [
        minX,
        minY,
        maxX,
        maxY
    ];
}
function createOrUpdateEmpty(opt_extent) {
    return createOrUpdate(Infinity, Infinity, -Infinity, -Infinity, opt_extent);
}
function createOrUpdateFromCoordinate(coordinate, opt_extent) {
    var x = coordinate[0];
    var y = coordinate[1];
    return createOrUpdate(x, y, x, y, opt_extent);
}
function createOrUpdateFromCoordinates(coordinates, opt_extent) {
    var extent = createOrUpdateEmpty(opt_extent);
    return extendCoordinates(extent, coordinates);
}
function createOrUpdateFromFlatCoordinates(flatCoordinates, offset, end, stride, opt_extent) {
    var extent = createOrUpdateEmpty(opt_extent);
    return extendFlatCoordinates(extent, flatCoordinates, offset, end, stride);
}
function createOrUpdateFromRings(rings, opt_extent) {
    var extent = createOrUpdateEmpty(opt_extent);
    return extendRings(extent, rings);
}
function equals(extent1, extent2) {
    return extent1[0] == extent2[0] && extent1[2] == extent2[2] && extent1[1] == extent2[1] && extent1[3] == extent2[3];
}
function approximatelyEquals(extent1, extent2, tolerance) {
    return Math.abs(extent1[0] - extent2[0]) < tolerance && Math.abs(extent1[2] - extent2[2]) < tolerance && Math.abs(extent1[1] - extent2[1]) < tolerance && Math.abs(extent1[3] - extent2[3]) < tolerance;
}
function extend(extent1, extent2) {
    if (extent2[0] < extent1[0]) extent1[0] = extent2[0];
    if (extent2[2] > extent1[2]) extent1[2] = extent2[2];
    if (extent2[1] < extent1[1]) extent1[1] = extent2[1];
    if (extent2[3] > extent1[3]) extent1[3] = extent2[3];
    return extent1;
}
function extendCoordinate(extent, coordinate) {
    if (coordinate[0] < extent[0]) extent[0] = coordinate[0];
    if (coordinate[0] > extent[2]) extent[2] = coordinate[0];
    if (coordinate[1] < extent[1]) extent[1] = coordinate[1];
    if (coordinate[1] > extent[3]) extent[3] = coordinate[1];
}
function extendCoordinates(extent, coordinates) {
    for(var i = 0, ii = coordinates.length; i < ii; ++i)extendCoordinate(extent, coordinates[i]);
    return extent;
}
function extendFlatCoordinates(extent, flatCoordinates, offset, end, stride) {
    for(; offset < end; offset += stride)extendXY(extent, flatCoordinates[offset], flatCoordinates[offset + 1]);
    return extent;
}
function extendRings(extent, rings) {
    for(var i = 0, ii = rings.length; i < ii; ++i)extendCoordinates(extent, rings[i]);
    return extent;
}
function extendXY(extent, x, y) {
    extent[0] = Math.min(extent[0], x);
    extent[1] = Math.min(extent[1], y);
    extent[2] = Math.max(extent[2], x);
    extent[3] = Math.max(extent[3], y);
}
function forEachCorner(extent, callback) {
    var val;
    val = callback(getBottomLeft(extent));
    if (val) return val;
    val = callback(getBottomRight(extent));
    if (val) return val;
    val = callback(getTopRight(extent));
    if (val) return val;
    val = callback(getTopLeft(extent));
    if (val) return val;
    return false;
}
function getArea(extent) {
    var area = 0;
    if (!isEmpty(extent)) area = getWidth(extent) * getHeight(extent);
    return area;
}
function getBottomLeft(extent) {
    return [
        extent[0],
        extent[1]
    ];
}
function getBottomRight(extent) {
    return [
        extent[2],
        extent[1]
    ];
}
function getCenter(extent) {
    return [
        (extent[0] + extent[2]) / 2,
        (extent[1] + extent[3]) / 2
    ];
}
function getCorner(extent, corner) {
    var coordinate;
    if (corner === _cornerJsDefault.default.BOTTOM_LEFT) coordinate = getBottomLeft(extent);
    else if (corner === _cornerJsDefault.default.BOTTOM_RIGHT) coordinate = getBottomRight(extent);
    else if (corner === _cornerJsDefault.default.TOP_LEFT) coordinate = getTopLeft(extent);
    else if (corner === _cornerJsDefault.default.TOP_RIGHT) coordinate = getTopRight(extent);
    else _assertsJs.assert(false, 13); // Invalid corner
    return coordinate;
}
function getEnlargedArea(extent1, extent2) {
    var minX = Math.min(extent1[0], extent2[0]);
    var minY = Math.min(extent1[1], extent2[1]);
    var maxX = Math.max(extent1[2], extent2[2]);
    var maxY = Math.max(extent1[3], extent2[3]);
    return (maxX - minX) * (maxY - minY);
}
function getForViewAndSize(center, resolution, rotation, size, opt_extent) {
    var dx = resolution * size[0] / 2;
    var dy = resolution * size[1] / 2;
    var cosRotation = Math.cos(rotation);
    var sinRotation = Math.sin(rotation);
    var xCos = dx * cosRotation;
    var xSin = dx * sinRotation;
    var yCos = dy * cosRotation;
    var ySin = dy * sinRotation;
    var x = center[0];
    var y = center[1];
    var x0 = x - xCos + ySin;
    var x1 = x - xCos - ySin;
    var x2 = x + xCos - ySin;
    var x3 = x + xCos + ySin;
    var y0 = y - xSin - yCos;
    var y1 = y - xSin + yCos;
    var y2 = y + xSin + yCos;
    var y3 = y + xSin - yCos;
    return createOrUpdate(Math.min(x0, x1, x2, x3), Math.min(y0, y1, y2, y3), Math.max(x0, x1, x2, x3), Math.max(y0, y1, y2, y3), opt_extent);
}
function getHeight(extent) {
    return extent[3] - extent[1];
}
function getIntersectionArea(extent1, extent2) {
    var intersection = getIntersection(extent1, extent2);
    return getArea(intersection);
}
function getIntersection(extent1, extent2, opt_extent) {
    var intersection = opt_extent ? opt_extent : createEmpty();
    if (intersects(extent1, extent2)) {
        if (extent1[0] > extent2[0]) intersection[0] = extent1[0];
        else intersection[0] = extent2[0];
        if (extent1[1] > extent2[1]) intersection[1] = extent1[1];
        else intersection[1] = extent2[1];
        if (extent1[2] < extent2[2]) intersection[2] = extent1[2];
        else intersection[2] = extent2[2];
        if (extent1[3] < extent2[3]) intersection[3] = extent1[3];
        else intersection[3] = extent2[3];
    } else createOrUpdateEmpty(intersection);
    return intersection;
}
function getMargin(extent) {
    return getWidth(extent) + getHeight(extent);
}
function getSize(extent) {
    return [
        extent[2] - extent[0],
        extent[3] - extent[1]
    ];
}
function getTopLeft(extent) {
    return [
        extent[0],
        extent[3]
    ];
}
function getTopRight(extent) {
    return [
        extent[2],
        extent[3]
    ];
}
function getWidth(extent) {
    return extent[2] - extent[0];
}
function intersects(extent1, extent2) {
    return extent1[0] <= extent2[2] && extent1[2] >= extent2[0] && extent1[1] <= extent2[3] && extent1[3] >= extent2[1];
}
function isEmpty(extent) {
    return extent[2] < extent[0] || extent[3] < extent[1];
}
function returnOrUpdate(extent, opt_extent) {
    if (opt_extent) {
        opt_extent[0] = extent[0];
        opt_extent[1] = extent[1];
        opt_extent[2] = extent[2];
        opt_extent[3] = extent[3];
        return opt_extent;
    } else return extent;
}
function scaleFromCenter(extent, value) {
    var deltaX = (extent[2] - extent[0]) / 2 * (value - 1);
    var deltaY = (extent[3] - extent[1]) / 2 * (value - 1);
    extent[0] -= deltaX;
    extent[2] += deltaX;
    extent[1] -= deltaY;
    extent[3] += deltaY;
}
function intersectsSegment(extent, start, end) {
    var intersects1 = false;
    var startRel = coordinateRelationship(extent, start);
    var endRel = coordinateRelationship(extent, end);
    if (startRel === _relationshipJsDefault.default.INTERSECTING || endRel === _relationshipJsDefault.default.INTERSECTING) intersects1 = true;
    else {
        var minX = extent[0];
        var minY = extent[1];
        var maxX = extent[2];
        var maxY = extent[3];
        var startX = start[0];
        var startY = start[1];
        var endX = end[0];
        var endY = end[1];
        var slope = (endY - startY) / (endX - startX);
        var x = void 0, y = void 0;
        if (!!(endRel & _relationshipJsDefault.default.ABOVE) && !(startRel & _relationshipJsDefault.default.ABOVE)) {
            // potentially intersects top
            x = endX - (endY - maxY) / slope;
            intersects1 = x >= minX && x <= maxX;
        }
        if (!intersects1 && !!(endRel & _relationshipJsDefault.default.RIGHT) && !(startRel & _relationshipJsDefault.default.RIGHT)) {
            // potentially intersects right
            y = endY - (endX - maxX) * slope;
            intersects1 = y >= minY && y <= maxY;
        }
        if (!intersects1 && !!(endRel & _relationshipJsDefault.default.BELOW) && !(startRel & _relationshipJsDefault.default.BELOW)) {
            // potentially intersects bottom
            x = endX - (endY - minY) / slope;
            intersects1 = x >= minX && x <= maxX;
        }
        if (!intersects1 && !!(endRel & _relationshipJsDefault.default.LEFT) && !(startRel & _relationshipJsDefault.default.LEFT)) {
            // potentially intersects left
            y = endY - (endX - minX) * slope;
            intersects1 = y >= minY && y <= maxY;
        }
    }
    return intersects1;
}
function applyTransform(extent, transformFn, opt_extent, opt_stops) {
    var coordinates = [];
    if (opt_stops > 1) {
        var width = extent[2] - extent[0];
        var height = extent[3] - extent[1];
        for(var i = 0; i < opt_stops; ++i)coordinates.push(extent[0] + width * i / opt_stops, extent[1], extent[2], extent[1] + height * i / opt_stops, extent[2] - width * i / opt_stops, extent[3], extent[0], extent[3] - height * i / opt_stops);
    } else coordinates = [
        extent[0],
        extent[1],
        extent[2],
        extent[1],
        extent[2],
        extent[3],
        extent[0],
        extent[3], 
    ];
    transformFn(coordinates, coordinates, 2);
    var xs = [];
    var ys = [];
    for(var i = 0, l = coordinates.length; i < l; i += 2){
        xs.push(coordinates[i]);
        ys.push(coordinates[i + 1]);
    }
    return _boundingExtentXYs(xs, ys, opt_extent);
}
function wrapX(extent, projection) {
    var projectionExtent = projection.getExtent();
    var center = getCenter(extent);
    if (projection.canWrapX() && (center[0] < projectionExtent[0] || center[0] >= projectionExtent[2])) {
        var worldWidth = getWidth(projectionExtent);
        var worldsAway = Math.floor((center[0] - projectionExtent[0]) / worldWidth);
        var offset = worldsAway * worldWidth;
        extent[0] -= offset;
        extent[2] -= offset;
    }
    return extent;
}

},{"./extent/Corner.js":"cPFYO","./extent/Relationship.js":"9q0e7","./asserts.js":"e4TiF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cPFYO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @module ol/extent/Corner
 */ /**
 * Extent corner.
 * @enum {string}
 */ exports.default = {
    BOTTOM_LEFT: 'bottom-left',
    BOTTOM_RIGHT: 'bottom-right',
    TOP_LEFT: 'top-left',
    TOP_RIGHT: 'top-right'
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9q0e7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @module ol/extent/Relationship
 */ /**
 * Relationship to an extent.
 * @enum {number}
 */ exports.default = {
    UNKNOWN: 0,
    INTERSECTING: 1,
    ABOVE: 2,
    RIGHT: 4,
    BELOW: 8,
    LEFT: 16
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["lpgZp","3MX33"], "3MX33", "parcelRequire58ca")

//# sourceMappingURL=index.09110857.js.map
