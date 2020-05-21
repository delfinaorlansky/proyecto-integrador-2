module.exports = function (sequelize, DataTypes){
    const resenia = sequelize.define (
        'Resenias', 
        {
            id_pelicula: DataTypes.INTEGER,
            id_usuario: DataTypes.INTEGER,
            texto_de_reseña: DataTypes.STRING,
            fecha_de_creacion : DataTypes.DATE,
            fecha_de_actualizacion : DataTypes.DATE,
            puntaje_sobre_pelicula : DataTypes.INTEGER, 
        }, 
       {
        timestamps: false, 
        tableName: 'reseñas'
       }
    ); 

    resenia.associate = function (models) {
        resenia.belongsTo (models.Usuarios , {
            as: "usuario" ,
            foreingKey: "id_usuario"
        }); 
    }
    return resenia; 
}