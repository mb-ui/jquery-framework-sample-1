/*
 * SystemJS 0.19.34
 * Served for jspm from https://jspm.io/system@0.19.34.js
 */
!(function () {
	function e() {
		!(function (e) {
			function t(e, r) {
				if ("string" != typeof e) throw new TypeError("URL must be a string");
				var n = String(e)
					.replace(/^\s+|\s+$/g, "")
					.match(/^([^:\/?#]+:)?(?:\/\/(?:([^:@\/?#]*)(?::([^:@\/?#]*))?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);
				if (!n) throw new RangeError("Invalid URL format");
				var a = n[1] || "",
					o = n[2] || "",
					s = n[3] || "",
					i = n[4] || "",
					l = n[5] || "",
					u = n[6] || "",
					d = n[7] || "",
					c = n[8] || "",
					f = n[9] || "";
				if (void 0 !== r) {
					var m = r instanceof t ? r : new t(r),
						p = !a && !i && !o;
					!p || d || c || (c = m.search),
						p &&
						"/" !== d[0] &&
						(d = d ? ((!m.host && !m.username) || m.pathname ? "" : "/") + m.pathname.slice(0, m.pathname.lastIndexOf("/") + 1) + d : m.pathname);
					var h = [];
					d
						.replace(/^(\.\.?(\/|$))+/, "")
						.replace(/\/(\.(\/|$))+/g, "/")
						.replace(/\/\.\.$/, "/../")
						.replace(/\/?[^\/]*/g, function (e) {
							"/.." === e ? h.pop() : h.push(e);
						}),
						(d = h.join("").replace(/^\//, "/" === d[0] ? "/" : "")),
						p && ((u = m.port), (l = m.hostname), (i = m.host), (s = m.password), (o = m.username)),
						a || (a = m.protocol);
				}
				"file:" == a && (d = d.replace(/\\/g, "/")),
					(this.origin = i ? a + ("" !== a || "" !== i ? "//" : "") + i : ""),
					(this.href = a + ((a && i) || "file:" == a ? "//" : "") + ("" !== o ? o + ("" !== s ? ":" + s : "") + "@" : "") + i + d + c + f),
					(this.protocol = a),
					(this.username = o),
					(this.password = s),
					(this.host = i),
					(this.hostname = l),
					(this.port = u),
					(this.pathname = d),
					(this.search = c),
					(this.hash = f);
			}
			e.URLPolyfill = t;
		})("undefined" != typeof self ? self : global),
			(function (e) {
				function t(e, t) {
					if (!e.originalErr)
						for (var r = ((e.message || e) + (e.stack ? "\n" + e.stack : "")).toString().split("\n"), n = [], a = 0; a < r.length; a++)
							("undefined" == typeof $__curScript || -1 == r[a].indexOf($__curScript.src)) && n.push(r[a]);
					var o = "(SystemJS) " + (n ? n.join("\n	") : e.message.substr(11)) + "\n	" + t;
					F || (o = o.replace(q ? /file:\/\/\//g : /file:\/\//g, ""));
					var s = N ? new Error(o, e.fileName, e.lineNumber) : new Error(o);
					return (s.stack = F ? null : o), (s.originalErr = e.originalErr || e), s;
				}
				function r() { }
				function n() {
					(this._loader = { loaderObj: this, loads: [], modules: {}, importPromises: {}, moduleRecords: {} }),
						D(this, "global", {
							get: function () {
								return e;
							},
						});
				}
				function a() {
					n.call(this), (this.paths = {}), (this._loader.paths = {}), Y.call(this);
				}
				function o() { }
				function s(e, t) {
					a.prototype[e] = t(a.prototype[e] || function () { });
				}
				function i(e) {
					Y = e(Y || function () { });
				}
				function l(e) {
					return e.match(K);
				}
				function u(e) {
					return ("." == e[0] && (!e[1] || "/" == e[1] || "." == e[1])) || "/" == e[0];
				}
				function d(e) {
					return !u(e) && !l(e);
				}
				function c(e, t) {
					if ("." == e[0]) {
						if ("/" == e[1] && "." != e[2]) return ((t && t.substr(0, t.lastIndexOf("/") + 1)) || U) + e.substr(2);
					} else if ("/" != e[0] && -1 == e.indexOf(":")) return ((t && t.substr(0, t.lastIndexOf("/") + 1)) || U) + e;
					return new X(e, (t && t.replace(/#/g, "%05")) || Q).href.replace(/%05/g, "#");
				}
				function f(e, t) {
					var r,
						n = "",
						a = 0,
						o = e.paths,
						s = e._loader.paths;
					for (var i in o)
						if (!o.hasOwnProperty || o.hasOwnProperty(i)) {
							var l = o[i];
							if ((l !== s[i] && (l = o[i] = s[i] = c(o[i], u(o[i]) ? U : e.baseURL)), -1 === i.indexOf("*"))) {
								if (t == i) return o[i];
								if (
									t.substr(0, i.length - 1) == i.substr(0, i.length - 1) &&
									(t.length < i.length || t[i.length - 1] == i[i.length - 1]) &&
									("/" == o[i][o[i].length - 1] || "" == o[i])
								)
									return o[i].substr(0, o[i].length - 1) + (t.length > i.length ? ((o[i] && "/") || "") + t.substr(i.length) : "");
							} else {
								var d = i.split("*");
								if (d.length > 2) throw new TypeError("Only one wildcard in a path is permitted");
								var f = d[0].length;
								f >= a &&
									t.substr(0, d[0].length) == d[0] &&
									t.substr(t.length - d[1].length) == d[1] &&
									((a = f), (n = i), (r = t.substr(d[0].length, t.length - d[1].length - d[0].length)));
							}
						}
					var m = o[n];
					return "string" == typeof r && (m = m.replace("*", r)), m;
				}
				function m(e) {
					for (var t = [], r = [], n = 0, a = e.length; a > n; n++) {
						var o = J.call(t, e[n]);
						-1 === o ? (t.push(e[n]), r.push([n])) : r[o].push(n);
					}
					return { names: t, indices: r };
				}
				function p(t) {
					var r = {};
					if (("object" == typeof t || "function" == typeof t) && t !== e)
						if (et) for (var n in t) "default" !== n && h(r, t, n);
						else g(r, t);
					return (r["default"] = t), D(r, "__useDefault", { value: !0 }), r;
				}
				function h(e, t, r) {
					try {
						var n;
						(n = Object.getOwnPropertyDescriptor(t, r)) && D(e, r, n);
					} catch (a) {
						return (e[r] = t[r]), !1;
					}
				}
				function g(e, t, r) {
					var n = t && t.hasOwnProperty;
					for (var a in t) (!n || t.hasOwnProperty(a)) && ((r && a in e) || (e[a] = t[a]));
					return e;
				}
				function v(e, t, r) {
					var n = t && t.hasOwnProperty;
					for (var a in t)
						if (!n || t.hasOwnProperty(a)) {
							var o = t[a];
							a in e
								? o instanceof Array && e[a] instanceof Array
									? (e[a] = [].concat(r ? o : e[a]).concat(r ? e[a] : o))
									: "object" == typeof o && null !== o && "object" == typeof e[a]
										? (e[a] = g(g({}, e[a]), o, r))
										: r || (e[a] = o)
								: (e[a] = o);
						}
				}
				function b(e, t, r, n, a) {
					for (var o in t)
						if (-1 != J.call(["main", "format", "defaultExtension", "basePath"], o)) e[o] = t[o];
						else if ("map" == o) g((e.map = e.map || {}), t.map);
						else if ("meta" == o) g((e.meta = e.meta || {}), t.meta);
						else if ("depCache" == o)
							for (var s in t.depCache) {
								var i;
								(i = "./" == s.substr(0, 2) ? r + "/" + s.substr(2) : k.call(n, s)), (n.depCache[i] = (n.depCache[i] || []).concat(t.depCache[s]));
							}
						else
							!a ||
								-1 != J.call(["browserConfig", "nodeConfig", "devConfig", "productionConfig"], o) ||
								(t.hasOwnProperty && !t.hasOwnProperty(o)) ||
								w.call(n, '"' + o + '" is not a valid package configuration option in package ' + r);
				}
				function y(e, t, r, n) {
					var a;
					if (e.packages[t]) {
						var o = e.packages[t];
						(a = e.packages[t] = {}), b(a, n ? r : o, t, e, n), b(a, n ? o : r, t, e, !n);
					} else a = e.packages[t] = r;
					return (
						"object" == typeof a.main &&
						((a.map = a.map || {}), (a.map["./@main"] = a.main), (a.main["default"] = a.main["default"] || "./"), (a.main = "@main")),
						a
					);
				}
				function w(e) {
					this.warnings && "undefined" != typeof console && console.warn && console.warn(e);
				}
				function x(e, t) {
					for (var r = e.split("."); r.length;) t = t[r.shift()];
					return t;
				}
				function S(e, t) {
					var r,
						n = 0;
					for (var a in e)
						if (t.substr(0, a.length) == a && (t.length == a.length || "/" == t[a.length])) {
							var o = a.split("/").length;
							if (n >= o) continue;
							(r = a), (n = o);
						}
					return r;
				}
				function E() {
					this._loader.baseURL !== this.baseURL &&
						("/" != this.baseURL[this.baseURL.length - 1] && (this.baseURL += "/"),
							(this._loader.baseURL = this.baseURL = new X(this.baseURL, Q).href));
				}
				function _(e, t) {
					this.set(
						"@system-env",
						(rt = this.newModule({ browser: F, node: !!this._nodeRequire, production: !t && e, dev: t || !e, build: t, "default": !0 }))
					);
				}
				function j(e, t) {
					if (!d(e)) throw new Error("Node module " + e + " can't be loaded as it is not a package require.");
					if (!nt) {
						var r = this._nodeRequire("module"),
							n = t.substr(q ? 8 : 7);
						(nt = new r(n)), (nt.paths = r._nodeModulePaths(n));
					}
					return nt.require(e);
				}
				function k(e, t) {
					if (u(e)) return c(e, t);
					if (l(e)) return e;
					var r = S(this.map, e);
					if (r) {
						if (((e = this.map[r] + e.substr(r.length)), u(e))) return c(e);
						if (l(e)) return e;
					}
					if (this.has(e)) return e;
					if ("@node/" == e.substr(0, 6)) {
						if (!this._nodeRequire) throw new TypeError("Error loading " + e + ". Can only load node core modules in Node.");
						return this.set(e, this.newModule(p(j.call(this, e.substr(6), this.baseURL)))), e;
					}
					return E.call(this), f(this, e) || this.baseURL + e;
				}
				function P(e, t, r) {
					rt.browser && t.browserConfig && r(t.browserConfig),
						rt.node && t.nodeConfig && r(t.nodeConfig),
						rt.dev && t.devConfig && r(t.devConfig),
						rt.build && t.buildConfig && r(t.buildConfig),
						rt.production && t.productionConfig && r(t.productionConfig);
				}
				function O(e) {
					var t = e.match(st);
					return t && "System.register" == e.substr(t[0].length, 15);
				}
				function R() {
					return {
						name: null,
						deps: null,
						originalIndices: null,
						declare: null,
						execute: null,
						executingRequire: !1,
						declarative: !1,
						normalizedDeps: null,
						groupIndex: null,
						evaluated: !1,
						module: null,
						esModule: null,
						esmExports: !1,
					};
				}
				function M(t) {
					if ("string" == typeof t) return x(t, e);
					if (!(t instanceof Array)) throw new Error("Global exports must be a string or array.");
					for (var r = {}, n = !0, a = 0; a < t.length; a++) {
						var o = x(t[a], e);
						n && ((r["default"] = o), (n = !1)), (r[t[a].split(".").pop()] = o);
					}
					return r;
				}
				function z(e) {
					var t,
						r,
						n,
						n = "~" == e[0],
						a = e.lastIndexOf("|");
					return (
						-1 != a
							? ((t = e.substr(a + 1)),
								(r = e.substr(n, a - n)),
								n && w.call(this, 'Condition negation form "' + e + '" is deprecated for "' + r + "|~" + t + '"'),
								"~" == t[0] && ((n = !0), (t = t.substr(1))))
							: ((t = "default"), (r = e.substr(n)), -1 != lt.indexOf(r) && ((t = r), (r = null))),
						{ module: r || "@system-env", prop: t, negate: n }
					);
				}
				function I(e) {
					return e.module + "|" + (e.negate ? "~" : "") + e.prop;
				}
				function T(e, t, r) {
					var n = this;
					return this.normalize(e.module, t).then(function (t) {
						return n.load(t).then(function () {
							var a = x(e.prop, n.get(t));
							if (r && "boolean" != typeof a) throw new TypeError("Condition " + I(e) + " did not resolve to a boolean.");
							return e.negate ? !a : a;
						});
					});
				}
				function L(e, t) {
					var r = e.match(ut);
					if (!r) return Promise.resolve(e);
					var n = z.call(this, r[0].substr(2, r[0].length - 3));
					return this.builder
						? this.normalize(n.module, t).then(function (t) {
							return (n.module = t), e.replace(ut, "#{" + I(n) + "}");
						})
						: T.call(this, n, t, !1).then(function (r) {
							if ("string" != typeof r) throw new TypeError("The condition value for " + e + " doesn't resolve to a string.");
							if (-1 != r.indexOf("/"))
								throw new TypeError(
									"Unabled to interpolate conditional " +
									e +
									(t ? " in " + t : "") +
									"\n	The condition value " +
									r +
									' cannot contain a "/" separator.'
								);
							return e.replace(ut, r);
						});
				}
				function C(e, t) {
					var r = e.lastIndexOf("#?");
					if (-1 == r) return Promise.resolve(e);
					var n = z.call(this, e.substr(r + 2));
					return this.builder
						? this.normalize(n.module, t).then(function (t) {
							return (n.module = t), e.substr(0, r) + "#?" + I(n);
						})
						: T.call(this, n, t, !0).then(function (t) {
							return t ? e.substr(0, r) : "@empty";
						});
				}
				var A = "undefined" == typeof window && "undefined" != typeof self && "undefined" != typeof importScripts,
					F = "undefined" != typeof window && "undefined" != typeof document,
					q = "undefined" != typeof process && "undefined" != typeof process.platform && !!process.platform.match(/^win/);
				e.console || (e.console = { assert: function () { } });
				var D,
					J =
						Array.prototype.indexOf ||
						function (e) {
							for (var t = 0, r = this.length; r > t; t++) if (this[t] === e) return t;
							return -1;
						};
				!(function () {
					try {
						Object.defineProperty({}, "a", {}) && (D = Object.defineProperty);
					} catch (e) {
						D = function (e, t, r) {
							try {
								e[t] = r.value || r.get.call(e);
							} catch (n) { }
						};
					}
				})();
				var U,
					N = "_" == new Error(0, "_").fileName;
				if ("undefined" != typeof document && document.getElementsByTagName) {
					if (((U = document.baseURI), !U)) {
						var $ = document.getElementsByTagName("base");
						U = ($[0] && $[0].href) || window.location.href;
					}
				} else "undefined" != typeof location && (U = e.location.href);
				if (U) (U = U.split("#")[0].split("?")[0]), (U = U.substr(0, U.lastIndexOf("/") + 1));
				else {
					if ("undefined" == typeof process || !process.cwd) throw new TypeError("No environment baseURI");
					(U = "file://" + (q ? "/" : "") + process.cwd() + "/"), q && (U = U.replace(/\\/g, "/"));
				}
				try {
					var B = "test:" == new e.URL("test:///").protocol;
				} catch (H) { }
				var X = B ? e.URL : e.URLPolyfill;
				D(r.prototype, "toString", {
					value: function () {
						return "Module";
					},
				}),
					(function () {
						function e(e) {
							return { status: "loading", name: e || "<Anonymous" + ++y + ">", linkSets: [], dependencies: [], metadata: {} };
						}
						function a(e, t, r) {
							return new Promise(
								u({
									step: r.address ? "fetch" : "locate",
									loader: e,
									moduleName: t,
									moduleMetadata: (r && r.metadata) || {},
									moduleSource: r.source,
									moduleAddress: r.address,
								})
							);
						}
						function o(t, r, n, a) {
							return new Promise(function (e) {
								e(t.loaderObj.normalize(r, n, a));
							}).then(function (r) {
								var n;
								if (t.modules[r]) return (n = e(r)), (n.status = "linked"), (n.module = t.modules[r]), n;
								for (var a = 0, o = t.loads.length; o > a; a++) if (((n = t.loads[a]), n.name == r)) return n;
								return (n = e(r)), t.loads.push(n), s(t, n), n;
							});
						}
						function s(e, t) {
							i(
								e,
								t,
								Promise.resolve().then(function () {
									return e.loaderObj.locate({ name: t.name, metadata: t.metadata });
								})
							);
						}
						function i(e, t, r) {
							l(
								e,
								t,
								r.then(function (r) {
									return "loading" == t.status ? ((t.address = r), e.loaderObj.fetch({ name: t.name, metadata: t.metadata, address: r })) : void 0;
								})
							);
						}
						function l(e, t, r) {
							r.then(function (r) {
								return "loading" == t.status
									? ((t.address = t.address || t.name),
										Promise.resolve(e.loaderObj.translate({ name: t.name, metadata: t.metadata, address: t.address, source: r }))
											.then(function (r) {
												return (t.source = r), e.loaderObj.instantiate({ name: t.name, metadata: t.metadata, address: t.address, source: r });
											})
											.then(function (e) {
												if (void 0 === e) throw new TypeError("Declarative modules unsupported in the polyfill.");
												if ("object" != typeof e) throw new TypeError("Invalid instantiate return value");
												(t.depsList = e.deps || []), (t.execute = e.execute);
											})
											.then(function () {
												t.dependencies = [];
												for (var r = t.depsList, n = [], a = 0, s = r.length; s > a; a++)
													(function (r, a) {
														n.push(
															o(e, r, t.name, t.address).then(function (e) {
																if (((t.dependencies[a] = { key: r, value: e.name }), "linked" != e.status))
																	for (var n = t.linkSets.concat([]), o = 0, s = n.length; s > o; o++) c(n[o], e);
															})
														);
													})(r[a], a);
												return Promise.all(n);
											})
											.then(function () {
												console.assert("loading" == t.status, "is loading"), (t.status = "loaded");
												for (var e = t.linkSets.concat([]), r = 0, n = e.length; n > r; r++) m(e[r], t);
											}))
									: void 0;
							})["catch"](function (e) {
								(t.status = "failed"), (t.exception = e);
								for (var r = t.linkSets.concat([]), n = 0, a = r.length; a > n; n++) p(r[n], t, e);
								console.assert(0 == t.linkSets.length, "linkSets not removed");
							});
						}
						function u(t) {
							return function (r) {
								var n = t.loader,
									a = t.moduleName,
									o = t.step;
								if (n.modules[a]) throw new TypeError('"' + a + '" already exists in the module table');
								for (var u, c = 0, f = n.loads.length; f > c; c++)
									if (
										n.loads[c].name == a &&
										((u = n.loads[c]),
											"translate" != o || u.source || ((u.address = t.moduleAddress), l(n, u, Promise.resolve(t.moduleSource))),
											u.linkSets.length && u.linkSets[0].loads[0].name == u.name)
									)
										return u.linkSets[0].done.then(function () {
											r(u);
										});
								var m = u || e(a);
								m.metadata = t.moduleMetadata;
								var p = d(n, m);
								n.loads.push(m),
									r(p.done),
									"locate" == o
										? s(n, m)
										: "fetch" == o
											? i(n, m, Promise.resolve(t.moduleAddress))
											: (console.assert("translate" == o, "translate step"), (m.address = t.moduleAddress), l(n, m, Promise.resolve(t.moduleSource)));
							};
						}
						function d(e, t) {
							var r = { loader: e, loads: [], startingLoad: t, loadingCount: 0 };
							return (
								(r.done = new Promise(function (e, t) {
									(r.resolve = e), (r.reject = t);
								})),
								c(r, t),
								r
							);
						}
						function c(e, t) {
							if ("failed" != t.status) {
								for (var r = 0, n = e.loads.length; n > r; r++) if (e.loads[r] == t) return;
								e.loads.push(t), t.linkSets.push(e), "loaded" != t.status && e.loadingCount++;
								for (var a = e.loader, r = 0, n = t.dependencies.length; n > r; r++)
									if (t.dependencies[r]) {
										var o = t.dependencies[r].value;
										if (!a.modules[o])
											for (var s = 0, i = a.loads.length; i > s; s++)
												if (a.loads[s].name == o) {
													c(e, a.loads[s]);
													break;
												}
									}
							}
						}
						function f(e) {
							var t = !1;
							try {
								b(e, function (r, n) {
									p(e, r, n), (t = !0);
								});
							} catch (r) {
								p(e, null, r), (t = !0);
							}
							return t;
						}
						function m(e, t) {
							if ((console.assert("loaded" == t.status || "linked" == t.status, "loaded or linked"), e.loadingCount-- , !(e.loadingCount > 0))) {
								var r = e.startingLoad;
								if (e.loader.loaderObj.execute === !1) {
									for (var n = [].concat(e.loads), a = 0, o = n.length; o > a; a++) {
										var t = n[a];
										(t.module = { name: t.name, module: w({}), evaluated: !0 }), (t.status = "linked"), h(e.loader, t);
									}
									return e.resolve(r);
								}
								var s = f(e);
								s || (console.assert(0 == e.loads.length, "loads cleared"), e.resolve(r));
							}
						}
						function p(e, r, n) {
							var a = e.loader;
							e: if (r)
								if (e.loads[0].name == r.name) n = t(n, "Error loading " + r.name);
								else {
									for (var o = 0; o < e.loads.length; o++)
										for (var s = e.loads[o], i = 0; i < s.dependencies.length; i++) {
											var l = s.dependencies[i];
											if (l.value == r.name) {
												n = t(n, "Error loading " + r.name + ' as "' + l.key + '" from ' + s.name);
												break e;
											}
										}
									n = t(n, "Error loading " + r.name + " from " + e.loads[0].name);
								}
							else n = t(n, "Error linking " + e.loads[0].name);
							for (var u = e.loads.concat([]), o = 0, d = u.length; d > o; o++) {
								var r = u[o];
								(a.loaderObj.failed = a.loaderObj.failed || []), -1 == J.call(a.loaderObj.failed, r) && a.loaderObj.failed.push(r);
								var c = J.call(r.linkSets, e);
								if ((console.assert(-1 != c, "link not present"), r.linkSets.splice(c, 1), 0 == r.linkSets.length)) {
									var f = J.call(e.loader.loads, r);
									-1 != f && e.loader.loads.splice(f, 1);
								}
							}
							e.reject(n);
						}
						function h(e, t) {
							if (e.loaderObj.trace) {
								e.loaderObj.loads || (e.loaderObj.loads = {});
								var r = {};
								t.dependencies.forEach(function (e) {
									r[e.key] = e.value;
								}),
									(e.loaderObj.loads[t.name] = {
										name: t.name,
										deps: t.dependencies.map(function (e) {
											return e.key;
										}),
										depMap: r,
										address: t.address,
										metadata: t.metadata,
										source: t.source,
									});
							}
							t.name &&
								(console.assert(!e.modules[t.name] || e.modules[t.name].module === t.module.module, "load not in module table"),
									(e.modules[t.name] = t.module));
							var n = J.call(e.loads, t);
							-1 != n && e.loads.splice(n, 1);
							for (var a = 0, o = t.linkSets.length; o > a; a++) (n = J.call(t.linkSets[a].loads, t)), -1 != n && t.linkSets[a].loads.splice(n, 1);
							t.linkSets.splice(0, t.linkSets.length);
						}
						function g(e, t, n) {
							try {
								var a = t.execute();
							} catch (o) {
								return void n(t, o);
							}
							return a && a instanceof r ? a : void n(t, new TypeError("Execution must define a Module instance"));
						}
						function v(e, t, r) {
							var n = e._loader.importPromises;
							return (n[t] = r.then(
								function (e) {
									return (n[t] = void 0), e;
								},
								function (e) {
									throw ((n[t] = void 0), e);
								}
							));
						}
						function b(e, t) {
							var r = e.loader;
							if (e.loads.length)
								for (var n = e.loads.concat([]), a = 0; a < n.length; a++) {
									var o = n[a],
										s = g(e, o, t);
									if (!s) return;
									(o.module = { name: o.name, module: s }), (o.status = "linked"), h(r, o);
								}
						}
						var y = 0;
						n.prototype = {
							constructor: n,
							define: function (e, t, r) {
								if (this._loader.importPromises[e]) throw new TypeError("Module is already loading.");
								return v(
									this,
									e,
									new Promise(
										u({
											step: "translate",
											loader: this._loader,
											moduleName: e,
											moduleMetadata: (r && r.metadata) || {},
											moduleSource: t,
											moduleAddress: r && r.address,
										})
									)
								);
							},
							"delete": function (e) {
								var t = this._loader;
								return delete t.importPromises[e], delete t.moduleRecords[e], t.modules[e] ? delete t.modules[e] : !1;
							},
							get: function (e) {
								return this._loader.modules[e] ? this._loader.modules[e].module : void 0;
							},
							has: function (e) {
								return !!this._loader.modules[e];
							},
							"import": function (e, t) {
								"object" == typeof t && (t = t.name);
								var r = this;
								return Promise.resolve(r.normalize(e, t)).then(function (e) {
									var t = r._loader;
									return t.modules[e]
										? t.modules[e].module
										: t.importPromises[e] ||
										v(
											r,
											e,
											a(t, e, {}).then(function (r) {
												return delete t.importPromises[e], r.module.module;
											})
										);
								});
							},
							load: function (e) {
								var t = this._loader;
								return t.modules[e]
									? Promise.resolve()
									: t.importPromises[e] ||
									v(
										this,
										e,
										new Promise(
											u({ step: "locate", loader: t, moduleName: e, moduleMetadata: {}, moduleSource: void 0, moduleAddress: void 0 })
										).then(function () {
											delete t.importPromises[e];
										})
									);
							},
							module: function (t, r) {
								var n = e();
								n.address = r && r.address;
								var a = d(this._loader, n),
									o = Promise.resolve(t),
									s = this._loader,
									i = a.done.then(function () {
										return n.module.module;
									});
								return l(s, n, o), i;
							},
							newModule: function (e) {
								if ("object" != typeof e) throw new TypeError("Expected object");
								var t = new r(),
									n = [];
								if (Object.getOwnPropertyNames && null != e) n = Object.getOwnPropertyNames(e);
								else for (var a in e) n.push(a);
								for (var o = 0; o < n.length; o++)
									(function (r) {
										D(t, r, {
											configurable: !1,
											enumerable: !0,
											get: function () {
												return e[r];
											},
											set: function () {
												throw new Error("Module exports cannot be changed externally.");
											},
										});
									})(n[o]);
								return Object.freeze && Object.freeze(t), t;
							},
							set: function (e, t) {
								if (!(t instanceof r)) throw new TypeError("Loader.set(" + e + ", module) must be a module");
								this._loader.modules[e] = { module: t };
							},
							normalize: function () { },
							locate: function (e) {
								return e.name;
							},
							fetch: function () { },
							translate: function (e) {
								return e.source;
							},
							instantiate: function () { },
						};
						var w = n.prototype.newModule;
					})();
				var G, Z;
				if ("undefined" != typeof XMLHttpRequest)
					Z = function (e, t, r, n) {
						function a() {
							r(s.responseText);
						}
						function o() {
							n(new Error("XHR error" + (s.status ? " (" + s.status + (s.statusText ? " " + s.statusText : "") + ")" : "") + " loading " + e));
						}
						var s = new XMLHttpRequest(),
							i = !0,
							l = !1;
						if (!("withCredentials" in s)) {
							var u = /^(\w+:)?\/\/([^\/]+)/.exec(e);
							u && ((i = u[2] === window.location.host), u[1] && (i &= u[1] === window.location.protocol));
						}
						i ||
							"undefined" == typeof XDomainRequest ||
							((s = new XDomainRequest()),
								(s.onload = a),
								(s.onerror = o),
								(s.ontimeout = o),
								(s.onprogress = function () { }),
								(s.timeout = 0),
								(l = !0)),
							(s.onreadystatechange = function () {
								4 === s.readyState &&
									(0 == s.status
										? s.responseText
											? a()
											: (s.addEventListener("error", o), s.addEventListener("load", a))
										: 200 === s.status
											? a()
											: o());
							}),
							s.open("GET", e, !0),
							s.setRequestHeader &&
							(s.setRequestHeader("Accept", "application/x-es-module, */*"),
								t && ("string" == typeof t && s.setRequestHeader("Authorization", t), (s.withCredentials = !0))),
							l
								? setTimeout(function () {
									s.send();
								}, 0)
								: s.send(null);
					};
				else if ("undefined" != typeof require && "undefined" != typeof process) {
					var W;
					Z = function (e, t, r, n) {
						if ("file:///" != e.substr(0, 8))
							throw new Error('Unable to fetch "' + e + '". Only file URLs of the form file:/// allowed running in Node.');
						return (
							(W = W || require("fs")),
							(e = q ? e.replace(/\//g, "\\").substr(8) : e.substr(7)),
							W.readFile(e, function (e, t) {
								if (e) return n(e);
								var a = t + "";
								"ï»¿" === a[0] && (a = a.substr(1)), r(a);
							})
						);
					};
				} else {
					if ("undefined" == typeof self || "undefined" == typeof self.fetch) throw new TypeError("No environment fetch API available.");
					Z = function (e, t, r, n) {
						var a = { headers: { Accept: "application/x-es-module, */*" } };
						t && ("string" == typeof t && (a.headers.Authorization = t), (a.credentials = "include")),
							fetch(e, a)
								.then(function (e) {
									if (e.ok) return e.text();
									throw new Error("Fetch error: " + e.status + " " + e.statusText);
								})
								.then(r, n);
					};
				}
				var V = (function () {
					function t(t) {
						var n = this;
						return Promise.resolve(e["typescript" == n.transpiler ? "ts" : n.transpiler] || (n.pluginLoader || n)["import"](n.transpiler)).then(
							function (e) {
								e.__useDefault && (e = e["default"]);
								var a;
								return (
									(a = e.Compiler ? r : e.createLanguageService ? s : o),
									"(function(__moduleName){" + a.call(n, t, e) + '\n})("' + t.name + '");\n//# sourceURL=' + t.address + "!transpiled"
								);
							}
						);
					}
					function r(e, t) {
						var r = this.traceurOptions || {};
						(r.modules = "instantiate"),
							(r.script = !1),
							void 0 === r.sourceMaps && (r.sourceMaps = "inline"),
							(r.filename = e.address),
							(r.inputSourceMap = e.metadata.sourceMap),
							(r.moduleName = !1);
						var n = new t.Compiler(r);
						return a(e.source, n, r.filename);
					}
					function a(e, t, r) {
						try {
							return t.compile(e, r);
						} catch (n) {
							if (n.length) throw n[0];
							throw n;
						}
					}
					function o(e, t) {
						var r = this.babelOptions || {};
						return (
							(r.modules = "system"),
							void 0 === r.sourceMap && (r.sourceMap = "inline"),
							(r.inputSourceMap = e.metadata.sourceMap),
							(r.filename = e.address),
							(r.code = !0),
							(r.ast = !1),
							t.transform(e.source, r).code
						);
					}
					function s(e, t) {
						var r = this.typescriptOptions || {};
						return (
							(r.target = r.target || t.ScriptTarget.ES5),
							void 0 === r.sourceMap && (r.sourceMap = !0),
							r.sourceMap && r.inlineSourceMap !== !1 && (r.inlineSourceMap = !0),
							(r.module = t.ModuleKind.System),
							t.transpile(e.source, r, e.address)
						);
					}
					return (n.prototype.transpiler = "traceur"), t;
				})();
				(o.prototype = n.prototype), (a.prototype = new o()), (a.prototype.constructor = a);
				var Y,
					K = /^[^\/]+:\/\//,
					Q = new X(U),
					et = !0;
				try {
					Object.getOwnPropertyDescriptor({ a: 0 }, "a");
				} catch (H) {
					et = !1;
				}
				var tt;
				!(function () {
					function r(e) {
						return (
							console.log("INLINE"),
							console.log(e),
							l ? c + new Buffer(e).toString("base64") : "undefined" != typeof btoa ? c + btoa(unescape(encodeURIComponent(e))) : ""
						);
					}
					function n(e, t) {
						var n = e.source.lastIndexOf("\n");
						"global" == e.metadata.format && (t = !1);
						var a = e.metadata.sourceMap;
						if (a) {
							if ("object" != typeof a) throw new TypeError("load.metadata.sourceMap must be set to an object.");
							a = JSON.stringify(a);
						}
						return (
							(t ? "(function(System, SystemJS) {" : "") +
							e.source +
							(t ? "\n})(System, System);" : "") +
							("\n//# sourceURL=" != e.source.substr(n, 15) ? "\n//# sourceURL=" + e.address + (a ? "!transpiled" : "") : "") +
							((a && r(a)) || "")
						);
					}
					function a(t, r) {
						(d = r), 0 == p++ && (f = e.System), (e.System = e.SystemJS = t);
					}
					function o() {
						0 == --p && (e.System = e.SystemJS = f), (d = void 0);
					}
					function i(e) {
						b || (b = document.head || document.body || document.documentElement);
						var r = document.createElement("script");
						r.text = n(e, !1);
						var s,
							i = window.onerror;
						if (
							((window.onerror = function (r) {
								(s = t(r, "Evaluating " + e.address)), i && i.apply(this, arguments);
							}),
								a(this, e),
								e.metadata.integrity && r.setAttribute("integrity", e.metadata.integrity),
								e.metadata.nonce && r.setAttribute("nonce", e.metadata.nonce),
								b.appendChild(r),
								b.removeChild(r),
								o(),
								(window.onerror = i),
								s)
						)
							throw s;
					}
					var l = "undefined" != typeof Buffer;
					try {
						"YQ==" != new Buffer("a").toString("base64") && (l = !1);
					} catch (u) {
						l = !1;
					}
					var d,
						c = "\n//# sourceMappingURL=data:application/json;base64,";
					s("pushRegister_", function () {
						return function (e) {
							return d ? (this.reduceRegister_(d, e), !0) : !1;
						};
					});
					var f,
						m,
						p = 0,
						h = "undefined" != typeof process && process.versions && process.versions["node-webkit"];
					tt = function (e) {
						if (e.source) {
							if ((e.metadata.integrity || e.metadata.nonce) && g) return i.call(this, e);
							try {
								a(this, e),
									(d = e),
									this._nodeRequire && !h
										? ((m = m || this._nodeRequire("vm")),
											m.runInThisContext(n(e, !0), { filename: e.address + (e.metadata.sourceMap ? "!transpiled" : "") }))
										: (0, eval)(n(e, !0)),
									o();
							} catch (r) {
								throw (o(), t(r, "Evaluating " + e.address));
							}
						}
					};
					var g = !1;
					if (F && "undefined" != typeof document && document.getElementsByTagName) {
						var v = document.getElementsByTagName("script");
						($__curScript = v[v.length - 1]), (window.chrome && window.chrome.extension) || navigator.userAgent.match(/^Node\.js/) || (g = !0);
					}
					var b;
				})();
				var rt;
				i(function (e) {
					return function () {
						e.call(this),
							(this.baseURL = U),
							(this.map = {}),
							(this.warnings = !1),
							(this.defaultJSExtensions = !1),
							(this.pluginFirst = !1),
							(this.loaderErrorStack = !1),
							this.set("@empty", this.newModule({})),
							_.call(this, !1, !1);
					};
				}),
					"undefined" == typeof require || "undefined" == typeof process || process.browser || (a.prototype._nodeRequire = require);
				var nt;
				s("normalize", function () {
					return function (e, t, r) {
						var n = k.call(this, e, t);
						return !this.defaultJSExtensions || r || ".js" == n.substr(n.length - 3, 3) || d(n) || (n += ".js"), n;
					};
				});
				var at = "undefined" != typeof XMLHttpRequest;
				s("locate", function (e) {
					return function (t) {
						return Promise.resolve(e.call(this, t)).then(function (e) {
							return at ? e.replace(/#/g, "%23") : e;
						});
					};
				}),
					s("fetch", function () {
						return function (e) {
							return new Promise(function (t, r) {
								Z(e.address, e.metadata.authorization, t, r);
							});
						};
					}),
					s("import", function (e) {
						return function (t, r, n) {
							return (
								r &&
								r.name &&
								w.call(
									this,
									"SystemJS.import(name, { name: parentName }) is deprecated for SystemJS.import(name, parentName), while importing " +
									t +
									" from " +
									r.name
								),
								e.call(this, t, r, n).then(function (e) {
									return e.__useDefault ? e["default"] : e;
								})
							);
						};
					}),
					s("translate", function (e) {
						return function (t) {
							return "detect" == t.metadata.format && (t.metadata.format = void 0), e.apply(this, arguments);
						};
					}),
					s("instantiate", function () {
						return function (e) {
							if ("json" == e.metadata.format && !this.builder) {
								var t = (e.metadata.entry = R());
								(t.deps = []),
									(t.execute = function () {
										try {
											return JSON.parse(e.source);
										} catch (t) {
											throw new Error("Invalid JSON file " + e.name);
										}
									});
							}
						};
					}),
					(a.prototype.getConfig = function () {
						var e = {},
							t = this;
						for (var r in t)
							(t.hasOwnProperty && !t.hasOwnProperty(r)) ||
								(r in a.prototype && "transpiler" != r) ||
								(-1 == J.call(["_loader", "amdDefine", "amdRequire", "defined", "failed", "version"], r) && (e[r] = t[r]));
						return (e.production = rt.production), e;
					});
				var ot;
				(a.prototype.config = function (e, t) {
					function r(e) {
						for (var t in e) if (e.hasOwnProperty(t)) return !0;
					}
					var n = this;
					if (
						("loaderErrorStack" in e && ((ot = $__curScript), ($__curScript = e.loaderErrorStack ? void 0 : ot)),
							"warnings" in e && (n.warnings = e.warnings),
							e.transpilerRuntime === !1 && (n._loader.loadedTranspilerRuntime = !0),
							("production" in e || "build" in e) && _.call(n, !!e.production, !!(e.build || (rt && rt.build))),
							!t)
					) {
						var a;
						if (
							(P(n, e, function (e) {
								a = a || e.baseURL;
							}),
								(a = a || e.baseURL))
						) {
							if (r(n.packages) || r(n.meta) || r(n.depCache) || r(n.bundles) || r(n.packageConfigPaths))
								throw new TypeError("Incorrect configuration order. The baseURL must be configured with the first SystemJS.config call.");
							(this.baseURL = a), E.call(this);
						}
						if (
							(e.paths && g(n.paths, e.paths),
								P(n, e, function (e) {
									e.paths && g(n.paths, e.paths);
								}),
								this.warnings)
						)
							for (var o in n.paths)
								-1 != o.indexOf("*") &&
									w.call(
										n,
										'Paths configuration "' +
										o +
										'" -> "' +
										n.paths[o] +
										'" uses wildcards which are being deprecated for simpler trailing "/" folder paths.'
									);
					}
					if (
						(e.defaultJSExtensions &&
							((n.defaultJSExtensions = e.defaultJSExtensions),
								w.call(n, "The defaultJSExtensions configuration option is deprecated, use packages configuration instead.")),
							e.pluginFirst && (n.pluginFirst = e.pluginFirst),
							e.map)
					) {
						var s = "";
						for (var o in e.map) {
							var i = e.map[o];
							if ("string" != typeof i) {
								s += (s.length ? ", " : "") + '"' + o + '"';
								var l = n.defaultJSExtensions && ".js" != o.substr(o.length - 3, 3),
									u = n.decanonicalize(o);
								l && ".js" == u.substr(u.length - 3, 3) && (u = u.substr(0, u.length - 3));
								var c = "";
								for (var f in n.packages)
									u.substr(0, f.length) == f && (!u[f.length] || "/" == u[f.length]) && c.split("/").length < f.split("/").length && (c = f);
								c && n.packages[c].main && (u = u.substr(0, u.length - n.packages[c].main.length - 1));
								var f = (n.packages[u] = n.packages[u] || {});
								f.map = i;
							} else n.map[o] = i;
						}
						s &&
							w.call(
								n,
								"The map configuration for " +
								s +
								' uses object submaps, which is deprecated in global map.\nUpdate this to use package contextual map with configs like SystemJS.config({ packages: { "' +
								o +
								'": { map: {...} } } }).'
							);
					}
					if (e.packageConfigPaths) {
						for (var m = [], p = 0; p < e.packageConfigPaths.length; p++) {
							var h = e.packageConfigPaths[p],
								v = Math.max(h.lastIndexOf("*") + 1, h.lastIndexOf("/")),
								b = k.call(n, h.substr(0, v));
							m[p] = b + h.substr(v);
						}
						n.packageConfigPaths = m;
					}
					if (e.bundles)
						for (var o in e.bundles) {
							for (var x = [], p = 0; p < e.bundles[o].length; p++) {
								var l = n.defaultJSExtensions && ".js" != e.bundles[o][p].substr(e.bundles[o][p].length - 3, 3),
									S = n.decanonicalize(e.bundles[o][p]);
								l && ".js" == S.substr(S.length - 3, 3) && (S = S.substr(0, S.length - 3)), x.push(S);
							}
							n.bundles[o] = x;
						}
					if (e.packages)
						for (var o in e.packages) {
							if (o.match(/^([^\/]+:)?\/\/$/)) throw new TypeError('"' + o + '" is not a valid package name.');
							var u = k.call(n, o);
							"/" == u[u.length - 1] && (u = u.substr(0, u.length - 1)), y(n, u, e.packages[o], !1);
						}
					for (var j in e) {
						var i = e[j];
						if (
							-1 ==
							J.call(
								[
									"baseURL",
									"map",
									"packages",
									"bundles",
									"paths",
									"warnings",
									"packageConfigPaths",
									"loaderErrorStack",
									"browserConfig",
									"nodeConfig",
									"devConfig",
									"buildConfig",
									"productionConfig",
								],
								j
							)
						)
							if ("object" != typeof i || i instanceof Array) n[j] = i;
							else {
								n[j] = n[j] || {};
								for (var o in i)
									if ("meta" == j && "*" == o[0]) g((n[j][o] = n[j][o] || {}), i[o]);
									else if ("meta" == j) {
										var O = k.call(n, o);
										n.defaultJSExtensions && ".js" != O.substr(O.length - 3, 3) && !d(O) && (O += ".js"), g((n[j][O] = n[j][O] || {}), i[o]);
									} else if ("depCache" == j) {
										var l = n.defaultJSExtensions && ".js" != o.substr(o.length - 3, 3),
											u = n.decanonicalize(o);
										l && ".js" == u.substr(u.length - 3, 3) && (u = u.substr(0, u.length - 3)), (n[j][u] = [].concat(i[o]));
									} else n[j][o] = i[o];
							}
					}
					P(n, e, function (e) {
						n.config(e, !0);
					});
				}),
					(function () {
						function e(e, t) {
							var r,
								n,
								a = 0;
							for (var o in e.packages)
								t.substr(0, o.length) !== o ||
									(t.length !== o.length && "/" !== t[o.length]) ||
									((n = o.split("/").length), n > a && ((r = o), (a = n)));
							return r;
						}
						function t(e, t, r, n, a) {
							if (!n || "/" == n[n.length - 1] || a || t.defaultExtension === !1) return n;
							var o = !1;
							if (
								(t.meta &&
									p(t.meta, n, function (e, t, r) {
										return 0 == r || e.lastIndexOf("*") != e.length - 1 ? (o = !0) : void 0;
									}),
									!o &&
									e.meta &&
									p(e.meta, r + "/" + n, function (e, t, r) {
										return 0 == r || e.lastIndexOf("*") != e.length - 1 ? (o = !0) : void 0;
									}),
									o)
							)
								return n;
							var s = "." + (t.defaultExtension || "js");
							return n.substr(n.length - s.length) != s ? n + s : n;
						}
						function r(e, r, n, a, s) {
							if (!a) {
								if (!r.main) return n + (e.defaultJSExtensions ? ".js" : "");
								a = "./" == r.main.substr(0, 2) ? r.main.substr(2) : r.main;
							}
							if (r.map) {
								var i = "./" + a,
									l = S(r.map, i);
								if ((l || ((i = "./" + t(e, r, n, a, s)), i != "./" + a && (l = S(r.map, i))), l)) {
									var u = o(e, r, n, l, i, s);
									if (u) return u;
								}
							}
							return n + "/" + t(e, r, n, a, s);
						}
						function n(e, t, r, n) {
							if ("." == e) throw new Error("Package " + r + ' has a map entry for "." which is not permitted.');
							return t.substr(0, e.length) == e && n.length > e.length ? !1 : !0;
						}
						function o(e, r, a, o, s, i) {
							"/" == s[s.length - 1] && (s = s.substr(0, s.length - 1));
							var l = r.map[o];
							if ("object" == typeof l) throw new Error("Synchronous conditional normalization not supported sync normalizing " + o + " in " + a);
							if (n(o, l, a, s) && "string" == typeof l) {
								if ("." == l) l = a;
								else if ("./" == l.substr(0, 2)) return a + "/" + t(e, r, a, l.substr(2) + s.substr(o.length), i);
								return e.normalizeSync(l + s.substr(o.length), a + "/");
							}
						}
						function l(e, r, n, a, o) {
							if (!a) {
								if (!r.main) return Promise.resolve(n + (e.defaultJSExtensions ? ".js" : ""));
								a = "./" == r.main.substr(0, 2) ? r.main.substr(2) : r.main;
							}
							var s, i;
							return (
								r.map && ((s = "./" + a), (i = S(r.map, s)), i || ((s = "./" + t(e, r, n, a, o)), s != "./" + a && (i = S(r.map, s)))),
								(i ? d(e, r, n, i, s, o) : Promise.resolve()).then(function (s) {
									return Promise.resolve(s ? s : n + "/" + t(e, r, n, a, o));
								})
							);
						}
						function u(e, r, n, a, o, s, i) {
							if ("." == o) o = n;
							else if ("./" == o.substr(0, 2))
								return Promise.resolve(n + "/" + t(e, r, n, o.substr(2) + s.substr(a.length), i)).then(function (t) {
									return L.call(e, t, n + "/");
								});
							return e.normalize(o + s.substr(a.length), n + "/");
						}
						function d(e, t, r, a, o, s) {
							"/" == o[o.length - 1] && (o = o.substr(0, o.length - 1));
							var i = t.map[a];
							if ("string" == typeof i) return n(a, i, r, o) ? u(e, t, r, a, i, o, s) : Promise.resolve();
							if (e.builder) return Promise.resolve(r + "/#:" + o);
							var l = [],
								d = [];
							for (var c in i) {
								var f = z(c);
								d.push({ condition: f, map: i[c] }), l.push(e["import"](f.module, r));
							}
							return Promise.all(l)
								.then(function (e) {
									for (var t = 0; t < d.length; t++) {
										var r = d[t].condition,
											n = x(r.prop, e[t]);
										if ((!r.negate && n) || (r.negate && !n)) return d[t].map;
									}
								})
								.then(function (i) {
									if (i) {
										if (!n(a, i, r, o)) return;
										return u(e, t, r, a, i, o, s);
									}
								});
						}
						function c(e) {
							var t = e.lastIndexOf("*"),
								r = Math.max(t + 1, e.lastIndexOf("/"));
							return {
								length: r,
								regEx: new RegExp(
									"^(" +
									e
										.substr(0, r)
										.replace(/[.+?^${}()|[\]\\]/g, "\\$&")
										.replace(/\*/g, "[^\\/]+") +
									")(\\/|$)"
								),
								wildcard: -1 != t,
							};
						}
						function f(e, t) {
							for (var r, n, a = !1, o = 0; o < e.packageConfigPaths.length; o++) {
								var s = e.packageConfigPaths[o],
									i = h[s] || (h[s] = c(s));
								if (!(t.length < i.length)) {
									var l = t.match(i.regEx);
									!l || (r && ((a && i.wildcard) || !(r.length < l[1].length))) || ((r = l[1]), (a = !i.wildcard), (n = r + s.substr(i.length)));
								}
							}
							return r ? { packageName: r, configPath: n } : void 0;
						}
						function m(e, t, r) {
							var n = e.pluginLoader || e;
							return (
								((n.meta[r] = n.meta[r] || {}).format = "json"),
								(n.meta[r].loader = null),
								n.load(r).then(function () {
									var a = n.get(r)["default"];
									return (
										a.systemjs && (a = a.systemjs),
										a.modules &&
										((a.meta = a.modules),
											w.call(e, "Package config file " + r + ' is configured with "modules", which is deprecated as it has been renamed to "meta".')),
										y(e, t, a, !0)
									);
								})
							);
						}
						function p(e, t, r) {
							var n;
							for (var a in e) {
								var o = "./" == a.substr(0, 2) ? "./" : "";
								if (
									(o && (a = a.substr(2)),
										(n = a.indexOf("*")),
										-1 !== n &&
										a.substr(0, n) == t.substr(0, n) &&
										a.substr(n + 1) == t.substr(t.length - a.length + n + 1) &&
										r(a, e[o + a], a.split("/").length))
								)
									return;
							}
							var s = e[t] && e.hasOwnProperty && e.hasOwnProperty(t) ? e[t] : e["./" + t];
							s && r(s, s, 0);
						}
						i(function (e) {
							return function () {
								e.call(this), (this.packages = {}), (this.packageConfigPaths = []);
							};
						}),
							(a.prototype.normalizeSync = a.prototype.decanonicalize = a.prototype.normalize),
							s("decanonicalize", function (t) {
								return function (r, n) {
									if (this.builder) return t.call(this, r, n, !0);
									var a = t.call(this, r, n, !1);
									if (!this.defaultJSExtensions) return a;
									var o = e(this, a),
										s = this.packages[o],
										i = s && s.defaultExtension;
									return (
										void 0 == i &&
										s &&
										s.meta &&
										p(s.meta, a.substr(o), function (e, t, r) {
											return 0 == r || e.lastIndexOf("*") != e.length - 1 ? ((i = !1), !0) : void 0;
										}),
										(i === !1 || (i && ".js" != i)) &&
										".js" != r.substr(r.length - 3, 3) &&
										".js" == a.substr(a.length - 3, 3) &&
										(a = a.substr(0, a.length - 3)),
										a
									);
								};
							}),
							s("normalizeSync", function (t) {
								return function (n, a, s) {
									var i = this;
									if (((s = s === !0), a))
										var l = e(i, a) || (i.defaultJSExtensions && ".js" == a.substr(a.length - 3, 3) && e(i, a.substr(0, a.length - 3)));
									var u = l && i.packages[l];
									if (u && "." != n[0]) {
										var d = u.map,
											c = d && S(d, n);
										if (c && "string" == typeof d[c]) {
											var m = o(i, u, l, c, n, s);
											if (m) return m;
										}
									}
									var p = i.defaultJSExtensions && ".js" != n.substr(n.length - 3, 3),
										h = t.call(i, n, a, !1);
									p && ".js" != h.substr(h.length - 3, 3) && (p = !1), p && (h = h.substr(0, h.length - 3));
									var g = f(i, h),
										v = (g && g.packageName) || e(i, h);
									if (!v) return h + (p ? ".js" : "");
									var b = h.substr(v.length + 1);
									return r(i, i.packages[v] || {}, v, b, s);
								};
							}),
							s("normalize", function (t) {
								return function (r, n, a) {
									var o = this;
									return (
										(a = a === !0),
										Promise.resolve()
											.then(function () {
												if (n) var t = e(o, n) || (o.defaultJSExtensions && ".js" == n.substr(n.length - 3, 3) && e(o, n.substr(0, n.length - 3)));
												var s = t && o.packages[t];
												if (s && "./" != r.substr(0, 2)) {
													var i = s.map,
														l = i && S(i, r);
													if (l) return d(o, s, t, l, r, a);
												}
												return Promise.resolve();
											})
											.then(function (s) {
												if (s) return s;
												var i = o.defaultJSExtensions && ".js" != r.substr(r.length - 3, 3),
													u = t.call(o, r, n, !1);
												i && ".js" != u.substr(u.length - 3, 3) && (i = !1), i && (u = u.substr(0, u.length - 3));
												var d = f(o, u),
													c = (d && d.packageName) || e(o, u);
												if (!c) return Promise.resolve(u + (i ? ".js" : ""));
												var p = o.packages[c],
													h = p && (p.configured || !d);
												return (h ? Promise.resolve(p) : m(o, c, d.configPath)).then(function (e) {
													var t = u.substr(c.length + 1);
													return l(o, e, c, t, a);
												});
											})
									);
								};
							});
						var h = {};
						s("locate", function (t) {
							return function (r) {
								var n = this;
								return Promise.resolve(t.call(this, r)).then(function (t) {
									var a = e(n, r.name);
									if (a) {
										var o = n.packages[a],
											s = r.name.substr(a.length + 1),
											i = {};
										if (o.meta) {
											var l = 0;
											p(o.meta, s, function (e, t, r) {
												r > l && (l = r), v(i, t, r && l > r);
											}),
												v(r.metadata, i);
										}
										o.format && !r.metadata.loader && (r.metadata.format = r.metadata.format || o.format);
									}
									return t;
								});
							};
						});
					})(),
					(function () {
						function t() {
							if (i && "interactive" === i.script.readyState) return i.load;
							for (var e = 0; e < d.length; e++) if ("interactive" == d[e].script.readyState) return (i = d[e]), i.load;
						}
						function r(e, t) {
							return new Promise(function (e, r) {
								t.metadata.integrity && r(new Error("Subresource integrity checking is not supported in web workers.")), (l = t);
								try {
									importScripts(t.address);
								} catch (n) {
									(l = null), r(n);
								}
								(l = null),
									t.metadata.entry ||
									r(
										new Error(
											t.address + " did not call System.register or AMD define. If loading a global, ensure the meta format is set to global."
										)
									),
									e("");
							});
						}
						if ("undefined" != typeof document) var n = document.getElementsByTagName("head")[0];
						var a,
							o,
							i,
							l = null,
							u =
								n &&
								(function () {
									var e = document.createElement("script"),
										t = "undefined" != typeof opera && "[object Opera]" === opera.toString();
									return e.attachEvent && !(e.attachEvent.toString && e.attachEvent.toString().indexOf("[native code") < 0) && !t;
								})(),
							d = [],
							c = 0,
							f = [];
						s("pushRegister_", function (e) {
							return function (r) {
								return e.call(this, r)
									? !1
									: (l ? this.reduceRegister_(l, r) : u ? this.reduceRegister_(t(), r) : c ? f.push(r) : this.reduceRegister_(null, r), !0);
							};
						}),
							s("fetch", function (t) {
								return function (s) {
									var l = this;
									return "json" != s.metadata.format && s.metadata.scriptLoad && (F || A)
										? A
											? r(l, s)
											: new Promise(function (t, r) {
												function m() {
													if (!g.readyState || "loaded" == g.readyState || "complete" == g.readyState) {
														if ((c-- , s.metadata.entry || f.length)) {
															if (!u) {
																for (var e = 0; e < f.length; e++) l.reduceRegister_(s, f[e]);
																f = [];
															}
														} else l.reduceRegister_(s);
														h(),
															s.metadata.entry ||
															s.metadata.bundle ||
															r(
																new Error(
																	s.name +
																	" did not call System.register or AMD define. If loading a global module configure the global name via the meta exports property for script injection support."
																)
															),
															t("");
													}
												}
												function p() {
													h(), r(new Error("Unable to load script " + s.address));
												}
												function h() {
													if (((e.System = a), (e.require = o), g.detachEvent)) {
														g.detachEvent("onreadystatechange", m);
														for (var t = 0; t < d.length; t++) d[t].script == g && (i && i.script == g && (i = null), d.splice(t, 1));
													} else g.removeEventListener("load", m, !1), g.removeEventListener("error", p, !1);
													n.removeChild(g);
												}
												var g = document.createElement("script");
												(g.async = !0),
													s.metadata.crossOrigin && (g.crossOrigin = s.metadata.crossOrigin),
													s.metadata.integrity && g.setAttribute("integrity", s.metadata.integrity),
													u
														? (g.attachEvent("onreadystatechange", m), d.push({ script: g, load: s }))
														: (g.addEventListener("load", m, !1), g.addEventListener("error", p, !1)),
													c++ ,
													(a = e.System),
													(o = e.require),
													(g.src = s.address),
													n.appendChild(g);
											})
										: t.call(this, s);
								};
							});
					})();
				var st = /^(\s*\/\*[^\*]*(\*(?!\/)[^\*]*)*\*\/|\s*\/\/[^\n]*|\s*"[^"]+"\s*;?|\s*'[^']+'\s*;?)*\s*/;
				!(function () {
					function t(e, r, n) {
						if (((n[e.groupIndex] = n[e.groupIndex] || []), -1 == J.call(n[e.groupIndex], e))) {
							n[e.groupIndex].push(e);
							for (var a = 0, o = e.normalizedDeps.length; o > a; a++) {
								var s = e.normalizedDeps[a],
									i = r.defined[s];
								if (i && !i.evaluated) {
									var l = e.groupIndex + (i.declarative != e.declarative);
									if (null === i.groupIndex || i.groupIndex < l) {
										if (null !== i.groupIndex && (n[i.groupIndex].splice(J.call(n[i.groupIndex], i), 1), 0 == n[i.groupIndex].length))
											throw new Error("Mixed dependency cycle detected");
										i.groupIndex = l;
									}
									t(i, r, n);
								}
							}
						}
					}
					function n(e, r, n) {
						if (!r.module) {
							r.groupIndex = 0;
							var a = [];
							t(r, n, a);
							for (var o = !!r.declarative == a.length % 2, s = a.length - 1; s >= 0; s--) {
								for (var i = a[s], l = 0; l < i.length; l++) {
									var d = i[l];
									o ? u(d, n) : c(d, n);
								}
								o = !o;
							}
						}
					}
					function o() { }
					function l(e, t) {
						return t[e] || (t[e] = { name: e, dependencies: [], exports: new o(), importers: [] });
					}
					function u(t, r) {
						if (!t.module) {
							var n = r._loader.moduleRecords,
								a = (t.module = l(t.name, n)),
								o = t.module.exports,
								s = t.declare.call(
									e,
									function (e, t) {
										if (((a.locked = !0), "object" == typeof e)) for (var r in e) o[r] = e[r];
										else o[e] = t;
										for (var n = 0, s = a.importers.length; s > n; n++) {
											var i = a.importers[n];
											if (!i.locked) {
												var l = J.call(i.dependencies, a),
													u = i.setters[l];
												u && u(o);
											}
										}
										return (a.locked = !1), t;
									},
									{ id: t.name }
								);
							if (((s = s || { setters: [], execute: function () { } }), (a.setters = s.setters), (a.execute = s.execute), !a.setters || !a.execute))
								throw new TypeError("Invalid System.register form for " + t.name);
							for (var i = 0, d = t.normalizedDeps.length; d > i; i++) {
								var c,
									f = t.normalizedDeps[i],
									m = r.defined[f],
									p = n[f];
								p ? (c = p.exports) : m && !m.declarative ? (c = m.esModule) : m ? (u(m, r), (p = m.module), (c = p.exports)) : (c = r.get(f)),
									p && p.importers ? (p.importers.push(a), a.dependencies.push(p)) : a.dependencies.push(null);
								for (var h = t.originalIndices[i], g = 0, v = h.length; v > g; ++g) {
									var b = h[g];
									a.setters[b] && a.setters[b](c);
								}
							}
						}
					}
					function d(e, t) {
						var r,
							n = t.defined[e];
						if (n) n.declarative ? f(e, n, [], t) : n.evaluated || c(n, t), (r = n.module.exports);
						else if (((r = t.get(e)), !r)) throw new Error("Unable to load dependency " + e + ".");
						return (!n || n.declarative) && r && r.__useDefault ? r["default"] : r;
					}
					function c(t, n) {
						if (!t.module) {
							var a = {},
								o = (t.module = { exports: a, id: t.name });
							if (!t.executingRequire)
								for (var s = 0, i = t.normalizedDeps.length; i > s; s++) {
									var l = t.normalizedDeps[s],
										u = n.defined[l];
									u && c(u, n);
								}
							t.evaluated = !0;
							var f = t.execute.call(
								e,
								function (e) {
									for (var r = 0, a = t.deps.length; a > r; r++) if (t.deps[r] == e) return d(t.normalizedDeps[r], n);
									var o = n.normalizeSync(e, t.name);
									if (-1 != J.call(t.normalizedDeps, o)) return d(o, n);
									throw new Error("Module " + e + " not declared as a dependency of " + t.name);
								},
								a,
								o
							);
							f && (o.exports = f),
								(a = o.exports),
								(t.esModule = n.newModule(a && (a.__esModule || a instanceof r) ? a : t.esmExports && a !== e ? p(a) : { "default": a }));
						}
					}
					function f(t, r, n, a) {
						if (r && !r.evaluated && r.declarative) {
							n.push(t);
							for (var o = 0, s = r.normalizedDeps.length; s > o; o++) {
								var i = r.normalizedDeps[o];
								-1 == J.call(n, i) && (a.defined[i] ? f(i, a.defined[i], n, a) : a.get(i));
							}
							r.evaluated || ((r.evaluated = !0), r.module.execute.call(e));
						}
					}
					(a.prototype.register = function (e, t, r) {
						if (("string" != typeof e && ((r = t), (t = e), (e = null)), "boolean" == typeof r)) return this.registerDynamic.apply(this, arguments);
						var n = R();
						(n.name = e && (this.decanonicalize || this.normalize).call(this, e)),
							(n.declarative = !0),
							(n.deps = t),
							(n.declare = r),
							this.pushRegister_({ amd: !1, entry: n });
					}),
						(a.prototype.registerDynamic = function (e, t, r, n) {
							"string" != typeof e && ((n = r), (r = t), (t = e), (e = null));
							var a = R();
							(a.name = e && (this.decanonicalize || this.normalize).call(this, e)),
								(a.deps = t),
								(a.execute = n),
								(a.executingRequire = r),
								this.pushRegister_({ amd: !1, entry: a });
						}),
						s("reduceRegister_", function () {
							return function (e, t) {
								if (t) {
									var r = t.entry,
										n = e && e.metadata;
									if (
										(r.name && (r.name in this.defined || (this.defined[r.name] = r), n && (n.bundle = !0)),
											!r.name || (e && !n.entry && r.name == e.name))
									) {
										if (!n)
											throw new TypeError(
												"Invalid System.register call. Anonymous System.register calls can only be made by modules loaded by SystemJS.import and not via script tags."
											);
										if (n.entry)
											throw new Error(
												"register" == n.format
													? "Multiple anonymous System.register calls in module " +
													e.name +
													". If loading a bundle, ensure all the System.register calls are named."
													: "Module " + e.name + " interpreted as " + n.format + " module format, but called System.register."
											);
										n.format || (n.format = "register"), (n.entry = r);
									}
								}
							};
						}),
						i(function (e) {
							return function () {
								e.call(this), (this.defined = {}), (this._loader.moduleRecords = {});
							};
						}),
						D(o, "toString", {
							value: function () {
								return "Module";
							},
						}),
						s("delete", function (e) {
							return function (t) {
								return delete this._loader.moduleRecords[t], delete this.defined[t], e.call(this, t);
							};
						}),
						s("fetch", function (e) {
							return function (t) {
								return this.defined[t.name] ? ((t.metadata.format = "defined"), "") : ((t.metadata.deps = t.metadata.deps || []), e.call(this, t));
							};
						}),
						s("translate", function (e) {
							return function (t) {
								return (
									(t.metadata.deps = t.metadata.deps || []),
									Promise.resolve(e.apply(this, arguments)).then(function (e) {
										return ("register" == t.metadata.format || (!t.metadata.format && O(t.source))) && (t.metadata.format = "register"), e;
									})
								);
							};
						}),
						s("load", function (e) {
							return function (t) {
								var r = this,
									a = r.defined[t];
								return !a || a.deps.length
									? e.apply(this, arguments)
									: ((a.originalIndices = a.normalizedDeps = []),
										n(t, a, r),
										f(t, a, [], r),
										a.esModule || (a.esModule = r.newModule(a.module.exports)),
										r.trace || (r.defined[t] = void 0),
										r.set(t, a.esModule),
										Promise.resolve());
							};
						}),
						s("instantiate", function (e) {
							return function (t) {
								"detect" == t.metadata.format && (t.metadata.format = void 0), e.call(this, t);
								var r,
									a = this;
								if (a.defined[t.name])
									(r = a.defined[t.name]), r.declarative || (r.deps = r.deps.concat(t.metadata.deps)), (r.deps = r.deps.concat(t.metadata.deps));
								else if (t.metadata.entry) (r = t.metadata.entry), (r.deps = r.deps.concat(t.metadata.deps));
								else if (
									!((a.builder && t.metadata.bundle) || ("register" != t.metadata.format && "esm" != t.metadata.format && "es6" != t.metadata.format))
								) {
									if (("undefined" != typeof tt && tt.call(a, t), !t.metadata.entry && !t.metadata.bundle))
										throw new Error(t.name + " detected as " + t.metadata.format + " but didn't execute.");
									(r = t.metadata.entry), r && t.metadata.deps && (r.deps = r.deps.concat(t.metadata.deps));
								}
								r || ((r = R()), (r.deps = t.metadata.deps), (r.execute = function () { })), (a.defined[t.name] = r);
								var o = m(r.deps);
								(r.deps = o.names), (r.originalIndices = o.indices), (r.name = t.name), (r.esmExports = t.metadata.esmExports !== !1);
								for (var s = [], i = 0, l = r.deps.length; l > i; i++) s.push(Promise.resolve(a.normalize(r.deps[i], t.name)));
								return Promise.all(s).then(function (e) {
									return (
										(r.normalizedDeps = e),
										{
											deps: r.deps,
											execute: function () {
												return (
													n(t.name, r, a),
													f(t.name, r, [], a),
													r.esModule || (r.esModule = a.newModule(r.module.exports)),
													a.trace || (a.defined[t.name] = void 0),
													r.esModule
												);
											},
										}
									);
								});
							};
						});
				})(),
					(function () {
						var t = /(^\s*|[}\);\n]\s*)(import\s*(['"]|(\*\s+as\s+)?[^"'\(\)\n;]+\s*from\s*['"]|\{)|export\s+\*\s+from\s+["']|export\s*(\{|default|function|class|var|const|let|async\s+function))/,
							r = /\$traceurRuntime\s*\./,
							n = /babelHelpers\s*\./;
						s("translate", function (a) {
							return function (o) {
								var s = this,
									i = arguments;
								return a.apply(s, i).then(function (a) {
									if ("esm" == o.metadata.format || "es6" == o.metadata.format || (!o.metadata.format && a.match(t))) {
										if (
											("es6" == o.metadata.format &&
												w.call(
													s,
													"Module " + o.name + ' has metadata setting its format to "es6", which is deprecated.\nThis should be updated to "esm".'
												),
												(o.metadata.format = "esm"),
												o.metadata.deps)
										) {
											for (var l = "", u = 0; u < o.metadata.deps.length; u++) l += 'import "' + o.metadata.deps[u] + '"; ';
											o.source = l + a;
										}
										if (s.transpiler === !1) {
											if (s.builder) return a;
											throw new TypeError("Unable to dynamically transpile ES module as SystemJS.transpiler set to false.");
										}
										return (
											(s._loader.loadedTranspiler = s._loader.loadedTranspiler || !1),
											s.pluginLoader && (s.pluginLoader._loader.loadedTranspiler = s._loader.loadedTranspiler || !1),
											(
												s._loader.transpilerPromise ||
												(s._loader.transpilerPromise = Promise.resolve(
													e["typescript" == s.transpiler ? "ts" : s.transpiler] || (s.pluginLoader || s)["import"](s.transpiler)
												))
											).then(function (e) {
												return (
													(s._loader.loadedTranspilerRuntime = !0),
													e.translate
														? e == o.metadata.loaderModule
															? o.source
															: ("string" == typeof o.metadata.sourceMap && (o.metadata.sourceMap = JSON.parse(o.metadata.sourceMap)),
																Promise.resolve(e.translate.apply(s, i)).then(function (e) {
																	var t = o.metadata.sourceMap;
																	if (t && "object" == typeof t) {
																		var r = o.address.split("!")[0];
																		(t.file && t.file != o.address) || (t.file = r + "!transpiled"),
																			(!t.sources || (t.sources.length <= 1 && (!t.sources[0] || t.sources[0] == o.address))) && (t.sources = [r]);
																	}
																	return "esm" == o.metadata.format && !s.builder && O(e) && (o.metadata.format = "register"), e;
																}))
														: (s.builder && (o.metadata.originalSource = o.source),
															V.call(s, o).then(function (e) {
																return (o.metadata.sourceMap = void 0), e;
															}))
												);
											})
										);
									}
									if (s.transpiler === !1) return a;
									if (
										(s._loader.loadedTranspiler !== !1 ||
											("traceur" != s.transpiler && "typescript" != s.transpiler && "babel" != s.transpiler) ||
											o.name != s.normalizeSync(s.transpiler) ||
											(a.length > 100 &&
												!o.metadata.format &&
												((o.metadata.format = "global"),
													"traceur" === s.transpiler && (o.metadata.exports = "traceur"),
													"typescript" === s.transpiler && (o.metadata.exports = "ts")),
												(s._loader.loadedTranspiler = !0)),
											s._loader.loadedTranspilerRuntime === !1 &&
											(o.name == s.normalizeSync("traceur-runtime") || o.name == s.normalizeSync("babel/external-helpers*")) &&
											(a.length > 100 && (o.metadata.format = o.metadata.format || "global"), (s._loader.loadedTranspilerRuntime = !0)),
											("register" == o.metadata.format || o.metadata.bundle) && s._loader.loadedTranspilerRuntime !== !0)
									) {
										if ("traceur" == s.transpiler && !e.$traceurRuntime && o.source.match(r))
											return (
												(s._loader.loadedTranspilerRuntime = s._loader.loadedTranspilerRuntime || !1),
												s["import"]("traceur-runtime").then(function () {
													return a;
												})
											);
										if ("babel" == s.transpiler && !e.babelHelpers && o.source.match(n))
											return (
												(s._loader.loadedTranspilerRuntime = s._loader.loadedTranspilerRuntime || !1),
												s["import"]("babel/external-helpers").then(function () {
													return a;
												})
											);
									}
									return a;
								});
							};
						});
					})();
				var it = "undefined" != typeof self ? "self" : "global";
				s("fetch", function (e) {
					return function (t) {
						return t.metadata.exports && !t.metadata.format && (t.metadata.format = "global"), e.call(this, t);
					};
				}),
					s("instantiate", function (e) {
						return function (t) {
							var r = this;
							if ((t.metadata.format || (t.metadata.format = "global"), "global" == t.metadata.format && !t.metadata.entry)) {
								var n = R();
								(t.metadata.entry = n), (n.deps = []);
								for (var a in t.metadata.globals) {
									var o = t.metadata.globals[a];
									o && n.deps.push(o);
								}
								n.execute = function (e, n, a) {
									var o;
									if (t.metadata.globals) {
										o = {};
										for (var s in t.metadata.globals) t.metadata.globals[s] && (o[s] = e(t.metadata.globals[s]));
									}
									var i = t.metadata.exports;
									i && (t.source += "\n" + it + '["' + i + '"] = ' + i + ";");
									var l = r.get("@@global-helpers").prepareGlobal(a.id, i, o, !!t.metadata.encapsulateGlobal);
									return tt.call(r, t), l();
								};
							}
							return e.call(this, t);
						};
					}),
					s("reduceRegister_", function (e) {
						return function (t, r) {
							if (r || (!t.metadata.exports && (!A || "global" != t.metadata.format))) return e.call(this, t, r);
							t.metadata.format = "global";
							var n = (t.metadata.entry = R());
							n.deps = t.metadata.deps;
							var a = M(t.metadata.exports);
							n.execute = function () {
								return a;
							};
						};
					}),
					i(function (t) {
						return function () {
							function r(t) {
								if (Object.keys) Object.keys(e).forEach(t);
								else for (var r in e) s.call(e, r) && t(r);
							}
							function n(t) {
								r(function (r) {
									if (-1 == J.call(i, r)) {
										try {
											var n = e[r];
										} catch (a) {
											i.push(r);
										}
										t(r, n);
									}
								});
							}
							var a = this;
							t.call(a);
							var o,
								s = Object.prototype.hasOwnProperty,
								i = [
									"_g",
									"sessionStorage",
									"localStorage",
									"clipboardData",
									"frames",
									"frameElement",
									"external",
									"mozAnimationStartTime",
									"webkitStorageInfo",
									"webkitIndexedDB",
									"mozInnerScreenY",
									"mozInnerScreenX",
								];
							a.set(
								"@@global-helpers",
								a.newModule({
									prepareGlobal: function (t, r, a, s) {
										var i = e.define;
										e.define = void 0;
										var l;
										if (a) {
											l = {};
											for (var u in a) (l[u] = e[u]), (e[u] = a[u]);
										}
										return (
											r ||
											((o = {}),
												n(function (e, t) {
													o[e] = t;
												})),
											function () {
												var t,
													a = r ? M(r) : {},
													u = !!r;
												if (
													((!r || s) &&
														n(function (n, i) {
															o[n] !== i &&
																"undefined" != typeof i &&
																(s && (e[n] = void 0), r || ((a[n] = i), "undefined" != typeof t ? u || t === i || (u = !0) : (t = i)));
														}),
														(a = u ? a : t),
														l)
												)
													for (var d in l) e[d] = l[d];
												return (e.define = i), a;
											}
										);
									},
								})
							);
						};
					}),
					(function () {
						function t(e) {
							function t(e, t) {
								for (var r = 0; r < e.length; r++) if (e[r][0] < t.index && e[r][1] > t.index) return !0;
								return !1;
							}
							n.lastIndex = a.lastIndex = o.lastIndex = 0;
							var r,
								s = [],
								i = [],
								l = [];
							if (e.length / e.split("\n").length < 200) {
								for (; (r = o.exec(e));) i.push([r.index, r.index + r[0].length]);
								for (; (r = a.exec(e));) t(i, r) || l.push([r.index + r[1].length, r.index + r[0].length - 1]);
							}
							for (; (r = n.exec(e));)
								if (!t(i, r) && !t(l, r)) {
									var u = r[1].substr(1, r[1].length - 2);
									if (u.match(/"|'/)) continue;
									"/" == u[u.length - 1] && (u = u.substr(0, u.length - 1)), s.push(u);
								}
							return s;
						}
						var r = /(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF.])(exports\s*(\[['"]|\.)|module(\.exports|\['exports'\]|\["exports"\])\s*(\[['"]|[=,\.]))/,
							n = /(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF."'])require\s*\(\s*("[^"\\]*(?:\\.[^"\\]*)*"|'[^'\\]*(?:\\.[^'\\]*)*')\s*\)/g,
							a = /(^|[^\\])(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,
							o = /("[^"\\\n\r]*(\\.[^"\\\n\r]*)*"|'[^'\\\n\r]*(\\.[^'\\\n\r]*)*')/g,
							i = /^\#\!.*/;
						s("instantiate", function (a) {
							return function (o) {
								var s = this;
								if (
									(o.metadata.format || ((r.lastIndex = 0), (n.lastIndex = 0), (n.exec(o.source) || r.exec(o.source)) && (o.metadata.format = "cjs")),
										"cjs" == o.metadata.format)
								) {
									var l = o.metadata.deps,
										u = o.metadata.cjsRequireDetection === !1 ? [] : t(o.source);
									for (var d in o.metadata.globals) o.metadata.globals[d] && u.push(o.metadata.globals[d]);
									var c = R();
									(o.metadata.entry = c),
										(c.deps = u),
										(c.executingRequire = !0),
										(c.execute = function (t, r, n) {
											function a(e) {
												return "/" == e[e.length - 1] && (e = e.substr(0, e.length - 1)), t.apply(this, arguments);
											}
											if (
												((a.resolve = function (e) {
													return s.get("@@cjs-helpers").requireResolve(e, n.id);
												}),
													(n.paths = []),
													(n.require = t),
													!o.metadata.cjsDeferDepsExecute)
											)
												for (var u = 0; u < l.length; u++) a(l[u]);
											var d = s.get("@@cjs-helpers").getPathVars(n.id),
												c = { exports: r, args: [a, r, n, d.filename, d.dirname, e, e] },
												f = "(function(require, exports, module, __filename, __dirname, global, GLOBAL";
											if (o.metadata.globals) for (var m in o.metadata.globals) c.args.push(a(o.metadata.globals[m])), (f += ", " + m);
											var p = e.define;
											(e.define = void 0),
												(e.__cjsWrapper = c),
												(o.source = f + ") {" + o.source.replace(i, "") + "\n}).apply(__cjsWrapper.exports, __cjsWrapper.args);"),
												tt.call(s, o),
												(e.__cjsWrapper = void 0),
												(e.define = p);
										});
								}
								return a.call(s, o);
							};
						});
					})(),
					i(function (e) {
						return function () {
							function t(e) {
								return "file:///" == e.substr(0, 8) ? e.substr(7 + !!q) : n && e.substr(0, n.length) == n ? e.substr(n.length) : e;
							}
							var r = this;
							if ((e.call(r), "undefined" != typeof window && "undefined" != typeof document && window.location))
								var n = location.protocol + "//" + location.hostname + (location.port ? ":" + location.port : "");
							r.set(
								"@@cjs-helpers",
								r.newModule({
									requireResolve: function (e, n) {
										return t(r.normalizeSync(e, n));
									},
									getPathVars: function (e) {
										var r,
											n = e.lastIndexOf("!");
										r = -1 != n ? e.substr(0, n) : e;
										var a = r.split("/");
										return a.pop(), (a = a.join("/")), { filename: t(r), dirname: t(a) };
									},
								})
							);
						};
					}),
					s("fetch", function (t) {
						return function (r) {
							return r.metadata.scriptLoad && F && (e.define = this.amdDefine), t.call(this, r);
						};
					}),
					i(function (t) {
						return function () {
							function r(e, t) {
								e = e.replace(i, "");
								var r = e.match(d),
									n = (r[1].split(",")[t] || "require").replace(c, ""),
									a = f[n] || (f[n] = new RegExp(l + n + u, "g"));
								a.lastIndex = 0;
								for (var o, s = []; (o = a.exec(e));) s.push(o[2] || o[3]);
								return s;
							}
							function n(e, t, r, a) {
								if ("object" == typeof e && !(e instanceof Array))
									return n.apply(null, Array.prototype.splice.call(arguments, 1, arguments.length - 1));
								if (("string" == typeof e && "function" == typeof t && (e = [e]), !(e instanceof Array))) {
									if ("string" == typeof e) {
										var s = o.defaultJSExtensions && ".js" != e.substr(e.length - 3, 3),
											i = o.decanonicalize(e, a);
										s && ".js" == i.substr(i.length - 3, 3) && (i = i.substr(0, i.length - 3));
										var l = o.get(i);
										if (!l) throw new Error('Module not already loaded loading "' + e + '" as ' + i + (a ? ' from "' + a + '".' : "."));
										return l.__useDefault ? l["default"] : l;
									}
									throw new TypeError("Invalid require");
								}
								for (var u = [], d = 0; d < e.length; d++) u.push(o["import"](e[d], a));
								Promise.all(u).then(function (e) {
									t && t.apply(null, e);
								}, r);
							}
							function a(t, a, s) {
								function i(t, r, i) {
									function c(e, r, a) {
										return "string" == typeof e && "function" != typeof r ? t(e) : n.call(o, e, r, a, i.id);
									}
									for (var f = [], m = 0; m < a.length; m++) f.push(t(a[m]));
									(i.uri = i.id),
										(i.config = function () { }),
										-1 != d && f.splice(d, 0, i),
										-1 != u && f.splice(u, 0, r),
										-1 != l &&
										((c.toUrl = function (e) {
											var t = o.defaultJSExtensions && ".js" != e.substr(e.length - 3, 3),
												r = o.decanonicalize(e, i.id);
											return t && ".js" == r.substr(r.length - 3, 3) && (r = r.substr(0, r.length - 3)), r;
										}),
											f.splice(l, 0, c));
									var p = e.require;
									e.require = n;
									var h = s.apply(-1 == u ? e : r, f);
									return (e.require = p), "undefined" == typeof h && i && (h = i.exports), "undefined" != typeof h ? h : void 0;
								}
								"string" != typeof t && ((s = a), (a = t), (t = null)),
									a instanceof Array || ((s = a), (a = ["require", "exports", "module"].splice(0, s.length))),
									"function" != typeof s &&
									(s = (function (e) {
										return function () {
											return e;
										};
									})(s)),
									void 0 === a[a.length - 1] && a.pop();
								var l, u, d;
								-1 != (l = J.call(a, "require")) && (a.splice(l, 1), t || (a = a.concat(r(s.toString(), l)))),
									-1 != (u = J.call(a, "exports")) && a.splice(u, 1),
									-1 != (d = J.call(a, "module")) && a.splice(d, 1);
								var c = R();
								(c.name = t && (o.decanonicalize || o.normalize).call(o, t)), (c.deps = a), (c.execute = i), o.pushRegister_({ amd: !0, entry: c });
							}
							var o = this;
							t.call(this);
							var i = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,
								l = "(?:^|[^$_a-zA-Z\\xA0-\\uFFFF.])",
								u = "\\s*\\(\\s*(\"([^\"]+)\"|'([^']+)')\\s*\\)",
								d = /\(([^\)]*)\)/,
								c = /^\s+|\s+$/g,
								f = {};
							(a.amd = {}),
								s("reduceRegister_", function (e) {
									return function (t, r) {
										if (!r || !r.amd) return e.call(this, t, r);
										var n = t && t.metadata,
											a = r.entry;
										if (n)
											if (n.format && "detect" != n.format) {
												if (!a.name && "amd" != n.format) throw new Error("AMD define called while executing " + n.format + " module " + t.name);
											} else n.format = "amd";
										if (a.name)
											n &&
												(n.entry || n.bundle ? n.entry && n.entry.name && n.entry.name != t.name && (n.entry = void 0) : (n.entry = a),
													(n.bundle = !0)),
												a.name in this.defined || (this.defined[a.name] = a);
										else {
											if (!n) throw new TypeError("Unexpected anonymous AMD define.");
											if (n.entry && !n.entry.name) throw new Error("Multiple anonymous defines in module " + t.name);
											n.entry = a;
										}
									};
								}),
								(o.amdDefine = a),
								(o.amdRequire = n);
						};
					}),
					(function () {
						var t = /(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF.])define\s*\(\s*("[^"]+"\s*,\s*|'[^']+'\s*,\s*)?\s*(\[(\s*(("[^"]+"|'[^']+')\s*,|\/\/.*\r?\n|\/\*(.|\s)*?\*\/))*(\s*("[^"]+"|'[^']+')\s*,?)?(\s*(\/\/.*\r?\n|\/\*(.|\s)*?\*\/))*\s*\]|function\s*|{|[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*\))/;
						s("instantiate", function (r) {
							return function (n) {
								var a = this;
								if ("amd" == n.metadata.format || (!n.metadata.format && n.source.match(t)))
									if (((n.metadata.format = "amd"), a.builder || a.execute === !1))
										n.metadata.execute = function () {
											return n.metadata.builderExecute.apply(this, arguments);
										};
									else {
										var o = e.define;
										e.define = this.amdDefine;
										try {
											tt.call(a, n);
										} finally {
											e.define = o;
										}
										if (!n.metadata.entry && !n.metadata.bundle) throw new TypeError("AMD module " + n.name + " did not define");
									}
								return r.call(a, n);
							};
						});
					})(),
					(function () {
						function e(e, t) {
							if (t) {
								var r;
								if (e.pluginFirst) {
									if (-1 != (r = t.lastIndexOf("!"))) return t.substr(r + 1);
								} else if (-1 != (r = t.indexOf("!"))) return t.substr(0, r);
								return t;
							}
						}
						function t(e, t) {
							var r,
								n,
								a = t.lastIndexOf("!");
							return -1 != a
								? (e.pluginFirst
									? ((r = t.substr(a + 1)), (n = t.substr(0, a)))
									: ((r = t.substr(0, a)), (n = t.substr(a + 1) || r.substr(r.lastIndexOf(".") + 1))),
									{ argument: r, plugin: n })
								: void 0;
						}
						function r(e, t, r, n) {
							return n && ".js" == t.substr(t.length - 3, 3) && (t = t.substr(0, t.length - 3)), e.pluginFirst ? r + "!" + t : t + "!" + r;
						}
						function n(e, t) {
							return e.defaultJSExtensions && ".js" != t.substr(t.length - 3, 3);
						}
						function a(a) {
							return function (o, s, i) {
								var l = this,
									u = t(l, o);
								if (((s = e(this, s)), !u)) return a.call(this, o, s, i);
								var d = l.normalizeSync(u.argument, s, !0),
									c = l.normalizeSync(u.plugin, s, !0);
								return r(l, d, c, n(l, u.argument));
							};
						}
						s("decanonicalize", a),
							s("normalizeSync", a),
							s("normalize", function (a) {
								return function (o, s, i) {
									var l = this;
									s = e(this, s);
									var u = t(l, o);
									return u
										? Promise.all([l.normalize(u.argument, s, !0), l.normalize(u.plugin, s, !1)]).then(function (e) {
											return r(l, e[0], e[1], n(l, u.argument));
										})
										: a.call(l, o, s, i);
								};
							}),
							s("locate", function (e) {
								return function (t) {
									var r,
										n = this,
										a = t.name;
									return (
										n.pluginFirst
											? -1 != (r = a.indexOf("!")) && ((t.metadata.loader = a.substr(0, r)), (t.name = a.substr(r + 1)))
											: -1 != (r = a.lastIndexOf("!")) && ((t.metadata.loader = a.substr(r + 1)), (t.name = a.substr(0, r))),
										e
											.call(n, t)
											.then(function (e) {
												return -1 == r && t.metadata.loader
													? (n.pluginLoader || n).normalize(t.metadata.loader, t.name).then(function (r) {
														return (t.metadata.loader = r), e;
													})
													: e;
											})
											.then(function (e) {
												var r = t.metadata.loader;
												if (!r) return e;
												if (t.name == r)
													throw new Error(
														"Plugin " +
														r +
														" cannot load itself, make sure it is excluded from any wildcard meta configuration via a custom loader: false rule."
													);
												if (n.defined && n.defined[a]) return e;
												var o = n.pluginLoader || n;
												return o["import"](r).then(function (r) {
													return (t.metadata.loaderModule = r), (t.address = e), r.locate ? r.locate.call(n, t) : e;
												});
											})
									);
								};
							}),
							s("fetch", function (e) {
								return function (t) {
									var r = this;
									return t.metadata.loaderModule && t.metadata.loaderModule.fetch && "defined" != t.metadata.format
										? ((t.metadata.scriptLoad = !1),
											t.metadata.loaderModule.fetch.call(r, t, function (t) {
												return e.call(r, t);
											}))
										: e.call(r, t);
								};
							}),
							s("translate", function (e) {
								return function (t) {
									var r = this,
										n = arguments;
									return t.metadata.loaderModule && t.metadata.loaderModule.translate && "defined" != t.metadata.format
										? Promise.resolve(t.metadata.loaderModule.translate.apply(r, n)).then(function (a) {
											var o = t.metadata.sourceMap;
											if (o) {
												if ("object" != typeof o) throw new Error("load.metadata.sourceMap must be set to an object.");
												var s = t.address.split("!")[0];
												(o.file && o.file != t.address) || (o.file = s + "!transpiled"),
													(!o.sources || (o.sources.length <= 1 && (!o.sources[0] || o.sources[0] == t.address))) && (o.sources = [s]);
											}
											return (
												"string" == typeof a
													? (t.source = a)
													: w.call(
														this,
														"Plugin " +
														t.metadata.loader +
														" should return the source in translate, instead of setting load.source directly. This support will be deprecated."
													),
												e.apply(r, n)
											);
										})
										: e.apply(r, n);
								};
							}),
							s("instantiate", function (e) {
								return function (t) {
									var r = this,
										n = !1;
									return t.metadata.loaderModule && t.metadata.loaderModule.instantiate && !r.builder && "defined" != t.metadata.format
										? Promise.resolve(
											t.metadata.loaderModule.instantiate.call(r, t, function (t) {
												if (n) throw new Error("Instantiate must only be called once.");
												return (n = !0), e.call(r, t);
											})
										).then(function (a) {
											return n
												? a
												: ((t.metadata.entry = R()),
													(t.metadata.entry.execute = function () {
														return a;
													}),
													(t.metadata.entry.deps = t.metadata.deps),
													(t.metadata.format = "defined"),
													e.call(r, t));
										})
										: e.call(r, t);
								};
							});
					})();
				var lt = ["browser", "node", "dev", "build", "production", "default"],
					ut = /#\{[^\}]+\}/;
				s("normalize", function (e) {
					return function (t, r, n) {
						var a = this;
						return C.call(a, t, r)
							.then(function (t) {
								return e.call(a, t, r, n);
							})
							.then(function (e) {
								return L.call(a, e, r);
							});
					};
				}),
					(function () {
						s("fetch", function (e) {
							return function (t) {
								var r = t.metadata.alias,
									n = t.metadata.deps || [];
								if (r) {
									t.metadata.format = "defined";
									var a = R();
									return (
										(this.defined[t.name] = a),
										(a.declarative = !0),
										(a.deps = n.concat([r])),
										(a.declare = function (e) {
											return {
												setters: [
													function (t) {
														for (var r in t) e(r, t[r]);
														t.__useDefault && (a.module.exports.__useDefault = !0);
													},
												],
												execute: function () { },
											};
										}),
										""
									);
								}
								return e.call(this, t);
							};
						});
					})(),
					(function () {
						function e(e, t, r) {
							for (var n, a = t.split("."); a.length > 1;) (n = a.shift()), (e = e[n] = e[n] || {});
							(n = a.shift()), n in e || (e[n] = r);
						}
						i(function (e) {
							return function () {
								(this.meta = {}), e.call(this);
							};
						}),
							s("locate", function (e) {
								return function (t) {
									var r,
										n = this.meta,
										a = t.name,
										o = 0;
									for (var s in n)
										if (
											((r = s.indexOf("*")),
												-1 !== r && s.substr(0, r) === a.substr(0, r) && s.substr(r + 1) === a.substr(a.length - s.length + r + 1))
										) {
											var i = s.split("/").length;
											i > o && (o = i), v(t.metadata, n[s], o != i);
										}
									return n[a] && v(t.metadata, n[a]), e.call(this, t);
								};
							});
						var t = /^(\s*\/\*[^\*]*(\*(?!\/)[^\*]*)*\*\/|\s*\/\/[^\n]*|\s*"[^"]+"\s*;?|\s*'[^']+'\s*;?)+/,
							r = /\/\*[^\*]*(\*(?!\/)[^\*]*)*\*\/|\/\/[^\n]*|"[^"]+"\s*;?|'[^']+'\s*;?/g;
						s("translate", function (n) {
							return function (a) {
								if ("defined" == a.metadata.format) return (a.metadata.deps = a.metadata.deps || []), Promise.resolve(a.source);
								var o = a.source.match(t);
								if (o)
									for (var s = o[0].match(r), i = 0; i < s.length; i++) {
										var l = s[i],
											u = l.length,
											d = l.substr(0, 1);
										if ((";" == l.substr(u - 1, 1) && u-- , '"' == d || "'" == d)) {
											var c = l.substr(1, l.length - 3),
												f = c.substr(0, c.indexOf(" "));
											if (f) {
												var m = c.substr(f.length + 1, c.length - f.length - 1);
												"[]" == f.substr(f.length - 2, 2)
													? ((f = f.substr(0, f.length - 2)), (a.metadata[f] = a.metadata[f] || []), a.metadata[f].push(m))
													: a.metadata[f] instanceof Array
														? (w.call(
															this,
															"Module " +
															a.name +
															' contains deprecated "deps ' +
															m +
															'" meta syntax.\nThis should be updated to "deps[] ' +
															m +
															'" for pushing to array meta.'
														),
															a.metadata[f].push(m))
														: e(a.metadata, f, m);
											} else a.metadata[c] = !0;
										}
									}
								return n.apply(this, arguments);
							};
						});
					})(),
					(function () {
						i(function (e) {
							return function () {
								e.call(this), (this.bundles = {}), (this._loader.loadedBundles = {});
							};
						}),
							s("locate", function (e) {
								return function (t) {
									var r = this,
										n = !1;
									if (!(t.name in r.defined))
										for (var a in r.bundles) {
											for (var o = 0; o < r.bundles[a].length; o++) {
												var s = r.bundles[a][o];
												if (s == t.name) {
													n = !0;
													break;
												}
												if (-1 != s.indexOf("*")) {
													var i = s.split("*");
													if (2 != i.length) {
														r.bundles[a].splice(o--, 1);
														continue;
													}
													if (
														t.name.substring(0, i[0].length) == i[0] &&
														t.name.substr(t.name.length - i[1].length, i[1].length) == i[1] &&
														-1 == t.name.substr(i[0].length, t.name.length - i[1].length - i[0].length).indexOf("/")
													) {
														n = !0;
														break;
													}
												}
											}
											if (n)
												return r["import"](a).then(function () {
													return e.call(r, t);
												});
										}
									return e.call(r, t);
								};
							});
					})(),
					(function () {
						i(function (e) {
							return function () {
								e.call(this), (this.depCache = {});
							};
						}),
							s("locate", function (e) {
								return function (t) {
									var r = this,
										n = r.depCache[t.name];
									if (n) for (var a = 0; a < n.length; a++) r["import"](n[a], t.name);
									return e.call(r, t);
								};
							});
					})(),
					(G = new a()),
					(e.SystemJS = G),
					(G.version = "0.19.34 Standard"),
					"object" == typeof module && module.exports && "object" == typeof exports && (module.exports = G),
					(e.System = G);
			})("undefined" != typeof self ? self : global);
	}
	var t = "undefined" == typeof Promise;
	if ("undefined" != typeof document) {
		var r = document.getElementsByTagName("script");
		if ((($__curScript = r[r.length - 1]), ($__curScript.defer || $__curScript.async) && ($__curScript = document.currentScript), t)) {
			var n = $__curScript.src,
				a = n.substr(0, n.lastIndexOf("/") + 1);
			(window.systemJSBootstrap = e), document.write('<script type="text/javascript" src="' + a + 'system-polyfills@0.19.34.js"></script>');
		} else e();
	} else if ("undefined" != typeof importScripts) {
		var a = "";
		try {
			throw new Error("_");
		} catch (o) {
			o.stack.replace(/(?:at|@).*(http.+):[\d]+:[\d]+/, function (e, t) {
				($__curScript = { src: t }), (a = t.replace(/\/[^\/]*$/, "/"));
			});
		}
		t && importScripts(a + "system-polyfills@0.19.34.js"), e();
	} else ($__curScript = "undefined" != typeof __filename ? { src: __filename } : null), e();
})(),
	(function (e) {
		var t = e.systemJSBootstrap;
		(e.systemJSBootstrap = function () {
			t && t(),
				System.config({
					defaultJSExtensions: !0,
					paths: { "*": "https://registry.jspm.io/*.js", "npm:*": "https://npm.jspm.io/*.js", "github:*": "https://github.jspm.io/*.js" },
					map: {
						traceur: "github:jmcriffey/bower-traceur@0.0.91",
						"traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.91",
						typescript: "npm:typescript@1.6.0-dev.20150818",
						babel: "npm:babel-core@5",
					},
				}),
				(e.systemJSBootstrap = void 0);
		}),
			t || e.systemJSBootstrap();
	})("undefined" != typeof window ? window : global);
//# sourceMappingURL=system@0.19.34.js.map
