module.exports = function (sequelize, DataTypes){   //esta funcion va a ser la que se exporte. 
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
        tableName: 'reseñas'  // si no especifico, va a buscar la tabla resenias (y no existe)
       }
    ); 

    resenia.associate = function (models) {  // associate recibe una función que incluye a todos nuestros modelos del código. Acá dentro definimos las relaciones. 
        resenia.belongsTo (models.usuario , {  // Una reseña PERTENECE a un usuario.
            as: "usuario" ,
            foreignKey: "id_usuario"
        }); 
    }
    return resenia; 
}