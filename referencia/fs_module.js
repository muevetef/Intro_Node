const fs = require("fs");
const path = require("path");
const { threadId } = require("worker_threads");

//Crear un dir
// fs.mkdir(
//     path.join(__dirname, "test"),
//     { recursive: false },
//     (err) => {
//         if (err) throw err;
//         console.log("Directorio creado correctamente...");
//     }
//     );

//Crear y escribir archivos
// fs.writeFile(
//   path.join(__dirname, "test", "hello.txt"),
//   "Hello World",
//   (err) => {
//     if (err) throw err;
//     console.log("Archivo ok!");
//   }
// );

//Añadir texto a un archivo
/* fs.appendFile(
  path.join(__dirname, "test", "hello.js"),
  "const a = 19",
  (err) => {
    if (err) throw err;
    console.log("Archivo actualizado ok!");
  }
); */

//Leer un archivo
/* fs.readFile(
    path.join(__dirname, "test", "hello.txt"),
    'utf-8',
    (err, data) => {
        if(err) throw err.code;
        console.log(data, error)
    }

)
 */

//Copiar un archivo
/*   fs.copyFile(
    path.join(__dirname, "test", "hello.js"),
    path.join(__dirname, "test", "hello_copy.txt"),
    err => {
      if (err) throw err;
      console.log('Copiado ok!')
    }
  ) */
//Mover un archivo
/* fs.rename(
  path.join(__dirname, "test", "hello.txt"),
  path.join(__dirname, "test", "renombreado.txt"),
  err => {
    if(err) throw err
    console.log('All ok!!');
  }
  ) */
//Eliminar un archivo
/* fs.unlink(path.join(__dirname, "test", "hello_copy.txt"), (err) => {
  if (err) throw err;
  console.log("All ok!!");
});
console.log("Hola") */

//Crear una carpeta, si esta se crea bién crear un
//archivo .json dentro con algunos objetos,
//luego leer el archivo y mostrar los objetos por
//consola
const users = [
  { name: "Uno" },
  { name: "Dos" },
  { name: "Tres" },
  { name: "Cuatro" },
];

//Crear la carpeta
/* fs.mkdir(path.join(__dirname, "users"), {}, (err) => {
  if (err) throw err;
  console.log("Dir ok!!");

  //Creamos el archivo
  fs.writeFile(
    path.join(__dirname, "users", "users.json"),
    JSON.stringify(users),
    (err) => {
      if (err) throw err;
      console.log("File ok!!");

      //Leemos el json
      fs.readFile(
        path.join(__dirname, "users", "users.json"),
        "utf8",
        (err, data) => {
          if(err) throw err
          //Mostrar los datos
          const users = JSON.parse(data)
          users.forEach(user => {
            console.log(user.name);
          });
          
        }
      );
    }
  );
}); */

// fs.readdir(__dirname, (err, files) => {
//   if(err) throw err
//   console.log(files);
// })

//Crear la carpeta
/* fs.mkdir(path.join(__dirname, "users"), {}, (err) => {
  if (err) throw err;
  console.log("Dir ok!!");

  //Creamos el archivo
  fs.writeFile(
    path.join(__dirname, "users", "users.json"),
    JSON.stringify(users),
    (err) => {
      if (err) throw err;
      console.log("File ok!!");

      //Leemos el json
      fs.readFile(
        path.join(__dirname, "users", "users.json"),
        "utf8",
        (err, data) => {
          if(err) throw err
          //Mostrar los datos
          const users = JSON.parse(data)
          users.forEach(user => {
            console.log(user.name);
          });
          
        }
      );
    }
  );
}); */


