import {Body, Controller, Get, Param, Post, Res} from "@nestjs/common";
import {NivelService} from "../nivel/nivel.service";

let TextToSpeechV1 = require('watson-developer-cloud/text-to-speech/v1');
let fs = require('fs');

@Controller('audio')
export class AudioController {

    constructor(private readonly _nivelServicio: NivelService){}

    @Post('generarAudio')
    generarAudio(@Body('texto')texto,@Res() res){


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
            fs.createWriteStream('src/audio/hello_world.wav')
        );

        //this.delay(3000);

        const path = 'src/audio/hello_world.wav';
        const stat = fs.statSync(path);
        const fileSize = stat.size;
        const head = {
            'Content-Length': fileSize,
            'Content-Type': 'audio/wav'
        };
        res.writeHead(200, head);
        fs.createReadStream(path).pipe(res);
        res.send("hola");

    }

    @Get('obtener')
    async obtenerAudioFrase(@Body('idFrase') idFrase, @Res() res){
        const frase = await this._nivelServicio.obtenerUnaFrase(idFrase);

        const path = frase.ruta;
        const stat = fs.statSync(path);
        const fileSize = stat.size;
        const head = {
            'Content-Length': fileSize,
            'Content-Type': 'audio/wav'
        };
        res.writeHead(200, head);
        const audio = fs.createReadStream(path).pipe(res);

        return res.send(audio);

    }

    @Get('obtenerV2/:idFrase')
    async obtenerAudioFraseV2(@Res() res,@Param('idFrase')idFrase){
        const frase = await this._nivelServicio.obtenerUnaFrase(idFrase);

        const path = frase.ruta;
        const stat = fs.statSync(path);
        const fileSize = stat.size;
        const head = {
            'Content-Length': fileSize,
            'Content-Type': 'audio/wav'
        };
        res.writeHead(200, head);
        const audio = fs.createReadStream(path).pipe(res);

        return res.send(audio);

    }

}