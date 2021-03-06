module.exports = function (sequelize, DataTypes){
    const usuario = sequelize.define( // define me permite definir la estructura de la tabla
        'usuario', //nombre del modelo
        {     // objeto literal con las columnas que me quiero traer de la tabla
            nombre_de_usuario: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            fecha_de_nacimiento: DataTypes.DATE,
        }, 
       { //configuracion del modelo
        timestamps: false  //cuando no tenemos las columnas createdAt y updatedAt
       }
    ); 
 
    usuario.associate = function (models) {  // associate recibe una función que incluye a todos nuestros modelos del código. Acá dentro definimos las relaciones. 
        usuario.hasMany (models.Resenias, {  //un usuario TIENE MUCHAS reseñas 
            as: "resenias" , 
            foreignKey: "id_usuario"
        }) ;
    }

    return usuario; 
}
