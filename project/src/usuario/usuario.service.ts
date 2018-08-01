import {Injectable} from "@nestjs/common";
import {UsuarioEntity} from "./usuario.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class UsuarioService{
    ArregloUsuarios=[
        {'id':1,'nombre':'Graciela','nick':'graci','correo':'chelinesmoreno@hotmail.com','url_foto':'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwiF16Sb5cncAhUquVkKHdThDW8QjRx6BAgBEAU&url=https%3A%2F%2Fwww.istockphoto.com%2Fes%2Ffotograf%25C3%25ADas-de-stock&psig=AOvVaw0xBb5NJidnh0xV-x7mWzuq&ust=1533142011607697','contrasena':'graciela'},
        {'id':2,'nombre':'Graciela1','nick':'graci1','correo':'chelinesmoreno@hotmail.com','url_foto':'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwiF16Sb5cncAhUquVkKHdThDW8QjRx6BAgBEAU&url=https%3A%2F%2Fwww.istockphoto.com%2Fes%2Ffotograf%25C3%25ADas-de-stock&psig=AOvVaw0xBb5NJidnh0xV-x7mWzuq&ust=1533142011607697','contrasena':'graciela'},
        {'id':3,'nombre':'Graciela2','nick':'graci2','correo':'chelinesmoreno@hotmail.com','url_foto':'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwiF16Sb5cncAhUquVkKHdThDW8QjRx6BAgBEAU&url=https%3A%2F%2Fwww.istockphoto.com%2Fes%2Ffotograf%25C3%25ADas-de-stock&psig=AOvVaw0xBb5NJidnh0xV-x7mWzuq&ust=1533142011607697','contrasena':'graciela'},
        {'id':4,'nombre':'Graciela3','nick':'graci3','correo':'chelinesmoreno@hotmail.com','url_foto':'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwiF16Sb5cncAhUquVkKHdThDW8QjRx6BAgBEAU&url=https%3A%2F%2Fwww.istockphoto.com%2Fes%2Ffotograf%25C3%25ADas-de-stock&psig=AOvVaw0xBb5NJidnh0xV-x7mWzuq&ust=1533142011607697','contrasena':'graciela'}
    ];
    constructor(@InjectRepository(UsuarioEntity)
                private readonly userRepository: Repository<UsuarioEntity>) {

    }


    crearUser() {
        for(var usuarios in this.ArregloUsuarios) {
            const usuario = new UsuarioEntity();
            usuario.id = this.ArregloUsuarios[usuarios].id;
            usuario.nombre = this.ArregloUsuarios[usuarios].nombre;
            usuario.nick = this.ArregloUsuarios[usuarios].nick;
            usuario.correo=this.ArregloUsuarios[usuarios].correo;
            usuario.url_foto = this.ArregloUsuarios[usuarios].url_foto;
            usuario.contrasena= this.ArregloUsuarios[usuarios].contrasena;
            this.userRepository.save(usuario);
        }
        return this.userRepository.find();
    }

    async obtenerUserPorNombreUser(nombreArgumento) {
        return await this.userRepository.
        createQueryBuilder("usuario").where("usuario.nombre = :nombre", { nombre: nombreArgumento }).getOne();
    }


}