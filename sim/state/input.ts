
namespace pxsim.motors {

    export function __motorUsed(port: number, large: boolean) {
        //console.log("MOTOR INIT " + port);
        ev3board().motorUsed(port, large);
        runtime.queueDisplayUpdate();
    }
}

namespace pxsim.sensors {

    export function __sensorUsed(port: number, type: number) {
        //console.log("SENSOR INIT " + port + ", type: " + type);
        const sensor = ev3board().getSensor(port, type);
        runtime.queueDisplayUpdate();
    }
}