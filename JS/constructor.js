class Queue {
    constructor() {
        this.myList = [];
    }

    isEmpty() {
        return this.myList.length == 0;
    }

    enterQueue(value, repeatTimes) {
        for (let i = 0; i < repeatTimes; i++) {
            this.myList.push(value);
        }
    }

    deleteQueue() {
        if (!this.isEmpty()) {
            return this.myList.shift();
        } else {
            return ;
        }
    }

    getSize() {
        return this.myList.length;
    }

    clearQueue() {
        while (!this.isEmpty()) {
            this.deleteQueue();
        }


    }
}
