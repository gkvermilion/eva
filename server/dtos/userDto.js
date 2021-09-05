module.exports = class UserDto {
    email;
    id;
    isActivated;

    constructor(model) {
        this.email = model.email;
        this.isActivated = model.isActivated;
        this.id = model.id;
    }
}