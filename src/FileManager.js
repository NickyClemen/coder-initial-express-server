class FileManager {
    #path;

    constructor(path) {
        this.#path = path;
    }

    #exists() {
        try {
            return fs.existsSync(this.#path);
        } catch (error) {
            console.log(`Error buscando el archivo: ${error.message}`);
        }
    }

    async writeFile(data) {
        try {
            await fs.writeFileSync(this.#path, JSON.stringify(data, null, 2));
        } catch (error) {
            console.log(`Error escribiendo el archivo: ${error.message}`);
        }
    }

    readFile() {
        if (this.#exists()) {
            const data = fs.readFileSync(this.#path);

            return JSON.parse(data);
        }

        return [];
    }
}