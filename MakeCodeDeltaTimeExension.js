//% weight=100 color=#8E2EC4 icon=""
namespace game {
    /**
    * The amount of time elapsed per frame
    *
    */
    //% block
    export function getDeltaTime(): number {
        return control.eventContext().deltaTimeMillis
    }
}
