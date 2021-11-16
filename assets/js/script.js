const videoLoader = (() => {
  const cargar_video = (url, id) => {
    let iframe = document.getElementById(id);
    iframe.src = url;
  };

  const call = (url, id) => {
    cargar_video(url, id);
  };

  return call;
})();

class Multimedia {
  constructor(url) {
    this._url = url;
  }
  get url() {
    return this._url;
  }

  setInicio() {
    return "Este método es para realizar un cambio en la url del video";
  }
}

class Reproductor extends Multimedia {
  constructor(url, id) {
    super(url);
    this.id = id;
  }
  playMultimedia() {
    videoLoader(this.url, this.id);
  }
  setInicio(tiempo) {
    let sufix = `?start=${tiempo}`;
    let new_url = `${this.url}${sufix}`;
    videoLoader(new_url, this.id);
  }
}

const musica = new Reproductor(
  "https://www.youtube.com/embed/FU6yzzESX8Y",
  "musica"
);

musica.playMultimedia();
musica.setInicio(200);

const pelicula = new Reproductor(
  "https://www.youtube.com/embed/C0BMx-qxsP4",
  "peliculas"
);
pelicula.playMultimedia();

const serie = new Reproductor(
  "https://www.youtube.com/embed/HhesaQXLuRY",
  "series"
);
serie.playMultimedia();
