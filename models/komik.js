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
        gambar: {
            type: DataTypes.STRING,
            allowNull: true,
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
            foreignKey: 'komik_id',
            through: 'komik_genres', // Fixed: should be a junction table name
            as: 'genre',
        });
    }

    return komik; // Fixed: added missing return statement
};