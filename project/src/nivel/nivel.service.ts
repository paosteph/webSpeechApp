import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {NivelEntity} from "./nivel.entity";
import {Like, Repository} from "typeorm";
import {Frase} from "./frase.entity";
import {UsuarioEntity} from "../usuario/usuario.entity";
import {
    frasesContraccionesAfirmativas, frasesContraccionesNegativas,
    frasesExpresionesBasicas, frasesExpresionesDificiles, frasesExpresionesMedias, frasesVerbosIrregulares,
    frasesVerbosRegulares
} from "../usuario/frases";

let TextToSpeechV1 = require('watson-developer-cloud/text-to-speech/v1');
let fs = require('fs');

@Injectable()
export class NivelService {


    ArregloNiveles= [
        {'id': 1, 'nombre': 'Regular Verbs', 'descripcion': 'En este nivel te daremos un listado de verbos regulares para que los puedas practicar'},
        {'id': 2, 'nombre': 'Irregular Verbs', 'descripcion': 'En este nivel te daremos un listado de verbos irregulares para que los puedas practicar'},
        {'id': 3, 'nombre': 'Idiomatic Expresions 1', 'descripcion': 'En este nivel te daremos un listado de expresiones idiomáticas 1 para que los puedas practicar'},
        {'id': 4, 'nombre': 'Idiomatic Expresions 2', 'descripcion': 'En este nivel te daremos un listado de expresiones idiomáticas 2 para que los puedas practicar'},
        {'id': 5, 'nombre': 'Idiomatic Expresions 3', 'descripcion': 'En este nivel te daremos un listado de expresiones idiomáticas 3 de saludos para que los puedas practicar'},
        {'id': 6, 'nombre': 'Affirmative Contractions', 'descripcion': 'En este nivel te daremos un listado de contracciones afirmativas para que los puedas practicar'},
        {'id': 7, 'nombre': 'Negative Contractions', 'descripcion': 'En este nivel te daremos un listado de contracciones negativas para que los puedas practicar'}
    ];

    constructor(@InjectRepository(NivelEntity)
                private readonly nivelRepository: Repository<NivelEntity>,
                @InjectRepository(Frase)
                private readonly fraseRepository: Repository<Frase>,
                @InjectRepository(UsuarioEntity)
                private readonly usuarioRepository: Repository<UsuarioEntity>){}

    crearNiveles() {
        for(var niveles in this.ArregloNiveles) {
            const nivel = new NivelEntity();
            nivel.id = this.ArregloNiveles[niveles].id;
            nivel.nombre = this.ArregloNiveles[niveles].nombre;
            nivel.descripcion = this.ArregloNiveles[niveles].descripcion;
            this.nivelRepository.save(nivel);
        }
        return this.nivelRepository.find();
    }
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

    async crearFrase(texto,significado,idNivel){
        const frase= new Frase();
        frase.texto=texto;
        frase.significado = significado;
        let existeFrase = false;
        const todasFrases = await this.fraseRepository.find();
        todasFrases.forEach((fraseT)=>{
            if(fraseT.texto===frase.texto)
                existeFrase=true;
        });
        if (!existeFrase) {
            frase.ruta="";
            await this.fraseRepository.save(frase);
            const ruta='src/audio/frase'+frase.id+'.wav';
            frase.ruta=ruta;
            await this.fraseRepository.save(frase);
            const nivel = await this.nivelRepository.findOne(idNivel, {relations: ["frases"]});
            nivel.frases.push(frase);
            this.nivelRepository.save(nivel);


            /**************CREAMOS ARCHIVO AUDIO FRASE****************/
            let textToSpeech = new TextToSpeechV1({
                username: '2eea673c-8685-4d42-b394-fc155a83c0d4',
                password: 'PEj30aRN3rhR'
            });

            let synthesizeParams = {
                text: texto,
                accept: 'audio/wav',
                voice: 'en-US_AllisonVoice'
            };

            // Pipe the synthesized text to a file.
            textToSpeech.synthesize(synthesizeParams).on('error', function(error) {
                console.log(error);
            }).pipe(
                fs.createWriteStream(ruta)
            );


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

    async buscarNivel(palabraBuscada){
        if (palabraBuscada){
            return await this.nivelRepository.find({nombre: Like("%"+palabraBuscada+"%")});
        }else
            return await this.nivelRepository.find();

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

    async findAll(): Promise<NivelEntity[]> {
        return await this.nivelRepository.find();
    }

    async crearNivel(nombre,descripcion,administrador){
        const nivel= new NivelEntity();
        nivel.nombre=nombre;
        nivel.descripcion=descripcion;
        nivel.administrador=await  this.usuarioRepository.findOne(administrador);
        await this.nivelRepository.save(nivel);

        return nivel

    }

    async obtenerUnaFrase(idFrase){
        const frase = await this.fraseRepository.findOne(idFrase);
        return frase;
    }

    async crearFrasesAutomatico(){
        frasesVerbosRegulares.forEach((frase)=>{
            this.crearFrase(frase.text, frase.significado, 1);
        });

        frasesVerbosIrregulares.forEach((frase)=>{
            this.crearFrase(frase.text, frase.significado, 2);
        });

        frasesExpresionesBasicas.forEach((frase)=>{
           this.crearFrase(frase.text, frase.significado, 3);
        });

        frasesExpresionesMedias.forEach((frase)=>{
           this.crearFrase(frase.text, frase.significado, 4);
        });

        frasesExpresionesDificiles.forEach((frase)=>{
           this.crearFrase(frase.text, frase.significado, 5);
        });

        frasesContraccionesAfirmativas.forEach((frase)=>{
           this.crearFrase(frase.text, frase.significado, 6);
        });

        frasesContraccionesNegativas.forEach((frase)=>{
           this.crearFrase(frase.text, frase.significado, 7);
        });

        return {mensaje: 'Completo'};
    }


}