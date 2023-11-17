import audioPerm from "../assets/permission.png";
function Warning() {
  return (
    <div className="info">
      <label htmlFor="permission">
        {
          "Welcome to CocodriloTest! If the audio file doesn't start automatically, please make sure that your browser has audio enabled for this site. You can either check your browser settings or refer to the image below for guidance on enabling audio. Thank you! "
        }
      </label>

      <img src={audioPerm} />
    </div>
  );
}
export default Warning;
