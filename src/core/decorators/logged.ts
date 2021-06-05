import { setDefaultPropertyDescriptor } from "../helpers/set_default_object_descriptor";

const Logged: MethodDecorator = function(target, propKey, descriptor) {
    const desc = descriptor || setDefaultPropertyDescriptor(target, propKey);

    desc.set = function(newValue) {
        console.error(`${ String(propKey) } = ${ newValue }`);
    };

    Object.defineProperty(target, propKey, desc);
}

const Immutable: ClassDecorator = function(constructor) {
    constructor.prototype
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

export {
    Logged,
    Immutable,
};