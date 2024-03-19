module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('User', {
        name: {
            type: Sequelize.STRING,
        },
        emailId: {
            type: Sequelize.STRING,
        },
        phone: {
            type: Sequelize.STRING,
        },
        address: {
            type: Sequelize.STRING,
        },
        gender: {
            type: Sequelize.STRING(25),
            allowNull: true,
        },
        country: {
            type: Sequelize.STRING(100),
            allowNull: true,
        },
        dob: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        maritalStatus: {
            type: Sequelize.STRING,
            allowNull: true,
        },
    });
    return User;
};