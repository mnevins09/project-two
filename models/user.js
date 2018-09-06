
module.exports = function (sequelize, Sequelize) {

	var User = sequelize.define('user', {
		firstname: {
			type: Sequelize.STRING,
			allowNull: false
		},
		lastname: {
			type: Sequelize.STRING,
			allowNull: false
		},
		email: {
			type: Sequelize.STRING,
			allowNull: false,
			validate: {
				isEmail: true
			}
		},
		password: {
			type: Sequelize.STRING,
			allowNull: false
		},
	},
		{
			freezeTableName: true,
			timestamps: false
		});

	return User;

}