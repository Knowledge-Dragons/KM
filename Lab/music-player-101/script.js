function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
class CardProfile extends React.Component {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "state", {
      index: 3,
      currentTime: "0:00",
      musicList: [
        {
          name: "เพื่อนเล่น ไม่เล่นเพื่อน",
          author: "Tilly Birds",
          img: "https://cdn.brandthink.me/2021/04/TB-01-2048x1448.jpg",
          audio: "music/01-เพื่อนเล่นไม่เล่นเพื่อน.mp3",
          duration: "3:39",
        },
        {
          name: "ทน",
          author: "GUYGEEGEE",
          img: "img/GUYGEEGEE.png",
          audio: "music/02-ทน.mp3",
          duration: "3:25",
        },
        {
          name: "วัดปะหล่ะ",
          author: "4EVE",
          img: "https://cms.dmpcdn.com/musicarticle/2021/04/12/0a2db3d0-9b48-11eb-aa8f-23a9c04dc650_original.jpg",
          audio: "music/03-วัดปะหล่ะ.mp3",
          duration: "3:40",
        },
        {
          name: "ดึงดัน",
          author: "Cocktail, ตั๊ก ศิริพร อยู่ยอด",
          img: "https://thestandard.co/wp-content/uploads/2020/10/POP_SPOTLIGHT3-4.jpg",
          audio: "music/14-ดึงดัน.mp3",
          duration: "4:07",
        },
        {
          name: "Undo",
          author: "ป๊อบ ปองกูล",
          img: "https://www.naewna.com/uploads/news/source/537991.jpg",
          audio: "music/04-Undo.mp3",
          duration: "4:03",
        },
        {
          name: "แปะหัวใจ",
          author: "Jaonaay, Juné",
          img: "https://www.theallabout.com/wp-content/uploads/2021/03/MV%E0%B9%81%E0%B8%9B%E0%B8%B0%E0%B8%AB%E0%B8%B1%E0%B8%A7__-JAONA-AYxJUNE-10.jpg",
          audio: "music/05-แปะหัวใจ.mp3",
          duration: "4:21",
        },
        {
          name: "เก็บไว้ในใจไม่พอ",
          author: "Three Man Down",
          img: "https://thepeople.co/wp-content/uploads/2021/04/tm_Website_1200x628-1200x628.jpg",
          audio: "music/06-เก็บไว้ในใจไม่พอ.mp3",
          duration: "4:26",
        },
        {
          name: "Lily",
          author: "Alan Walker, K-391",
          img: "https://i.ibb.co/QrDKg6D/artworks-000505975749-bzcc02-t500x500.jpg",
          audio:
            "https://dl.dropbox.com/s/dbjlg9vlnxfigna/alan%20walker%2C%20k-391%20%26%20emelie%20hollow%20-%20lily.mp3?dl=0",
          duration: "3:15",
        },

        {
          name: "The Spectre",
          author: "Alan Walker",
          img: "https://i.ibb.co/b63hHBh/sddefault.jpg",
          audio:
            "https://dl.dropbox.com/s/m872xq4clz4v2me/Alan%20Walker%20-%20The%20Spectre.mp3?dl=0",
          duration: "3:26",
        },

        {
          name: "Lut Gaye",
          author: "Jubin Nautiyal",
          img: "https://i.ibb.co/JyxNSHJ/size-xxl.jpg",
          audio:
            "https://dl.dropbox.com/s/nwdabj6mep7htaz/lut%20gaye%20-%20jubin%20nautiyal%20emraan%20hashmi%2C%20yukti%20thareja%20tanishk%20bagchi%2C%20manoj%20muntashir.mp3?dl=0",
          duration: "4:27",
        },

        {
          name: "Fearless Pt 2",
          author: "Chris linton (NCS)",
          img: "https://i.ibb.co/tZTfhMN/fearless-pt-ii-feat-chris-linton-1586953398-Ys-Sdm2v-Gwu.jpg",
          audio:
            "https://dl.dropbox.com/s/nbjfg8jju9eq12o/lost%20sky%20-%20fearless%20pt.ii%20%28feat.%20chris%20linton%29%20%5Bncs%20release%5D.mp3?dl=0",
          duration: "3:14",
        },

        {
          name: "Faded",
          author: "Alan Walker",
          img: "https://i.ibb.co/gmkbSmB/maxresdefault.jpg",
          audio:
            "https://dl.dropbox.com/s/nxn9ikzexquz62q/Faded%28PaglaSongs%29.mp3?dl=0",
          duration: "3:32",
        },

        {
          name: "It's Ain't Me",
          author: "Kygo, Selena Gomez",
          img: "https://i.ibb.co/wS0c3vy/It-Ain-t-Me-Official-Single-Cover-by-Kygo-Selena-Gomez.png",
          audio:
            "https://dl.dropbox.com/s/8ropc1e0t0bdti7/kygo%2C%20selena%20gomez%20-%20it%20ain%20t%20me%20%28official%20video%29.mp3?dl=0",
          duration: "4:01",
        },

        {
          name: "Teri Mitti",
          author: "Manoj Muntashir",
          img: "https://i.ibb.co/5c8Nzg0/68426152.jpg",
          audio:
            "https://dl.dropbox.com/s/uufy5zu12yv1tqg/teri%20mitti%20-%20kesari%20akshay%20kumar%20%26%20parineeti%20chopra%20arko%20b%20praak%20manoj%20muntashir.mp3?dl=0",
          duration: "5:25",
        },

        {
          name: "Ghungroo",
          author: "Arijit Singh",
          img: "https://i.ibb.co/N7hfw9K/size-xxl-1567659563.webp",
          audio:
            "https://dl.dropbox.com/s/929y795pfe4k8nd/ghungroo%20full%20song%20war%20hrithik%2C%20vaani%2C%20arijit%20singh%2C%20shilpa%20vishal%20%26%20shekhar%2C%20kumaar.mp3?dl=0",
          duration: "4:59",
        },

        {
          name: "Tera Yaar Hu Main",
          author: "Arijit Singh",
          img: "https://i.ibb.co/7XyqBbL/artworks-000509482761-b6y4ob-t500x500.jpg",
          audio:
            "https://dl.dropbox.com/s/is8ixvvxmykf17e/Tera%20Yaar%20Hoon%20Main%20320%20Kbps.mp3?dl=0",
          duration: "4:24",
        },

        {
          name: "Heroes Tonight",
          author: "Janji and Johnning",
          img: "https://i.ibb.co/Sd45s6T/hqdefault.jpg",
          audio:
            "https://dl.dropbox.com/s/xvm4fimqx38wxrw/janji%20-%20heroes%20tonight%20%28feat.%20johnning%29%20%5Bncs%20release%5D.mp3?dl=0",
          duration: "3:28",
        },

        {
          name: "Señorita",
          author: "Camilla Cabello",
          img: "https://i.ibb.co/7j4bQ0r/artworks-000556991832-l4o08x-t500x500.jpg",
          audio:
            "https://dl.dropbox.com/s/e7d3kagcxwjjp0l/shawn%20mendes%2C%20camila%20cabello%20-%20se%C3%B1orita.mp3?dl=0",
          duration: "3:11",
        },

        {
          name: "Good 4 U",
          author: "Olivia Rodrigo",
          img: "https://i.ibb.co/ykr8yyH/Fv-HKF4r-FFy-Sd-FY3-U7.jpg",
          audio:
            "https://dl.dropbox.com/s/uown780ykqzp2ur/olivia%20rodrigo%20-%20good%204%20u.mp3?dl=0",
          duration: "2:58",
        },
        {
          name: "Nice Piano and Ukulele",
          author: "Royalty",
          img: "https://www.bensound.com/bensound-img/buddy.jpg",
          audio: "https://www.bensound.com/bensound-music/bensound-buddy.mp3",
          duration: "2:02",
        },
        {
          name: "Friends",
          author: "Annne Marie",
          img: "https://i.ibb.co/gyMx6jp/MV5-BNm-Y0-OWFl-Mz-Yt-MDNk-ZC00-YTdh-LWI4-ZWEt-M2-I5-OWZl-Yz-Vk-NGQz-Xk-Ey-Xk-Fqc-Gde-QXVy-Nj-E0-ODc.jpg",
          audio:
            "https://dl.dropbox.com/s/u71atlmtiuqy0sh/marshmello%20%26%20anne-marie%20-%20friends%20official%20friendzone%20anthem%20.mp3?dl=0",
          duration: "3:25",
        },
        {
          name: "Gentle Acoustic",
          author: "Acoustic",
          img: "https://www.bensound.com/bensound-img/sunny.jpg",
          audio: "https://www.bensound.com//bensound-music/bensound-sunny.mp3",
          duration: "2:20",
        },

        {
          name: "On and On",
          author: "Daniel Levi, Cartoon",
          img: "https://i.ibb.co/HrSqtBf/on-on-feat-daniel-levi-1586947008-oe-I24in2-Ga.jpg",
          audio:
            "https://dl.dropbox.com/s/ffjre8pa1rwyos0/cartoon%20-%20on%20%26%20on%20feat.%20daniel%20levi.mp3?dl=0",
          duration: "3:27",
        },

        {
          name: "Corporate Motivational",
          author: "Corporate",
          img: "https://www.bensound.com/bensound-img/energy.jpg",
          audio: "https://www.bensound.com/bensound-music/bensound-energy.mp3",
          duration: "2:59",
        },
        {
          name: "Slow Cinematic",
          author: "Royalty",
          img: "https://www.bensound.com/bensound-img/slowmotion.jpg",
          audio:
            "https://www.bensound.com/bensound-music/bensound-slowmotion.mp3",
          duration: "3:26",
        },
      ],
      pause: false,
    });
    _defineProperty(
      this,
      "changeCurrentTime",

      (e) => {
        const duration = this.playerRef.duration;

        const playheadWidth = this.timelineRef.offsetWidth;
        const offsetWidht = this.timelineRef.offsetLeft;
        const userClickWidht = e.clientX - offsetWidht;

        const userClickWidhtInPercent = (userClickWidht * 100) / playheadWidth;

        this.playheadRef.style.width = userClickWidhtInPercent + "%";
        this.playerRef.currentTime = (duration * userClickWidhtInPercent) / 100;
      }
    );
    _defineProperty(
      this,
      "hoverTimeLine",

      (e) => {
        const duration = this.playerRef.duration;

        const playheadWidth = this.timelineRef.offsetWidth;

        const offsetWidht = this.timelineRef.offsetLeft;
        const userClickWidht = e.clientX - offsetWidht;
        const userClickWidhtInPercent = (userClickWidht * 100) / playheadWidth;

        if (userClickWidhtInPercent <= 100) {
          this.hoverPlayheadRef.style.width = userClickWidhtInPercent + "%";
        }

        const time = (duration * userClickWidhtInPercent) / 100;

        if (time >= 0 && time <= duration) {
          this.hoverPlayheadRef.dataset.content = this.formatTime(time);
        }
      }
    );
    _defineProperty(
      this,
      "resetTimeLine",

      () => {
        this.hoverPlayheadRef.style.width = 0;
      }
    );
    _defineProperty(
      this,
      "timeUpdate",

      () => {
        const duration = this.playerRef.duration;
        const timelineWidth =
          this.timelineRef.offsetWidth - this.playheadRef.offsetWidth;
        const playPercent = 100 * (this.playerRef.currentTime / duration);
        this.playheadRef.style.width = playPercent + "%";
        const currentTime = this.formatTime(
          parseInt(this.playerRef.currentTime)
        );
        this.setState({
          currentTime,
        });
      }
    );
    _defineProperty(
      this,
      "formatTime",

      (currentTime) => {
        const minutes = Math.floor(currentTime / 60);
        let seconds = Math.floor(currentTime % 60);

        seconds = seconds >= 10 ? seconds : "0" + (seconds % 60);

        const formatTime = minutes + ":" + seconds;

        return formatTime;
      }
    );
    _defineProperty(
      this,
      "updatePlayer",

      () => {
        const { musicList, index } = this.state;
        const currentSong = musicList[index];
        const audio = new Audio(currentSong.audio);
        this.playerRef.load();
      }
    );
    _defineProperty(
      this,
      "nextSong",

      () => {
        const { musicList, index, pause } = this.state;

        this.setState({
          index: (index + 1) % musicList.length,
        });

        this.updatePlayer();
        if (pause) {
          this.playerRef.play();
        }
      }
    );
    _defineProperty(
      this,
      "prevSong",

      () => {
        const { musicList, index, pause } = this.state;

        this.setState({
          index: (index + musicList.length - 1) % musicList.length,
        });

        this.updatePlayer();
        if (pause) {
          this.playerRef.play();
        }
      }
    );
    _defineProperty(
      this,
      "playOrPause",

      () => {
        const { musicList, index, pause } = this.state;
        const currentSong = musicList[index];
        const audio = new Audio(currentSong.audio);
        if (!this.state.pause) {
          this.playerRef.play();
        } else {
          this.playerRef.pause();
        }
        this.setState({
          pause: !pause,
        });
      }
    );
    _defineProperty(
      this,
      "clickAudio",

      (key) => {
        const { pause } = this.state;

        this.setState({
          index: key,
        });

        this.updatePlayer();
        if (pause) {
          this.playerRef.play();
        }
      }
    );
  }
  componentDidMount() {
    this.playerRef.addEventListener("timeupdate", this.timeUpdate, false);
    this.playerRef.addEventListener("ended", this.nextSong, false);
    this.timelineRef.addEventListener("click", this.changeCurrentTime, false);
    this.timelineRef.addEventListener("mousemove", this.hoverTimeLine, false);
    this.timelineRef.addEventListener("mouseout", this.resetTimeLine, false);
  }
  componentWillUnmount() {
    this.playerRef.removeEventListener("timeupdate", this.timeUpdate);
    this.playerRef.removeEventListener("ended", this.nextSong);
    this.timelineRef.removeEventListener("click", this.changeCurrentTime);
    this.timelineRef.removeEventListener("mousemove", this.hoverTimeLine);
    this.timelineRef.removeEventListener("mouseout", this.resetTimeLine);
  }

  render() {
    const { musicList, index, currentTime, pause } = this.state;
    const currentSong = musicList[index];
    return /*#__PURE__*/ React.createElement(
      "div",
      { className: "card" } /*#__PURE__*/,
      React.createElement(
        "div",
        { className: "current-song" } /*#__PURE__*/,
        React.createElement(
          "audio",
          { ref: (ref) => (this.playerRef = ref) } /*#__PURE__*/,
          React.createElement("source", {
            src: currentSong.audio,
            type: "audio/ogg",
          }),
          "Your browser does not support the audio element."
        ) /*#__PURE__*/,

        React.createElement(
          "div",
          { className: "img-wrap" } /*#__PURE__*/,
          React.createElement("img", { src: currentSong.img })
        ) /*#__PURE__*/,

        React.createElement(
          "span",
          { className: "song-name" },
          currentSong.name
        ) /*#__PURE__*/,
        React.createElement(
          "span",
          { className: "song-autor" },
          currentSong.author
        ) /*#__PURE__*/,

        React.createElement(
          "div",
          { className: "time" } /*#__PURE__*/,
          React.createElement(
            "div",
            { className: "current-time" },
            currentTime
          ) /*#__PURE__*/,
          React.createElement(
            "div",
            { className: "end-time" },
            currentSong.duration
          )
        ) /*#__PURE__*/,

        React.createElement(
          "div",
          {
            ref: (ref) => (this.timelineRef = ref),
            id: "timeline",
          } /*#__PURE__*/,
          React.createElement("div", {
            ref: (ref) => (this.playheadRef = ref),
            id: "playhead",
          }) /*#__PURE__*/,
          React.createElement("div", {
            ref: (ref) => (this.hoverPlayheadRef = ref),
            class: "hover-playhead",
            "data-content": "0:00",
          })
        ) /*#__PURE__*/,

        React.createElement(
          "div",
          { className: "controls" } /*#__PURE__*/,
          React.createElement(
            "button",
            { onClick: this.prevSong, className: "prev prev-next current-btn" },
            /*#__PURE__*/ React.createElement("i", {
              className: "fas fa-backward",
            })
          ) /*#__PURE__*/,

          React.createElement(
            "button",
            { onClick: this.playOrPause, className: "play current-btn" },

            !pause
              ? /*#__PURE__*/ React.createElement("i", {
                  className: "fas fa-play",
                }) /*#__PURE__*/
              : React.createElement("i", { class: "fas fa-pause" })
          ) /*#__PURE__*/,

          React.createElement(
            "button",
            { onClick: this.nextSong, className: "next prev-next current-btn" },
            /*#__PURE__*/ React.createElement("i", {
              className: "fas fa-forward",
            })
          )
        )
      ) /*#__PURE__*/,

      React.createElement(
        "div",
        { className: "play-list" },
        musicList.map((music, key = 0 /*#__PURE__*/) =>
          React.createElement(
            "div",
            {
              key: key,
              onClick: () => this.clickAudio(key),
              className:
                "track " +
                (index === key && !pause ? "current-audio" : "") +
                (index === key && pause ? "play-now" : ""),
            } /*#__PURE__*/,

            React.createElement("img", {
              className: "track-img",
              src: music.img,
            }) /*#__PURE__*/,
            React.createElement(
              "div",
              { className: "track-discr" } /*#__PURE__*/,
              React.createElement(
                "span",
                { className: "track-name" },
                music.name
              ) /*#__PURE__*/,
              React.createElement(
                "span",
                { className: "track-author" },
                music.author
              )
            ) /*#__PURE__*/,

            React.createElement(
              "span",
              { className: "track-duration" },
              index === key ? currentTime : music.duration
            )
          )
        )
      )
    );
  }
}

ReactDOM.render(
  /*#__PURE__*/
  React.createElement(CardProfile, null),
  document.getElementById("root")
);
