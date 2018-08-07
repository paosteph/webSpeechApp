import {Body, Controller, Post, Res} from "@nestjs/common";
let TextToSpeechV1 = require('watson-developer-cloud/text-to-speech/v1');
let fs = require('fs');

@Controller('audio')
export class AudioController {

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
            fs.createWriteStream('audio/hello_world.wav')
        );

        //this.delay(3000);

        const path = 'audios/hello_world.wav';
        const stat = fs.statSync(path);
        const fileSize = stat.size;
        const head = {
            'Content-Length': fileSize,
            'Content-Type': 'audio/wav'
        };
        res.writeHead(200, head);
        fs.createReadStream(path).pipe(res);

    }

}