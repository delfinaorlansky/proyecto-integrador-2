module.exports = function (sequelize, DataTypes){
    const usuario = sequelize.define(
        'Usuarios', 
        {
            nombre_de_usuario: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            fecha_de_nacimiento: DataTypes.DATE,
        }, 
       {
        timestamps: false
       }
    ); 
 
    usuario.associate = function (models) {
        usuario.hasMany (models.Resenias, {
            as: "resenias" , 
            foreingKey: "id_usuario"
        }) ;
    }

    return usuario; 
}
