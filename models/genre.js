module.exports = (sequelize, DataTypes) => {
    const Genre = sequelize.define("Genre", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        tableName: 'genres',
        timestamps: false
    });

    Genre.associate = (models) => {
        Genre.belongsToMany(models.Komik, {
            foreignKey: 'genre_id',
            through: 'komik_id',
            as: 'komik',
        });
    }
    return Genre;
};

    