module.exports = function (sequelize, DataTypes){
    const usuario = sequelize.define(
        'Usuarios', 
        {
            nombre_de_usuario: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            fecha_de_nacimiento: DataTypes.DATETIME,
        }, 
       {
        timestamps = false
       }
    ); 
    return usuario; 
}
