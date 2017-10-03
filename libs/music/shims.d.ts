// Auto-generated. Do not edit.
declare namespace music {

    /**
     * Set the output volume of the sound synthesizer.
     * @param volume the volume 0...256, eg: 128
     */
    //% weight=96
    //% blockId=synth_set_volume block="set volume %volume"
    //% parts="speaker" blockGap=8
    //% volume.min=0 volume.max=256
    //% help=music/set-volume
    //% weight=1 shim=music::setVolume
    function setVolume(volume: int32): void;

    /**
     * Play a tone through the speaker for some amount of time.
     * @param frequency pitch of the tone to play in Hertz (Hz)
     * @param ms tone duration in milliseconds (ms)
     */
    //% help=music/play-tone
    //% blockId=music_play_note block="play tone|at %note=device_note|for %duration=device_beat"
    //% parts="headphone" async
    //% blockNamespace=music
    //% weight=76 blockGap=8 shim=music::playTone
    function playTone(frequency: int32, ms: int32): void;
}

// Auto-generated. Do not edit. Really.
