class ToolService {

    getItemIdFromOptions(options) {
        let chanceSum = options.map(option => option.chance).reduce((a, b) => a + b, 0);

        let random = this.getRandomInt(0, chanceSum);
        let sum = 0;
        for (let i = 0; i < options.length; i += 1) {
            if (sum + options[i].chance >= random) {
                return options[i].id;
            }
            sum += options[i].chance;
        }

        return null;
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

}

export default ToolService;