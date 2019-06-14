import { stompit,connectParams } from './stompit_server';
export class stomp_it{
    static startConnectionStompit(){
        stompit.connect(connectParams, function(error, client){
            if(error){
                console.log('Unable to connect: ' + error.message);
                return;
            }
            console.log("Connection to ActiveMQ Successfull with paramterers",connectParams);
            var sendParams = {
                'destination': '/queue/test',
                'content-type': 'application/json'
            };
            var frame = client.send(sendParams);
            frame.end(JSON.stringify({
                anything: 'Sending from Nestjs',
                example: true,
                mymessage:"ajad"
            }));
          });
    }
}