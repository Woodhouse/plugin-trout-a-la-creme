'use strict';

class troutALaCreme {
    constructor() {
        this.name = 'trout-a-la-creme';
        this.displayname = 'Trout a la creme';
        this.description = '';
    }

    init() {
        this.listen(
            `fish!`,
            `fish`,
            `standard`,
            (from, interfaceName, params) => {
                return `Today's fish is Trout a la Creme, enjoy your meal.`;
            }
        )
    }
}

module.exports = troutALaCreme;
