function login(user) {
    if (user.type === "student") {
        return "Student Portal";
    }

    if (user.type === "teacher") {
        return "Teacher Portal";
    }

    return "No Access";
}

module.exports = login;
