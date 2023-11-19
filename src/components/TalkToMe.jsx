import sound from "../assets/Monolog.mp3";
function TalkToMe() {
  // var msg = new SpeechSynthesisUtterance();
  // msg.lang = "es-es";
  // //msg.voice = "Microsoft Elena Online (Natural) - Spanish (Argentina)";

  // const voices = speechSynthesis
  // .getVoices()
  // .filter(voice => voice.lang === "es-es");
  // msg.voice = voices[0];
  // msg.text = "Si bien '¡Buenas noches!  Estoy bien, quiero decir, Dios sabe que podría ser peor. Claro que pasa que te encierras en tu habitación Completo con música deprimente y cosas locas. Y todo es sólo segunda o tercera opción como máximo. Entre realmente genial y de alguna manera repugnante como a mitad de camino. No es un secreto ni importante. Pero nunca fui ese punto brillante en el penne El lema del que tomaba notas era: Esperar tiempos mejores para las páginas de lavandería de Otto-Versand. Sólo por eso, el pensamiento de un trabajo y de la vida es la esencia. Desde entonces, mucho más que la pesadilla adolescente promedio Sí, ayuda saber que puedes hacer que la mayoría de los campesinos parezcan viejos como las cosas del prestamista. Pero por lo demás, el tipo probablemente no tenga más que quejas o qué.";

  // return window.speechSynthesis.speak(msg);
  let audio = new Audio(sound);

  try {
    console.log(navigator.getAutoplayPolicy(audio));
    if (navigator.getAutoplayPolicy(audio) === "allowed") {
      audio.play();
    } else {
      audio.play();
      return (
        <div className="info">
          <h1>
            Welcome to CocodriloTest! If the audio file doesn't start
            automatically, please make sure that your browser has audio enabled
            for this site. You can check your browser settings to enabling
            audio. Thank you!
          </h1>
        </div>
      );
    }
  } catch (error) {
    console.error(error);
    audio.play();
  }
}
export default TalkToMe;
