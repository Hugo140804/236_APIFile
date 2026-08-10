module.exports = (sequelize, DataTypes) => {
    const komik = sequelize.define("Komik", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        judul: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sinopsis: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        tahun_terbit: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        penulis_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        genre_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        tableName: 'komik',
        timestamps: false,
    });

    komik.associate = (models) => {
        komik.belongsTo(models.Penulis, {
            foreignKey: 'penulis_id',
            as: 'penulis',
        });

        komik.belongsToMany(models.Genre, {
            foreignKey: 'genre_id',
            through: 'komik_id',
            as: 'genre',
        });
    }
};