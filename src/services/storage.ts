export const storeData = async (key: string, value: string) => {
    try {
        const jsonValue = JSON.stringify(value);
        await localStorage.setItem(key, jsonValue);

    }catch (error) {
        console.error("Error storing data:", error);
    }
}

export const getData = async (Key: string) => {
    try {
        const jsonValue = await localStorage.getItem(Key);
        return jsonValue != null ? JSON.parse(jsonValue) : null;

    } catch (error) {
        console.error("Erro ao buscar data:", error);
    }
}

export const removeData = async (key: string) => {
    try {
        await localStorage.removeItem(key);
    } catch (error) {
        console.error("Erro ao remover data:", error);
    }
}

export const clearStorage = async () => {
    try {
        await localStorage.clear();
    } catch (error) {
        console.error("Erro ao limpar storage:", error);
    }
}