// frontend/utils/algorithms.js

// Задание 2.10: Подсчет модулей-префиксов
export function countCompatiblePrefixModules(moduleCodes, targetSpec) {
    let compatibleCount = 0;
    let index = 0;
    while (index < moduleCodes.length) {
        const currentCode = String(moduleCodes[index]);
        if (targetSpec.startsWith(currentCode)) {
            compatibleCount++;
        }
        index++;
    }
    return compatibleCount;
}

// Задание 3.1: Слияние конфигураций
export function mergeCubeSatConfigs(...configsArray) {
    const finalConfig = {};
    let configIndex = 0;
    while (configIndex < configsArray.length) {
        const currentConfig = configsArray[configIndex];
        const keysCollection = Object.keys(currentConfig);
        let keyIndex = 0;
        while (keyIndex < keysCollection.length) {
            const key = keysCollection[keyIndex];
            if (finalConfig[key] === undefined) {
                finalConfig[key] = currentConfig[key];
            }
            keyIndex++;
        }
        configIndex++;
    }
    return finalConfig;
}
