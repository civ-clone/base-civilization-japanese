"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Japanese_1 = require("./Japanese");
const Attribute_1 = require("@civ-clone/core-civilization/Attribute");
const AttributeRegistry_1 = require("@civ-clone/core-civilization/AttributeRegistry");
Object.entries({
    people: 'Japanese',
    nation: 'Japan',
    colors: ['#fd5dfc', '#832317', '#fff'],
}).forEach(([name, value]) => AttributeRegistry_1.instance.register(new Attribute_1.default(Japanese_1.default, name, value)));
//# sourceMappingURL=registerAttributes.js.map