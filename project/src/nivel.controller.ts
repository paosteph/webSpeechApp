import {Controller, Get, Post, Body, UseGuards, ReflectMetadata, Query, Res} from "@nestjs/common";
import {UsuarioPipe} from "./usuario/usuario.pipe";
import {Admin_Login_Schema} from "./Administrador/administrador.schema";
import {UsuarioGuard} from "./autentificacion/usuario.guard";


@Controller('nivel')
@UseGuards(UsuarioGuard)
export class NivelController{

    @Post('ingresar')
    @ReflectMetadata('necesitaValidacion',true)
    ingresar(@Body(new UsuarioPipe(Admin_Login_Schema))administrador){
        return administrador;
    }

    @Get('probarSpellCheck')
    @ReflectMetadata('necesitaValidacion',false)
    probarSpellCheck(@Query('texto') texto, @Res() principalResponse){
        'use strict';

        let https = require ('https');

        let host = 'api.cognitive.microsoft.com';
        let path = '/bing/v7.0/spellcheck';

        /* NOTE: Replace this example key with a valid subscription key (see the Prequisites section above). Also note v5 and v7 require separate subscription keys. */
        let key = 'f68f98d6a72946d89b6ab257b4fc7a69';

// These values are used for optional headers (see below).
// let CLIENT_ID = "<Client ID from Previous Response Goes Here>";
// let CLIENT_IP = "999.999.999.999";
// let CLIENT_LOCATION = "+90.0000000000000;long: 00.0000000000000;re:100.000000000000";

        let mkt = "en-US";
        let mode = "proof";
        let text = texto;//"Hollo, wrld!";
        let query_string = "?mkt=" + mkt + "&mode=" + mode;

        let request_params = {
            method : 'POST',
            hostname : host,
            path : path + query_string,
            headers : {
                'Content-Type' : 'application/x-www-form-urlencoded',
                'Content-Length' : text.length + 5,
                'Ocp-Apim-Subscription-Key' : key,
//        'X-Search-Location' : CLIENT_LOCATION,
//        'X-MSEdge-ClientID' : CLIENT_ID,
//        'X-MSEdge-ClientIP' : CLIENT_ID,
            }
        };

        let response_handler = function (response) {
            let body = '';
            response.on ('data', function (d) {
                body += d;

                principalResponse.write(d);
                principalResponse.send();

            });
            response.on ('end', function () {
                console.log (body);
            });
            response.on ('error', function (e) {
                console.log ('Error: ' + e.message);
            });
        };


        let req = https.request (request_params, response_handler);
        req.write ("text=" + text);
        req.end ();

    }

}