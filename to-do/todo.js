const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw err;
        console.log('Se almacenó correctamente');
    });
};

const cargarDB = () => {

    try {

        listadoPorHacer = require('../db/data.json');

    } catch (error) {
        listadoPorHacer = [];

    }

};

const crear = descripcion => {

    cargarDB();

    const porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
};


const getListado = () => {

    cargarDB();

    return listadoPorHacer;
};

const actualizar = (descripcion, completado ) => {
    cargarDB();
    let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion );

    if( index<0) return false;

    listadoPorHacer[ index ].completado = completado;
    guardarDB();
    return true;

};

const borrar =  descripcion => {
    cargarDB();
    let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion );
 
    if( index<0) return false;
    listadoPorHacer.splice(index,1);
    guardarDB();
    return true;
};

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
};