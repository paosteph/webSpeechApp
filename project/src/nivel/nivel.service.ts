import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {NivelEntity} from "./nivel.entity";
import {Like, Repository} from "typeorm";
import {Frase} from "./frase.entity";

@Injectable()
export class NivelService {
    constructor(@InjectRepository(NivelEntity)
                private readonly nivelRepository: Repository<NivelEntity>,
                @InjectRepository(Frase)
                private readonly fraseRepository: Repository<Frase>){}

    async obtenerFrasesNivel(idNivel){
        const nivel= await this.nivelRepository.findOne(idNivel,{relations:["frases"]});
        return nivel.frases;
    }

    async obtenerFrasesNoNivel(idNivel){
        const frases= await  this.fraseRepository.find({relations:["nivel"]});
        const nivel= await this.nivelRepository.findOne(idNivel,{relations:["frases"]});
        const frasesNoNivel= frases.filter((frase)=>{
           let tieneNivel=false;
           frase.nivel.forEach((nivelF)=>{
              if(nivelF==nivel)
                  tieneNivel=true;
           });
           return tieneNivel;
        });
        return frasesNoNivel;
    }

    async crearFrase(texto,idNivel){
        const frase= new Frase();
        frase.texto=texto;
        let existeFrase = false;
        const todasFrases = await this.fraseRepository.find();
        todasFrases.forEach((fraseT)=>{
            if(fraseT.texto===frase.texto)
                existeFrase=true;
        });
        if (!existeFrase) {
            this.fraseRepository.save(frase);
            const nivel = await this.nivelRepository.findOne(idNivel, {relations: ["frases"]});
            nivel.frases.push(frase);
            this.nivelRepository.save(nivel);

            return {mensaje: "frases creada"}
        } else {
            return {mensaje: "esta frases ya existe"}
        }
    }

    async anadirFraseNivel(idFrase,idNivel){
        const nivel= await this.nivelRepository.findOne(idNivel,{relations:["frases"]});
        const frase= await this.fraseRepository.findOne(idFrase);
        let index= -1;
        nivel.frases.forEach((fraseN,i)=>{
            if(fraseN.id===frase.id)
                index=i;
        });

        if(index!==-1){
            return {mensaje:"ya tiene la frases"}
        }else{
            nivel.frases.push(frase);
            this.nivelRepository.save(nivel);
            return {mensaje:"frases añadida correctamente"}
        }
    }

    async quitarFraseNivel(idFrase,idNivel){
        const nivel= await this.nivelRepository.findOne(idNivel,{relations:["frases"]});
        const frase= await this.fraseRepository.findOne(idFrase);
        let index= -1;
        nivel.frases.forEach((fraseN,i)=>{
            if(fraseN.id===frase.id)
                index=i;
        });
        if(index==-1){
            return {mensaje:"este nivel no tiene esa frases"}
        }else{
            nivel.frases.splice(index,1);
            this.nivelRepository.save(nivel);
            return {mensaje:"frases quitada"}
        }
    }

    async buscarFrases(palabraBuscada){
        if (palabraBuscada){
            return await this.fraseRepository.find({texto: Like("%"+palabraBuscada+"%")});
        }else
            return await this.fraseRepository.find();

    }

    calificarImagen(fraseDicha:String,fraseCorrecta:String){
        const palabrasCorrectas=fraseCorrecta.split(" ");
        const calificaciones:number[]=palabrasCorrectas.map((palabra)=>{
            if(fraseDicha.indexOf(palabra)!==-1)
                return 1
            else
                return 0
        });
        const porcentajeExito= calificaciones.reduce((calificacionAnterior, calificacionActual)=>{
            return calificacionAnterior+calificacionActual})/calificaciones.length;

        return porcentajeExito
    }

    async elminarNivel(idNivel){
        const nivel= await this.nivelRepository.findOne(idNivel);
        this.nivelRepository.delete(nivel);

        return {mensaje:"nivel eliminado"}
    }

    async elminarFrase(idFrase){
        const frase= await this.fraseRepository.findOne(idFrase);
        this.fraseRepository.delete(frase);

        return {mensaje:"frase eliminado"}
    }

    async crearNivel(nombre,descripcion){
        const nivel= new NivelEntity();
        nivel.nombre=nombre;
        nivel.descripcion=descripcion;
        await this.nivelRepository.save(nivel);

        return nivel
    }
}