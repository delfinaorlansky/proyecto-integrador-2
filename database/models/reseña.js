module.exports = function (sequelize, DataTypes){
    const reseña = sequelize.define (
        'Reseñas', 
        {
            id_pelicula: DataTypes.INTEGER,
            id_usuario: DataTypes.INTEGER,
            texto_de_reseña: DataTypes.STRING,
            fecha_de_creacion : DataTypes.DATETIME,
            fecha_de_actualizacion : DataTypes.DATETIME,
            puntaje_sobre_pelicula : DataTypes.INTEGER , 
        }, 
       {
        timestamps = false
       }
    ); 

    reseña.associate = function (models) {
        reseña.belongsTo (models.Usuarios , {
            as: "usuarios" ,
            foreingKey: "id_usuario"
        }); 
    }
    return reseña; 
}