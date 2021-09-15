module.exports = class UserDto {
    id;
    email;
    isActivated;
    role;

    constructor(model) {
        this.email = model.email;
        this.isActivated = model.isActivated;
        this.id = model.id;
        this.role = model.role;
    }
}