// frontend/utils/algorithms.js

// Задание 1.1: Конкатенация (Сборка полного названия спутника)
export function buildSatelliteName(nameParts, separator) {
    return nameParts.join(separator);
}

// Задание 1.2: Подсчет дубликатов (Поиск дублирующихся сенсоров в системе)
export function countDuplicateSensors(sensorsArray) {
    const counts = {};
    let duplicates = 0;
    sensorsArray.forEach(sensor => {
        counts[sensor] = (counts[sensor] || 0) + 1;
    });
    for (let key in counts) {
        if (counts[key] > 1) duplicates++;
    }
    return duplicates;
}

// Задание 2.10: Подсчет модулей-префиксов (Твой код)
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

// Задание 3.1: Слияние конфигураций (Твой код)
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
