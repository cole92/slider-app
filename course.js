export default class Course {
    #nameOfCourse;
    #dataOfCourse;
    #classOfIcon;

    getName() {
        return this.#nameOfCourse;
    }

    setName(name) {
        this.#nameOfCourse = name;
    }
    getData() {
        return this.#dataOfCourse;
    }
    setData(data) {
        this.#dataOfCourse = data;
    }
    getClassIcon() {
        return this.#classOfIcon;
    }
    setClassIcon(classIcon) {
        this.#classOfIcon = classIcon;
    }
}