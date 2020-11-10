class Error extends Error {
    constructor(message?: string) {
        super(message);
        this.name = 'Error';
    }
}

export default Error;
