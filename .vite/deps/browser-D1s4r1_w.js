//#region node_modules/@tsparticles/engine/browser/Core/Utils/Constants.js
var generatedAttribute = "generated";
var defaultCompositeValue = "source-over";
var resizeEvent = "resize";
var visibilityChangeEvent = "visibilitychange";
var percentDenominator = 100;
var half = .5;
var millisecondsToSeconds = 1e3;
var originPoint = {
	x: 0,
	y: 0,
	z: 0
};
var defaultTransform = {
	a: 1,
	b: 0,
	c: 0,
	d: 1
};
var randomColorValue = "random";
var midColorValue = "mid";
var double = 2;
var doublePI = Math.PI * 2;
var defaultFps = 60;
var defaultAlpha = 1;
var generatedTrue = "true";
var generatedFalse = "false";
var canvasTag = "canvas";
var defaultRetryCount = 0;
var squareExp = 2;
var spatialHashGridCellSize = 100;
var defaultRemoveQuantity = 1;
var defaultRatio = 1;
var defaultReduceFactor = 1;
var inverseFactorNumerator = 1;
var rgbMax = 255;
var hMax = 360;
var sMax = 100;
var lMax = 100;
var hMin = 0;
var sMin = 0;
var hPhase = 60;
var empty = 0;
var quarter = .25;
var threeQuarter = .75;
var minVelocity = 0;
var minDistance = 0;
var minRadius$1 = 0;
var defaultTransformValue = 1;
var minimumSize = 0;
var zIndexFactorOffset = 1;
var defaultOpacity = 1;
var removeDeleteCount = 1;
var removeMinIndex = 0;
var defaultFpsLimit = 120;
var minFpsLimit = 0;
var canvasFirstIndex = 0;
var loadRandomFactor = 1e4;
var loadMinIndex = 0;
var one = 1;
var none = 0;
var decayOffset = 1;
var tryCountIncrement = 1;
var minZ = 0;
var minLimit = 0;
var countOffset = 1;
var minCount = 0;
var minIndex = 0;
var lengthOffset = 1;
var defaultDensityFactor = 1;
var deleteCount = 1;
var defaultAngle = 0;
var identity = 1;
var minStrokeWidth = 0;
var lFactor = 1;
var lMin = 0;
var maxNits = 400;
var triple = 3;
var sextuple = 6;
var sNormalizedOffset = 1;
var phaseNumerator = 1;
var defaultRgbMin = 0;
var defaultVelocity = 0;
var defaultLoops = 0;
var defaultTime = 0;
var defaultZoom = 1;
//#endregion
//#region node_modules/@tsparticles/engine/browser/Enums/Directions/MoveDirection.js
var MoveDirection;
(function(MoveDirection) {
	MoveDirection["bottom"] = "bottom";
	MoveDirection["bottomLeft"] = "bottom-left";
	MoveDirection["bottomRight"] = "bottom-right";
	MoveDirection["left"] = "left";
	MoveDirection["none"] = "none";
	MoveDirection["right"] = "right";
	MoveDirection["top"] = "top";
	MoveDirection["topLeft"] = "top-left";
	MoveDirection["topRight"] = "top-right";
	MoveDirection["outside"] = "outside";
	MoveDirection["inside"] = "inside";
})(MoveDirection || (MoveDirection = {}));
//#endregion
//#region node_modules/@tsparticles/engine/browser/Core/Utils/Vectors.js
function getZ(source) {
	return "z" in source ? source.z : originPoint.z;
}
var Vector3d = class Vector3d {
	x;
	y;
	z;
	constructor(x = originPoint.x, y = originPoint.y, z = originPoint.z) {
		this.x = x;
		this.y = y;
		this.z = z;
	}
	static get origin() {
		return Vector3d.create(originPoint.x, originPoint.y, originPoint.z);
	}
	get angle() {
		return Math.atan2(this.y, this.x);
	}
	set angle(angle) {
		this.#updateFromAngle(angle, this.length);
	}
	get length() {
		return Math.sqrt(this.getLengthSq());
	}
	set length(length) {
		this.#updateFromAngle(this.angle, length);
	}
	static clone(source) {
		return Vector3d.create(source.x, source.y, getZ(source));
	}
	static create(x, y, z) {
		if (typeof x === "number") return new Vector3d(x, y ?? originPoint.y, z ?? originPoint.z);
		return new Vector3d(x.x, x.y, getZ(x));
	}
	add(v) {
		return Vector3d.create(this.x + v.x, this.y + v.y, this.z + getZ(v));
	}
	addTo(v) {
		this.x += v.x;
		this.y += v.y;
		this.z += getZ(v);
	}
	copy() {
		return Vector3d.clone(this);
	}
	div(n) {
		return Vector3d.create(this.x / n, this.y / n, this.z / n);
	}
	getLengthSq() {
		return this.x ** 2 + this.y ** 2;
	}
	mult(n) {
		return Vector3d.create(this.x * n, this.y * n, this.z * n);
	}
	multTo(n) {
		this.x *= n;
		this.y *= n;
		this.z *= n;
	}
	normalize() {
		const length = this.length;
		if (length != 0) this.multTo(1 / length);
	}
	rotate(angle) {
		return Vector3d.create(this.x * Math.cos(angle) - this.y * Math.sin(angle), this.x * Math.sin(angle) + this.y * Math.cos(angle), originPoint.z);
	}
	setTo(c) {
		this.x = c.x;
		this.y = c.y;
		this.z = getZ(c);
	}
	sub(v) {
		return Vector3d.create(this.x - v.x, this.y - v.y, this.z - getZ(v));
	}
	subFrom(v) {
		this.x -= v.x;
		this.y -= v.y;
		this.z -= getZ(v);
	}
	#updateFromAngle(angle, length) {
		this.x = Math.cos(angle) * length;
		this.y = Math.sin(angle) * length;
	}
};
var Vector = class Vector extends Vector3d {
	constructor(x = originPoint.x, y = originPoint.y) {
		super(x, y, originPoint.z);
	}
	static get origin() {
		return Vector.create(originPoint.x, originPoint.y);
	}
	static clone(source) {
		return Vector.create(source.x, source.y);
	}
	static create(x, y) {
		if (typeof x === "number") return new Vector(x, y ?? originPoint.y);
		return new Vector(x.x, x.y);
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js
function isBoolean(arg) {
	return typeof arg === "boolean";
}
function isString(arg) {
	return typeof arg === "string";
}
function isNumber(arg) {
	return typeof arg === "number";
}
function isFunction(arg) {
	return typeof arg === "function";
}
function isObject(arg) {
	return typeof arg === "object" && arg !== null;
}
function isArray(arg) {
	return Array.isArray(arg);
}
function isNull(arg) {
	return arg === null || arg === void 0;
}
//#endregion
//#region node_modules/@tsparticles/engine/browser/Utils/MathUtils.js
var degToRadFactor = Math.PI / 180;
var _random = Math.random;
var _animationLoop = {
	nextFrame: (cb) => requestAnimationFrame(cb),
	cancel: (idx) => {
		cancelAnimationFrame(idx);
	}
};
function setRandom(rnd = Math.random) {
	_random = rnd;
}
function getRandomFn() {
	return _random;
}
function getRandom() {
	return clamp(_random(), 0, 1 - Number.EPSILON);
}
function getRandomInRange(min, max) {
	return getRandom() * (max - min) + min;
}
function setAnimationFunctions(nextFrame, cancel) {
	_animationLoop.nextFrame = nextFrame;
	_animationLoop.cancel = cancel;
}
function animate(fn) {
	return _animationLoop.nextFrame(fn);
}
function cancelAnimation(handle) {
	_animationLoop.cancel(handle);
}
function clamp(num, min, max) {
	return Math.min(Math.max(num, min), max);
}
function mix(comp1, comp2, weight1, weight2) {
	return Math.floor((comp1 * weight1 + comp2 * weight2) / (weight1 + weight2));
}
function randomInRangeValue(r) {
	const max = getRangeMax(r), minOffset = 0;
	let min = getRangeMin(r);
	if (max === min) min = minOffset;
	return getRandomInRange(min, max);
}
function getRangeValue(value) {
	return isNumber(value) ? value : randomInRangeValue(value);
}
function getRangeMin(value) {
	return isNumber(value) ? value : value.min;
}
function getRangeMax(value) {
	return isNumber(value) ? value : value.max;
}
function setRangeValue(source, value) {
	if (source === value || value === void 0 && isNumber(source)) return source;
	const min = getRangeMin(source), max = getRangeMax(source);
	return value !== void 0 ? {
		min: Math.min(min, value),
		max: Math.max(max, value)
	} : setRangeValue(min, max);
}
function getDistances(pointA, pointB) {
	const dx = pointA.x - pointB.x, dy = pointA.y - pointB.y;
	return {
		dx,
		dy,
		distance: Math.hypot(dx, dy)
	};
}
function getDistanceSq(pointA, pointB) {
	const dx = pointA.x - pointB.x, dy = pointA.y - pointB.y;
	return dx * dx + dy * dy;
}
function getDistance(pointA, pointB) {
	return Math.sqrt(getDistanceSq(pointA, pointB));
}
function checkDistance(pointA, pointB, distance) {
	return getDistanceSq(pointA, pointB) <= distance * distance;
}
function degToRad(degrees) {
	return degrees * degToRadFactor;
}
function getParticleDirectionAngle(direction, position, center) {
	if (isNumber(direction)) return degToRad(direction);
	switch (direction) {
		case MoveDirection.top: return -Math.PI * half;
		case MoveDirection.topRight: return -Math.PI * quarter;
		case MoveDirection.right: return 0;
		case MoveDirection.bottomRight: return Math.PI * quarter;
		case MoveDirection.bottom: return Math.PI * half;
		case MoveDirection.bottomLeft: return Math.PI * threeQuarter;
		case MoveDirection.left: return Math.PI;
		case MoveDirection.topLeft: return -Math.PI * threeQuarter;
		case MoveDirection.inside: return Math.atan2(center.y - position.y, center.x - position.x);
		case MoveDirection.outside: return Math.atan2(position.y - center.y, position.x - center.x);
		default: return getRandom() * doublePI;
	}
}
function getParticleBaseVelocity(direction) {
	const baseVelocity = Vector.origin;
	baseVelocity.length = 1;
	baseVelocity.angle = direction;
	return baseVelocity;
}
function collisionVelocity(v1, v2, m1, m2) {
	return Vector.create(v1.x * (m1 - m2) / (m1 + m2) + v2.x * 2 * m2 / (m1 + m2), v1.y);
}
function calcPositionFromSize(data) {
	return data.position?.x !== void 0 && data.position.y !== void 0 ? {
		x: data.position.x * data.size.width / 100,
		y: data.position.y * data.size.height / 100
	} : void 0;
}
function calcPositionOrRandomFromSize(data) {
	return {
		x: (data.position?.x ?? getRandom() * 100) * data.size.width / 100,
		y: (data.position?.y ?? getRandom() * 100) * data.size.height / 100
	};
}
function calcPositionOrRandomFromSizeRanged(data) {
	const position = {
		x: data.position?.x !== void 0 ? getRangeValue(data.position.x) : void 0,
		y: data.position?.y !== void 0 ? getRangeValue(data.position.y) : void 0
	};
	return calcPositionOrRandomFromSize({
		size: data.size,
		position
	});
}
function calcExactPositionOrRandomFromSize(data) {
	const { position, size } = data;
	return {
		x: position?.x ?? getRandom() * size.width,
		y: position?.y ?? getRandom() * size.height
	};
}
function parseAlpha(input) {
	const defaultAlpha = 1;
	if (!input) return defaultAlpha;
	return input.endsWith("%") ? parseFloat(input) / 100 : parseFloat(input);
}
//#endregion
//#region node_modules/@tsparticles/engine/browser/Enums/Directions/OutModeDirection.js
var OutModeDirection;
(function(OutModeDirection) {
	OutModeDirection["bottom"] = "bottom";
	OutModeDirection["left"] = "left";
	OutModeDirection["right"] = "right";
	OutModeDirection["top"] = "top";
})(OutModeDirection || (OutModeDirection = {}));
//#endregion
//#region node_modules/@tsparticles/engine/browser/Enums/Modes/PixelMode.js
var PixelMode;
(function(PixelMode) {
	PixelMode["precise"] = "precise";
	PixelMode["percent"] = "percent";
})(PixelMode || (PixelMode = {}));
//#endregion
//#region node_modules/@tsparticles/engine/browser/Utils/Utils.js
var minRadius = 0;
function isForbiddenKey(key) {
	return key === "__proto__" || key === "constructor" || key === "prototype";
}
function hasMatchMedia() {
	return typeof matchMedia !== "undefined";
}
function safeDocument() {
	return globalThis.document;
}
function safeMatchMedia(query) {
	if (!hasMatchMedia()) return;
	return matchMedia(query);
}
function safeMutationObserver(callback) {
	if (typeof MutationObserver === "undefined") return;
	return new MutationObserver(callback);
}
function isInArray(value, array) {
	return value === array || isArray(array) && array.includes(value);
}
function itemFromArray(array, index, useIndex = true) {
	return array[index !== void 0 && useIndex ? index % array.length : Math.floor(getRandom() * array.length)];
}
function isPointInside(point, size, offset, radius, direction) {
	return areBoundsInside(calculateBounds(point, radius ?? minRadius), size, offset, direction);
}
function areBoundsInside(bounds, size, offset, direction) {
	let inside = true;
	if (!direction || direction === OutModeDirection.bottom) inside = bounds.top < size.height + offset.x;
	if (inside && (!direction || direction === OutModeDirection.left)) inside = bounds.right > offset.x;
	if (inside && (!direction || direction === OutModeDirection.right)) inside = bounds.left < size.width + offset.y;
	if (inside && (!direction || direction === OutModeDirection.top)) inside = bounds.bottom > offset.y;
	return inside;
}
function calculateBounds(point, radius) {
	return {
		bottom: point.y + radius,
		left: point.x - radius,
		right: point.x + radius,
		top: point.y - radius
	};
}
function deepExtend(destination, ...sources) {
	for (const source of sources) {
		if (isNull(source)) continue;
		if (!isObject(source)) {
			destination = source;
			continue;
		}
		if (Array.isArray(source)) {
			if (!Array.isArray(destination)) destination = [];
		} else if (!isObject(destination) || Array.isArray(destination)) destination = Object.create(null);
		const sourceKeys = Object.keys(source);
		if (!sourceKeys.some((k) => {
			const v = source[k];
			return isObject(v) || Array.isArray(v);
		})) {
			const sourceDict = source, destDict = destination;
			for (const key of sourceKeys) {
				if (isForbiddenKey(key)) continue;
				const v = sourceDict[key];
				if (v !== void 0) destDict[key] = v;
			}
			continue;
		}
		for (const key of sourceKeys) {
			if (isForbiddenKey(key)) continue;
			const sourceDict = source, destDict = destination, value = sourceDict[key];
			destDict[key] = Array.isArray(value) ? value.map((v) => deepExtend(void 0, v)) : deepExtend(destDict[key], value);
		}
	}
	return destination;
}
function circleBounceDataFromParticle(p) {
	return {
		position: p.getPosition(),
		radius: p.getRadius(),
		mass: p.getMass(),
		velocity: p.velocity,
		factor: Vector.create(getRangeValue(p.options.bounce.horizontal.value), getRangeValue(p.options.bounce.vertical.value))
	};
}
function circleBounce(p1, p2) {
	const { x: xVelocityDiff, y: yVelocityDiff } = p1.velocity.sub(p2.velocity), [pos1, pos2] = [p1.position, p2.position], { dx: xDist, dy: yDist } = getDistances(pos2, pos1);
	if (xVelocityDiff * xDist + yVelocityDiff * yDist < 0) return;
	const angle = -Math.atan2(yDist, xDist), m1 = p1.mass, m2 = p2.mass, u1 = p1.velocity.rotate(angle), u2 = p2.velocity.rotate(angle), v1 = collisionVelocity(u1, u2, m1, m2), v2 = collisionVelocity(u2, u1, m1, m2), vFinal1 = v1.rotate(-angle), vFinal2 = v2.rotate(-angle);
	p1.velocity.x = vFinal1.x * p1.factor.x;
	p1.velocity.y = vFinal1.y * p1.factor.y;
	p2.velocity.x = vFinal2.x * p2.factor.x;
	p2.velocity.y = vFinal2.y * p2.factor.y;
}
function executeOnSingleOrMultiple(obj, callback) {
	return isArray(obj) ? obj.map((item, index) => callback(item, index)) : callback(obj, 0);
}
function itemFromSingleOrMultiple(obj, index, useIndex) {
	return isArray(obj) ? itemFromArray(obj, index, useIndex) : obj;
}
function getPositionOrSize(positionOrSize, canvasSize) {
	if (!(positionOrSize.mode === PixelMode.percent)) {
		const { mode: _, ...rest } = positionOrSize;
		return rest;
	}
	if ("x" in positionOrSize) return {
		x: positionOrSize.x / 100 * canvasSize.width,
		y: positionOrSize.y / 100 * canvasSize.height
	};
	else return {
		width: positionOrSize.width / 100 * canvasSize.width,
		height: positionOrSize.height / 100 * canvasSize.height
	};
}
function getPosition(position, canvasSize) {
	return getPositionOrSize(position, canvasSize);
}
function cloneStyle(style) {
	const clonedStyle = safeDocument().createElement("div").style;
	for (const key in style) {
		const styleKey = style[key];
		if (!(key in style) || isNull(styleKey)) continue;
		const styleValue = style.getPropertyValue?.(styleKey);
		if (!styleValue) continue;
		const stylePriority = style.getPropertyPriority?.(styleKey);
		if (stylePriority) clonedStyle.setProperty(styleKey, styleValue, stylePriority);
		else clonedStyle.setProperty(styleKey, styleValue);
	}
	return clonedStyle;
}
var _cachedZIndex, _cachedStyle;
function getFullScreenStyle(zIndex) {
	if (_cachedZIndex !== zIndex || !_cachedStyle) {
		_cachedZIndex = zIndex;
		const fullScreenStyle = safeDocument().createElement("div").style, radix = 10, style = {
			width: "100%",
			height: "100%",
			margin: "0",
			padding: "0",
			borderWidth: "0",
			position: "fixed",
			zIndex: zIndex.toString(radix),
			"z-index": zIndex.toString(radix),
			top: "0",
			left: "0",
			"pointer-events": "none"
		};
		for (const key in style) {
			const value = style[key];
			if (value === void 0) continue;
			fullScreenStyle.setProperty(key, value);
		}
		_cachedStyle = fullScreenStyle;
	}
	return _cachedStyle;
}
function manageListener(element, event, handler, add, options) {
	if (add) {
		let addOptions = { passive: true };
		if (isBoolean(options)) addOptions.capture = options;
		else if (options !== void 0) addOptions = options;
		element.addEventListener(event, handler, addOptions);
	} else {
		const removeOptions = options;
		element.removeEventListener(event, handler, removeOptions);
	}
}
async function getItemsFromInitializer(container, map, initializers, force = false) {
	let res = map.get(container);
	if (!res || force) {
		res = await Promise.all([...initializers.values()].map((t) => t(container)));
		map.set(container, res);
	}
	return res;
}
async function getItemMapFromInitializer(container, map, initializers, force = false) {
	let res = map.get(container);
	if (!res || force) {
		const entries = await Promise.all([...initializers.entries()].map(([key, initializer]) => initializer(container).then((item) => [key, item])));
		res = new Map(entries);
		map.set(container, res);
	}
	return res;
}
//#endregion
//#region node_modules/@tsparticles/engine/browser/Utils/EventDispatcher.js
var EventDispatcher = class {
	#listeners;
	constructor() {
		this.#listeners = /* @__PURE__ */ new Map();
	}
	addEventListener(type, listener) {
		this.removeEventListener(type, listener);
		let arr = this.#listeners.get(type);
		if (!arr) {
			arr = [];
			this.#listeners.set(type, arr);
		}
		arr.push(listener);
	}
	dispatchEvent(type, args) {
		this.#listeners.get(type)?.forEach((handler) => {
			handler(args);
		});
	}
	hasEventListener(type) {
		return !!this.#listeners.get(type);
	}
	removeAllEventListeners(type) {
		if (!type) this.#listeners = /* @__PURE__ */ new Map();
		else this.#listeners.delete(type);
	}
	removeEventListener(type, listener) {
		const arr = this.#listeners.get(type);
		if (!arr) return;
		const length = arr.length, idx = arr.indexOf(listener);
		if (idx < 0) return;
		if (length === 1) this.#listeners.delete(type);
		else arr.splice(idx, 1);
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/browser/Enums/Types/EventType.js
var EventType;
(function(EventType) {
	EventType["configAdded"] = "configAdded";
	EventType["containerInit"] = "containerInit";
	EventType["particlesSetup"] = "particlesSetup";
	EventType["containerStarted"] = "containerStarted";
	EventType["containerStopped"] = "containerStopped";
	EventType["containerDestroyed"] = "containerDestroyed";
	EventType["containerPaused"] = "containerPaused";
	EventType["containerPlay"] = "containerPlay";
	EventType["containerBuilt"] = "containerBuilt";
	EventType["particleAdded"] = "particleAdded";
	EventType["particleDestroyed"] = "particleDestroyed";
	EventType["particleRemoved"] = "particleRemoved";
})(EventType || (EventType = {}));
//#endregion
//#region node_modules/@tsparticles/engine/browser/Core/Utils/PluginManager.js
var PluginManager = class {
	colorManagers = /* @__PURE__ */ new Map();
	easingFunctions = /* @__PURE__ */ new Map();
	effectDrawers = /* @__PURE__ */ new Map();
	initializers = {
		effects: /* @__PURE__ */ new Map(),
		shapes: /* @__PURE__ */ new Map(),
		updaters: /* @__PURE__ */ new Map()
	};
	palettes = /* @__PURE__ */ new Map();
	plugins = [];
	presets = /* @__PURE__ */ new Map();
	shapeDrawers = /* @__PURE__ */ new Map();
	updaters = /* @__PURE__ */ new Map();
	#allLoadersSet = /* @__PURE__ */ new Set();
	#configs = /* @__PURE__ */ new Map();
	#engine;
	#executedSet = /* @__PURE__ */ new Set();
	#initialized = false;
	#isRunningLoaders = false;
	#loadPromises = /* @__PURE__ */ new Set();
	constructor(engine) {
		this.#engine = engine;
	}
	get configs() {
		const res = {};
		for (const [name, config] of this.#configs) res[name] = config;
		return res;
	}
	addColorManager(name, manager) {
		this.colorManagers.set(name, manager);
	}
	addConfig(config) {
		const key = config.key ?? config.name ?? "default";
		this.#configs.set(key, config);
		this.#engine.dispatchEvent(EventType.configAdded, { data: {
			name: key,
			config
		} });
	}
	addEasing(name, easing) {
		if (this.easingFunctions.get(name)) return;
		this.easingFunctions.set(name, easing);
	}
	addEffect(effect, drawer) {
		this.initializers.effects.set(effect, drawer);
	}
	addPalette(name, palette) {
		this.palettes.set(name, palette);
	}
	addParticleUpdater(name, updaterInitializer) {
		this.initializers.updaters.set(name, updaterInitializer);
	}
	addPlugin(plugin) {
		if (this.getPlugin(plugin.id)) return;
		this.plugins.push(plugin);
	}
	addPreset(preset, options, override = false) {
		if (!(override || !this.getPreset(preset))) return;
		this.presets.set(preset, options);
	}
	addShape(shapes, drawer) {
		for (const shape of shapes) this.initializers.shapes.set(shape, drawer);
	}
	clearPlugins(container) {
		this.effectDrawers.delete(container);
		this.shapeDrawers.delete(container);
		this.updaters.delete(container);
	}
	getEasing(name) {
		return this.easingFunctions.get(name) ?? ((value) => value);
	}
	getEffectDrawers(container, force = false) {
		return getItemMapFromInitializer(container, this.effectDrawers, this.initializers.effects, force);
	}
	getPalette(name) {
		return this.palettes.get(name);
	}
	getPlugin(plugin) {
		return this.plugins.find((t) => t.id === plugin);
	}
	getPreset(preset) {
		return this.presets.get(preset);
	}
	async getShapeDrawers(container, force = false) {
		return getItemMapFromInitializer(container, this.shapeDrawers, this.initializers.shapes, force);
	}
	async getUpdaters(container, force = false) {
		return getItemsFromInitializer(container, this.updaters, this.initializers.updaters, force);
	}
	async init() {
		if (this.#initialized || this.#isRunningLoaders) return;
		this.#isRunningLoaders = true;
		this.#executedSet = /* @__PURE__ */ new Set();
		this.#allLoadersSet = new Set(this.#loadPromises);
		try {
			for (const loader of this.#allLoadersSet) await this.#runLoader(loader, this.#executedSet, this.#allLoadersSet);
		} finally {
			this.#loadPromises.clear();
			this.#isRunningLoaders = false;
			this.#initialized = true;
		}
	}
	loadParticlesOptions(container, options, ...sourceOptions) {
		const updaters = this.updaters.get(container);
		if (!updaters) return;
		updaters.forEach((updater) => updater.loadOptions?.(options, ...sourceOptions));
	}
	async register(...loaders) {
		if (this.#initialized) throw new Error("Register plugins can only be done before calling tsParticles.load()");
		for (const loader of loaders) if (this.#isRunningLoaders) await this.#runLoader(loader, this.#executedSet, this.#allLoadersSet);
		else this.#loadPromises.add(loader);
	}
	async #runLoader(loader, executed, allLoaders) {
		if (executed.has(loader)) return;
		executed.add(loader);
		allLoaders.add(loader);
		await loader(this.#engine);
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/browser/Utils/LogUtils.js
var errorPrefix = "tsParticles - Error";
var wrap = (fn) => (...args) => {
	fn(...args);
}, _logger = {
	debug: wrap(console.debug),
	error: (message, ...optionalParams) => {
		console.error(`${errorPrefix} - ${message}`, ...optionalParams);
	},
	info: wrap(console.info),
	log: wrap(console.log),
	trace: wrap(console.trace),
	verbose: wrap(console.log),
	warning: wrap(console.warn)
};
function setLogger(logger) {
	if (logger.debug) _logger.debug = wrap(logger.debug);
	if (logger.error) _logger.error = wrap(logger.error);
	if (logger.info) _logger.info = wrap(logger.info);
	if (logger.log) _logger.log = wrap(logger.log);
	if (logger.trace) _logger.trace = wrap(logger.trace);
	if (logger.verbose) _logger.verbose = wrap(logger.verbose);
	if (logger.warning) _logger.warning = wrap(logger.warning);
}
function getLogger() {
	return _logger;
}
//#endregion
//#region node_modules/@tsparticles/engine/browser/Core/Engine.js
var fullPercent = "100%";
async function getDataFromUrl(data) {
	const url = itemFromSingleOrMultiple(data.url, data.index);
	if (!url) return data.fallback;
	const response = await fetch(url);
	if (response.ok) return await response.json();
	getLogger().error(`${response.status.toString()} while retrieving config file`);
	return data.fallback;
}
var getCanvasFromContainer = (domContainer) => {
	const documentSafe = safeDocument();
	let canvasEl;
	if (domContainer instanceof HTMLCanvasElement || domContainer.tagName.toLowerCase() === "canvas") {
		canvasEl = domContainer;
		canvasEl.dataset[generatedAttribute] ??= generatedFalse;
		if (canvasEl.dataset["generated"] === "true") {
			canvasEl.style.width ||= fullPercent;
			canvasEl.style.height ||= fullPercent;
			canvasEl.style.pointerEvents = "none";
			canvasEl.style.setProperty("pointer-events", "none");
		}
	} else {
		const foundCanvas = domContainer.getElementsByTagName(canvasTag).item(0);
		if (foundCanvas) {
			canvasEl = foundCanvas;
			canvasEl.dataset[generatedAttribute] = generatedFalse;
		} else {
			canvasEl = documentSafe.createElement(canvasTag);
			canvasEl.dataset[generatedAttribute] = generatedTrue;
			domContainer.appendChild(canvasEl);
		}
		canvasEl.style.width ||= fullPercent;
		canvasEl.style.height ||= fullPercent;
		canvasEl.style.pointerEvents = "none";
		canvasEl.style.setProperty("pointer-events", "none");
	}
	return canvasEl;
}, getDomContainer = (id, source) => {
	const documentSafe = safeDocument();
	let domContainer = source ?? documentSafe.getElementById(id);
	if (domContainer) return domContainer;
	domContainer = documentSafe.createElement("canvas");
	domContainer.id = id;
	domContainer.dataset[generatedAttribute] = generatedTrue;
	documentSafe.body.append(domContainer);
	return domContainer;
};
var Engine = class {
	pluginManager = new PluginManager(this);
	#domArray = [];
	#eventDispatcher = new EventDispatcher();
	#initialized = false;
	get items() {
		return this.#domArray;
	}
	get version() {
		return "4.3.2";
	}
	addEventListener(type, listener) {
		this.#eventDispatcher.addEventListener(type, listener);
	}
	checkVersion(pluginVersion) {
		if (this.version === pluginVersion) return;
		throw new Error(`The tsParticles version is different from the loaded plugins version. Engine version: ${this.version}. Plugin version: ${pluginVersion}`);
	}
	dispatchEvent(type, args) {
		this.#eventDispatcher.dispatchEvent(type, args);
	}
	async init() {
		if (this.#initialized) return;
		await this.pluginManager.init();
		this.#initialized = true;
	}
	item(index) {
		const items = this.items, item = items[index];
		if (item?.destroyed) {
			items.splice(index, 1);
			return;
		}
		return item;
	}
	async load(params) {
		await this.init();
		let domSourceElement;
		if (typeof HTMLElement !== "undefined" && params.element instanceof HTMLElement) domSourceElement = params.element;
		const { Container } = await import("./Container-D0irTMvK.js"), id = params.id ?? domSourceElement?.id ?? `tsparticles${Math.floor(getRandom() * 1e4).toString()}`, { index, url } = params, currentOptions = itemFromSingleOrMultiple(url ? await getDataFromUrl({
			fallback: params.options,
			url,
			index
		}) : params.options, index), { items } = this, oldIndex = items.findIndex((v) => v.id.description === id), newItem = new Container({
			dispatchCallback: (eventType, args) => {
				this.dispatchEvent(eventType, args);
			},
			id,
			onDestroy: (remove) => {
				if (!remove) return;
				const mainArr = this.items, idx = mainArr.indexOf(newItem);
				if (idx >= 0) mainArr.splice(idx, 1);
			},
			pluginManager: this.pluginManager,
			sourceOptions: currentOptions
		});
		if (oldIndex >= 0) {
			const old = this.item(oldIndex), deleteCount = old ? 1 : 0;
			if (old && !old.destroyed) old.destroy(false);
			items.splice(oldIndex, deleteCount, newItem);
		} else items.push(newItem);
		const sourceCanvas = typeof OffscreenCanvas !== "undefined" && params.element instanceof OffscreenCanvas ? params.element : getCanvasFromContainer(getDomContainer(id, domSourceElement));
		newItem.canvas.loadCanvas(sourceCanvas);
		await newItem.start();
		return newItem;
	}
	async refresh(refresh = true) {
		if (!refresh) return;
		await Promise.all(this.items.map((t) => t.refresh()));
	}
	removeEventListener(type, listener) {
		this.#eventDispatcher.removeEventListener(type, listener);
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/browser/initEngine.js
function initEngine() {
	return new Engine();
}
//#endregion
//#region node_modules/@tsparticles/engine/browser/Enums/RangeType.js
var RangeType;
(function(RangeType) {
	RangeType["circle"] = "circle";
	RangeType["rectangle"] = "rectangle";
})(RangeType || (RangeType = {}));
//#endregion
//#region node_modules/@tsparticles/engine/browser/Core/Utils/Ranges.js
var BaseRange = class {
	position;
	type;
	constructor(x, y, type) {
		this.position = {
			x,
			y
		};
		this.type = type;
	}
	_resetPosition(x, y) {
		this.position.x = x;
		this.position.y = y;
	}
};
var Circle = class Circle extends BaseRange {
	radius;
	constructor(x, y, radius) {
		super(x, y, RangeType.circle);
		this.radius = radius;
	}
	contains(point) {
		return checkDistance(point, this.position, this.radius);
	}
	intersects(range) {
		const pos1 = this.position, pos2 = range.position, r = this.radius, dx = Math.abs(pos2.x - pos1.x), dy = Math.abs(pos2.y - pos1.y);
		if (range instanceof Circle || range.type === RangeType.circle) return r + range.radius > Math.hypot(dx, dy);
		else if (range instanceof Rectangle || range.type === RangeType.rectangle) {
			const { width, height } = range.size;
			return Math.pow(dx - width, 2) + Math.pow(dy - height, 2) <= r ** 2 || dx <= r + width && dy <= r + height || dx <= width || dy <= height;
		}
		return false;
	}
	reset(x, y, radius) {
		this._resetPosition(x, y);
		this.radius = radius;
		return this;
	}
};
var Rectangle = class Rectangle extends BaseRange {
	size;
	constructor(x, y, width, height) {
		super(x, y, RangeType.rectangle);
		this.size = {
			height,
			width
		};
	}
	contains(point) {
		const w = this.size.width, h = this.size.height, pos = this.position;
		return point.x >= pos.x && point.x <= pos.x + w && point.y >= pos.y && point.y <= pos.y + h;
	}
	intersects(range) {
		if (range instanceof Circle) return range.intersects(this);
		if (!(range instanceof Rectangle)) return false;
		const w = this.size.width, h = this.size.height, pos1 = this.position, pos2 = range.position, size2 = range.size, w2 = size2.width, h2 = size2.height;
		return pos2.x < pos1.x + w && pos2.x + w2 > pos1.x && pos2.y < pos1.y + h && pos2.y + h2 > pos1.y;
	}
	reset(x, y, width, height) {
		this._resetPosition(x, y);
		this.size.width = width;
		this.size.height = height;
		return this;
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/browser/Enums/Directions/RotateDirection.js
var RotateDirection;
(function(RotateDirection) {
	RotateDirection["clockwise"] = "clockwise";
	RotateDirection["counterClockwise"] = "counter-clockwise";
	RotateDirection["random"] = "random";
})(RotateDirection || (RotateDirection = {}));
//#endregion
//#region node_modules/@tsparticles/engine/browser/Enums/Modes/AnimationMode.js
var AnimationMode;
(function(AnimationMode) {
	AnimationMode["auto"] = "auto";
	AnimationMode["increase"] = "increase";
	AnimationMode["decrease"] = "decrease";
	AnimationMode["random"] = "random";
})(AnimationMode || (AnimationMode = {}));
//#endregion
//#region node_modules/@tsparticles/engine/browser/Enums/Modes/LimitMode.js
var LimitMode;
(function(LimitMode) {
	LimitMode["delete"] = "delete";
	LimitMode["wait"] = "wait";
})(LimitMode || (LimitMode = {}));
//#endregion
//#region node_modules/@tsparticles/engine/browser/Enums/Modes/OutMode.js
var OutMode;
(function(OutMode) {
	OutMode["bounce"] = "bounce";
	OutMode["none"] = "none";
	OutMode["out"] = "out";
	OutMode["destroy"] = "destroy";
	OutMode["split"] = "split";
})(OutMode || (OutMode = {}));
//#endregion
//#region node_modules/@tsparticles/engine/browser/Enums/Types/AlterType.js
var AlterType;
(function(AlterType) {
	AlterType["darken"] = "darken";
	AlterType["enlighten"] = "enlighten";
})(AlterType || (AlterType = {}));
//#endregion
//#region node_modules/@tsparticles/engine/browser/Enums/Types/DestroyType.js
var DestroyType;
(function(DestroyType) {
	DestroyType["none"] = "none";
	DestroyType["max"] = "max";
	DestroyType["min"] = "min";
})(DestroyType || (DestroyType = {}));
//#endregion
//#region node_modules/@tsparticles/engine/browser/Enums/Types/GradientType.js
var GradientType;
(function(GradientType) {
	GradientType["linear"] = "linear";
	GradientType["radial"] = "radial";
	GradientType["random"] = "random";
})(GradientType || (GradientType = {}));
//#endregion
//#region node_modules/@tsparticles/engine/browser/Enums/Types/ParticleOutType.js
var ParticleOutType;
(function(ParticleOutType) {
	ParticleOutType["normal"] = "normal";
	ParticleOutType["inside"] = "inside";
	ParticleOutType["outside"] = "outside";
})(ParticleOutType || (ParticleOutType = {}));
//#endregion
//#region node_modules/@tsparticles/engine/browser/Enums/Types/StartValueType.js
var StartValueType;
(function(StartValueType) {
	StartValueType["max"] = "max";
	StartValueType["min"] = "min";
	StartValueType["random"] = "random";
})(StartValueType || (StartValueType = {}));
//#endregion
//#region node_modules/@tsparticles/engine/browser/Enums/AnimationStatus.js
var AnimationStatus;
(function(AnimationStatus) {
	AnimationStatus["increasing"] = "increasing";
	AnimationStatus["decreasing"] = "decreasing";
})(AnimationStatus || (AnimationStatus = {}));
//#endregion
//#region node_modules/@tsparticles/engine/browser/Enums/DrawLayer.js
var DrawLayer;
(function(DrawLayer) {
	DrawLayer[DrawLayer["BackgroundElement"] = 0] = "BackgroundElement";
	DrawLayer[DrawLayer["BackgroundDraw"] = 1] = "BackgroundDraw";
	DrawLayer[DrawLayer["BackgroundMask"] = 2] = "BackgroundMask";
	DrawLayer[DrawLayer["CanvasSetup"] = 3] = "CanvasSetup";
	DrawLayer[DrawLayer["PluginContent"] = 4] = "PluginContent";
	DrawLayer[DrawLayer["Particles"] = 5] = "Particles";
	DrawLayer[DrawLayer["CanvasCleanup"] = 6] = "CanvasCleanup";
	DrawLayer[DrawLayer["Foreground"] = 7] = "Foreground";
})(DrawLayer || (DrawLayer = {}));
//#endregion
//#region node_modules/@tsparticles/engine/browser/Utils/OptionLoader.js
var OptionLoader = class {
	load(data) {
		if (isNull(data)) return;
		this.doLoad(data);
	}
};
function loadOptions(options, ...sourceOptionsArr) {
	for (const sourceOptions of sourceOptionsArr) options.load(sourceOptions);
}
//#endregion
//#region node_modules/@tsparticles/engine/browser/Utils/OptionsUtils.js
function loadProperty(obj, key, value) {
	if (value !== void 0) obj[key] = value;
}
function loadRangeProperty(obj, key, value) {
	if (value !== void 0) obj[key] = setRangeValue(value);
}
function loadNestedProperty(obj, key, value) {
	if (value !== void 0) obj[key].load(value);
}
function loadLazyProperty(obj, key, value, factory) {
	if (value !== void 0) {
		const objRecord = obj;
		objRecord[key] ??= factory();
		objRecord[key].load(value);
	}
}
function loadExtendProperty(obj, key, value) {
	if (value !== void 0) {
		const keyStr = key;
		if (keyStr === "__proto__" || keyStr === "constructor" || keyStr === "prototype") return;
		const objRecord = obj;
		objRecord[keyStr] = deepExtend(Object.prototype.hasOwnProperty.call(objRecord, keyStr) ? objRecord[keyStr] : {}, value);
	}
}
function loadOptionProperty(obj, key, optionClass, ...sources) {
	const objRecord = obj;
	objRecord[key] ??= new optionClass();
	const target = objRecord[key];
	for (const source of sources) target.load(source?.[key]);
}
//#endregion
//#region node_modules/@tsparticles/engine/browser/Options/Classes/AnimationOptions.js
var AnimationOptions = class extends OptionLoader {
	count = 0;
	decay = 0;
	delay = 0;
	enable = false;
	speed = 1;
	sync = false;
	doLoad(data) {
		loadRangeProperty(this, "count", data.count);
		loadProperty(this, "enable", data.enable);
		loadRangeProperty(this, "speed", data.speed);
		loadRangeProperty(this, "decay", data.decay);
		loadRangeProperty(this, "delay", data.delay);
		loadProperty(this, "sync", data.sync);
	}
};
var RangedAnimationOptions = class extends AnimationOptions {
	mode = AnimationMode.auto;
	startValue = StartValueType.random;
	doLoad(data) {
		super.doLoad(data);
		loadProperty(this, "mode", data.mode);
		loadProperty(this, "startValue", data.startValue);
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/browser/Options/Classes/ColorAnimation.js
var ColorAnimation = class extends AnimationOptions {
	max;
	min;
	offset = 0;
	sync = true;
	constructor(min, max) {
		super();
		this.min = min;
		this.max = max;
	}
	doLoad(data) {
		super.doLoad(data);
		loadProperty(this, "max", data.max);
		loadProperty(this, "min", data.min);
		loadRangeProperty(this, "offset", data.offset);
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/browser/Options/Classes/HslAnimation.js
var HslAnimation = class extends OptionLoader {
	h = new ColorAnimation(0, 360);
	l = new ColorAnimation(0, 100);
	s = new ColorAnimation(0, 100);
	doLoad(data) {
		this.h.load(data.h);
		this.s.load(data.s);
		this.l.load(data.l);
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/browser/Options/Classes/OptionsColor.js
var OptionsColor = class OptionsColor extends OptionLoader {
	value = "";
	static create(source, data) {
		const color = new OptionsColor();
		color.load(source);
		if (data !== void 0) if (isString(data) || isArray(data)) color.load({ value: data });
		else color.load(data);
		return color;
	}
	doLoad(data) {
		if (!isNull(data.value)) this.value = data.value;
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/browser/Options/Classes/AnimatableColor.js
var AnimatableColor = class AnimatableColor extends OptionsColor {
	animation = new HslAnimation();
	static create(source, data) {
		const color = new AnimatableColor();
		color.load(source);
		if (data !== void 0) if (isString(data) || isArray(data)) color.load({ value: data });
		else color.load(data);
		return color;
	}
	doLoad(data) {
		super.doLoad(data);
		const colorAnimation = data.animation;
		if (colorAnimation !== void 0) if (colorAnimation.enable === void 0) this.animation.load(data.animation);
		else this.animation.h.load(colorAnimation);
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/browser/Options/Classes/Background/Background.js
var Background = class extends OptionLoader {
	color;
	draw;
	element;
	image = "";
	opacity = 1;
	position = "";
	repeat = "";
	size = "";
	constructor() {
		super();
		this.color = new OptionsColor();
		this.color.value = "";
	}
	doLoad(data) {
		if (data.color !== void 0) this.color = OptionsColor.create(this.color, data.color);
		loadProperty(this, "element", data.element);
		loadProperty(this, "draw", data.draw);
		loadProperty(this, "image", data.image);
		loadProperty(this, "position", data.position);
		loadProperty(this, "repeat", data.repeat);
		loadProperty(this, "size", data.size);
		loadProperty(this, "opacity", data.opacity);
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/browser/Options/Classes/FullScreen/FullScreen.js
var FullScreen = class extends OptionLoader {
	enable = true;
	zIndex = 0;
	doLoad(data) {
		loadProperty(this, "enable", data.enable);
		loadProperty(this, "zIndex", data.zIndex);
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/browser/Options/Classes/ResizeEvent.js
var ResizeEvent = class extends OptionLoader {
	delay = .5;
	enable = true;
	doLoad(data) {
		loadProperty(this, "delay", data.delay);
		loadProperty(this, "enable", data.enable);
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Effect/Effect.js
var Effect = class extends OptionLoader {
	close = true;
	options = {};
	type = [];
	doLoad(data) {
		const options = data.options;
		if (options !== void 0) for (const effect in options) {
			const item = options[effect];
			if (item) this.options[effect] = deepExtend(this.options[effect] ?? {}, item);
		}
		loadProperty(this, "close", data.close);
		loadProperty(this, "type", data.type);
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Fill.js
var Fill = class extends OptionLoader {
	color;
	enable = true;
	opacity = 1;
	doLoad(data) {
		if (data.color !== void 0) this.color = AnimatableColor.create(this.color, data.color);
		loadProperty(this, "enable", data.enable);
		loadRangeProperty(this, "opacity", data.opacity);
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/MoveAngle.js
var MoveAngle = class extends OptionLoader {
	offset = 0;
	value = 90;
	doLoad(data) {
		loadRangeProperty(this, "offset", data.offset);
		loadRangeProperty(this, "value", data.value);
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/MoveCenter.js
var MoveCenter = class extends OptionLoader {
	mode = PixelMode.percent;
	radius = 0;
	x = 50;
	y = 50;
	doLoad(data) {
		loadProperty(this, "x", data.x);
		loadProperty(this, "y", data.y);
		loadProperty(this, "mode", data.mode);
		loadProperty(this, "radius", data.radius);
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/MoveGravity.js
var MoveGravity = class extends OptionLoader {
	acceleration = 9.81;
	enable = false;
	inverse = false;
	maxSpeed = 50;
	doLoad(data) {
		loadRangeProperty(this, "acceleration", data.acceleration);
		loadProperty(this, "enable", data.enable);
		loadProperty(this, "inverse", data.inverse);
		loadRangeProperty(this, "maxSpeed", data.maxSpeed);
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/browser/Options/Classes/ValueWithRandom.js
var ValueWithRandom = class extends OptionLoader {
	value = 0;
	doLoad(data) {
		if (!isNull(data.value)) this.value = setRangeValue(data.value);
	}
};
var AnimationValueWithRandom = class extends ValueWithRandom {
	animation = new AnimationOptions();
	doLoad(data) {
		super.doLoad(data);
		loadNestedProperty(this, "animation", data.animation);
	}
};
var RangedAnimationValueWithRandom = class extends AnimationValueWithRandom {
	animation = new RangedAnimationOptions();
};
//#endregion
//#region node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/Path/MovePath.js
var MovePath = class extends OptionLoader {
	clamp = true;
	delay = new ValueWithRandom();
	enable = false;
	generator;
	options = {};
	doLoad(data) {
		loadProperty(this, "clamp", data.clamp);
		this.delay.load(data.delay);
		loadProperty(this, "enable", data.enable);
		this.generator = data.generator;
		if (data.options) this.options = deepExtend(this.options, data.options);
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/OutModes.js
var OutModes = class extends OptionLoader {
	bottom;
	default = OutMode.out;
	left;
	right;
	top;
	doLoad(data) {
		if (data.default !== void 0) this.default = data.default;
		this.bottom = data.bottom ?? data.default;
		this.left = data.left ?? data.default;
		this.right = data.right ?? data.default;
		this.top = data.top ?? data.default;
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/Spin.js
var Spin = class extends OptionLoader {
	acceleration = 0;
	enable = false;
	position;
	doLoad(data) {
		loadRangeProperty(this, "acceleration", data.acceleration);
		loadProperty(this, "enable", data.enable);
		if (data.position) this.position = deepExtend({}, data.position);
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/Move.js
var Move = class extends OptionLoader {
	angle = new MoveAngle();
	center = new MoveCenter();
	decay = 0;
	direction = MoveDirection.none;
	distance = {};
	drift = 0;
	enable = false;
	gravity = new MoveGravity();
	outModes = new OutModes();
	path = new MovePath();
	random = false;
	size = false;
	speed = 2;
	spin = new Spin();
	straight = false;
	vibrate = false;
	warp = false;
	doLoad(data) {
		this.angle.load(isNumber(data.angle) ? { value: data.angle } : data.angle);
		this.center.load(data.center);
		loadRangeProperty(this, "decay", data.decay);
		loadProperty(this, "direction", data.direction);
		if (data.distance !== void 0) this.distance = isNumber(data.distance) ? {
			horizontal: data.distance,
			vertical: data.distance
		} : { ...data.distance };
		loadRangeProperty(this, "drift", data.drift);
		loadProperty(this, "enable", data.enable);
		this.gravity.load(data.gravity);
		const outModes = data.outModes;
		if (outModes !== void 0) if (isObject(outModes)) this.outModes.load(outModes);
		else this.outModes.load({ default: outModes });
		this.path.load(data.path);
		loadProperty(this, "random", data.random);
		loadProperty(this, "size", data.size);
		loadRangeProperty(this, "speed", data.speed);
		this.spin.load(data.spin);
		loadProperty(this, "straight", data.straight);
		loadProperty(this, "vibrate", data.vibrate);
		loadProperty(this, "warp", data.warp);
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Stroke.js
var Stroke = class extends OptionLoader {
	color;
	opacity;
	width = 0;
	doLoad(data) {
		if (data.color !== void 0) this.color = AnimatableColor.create(this.color, data.color);
		loadRangeProperty(this, "width", data.width);
		loadRangeProperty(this, "opacity", data.opacity);
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Paint.js
var Paint = class extends OptionLoader {
	color;
	fill;
	stroke;
	doLoad(data) {
		if (data.color !== void 0) this.color = AnimatableColor.create(this.color, data.color);
		loadLazyProperty(this, "fill", data.fill, () => new Fill());
		loadLazyProperty(this, "stroke", data.stroke, () => new Stroke());
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Bounce/ParticlesBounceFactor.js
var ParticlesBounceFactor = class extends ValueWithRandom {
	value = 1;
};
//#endregion
//#region node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Bounce/ParticlesBounce.js
var ParticlesBounce = class extends OptionLoader {
	horizontal = new ParticlesBounceFactor();
	vertical = new ParticlesBounceFactor();
	doLoad(data) {
		this.horizontal.load(data.horizontal);
		this.vertical.load(data.vertical);
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Number/ParticlesDensity.js
var ParticlesDensity = class extends OptionLoader {
	enable = false;
	height = 1080;
	width = 1920;
	doLoad(data) {
		loadProperty(this, "enable", data.enable);
		loadProperty(this, "width", data.width);
		loadProperty(this, "height", data.height);
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Number/ParticlesNumberLimit.js
var ParticlesNumberLimit = class extends OptionLoader {
	mode = LimitMode.delete;
	value = 0;
	doLoad(data) {
		loadProperty(this, "mode", data.mode);
		loadProperty(this, "value", data.value);
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Number/ParticlesNumber.js
var ParticlesNumber = class extends OptionLoader {
	density = new ParticlesDensity();
	limit = new ParticlesNumberLimit();
	value = 0;
	doLoad(data) {
		this.density.load(data.density);
		this.limit.load(data.limit);
		loadProperty(this, "value", data.value);
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Shape/Shape.js
var Shape = class extends OptionLoader {
	close = true;
	options = {};
	type = "circle";
	doLoad(data) {
		const options = data.options;
		if (options !== void 0) for (const shape in options) {
			const item = options[shape];
			if (item) this.options[shape] = deepExtend(this.options[shape] ?? {}, item);
		}
		loadProperty(this, "close", data.close);
		loadProperty(this, "type", data.type);
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/browser/Options/Classes/Particles/ZIndex/ZIndex.js
var ZIndex = class extends ValueWithRandom {
	opacityRate = 1;
	sizeRate = 1;
	velocityRate = 1;
	doLoad(data) {
		super.doLoad(data);
		loadProperty(this, "opacityRate", data.opacityRate);
		loadProperty(this, "sizeRate", data.sizeRate);
		loadProperty(this, "velocityRate", data.velocityRate);
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/browser/Options/Classes/Particles/ParticlesOptions.js
var ParticlesOptions = class extends OptionLoader {
	bounce = new ParticlesBounce();
	effect = new Effect();
	groups = {};
	move = new Move();
	number = new ParticlesNumber();
	paint;
	palette;
	reduceDuplicates = false;
	shape = new Shape();
	zIndex = new ZIndex();
	#container;
	#pluginManager;
	constructor(pluginManager, container) {
		super();
		this.#pluginManager = pluginManager;
		this.#container = container;
		this.paint = new Paint();
		this.paint.color = new AnimatableColor();
		this.paint.color.value = "#fff";
		this.paint.fill = new Fill();
		this.paint.fill.enable = true;
	}
	doLoad(data) {
		if (data.palette) {
			this.palette = data.palette;
			this.#importPalette(this.palette);
		}
		if (data.groups !== void 0) for (const group of Object.keys(data.groups)) {
			if (!(group in data.groups)) continue;
			const item = data.groups[group];
			if (item !== void 0) this.groups[group] = deepExtend(this.groups[group] ?? {}, item);
		}
		if (data.reduceDuplicates !== void 0) this.reduceDuplicates = data.reduceDuplicates;
		this.bounce.load(data.bounce);
		this.effect.load(data.effect);
		this.move.load(data.move);
		this.number.load(data.number);
		const paintToLoad = data.paint;
		if (paintToLoad) if (isArray(paintToLoad)) this.paint = executeOnSingleOrMultiple(paintToLoad, (t) => {
			const tmp = new Paint();
			tmp.load(t);
			return tmp;
		});
		else if (isArray(this.paint)) {
			this.paint = new Paint();
			this.paint.load(paintToLoad);
		} else this.paint.load(paintToLoad);
		this.shape.load(data.shape);
		this.zIndex.load(data.zIndex);
		if (this.#container) {
			for (const plugin of this.#pluginManager.plugins) if (plugin.loadParticlesOptions) plugin.loadParticlesOptions(this.#container, this, data);
			const updaters = this.#pluginManager.updaters.get(this.#container);
			if (updaters) {
				for (const updater of updaters) if (updater.loadOptions) updater.loadOptions(this, data);
			}
		}
	}
	#importPalette(palette) {
		const paletteData = this.#pluginManager.getPalette(palette);
		if (!paletteData) return;
		const paletteColors = paletteData.colors, defaultPaintStrokeWidth = 0, defaultPaintVariantsLength = 1, firstPaintVariantIndex = 0, defaultPalettePaintVariant = {}, palettePaintVariants = (isArray(paletteColors) ? paletteColors : [paletteColors]).flatMap((variant) => {
			const paletteFill = variant.fill, paletteStroke = variant.stroke, fillPart = paletteFill ? {
				color: { value: paletteFill.value },
				enable: paletteFill.enable,
				opacity: paletteFill.opacity
			} : void 0;
			if (!paletteStroke) return [{ fill: fillPart }];
			return [{
				fill: fillPart,
				stroke: {
					color: { value: paletteStroke.value },
					opacity: paletteStroke.opacity,
					width: paletteStroke.width || defaultPaintStrokeWidth
				}
			}];
		}), palettePaint = palettePaintVariants.length > defaultPaintVariantsLength ? palettePaintVariants : palettePaintVariants[firstPaintVariantIndex] ?? defaultPalettePaintVariant;
		this.load({
			paint: palettePaint,
			blend: {
				enable: true,
				mode: paletteData.blendMode
			}
		});
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/browser/Utils/ParticlesOptionsLoader.js
function loadParticlesOptions(pluginManager, container, ...sourceOptionsArr) {
	const options = new ParticlesOptions(pluginManager, container);
	loadOptions(options, ...sourceOptionsArr);
	return options;
}
//#endregion
//#region node_modules/@tsparticles/engine/browser/Options/Classes/Options.js
var Options = class extends OptionLoader {
	autoPlay = true;
	background;
	clear = true;
	defaultThemes = {};
	delay = 0;
	detectRetina = true;
	duration = 0;
	fpsLimit = 120;
	fullScreen;
	hdr = true;
	key;
	name;
	palette;
	particles;
	pauseOnBlur = true;
	pauseOnOutsideViewport = true;
	preset;
	resize;
	smooth = false;
	style = {};
	zLayers = 100;
	#container;
	#pluginManager;
	constructor(pluginManager, container) {
		super();
		this.#pluginManager = pluginManager;
		this.#container = container;
		this.background = new Background();
		this.fullScreen = new FullScreen();
		this.particles = loadParticlesOptions(this.#pluginManager, this.#container);
		this.resize = new ResizeEvent();
	}
	doLoad(data) {
		if (data.preset !== void 0) {
			this.preset = data.preset;
			executeOnSingleOrMultiple(this.preset, (preset) => {
				this.#importPreset(preset);
			});
		}
		if (data.palette !== void 0) {
			this.palette = data.palette;
			this.#importPalette(this.palette);
		}
		loadProperty(this, "autoPlay", data.autoPlay);
		loadProperty(this, "clear", data.clear);
		loadProperty(this, "key", data.key);
		loadProperty(this, "name", data.name);
		loadRangeProperty(this, "delay", data.delay);
		loadProperty(this, "detectRetina", data.detectRetina);
		loadRangeProperty(this, "duration", data.duration);
		loadProperty(this, "fpsLimit", data.fpsLimit);
		loadProperty(this, "hdr", data.hdr);
		loadProperty(this, "pauseOnBlur", data.pauseOnBlur);
		loadProperty(this, "pauseOnOutsideViewport", data.pauseOnOutsideViewport);
		loadProperty(this, "zLayers", data.zLayers);
		this.background.load(data.background);
		const fullScreen = data.fullScreen;
		if (isBoolean(fullScreen)) this.fullScreen.enable = fullScreen;
		else this.fullScreen.load(fullScreen);
		this.particles.load(data.particles);
		this.resize.load(data.resize);
		this.style = deepExtend(this.style, data.style);
		loadProperty(this, "smooth", data.smooth);
		this.#pluginManager.plugins.forEach((plugin) => {
			plugin.loadOptions(this.#container, this, data);
		});
	}
	#importPalette(palette) {
		const paletteData = this.#pluginManager.getPalette(palette);
		if (!paletteData) return;
		this.load({
			background: { color: paletteData.background },
			blend: {
				enable: true,
				mode: paletteData.blendMode
			},
			particles: { palette }
		});
	}
	#importPreset(preset) {
		this.load(this.#pluginManager.getPreset(preset));
	}
};
//#endregion
//#region node_modules/@tsparticles/engine/browser/Utils/ColorUtils.js
var styleCache = /* @__PURE__ */ new Map(), maxStyleCacheSize = 2e3, rgbFixedPrecision = 2, hslFixedPrecision = 2, hdrRgbFixedPrecision = 4, hdrHslFixedPrecision = 4, sdrReferenceWhiteNits = 203, hdrAnimationScale = sdrReferenceWhiteNits / 400;
function getCachedStyle(key, generator) {
	let cached = styleCache.get(key);
	if (!cached) {
		cached = generator();
		if (styleCache.size > maxStyleCacheSize) styleCache.clear();
		styleCache.set(key, cached);
	}
	return cached;
}
function stringToRgba(pluginManager, input) {
	if (!input) return;
	for (const manager of pluginManager.colorManagers.values()) if (manager.accepts(input)) return manager.parseString(input);
}
function rangeColorToRgb(pluginManager, input, index, useIndex = true) {
	if (!input) return;
	const color = isString(input) ? { value: input } : input;
	if (isString(color.value)) return colorToRgb(pluginManager, color.value, index, useIndex);
	if (isArray(color.value)) {
		const value = itemFromArray(color.value, index, useIndex);
		if (!value) return;
		return rangeColorToRgb(pluginManager, { value });
	}
	for (const manager of pluginManager.colorManagers.values()) {
		const res = manager.handleRangeColor(color);
		if (res) return res;
	}
}
function colorToRgb(pluginManager, input, index, useIndex = true) {
	if (!input) return;
	const color = isString(input) ? { value: input } : input;
	if (isString(color.value)) return color.value === "random" ? getRandomRgbColor() : stringToRgb(pluginManager, color.value);
	if (isArray(color.value)) {
		const value = itemFromArray(color.value, index, useIndex);
		if (!value) return;
		return colorToRgb(pluginManager, { value });
	}
	for (const manager of pluginManager.colorManagers.values()) {
		const res = manager.handleColor(color);
		if (res) return res;
	}
}
function rangeColorToHsl(pluginManager, color, index, useIndex = true) {
	const rgb = rangeColorToRgb(pluginManager, color, index, useIndex);
	return rgb ? rgbToHsl(rgb) : void 0;
}
function rgbToHsl(color) {
	const r1 = color.r / 255, g1 = color.g / 255, b1 = color.b / 255, max = Math.max(r1, g1, b1), min = Math.min(r1, g1, b1), res = {
		h: 0,
		l: (max + min) * half,
		s: 0
	};
	if (max !== min) {
		res.s = res.l < .5 ? (max - min) / (max + min) : (max - min) / (2 - max - min);
		if (r1 === max) res.h = (g1 - b1) / (max - min);
		else if (g1 === max) res.h = 2 + (b1 - r1) / (max - min);
		else res.h = 4 + (r1 - g1) / (max - min);
	}
	res.l *= 100;
	res.s *= 100;
	res.h *= 60;
	if (res.h < 0) res.h += 360;
	if (res.h >= 360) res.h -= 360;
	return res;
}
function stringToAlpha(pluginManager, input) {
	return stringToRgba(pluginManager, input)?.a;
}
function stringToRgb(pluginManager, input) {
	return stringToRgba(pluginManager, input);
}
function hslChannel(temp1, temp2, temp3) {
	const temp3Min = 0, temp3Max = 1;
	if (temp3 < temp3Min) temp3++;
	if (temp3 > temp3Max) temp3--;
	if (temp3 * 6 < temp3Max) return temp1 + (temp2 - temp1) * 6 * temp3;
	if (temp3 * 2 < temp3Max) return temp2;
	if (temp3 * 3 < temp3Max * 2) return temp1 + (temp2 - temp1) * (2 / 3 - temp3) * 6;
	return temp1;
}
function hslToRgb(hsl) {
	const h = (hsl.h % 360 + 360) % 360, s = Math.max(0, Math.min(100, hsl.s)), l = Math.max(0, Math.min(100, hsl.l)), hNormalized = h / 360, sNormalized = s / 100, lNormalized = l / 100;
	if (s === 0) {
		const grayscaleValue = Math.round(lNormalized * 255);
		return {
			r: grayscaleValue,
			g: grayscaleValue,
			b: grayscaleValue
		};
	}
	const temp1 = lNormalized < .5 ? lNormalized * (1 + sNormalized) : lNormalized + sNormalized - lNormalized * sNormalized, temp2 = 2 * lNormalized - temp1, phaseThird = 1 / 3, red = Math.min(255, 255 * hslChannel(temp2, temp1, hNormalized + phaseThird)), green = Math.min(255, 255 * hslChannel(temp2, temp1, hNormalized)), blue = Math.min(255, 255 * hslChannel(temp2, temp1, hNormalized - phaseThird));
	return {
		r: Math.round(red),
		g: Math.round(green),
		b: Math.round(blue)
	};
}
function hslToRgbFloat(hsl) {
	const h = (hsl.h % 360 + 360) % 360, s = Math.max(0, Math.min(100, hsl.s)), l = Math.max(0, Math.min(100, hsl.l)), hNormalized = h / 360, sNormalized = s / 100, lNormalized = l / 100;
	if (s === 0) {
		const grayscaleValue = lNormalized * 255;
		return {
			r: grayscaleValue,
			g: grayscaleValue,
			b: grayscaleValue
		};
	}
	const temp1 = lNormalized < .5 ? lNormalized * (1 + sNormalized) : lNormalized + sNormalized - lNormalized * sNormalized, temp2 = 2 * lNormalized - temp1, phaseThird = 1 / 3;
	return {
		r: Math.min(255, 255 * hslChannel(temp2, temp1, hNormalized + phaseThird)),
		g: Math.min(255, 255 * hslChannel(temp2, temp1, hNormalized)),
		b: Math.min(255, 255 * hslChannel(temp2, temp1, hNormalized - phaseThird))
	};
}
function hslaToRgba(hsla) {
	const rgbResult = hslToRgb(hsla);
	return {
		a: hsla.a,
		b: rgbResult.b,
		g: rgbResult.g,
		r: rgbResult.r
	};
}
function getRandomRgbColor(min, hdr) {
	const fixedMin = min ?? 0;
	if (hdr) return {
		r: getRandomInRange(fixedMin, 255),
		g: getRandomInRange(fixedMin, 255),
		b: getRandomInRange(fixedMin, 255)
	};
	const fixedMax = 256, getRgbInRangeValue = () => Math.floor(getRandomInRange(fixedMin, fixedMax));
	return {
		b: getRgbInRangeValue(),
		g: getRgbInRangeValue(),
		r: getRgbInRangeValue()
	};
}
function getStyleFromRgb(color, hdr, opacity) {
	const rgbPrecision = hdr ? hdrRgbFixedPrecision : rgbFixedPrecision, op = opacity ?? 1;
	return getCachedStyle(`rgb-${color.r.toFixed(rgbPrecision)}-${color.g.toFixed(rgbPrecision)}-${color.b.toFixed(rgbPrecision)}-${hdr ? "hdr" : "sdr"}-${op.toString()}`, () => hdr ? getHdrStyleFromRgb(color, opacity) : getSdrStyleFromRgb(color, opacity));
}
function getHdrStyleFromRgb(color, opacity, peakNits = 400) {
	const headroom = peakNits / sdrReferenceWhiteNits;
	return `color(display-p3 ${(color.r / 255 * headroom).toString()} ${(color.g / 255 * headroom).toString()} ${(color.b / 255 * headroom).toString()} / ${(opacity ?? 1).toString()})`;
}
function getSdrStyleFromRgb(color, opacity) {
	return `rgba(${color.r.toString()}, ${color.g.toString()}, ${color.b.toString()}, ${(opacity ?? 1).toString()})`;
}
function getStyleFromHsl(color, hdr, opacity) {
	const hslPrecision = hdr ? hdrHslFixedPrecision : hslFixedPrecision, op = opacity ?? 1;
	return getCachedStyle(`hsl-${color.h.toFixed(hslPrecision)}-${color.s.toFixed(hslPrecision)}-${color.l.toFixed(hslPrecision)}-${hdr ? "hdr" : "sdr"}-${op.toString()}`, () => hdr ? getStyleFromRgb(hslToRgbFloat(color), true, opacity) : `hsla(${color.h.toString()}, ${color.s.toString()}%, ${color.l.toString()}%, ${op.toString()})`);
}
function colorMix(color1, color2, size1, size2) {
	let rgb1 = color1, rgb2 = color2;
	if (!("r" in rgb1)) rgb1 = hslToRgb(color1);
	if (!("r" in rgb2)) rgb2 = hslToRgb(color2);
	return {
		b: mix(rgb1.b, rgb2.b, size1, size2),
		g: mix(rgb1.g, rgb2.g, size1, size2),
		r: mix(rgb1.r, rgb2.r, size1, size2)
	};
}
function getLinkColor(p1, p2, linkColor) {
	if (linkColor === "random") return getRandomRgbColor();
	else if (linkColor === "mid") {
		const sourceColor = p1.getFillColor() ?? p1.getStrokeColor(), destColor = p2?.getFillColor() ?? p2?.getStrokeColor();
		if (sourceColor && destColor && p2) return colorMix(sourceColor, destColor, p1.getRadius(), p2.getRadius());
		else {
			const hslColor = sourceColor ?? destColor;
			if (hslColor) return hslToRgb(hslColor);
		}
	} else return linkColor;
}
function getLinkRandomColor(pluginManager, optColor, blink, consent) {
	const color = isString(optColor) ? optColor : optColor.value;
	if (color === "random") {
		if (consent) return rangeColorToRgb(pluginManager, { value: color });
		if (blink) return randomColorValue;
		return "mid";
	} else if (color === "mid") return "mid";
	else return rangeColorToRgb(pluginManager, { value: color });
}
function getHslFromAnimation(animation) {
	return animation === void 0 ? void 0 : {
		h: animation.h.value,
		s: animation.s.value,
		l: animation.l.value
	};
}
function getHslAnimationFromHsl(hsl, animationOptions, reduceFactor) {
	const resColor = {
		h: {
			enable: false,
			value: hsl.h,
			min: 0,
			max: 360
		},
		s: {
			enable: false,
			value: hsl.s,
			min: 0,
			max: 100
		},
		l: {
			enable: false,
			value: hsl.l,
			min: 0,
			max: 100
		}
	};
	if (animationOptions) {
		setColorAnimation(resColor.h, animationOptions.h, reduceFactor);
		setColorAnimation(resColor.s, animationOptions.s, reduceFactor);
		setColorAnimation(resColor.l, animationOptions.l, reduceFactor);
	}
	return resColor;
}
function setColorAnimation(colorValue, colorAnimation, reduceFactor) {
	colorValue.enable = colorAnimation.enable;
	colorValue.min = colorAnimation.min;
	colorValue.max = colorAnimation.max;
	if (colorValue.enable) {
		colorValue.velocity = getRangeValue(colorAnimation.speed) / 100 * reduceFactor;
		colorValue.decay = 1 - getRangeValue(colorAnimation.decay);
		colorValue.status = AnimationStatus.increasing;
		colorValue.loops = 0;
		colorValue.maxLoops = getRangeValue(colorAnimation.count);
		colorValue.time = 0;
		colorValue.delayTime = getRangeValue(colorAnimation.delay) * millisecondsToSeconds;
		if (!colorAnimation.sync) {
			colorValue.velocity *= getRandom();
			colorValue.value *= getRandom();
		}
		colorValue.initialValue = colorValue.value;
		colorValue.offset = setRangeValue(colorAnimation.offset);
	} else colorValue.velocity = 0;
}
function updateColorValue(data, decrease, delta, hdr) {
	const minLoops = 0, minDelay = 0, identity = 1, minVelocity = 0, minOffset = 0, velocityFactor = 3.6;
	if (!data.enable || (data.maxLoops ?? minLoops) > minLoops && (data.loops ?? minLoops) > (data.maxLoops ?? minLoops)) return;
	data.time ??= 0;
	if ((data.delayTime ?? minDelay) > minDelay && data.time < (data.delayTime ?? minDelay)) data.time += delta.value;
	if ((data.delayTime ?? minDelay) > minDelay && data.time < (data.delayTime ?? minDelay)) return;
	const offset = data.offset ? randomInRangeValue(data.offset) : minOffset, velocity = ((data.velocity ?? minVelocity) * delta.factor + offset * velocityFactor) * (hdr ? hdrAnimationScale : identity), decay = data.decay ?? identity, max = data.max, min = data.min;
	if (!decrease || data.status === AnimationStatus.increasing) {
		data.value += velocity;
		if (data.value > max) {
			data.loops ??= 0;
			data.loops++;
			if (decrease) data.status = AnimationStatus.decreasing;
			else data.value -= max;
		}
	} else {
		data.value -= velocity;
		if (data.value < min) {
			data.loops ??= 0;
			data.loops++;
			data.status = AnimationStatus.increasing;
		}
	}
	if (data.velocity && decay !== identity) data.velocity *= decay;
	data.value = clamp(data.value, min, max);
}
function updateColor(color, delta, hdr) {
	if (!color) return;
	const { h, s, l } = color;
	updateColorValue(h, false, delta, hdr);
	updateColorValue(s, true, delta, hdr);
	updateColorValue(l, true, delta, hdr);
}
function alterHsl(color, type, value) {
	return {
		h: color.h,
		s: color.s,
		l: color.l + (type === AlterType.darken ? -1 : 1) * value
	};
}
//#endregion
//#region node_modules/@tsparticles/engine/browser/index.js
var tsParticles = initEngine();
//#endregion
export { RangedAnimationOptions as $, doublePI as $n, clamp as $t, ParticlesBounce as A, canvasTag as An, one as Ar, deepExtend as At, ValueWithRandom as B, defaultOpacity as Bn, sMax as Br, manageListener as Bt, loadParticlesOptions as C, isNumber as Cn, minLimit as Cr, setLogger as Ct, ParticlesNumber as D, Vector3d as Dn, minZ as Dr, circleBounce as Dt, Shape as E, Vector as En, minVelocity as Er, calculateBounds as Et, Spin as F, defaultCompositeValue as Fn, randomColorValue as Fr, getPosition as Ft, ResizeEvent as G, defaultRgbMin as Gn, squareExp as Gr, OutModeDirection as Gt, MoveCenter as H, defaultReduceFactor as Hn, sNormalizedOffset as Hr, safeMatchMedia as Ht, OutModes as I, defaultDensityFactor as In, removeDeleteCount as Ir, isInArray as It, AnimatableColor as J, defaultTransformValue as Jn, tryCountIncrement as Jr, calcPositionFromSize as Jt, FullScreen as K, defaultTime as Kn, threeQuarter as Kr, animate as Kt, MovePath as L, defaultFps as Ln, removeMinIndex as Lr, isPointInside as Lt, Paint as M, decayOffset as Mn, percentDenominator as Mr, getFullScreenStyle as Mt, Stroke as N, defaultAlpha as Nn, phaseNumerator as Nr, getItemMapFromInitializer as Nt, ParticlesNumberLimit as O, MoveDirection as On, minimumSize as Or, circleBounceDataFromParticle as Ot, Move as P, defaultAngle as Pn, quarter as Pr, getItemsFromInitializer as Pt, AnimationOptions as Q, double as Qn, checkDistance as Qt, AnimationValueWithRandom as R, defaultFpsLimit as Rn, resizeEvent as Rr, itemFromArray as Rt, Options as S, isNull as Sn, minIndex as Sr, getLogger as St, ZIndex as T, isString as Tn, minStrokeWidth as Tr, areBoundsInside as Tt, MoveAngle as U, defaultRemoveQuantity as Un, sextuple as Ur, safeMutationObserver as Ut, MoveGravity as V, defaultRatio as Vn, sMin as Vr, safeDocument as Vt, Fill as W, defaultRetryCount as Wn, spatialHashGridCellSize as Wr, PixelMode as Wt, HslAnimation as X, defaultZoom as Xn, zIndexFactorOffset as Xr, calcPositionOrRandomFromSizeRanged as Xt, OptionsColor as Y, defaultVelocity as Yn, visibilityChangeEvent as Yr, calcPositionOrRandomFromSize as Yt, ColorAnimation as Z, deleteCount as Zn, cancelAnimation as Zt, rgbToHsl as _, setRandom as _n, midColorValue as _r, AnimationMode as _t, getHslAnimationFromHsl as a, getParticleBaseVelocity as an, hMin as ar, loadRangeProperty as at, updateColor as b, isBoolean as bn, minDistance as br, Circle as bt, getLinkRandomColor as c, getRandomFn as cn, identity as cr, DrawLayer as ct, getStyleFromRgb as d, getRangeMin as dn, lMax as dr, ParticleOutType as dt, collisionVelocity as en, empty as er, loadExtendProperty as et, hslToRgb as f, getRangeValue as fn, lMin as fr, GradientType as ft, rangeColorToRgb as g, setAnimationFunctions as gn, maxNits as gr, LimitMode as gt, rangeColorToHsl as h, randomInRangeValue as hn, loadRandomFactor as hr, OutMode as ht, colorToRgb as i, getDistances as in, hMax as ir, loadProperty as it, ParticlesBounceFactor as j, countOffset as jn, originPoint as jr, executeOnSingleOrMultiple as jt, ParticlesDensity as k, canvasFirstIndex as kn, none as kr, cloneStyle as kt, getRandomRgbColor as l, getRandomInRange as ln, inverseFactorNumerator as lr, AnimationStatus as lt, hslaToRgba as m, parseAlpha as mn, loadMinIndex as mr, AlterType as mt, alterHsl as n, getDistance as nn, generatedFalse as nr, loadNestedProperty as nt, getHslFromAnimation as o, getParticleDirectionAngle as on, hPhase as or, OptionLoader as ot, hslToRgbFloat as p, mix as pn, lengthOffset as pr, DestroyType as pt, Background as q, defaultTransform as qn, triple as qr, calcExactPositionOrRandomFromSize as qt, colorMix as r, getDistanceSq as rn, generatedTrue as rr, loadOptionProperty as rt, getLinkColor as s, getRandom as sn, half as sr, loadOptions as st, tsParticles as t, degToRad as tn, generatedAttribute as tr, loadLazyProperty as tt, getStyleFromHsl as u, getRangeMax as un, lFactor as ur, StartValueType as ut, stringToAlpha as v, setRangeValue as vn, millisecondsToSeconds as vr, RotateDirection as vt, ParticlesOptions as w, isObject as wn, minRadius$1 as wr, EventType as wt, updateColorValue as x, isFunction as xn, minFpsLimit as xr, Rectangle as xt, stringToRgb as y, isArray as yn, minCount as yr, BaseRange as yt, RangedAnimationValueWithRandom as z, defaultLoops as zn, rgbMax as zr, itemFromSingleOrMultiple as zt };

//# sourceMappingURL=browser-D1s4r1_w.js.map