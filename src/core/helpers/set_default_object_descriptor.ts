function setDefaultObjectDescriptors<T>(target: T): void {
    for (const propKey in target) {
        setDefaultPropertyDescriptor(target, propKey);
    }
}

function setDefaultPropertyDescriptor<T>(target: T, propKey: string | symbol): PropertyDescriptor {
    // TODO: ещё сильнее конкретизировать тип _value
    let _value: keyof T;

    Object.defineProperty(target, propKey, {
        enumerable: true,
        writable: true,
        get: () => _value,
        set: (newVal: keyof T) => _value = newVal,
    });

    return Object.getOwnPropertyDescriptor(target, propKey)!;
}

export {
    setDefaultPropertyDescriptor,
    setDefaultObjectDescriptors,
};