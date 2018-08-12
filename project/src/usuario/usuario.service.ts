import {Injectable} from "@nestjs/common";
import {Repository} from "typeorm";
import {UsuarioEntity} from "./usuario.entity";
import {InjectRepository} from "@nestjs/typeorm";


@Injectable()
export class UsuarioService{


    ArregloUsuarios= [
        {'nombre': 'Beto Benitez', 'nick': 'beto', 'correo': 'beto@gmail.com','contrasena': '12345','url_foto': 'https://www.okchicas.com/wp-content/uploads/2018/01/Poses-para-una-buena-foto-de-perfil-8-1.jpg','esAdministrador':true},
        {'nombre': 'Rick Nolose', 'nick': 'rick', 'correo': 'rick@gmail.com','contrasena': '12345','url_foto': 'https://www.okchicas.com/wp-content/uploads/2018/01/Poses-para-una-buena-foto-de-perfil-5-1.jpg','esAdministrador':false},
        {'nombre': 'Daniel Bum', 'nick': 'bum', 'correo': 'bum@gmail.com','contrasena': '12345', 'url_foto': 'https://www.okchicas.com/wp-content/uploads/2018/01/Poses-para-una-buena-foto-de-perfil-4-1.jpg','esAdministrador':false},
        {'nombre': 'Camila Campos', 'nick': 'cami', 'correo': 'cami@gmail.com','contrasena': '12345', 'url_foto': 'https://static.ellahoy.es/r/845X0/www.ellahoy.es/img/perfil-del-hombre-infiel.jpg','esAdministrador':false},
        {'nombre': 'Luna Perez', 'nick': 'luna', 'correo': 'luna@gmail.com','contrasena': '12345', 'url_foto': 'https://static.ellahoy.es/845x500/www/ellahoy/es/img/detalles-de-infieles4.jpg','esAdministrador':false},
        {'nombre': 'Paco Moreno', 'nick': 'paquiri', 'correo': 'paquiri@gmail.com','contrasena': '12345', 'url_foto': 'http://arqa.com/comunidad/wp-content/uploads/sites/3/avatars/120644/59194d4444e8a-bpfull.jpg','esAdministrador':false},
        {'nombre': 'Boby Gutierrez', 'nick': 'boby', 'correo': 'nick@gmail.com','contrasena': '12345', 'url_foto': 'https://scontent.fuio13-1.fna.fbcdn.net/v/t1.0-9/26219505_1673267116028362_3405147687524622913_n.jpg?_nc_cat=0&_nc_eui2=AeEAh7ECt0X7OXlMEfz_sny3VDu4kZdy5Y7pGX7H0Y2F5UsvA__zeAp2TYV7Y1JgRjon8ftc-WvEGShRlD3rmJ5d-2-a5tqwx-fYjLZlB1z9Lw&oh=cc7fc9ee13eb81868130bb8629c2443b&oe=5BEB5985','esAdministrador':false}

    ];
    constructor(
        @InjectRepository(UsuarioEntity)
        private readonly _usuarioRepositorio: Repository<UsuarioEntity>,
        //private _actorService: ActorService,
    ){}
    crearUser() {
        for(var usuarios in this.ArregloUsuarios) {
            const usuario = new UsuarioEntity();
            //usuario.id = this.ArregloUsuarios[usuarios].id;
            usuario.nombre = this.ArregloUsuarios[usuarios].nombre;
            usuario.nick = this.ArregloUsuarios[usuarios].nick;
            usuario.correo= this.ArregloUsuarios[usuarios].correo;
            usuario.contrasena=this.ArregloUsuarios[usuarios].contrasena;
            usuario.url_foto = this.ArregloUsuarios[usuarios].url_foto;
            usuario.esAdministrador = this.ArregloUsuarios[usuarios].esAdministrador;
            this._usuarioRepositorio.save(usuario);
        }
        return this._usuarioRepositorio.find();
    }
    async crearUno(nombre, nick, correo, password, url_foto,esAdministrador){
        const usuario = new UsuarioEntity();
        usuario.nombre = nombre;
        usuario.nick = nick;
        usuario.correo = correo;
        usuario.contrasena= password;
        usuario.url_foto = url_foto;
        usuario.esAdministrador= esAdministrador;

        return await this._usuarioRepositorio.save(usuario);
    }

    async findAll(): Promise<UsuarioEntity[]> {
        return await this._usuarioRepositorio.find();
    }

    async obtenerUno(idUsuario){
        return await this._usuarioRepositorio.findOne(idUsuario);
    }
     async logearUsuario(correo,contrasena){

        const usuario= await this._usuarioRepositorio.findOne({where:{correo:correo,contrasena:contrasena}});
         console.log(usuario);
         return usuario;

}
}
