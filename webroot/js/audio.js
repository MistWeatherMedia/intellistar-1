class AudioManager {
    constructor() {
        this.playlist = []
        this.$players = $('<div id="players">')
        this.isMobile = false
        this.vocallocal = {
            cc: [],
            lf: [`/vocallocal/DAYPART_DEFAULT1.wav`]
        }

        $('body').append(this.$players)

        if (audioSettings.enableMusic) {
            this.buildPlaylist();
            if (audioSettings.randomStart) { this.shuffleStart() }
            if (audioSettings.shuffle) { shuffle(this.playlist) }
            //this.startPlaying(this.playlist, true);
        }
    }

    shuffleStart() {
        var firstHalf = this.playlist
        var secondHalf = firstHalf.splice(Math.floor(Math.random() * firstHalf.length))
        this.playlist = [...secondHalf, ...firstHalf]
    }

    playCC(vl) {
        if(vl){
            this.startPlaying(this.vocallocal.cc, false);
        } else{
            this.startPlaying(['narrations/Your_current_conditions.mp3'], false)
        }
    }

    playRadar(){
        this.startPlaying([`/vocallocal/doppler/LRADAR_DEFAULT${Math.floor(Math.random()) + 1}.wav`], false)
    }

    playLF() {
        this.startPlaying(this.vocallocal.lf, false)
    }

    playEF() {
        this.startPlaying([`/vocallocal/weekahead/7DAY_DEFAULT${Math.floor(Math.random() * 3)+1}.wav`], false)
    }

    playSevere(name){
        if(name == "Flash Flood Warning"){
            this.startPlaying(['/vocallocal/beep.wav', '/vocallocal/FFLOOD_DEFAULT.wav', '/vocallocal/beep.wav'], false);
        } else if(name == "Tornado Warning"){
            this.startPlaying(['/vocallocal/beep.wav', '/vocallocal/TORNADO_DEFAULT.wav', '/vocallocal/beep.wav'], false);
        } else if(name == "Severe Thunderstorm Warning"){
            this.startPlaying(['/vocallocal/beep.wav', '/vocallocal/TSTORM_DEFAULT.wav', '/vocallocal/beep.wav'], false);
        } else {
            this.startPlaying(['/vocallocal/beep.wav','/vocallocal/beep.wav','/vocallocal/beep.wav','/vocallocal/beep.wav'], false);
        }
    }

    buildPlaylist() {
        var musicPath = 'music/';
        for(var i = 0; i < audioSettings.order.length; i++){
            this.playlist.push(`${musicPath}${audioSettings.order[i]}.mp3`);
        }
    }

    startPlaying(arr, loop) {
        var audioType = loop ? 'music' : 'voice'
        if (this.$players.find(`.${audioType}`).length > 0) return;

        var current = -1
        const len = arr.length;

        //functions built in with startPlaying
        const initPlayer = (id, audioType) => {
            var $div = $(`<div id="${id}" class="jplayer ${audioType}"></div>`);
            $div.jPlayer({
                swfPath: `${document.baseURI}jplayer`,
                preload: 'auto',
                ended: function() {
                    if(audioType === "voice"){
                        setTimeout(() => {
                            playNext();
                        }, 50);
                    } else {
                        playNext()
                    }
                }
            });
            this.$players.append($div);
            return $div;
        }
        var $player = initPlayer('p1', audioType)
        var $preloader = initPlayer('p2', audioType)

        const playNext = () => {
            current = getNextIndex();

            if (getNextIndex() === null) {
                $preloader.off($.jPlayer.event.ended).on($.jPlayer.event.ended, () => {
                    this.$players.find('.music').jPlayer('volume', 0.8);
                    $player.remove();
                    $preloader.remove();
                });
                switchAudio();
            } else {
                switchAudio();
                preloadTrack(arr[getNextIndex()]);
            }
        };

        const preloadTrack = (trackName) => {
            try {
                $preloader.jPlayer('setMedia', { mp3: trackName }).jPlayer('play', audioType == 'music' ? Math.abs(audioSettings.offset) : 0).jPlayer('stop');
            } catch (e) {
                setTimeout(() => preloadTrack(trackName), 500);
            }
        };

        const getNextIndex = () => {
            const nextIndex = current + 1;
            if (nextIndex < len) { return nextIndex; }
            else { return (loop ? 0 : null) }
        };

        const switchAudio = () => {
            var tempAudio = $player;
            var tempAudio2 = $preloader;
            $player = null, $preloader = null;
            $player = tempAudio2;
            $preloader = tempAudio;
            $player.jPlayer('play', audioType == 'music' ? Math.abs(audioSettings.offset) : 0);

            $(document).on('mousedown', () => {
                if (!this.isMobile) {
                    $player.jPlayer('play', audioType == 'music' ? Math.abs(audioSettings.offset) : 0);
                    this.isMobile = true;
                }
            });

        };

        //initalizing players
        if (audioType != 'music') {
            this.$players.find('.music').jPlayer('volume', 0.3);
        }

        this.playCallback = {}
        $preloader.jPlayer('setMedia', { mp3: arr[0] });
        playNext();
    }

    stopPlaying() {
        this.$players.find('.music').jPlayer('volume', 0);
    }
}

var audioPlayer = new AudioManager();